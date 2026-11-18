-- MercyMed admin panel — migration 1: staff list and access checks
-- Spec: docs/ADMIN-SPEC.md §2, §3, §7
--
-- What this does:
--   1. A `staff` table: who may use the admin panel, their role and whether access is on.
--   2. Two checks used by every later security rule:
--        private.is_staff()  = logged in, two-factor verified (aal2), on the staff list, access on
--        private.is_admin()  = the same, and role is 'admin'
--   3. Rules for the staff table: staff read the list; admins change roles and access;
--      everyone may change only their own panel language; the last active admin can't be removed.
--
-- Staff rows are added by the project owner in the SQL editor (no public sign-up, no "add" via the API).

-- ---------------------------------------------------------------- private schema
-- Helper functions live here. This schema is NOT exposed by the Data API,
-- so nobody can call these functions directly over the internet.
create schema if not exists private;
revoke all on schema private from public;
grant usage on schema private to authenticated;

-- ---------------------------------------------------------------- staff table
create table public.staff (
  user_id      uuid primary key references auth.users (id) on delete restrict,
  display_name text not null check (length(btrim(display_name)) between 1 and 80),
  role         text not null default 'editor' check (role in ('admin', 'editor')),
  active       boolean not null default true,
  panel_lang   text not null default 'en' check (panel_lang in ('en', 'ru', 'ky')),
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

comment on table public.staff is 'MercyMed staff allowed to use the admin panel. Rows are added by the project owner only.';

alter table public.staff enable row level security;

-- Only logged-in users get any access to this table; anonymous visitors get none.
revoke all on table public.staff from anon, authenticated;
grant select, update on table public.staff to authenticated;

-- ---------------------------------------------------------------- access checks
-- SECURITY DEFINER so the check can read `staff` without running into the table's own rules.
-- Safe because: it lives in the unexposed `private` schema, takes no input,
-- only answers yes/no about the *current* user, and uses an empty search_path.
create function private.is_staff()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select coalesce((select auth.jwt() ->> 'aal') = 'aal2', false)
     and exists (
       select 1 from public.staff s
       where s.user_id = (select auth.uid())
         and s.active
     );
$$;

create function private.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select coalesce((select auth.jwt() ->> 'aal') = 'aal2', false)
     and exists (
       select 1 from public.staff s
       where s.user_id = (select auth.uid())
         and s.active
         and s.role = 'admin'
     );
$$;

revoke all on function private.is_staff() from public;
revoke all on function private.is_admin() from public;
grant execute on function private.is_staff() to authenticated;
grant execute on function private.is_admin() to authenticated;

-- ---------------------------------------------------------------- staff table rules (RLS)
-- Read: you can always see your own row (the panel needs it before two-factor setup);
-- verified staff can see the whole list (names appear in the change history).
create policy "staff: read own row or all if staff"
  on public.staff for select
  to authenticated
  using ( user_id = (select auth.uid()) or (select private.is_staff()) );

-- Update: admins may update any row; a verified staff member may update their own row
-- (the trigger below limits that to panel_lang).
create policy "staff: admins update any, staff update own"
  on public.staff for update
  to authenticated
  using ( (select private.is_admin()) or (user_id = (select auth.uid()) and (select private.is_staff())) )
  with check ( (select private.is_admin()) or (user_id = (select auth.uid()) and (select private.is_staff())) );

-- No insert or delete policies: through the API nobody can add or delete staff.

-- ---------------------------------------------------------------- staff table guard
-- Runs before every update. Applies only to requests coming through the API
-- (role `authenticated`); the project owner working in the SQL editor is not limited.
create function private.staff_guard()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at := now();

  if current_user <> 'authenticated' then
    return new;
  end if;

  new.created_at := old.created_at;

  if new.user_id is distinct from old.user_id then
    raise exception 'The account of a staff entry cannot be changed.';
  end if;

  -- Non-admins may change only their own panel language.
  if not private.is_admin()
     and (new.role, new.active, new.display_name) is distinct from (old.role, old.active, old.display_name) then
    raise exception 'Only an admin can change names, roles or access.';
  end if;

  -- Never leave the clinic without an active admin.
  if old.role = 'admin' and old.active
     and not (new.role = 'admin' and new.active) then
    -- lock the admin rows so two admins can't demote each other at the same moment
    perform 1 from public.staff where role = 'admin' and active for update;
    if not exists (
      select 1 from public.staff
      where role = 'admin' and active and user_id <> old.user_id
    ) then
      raise exception 'There must always be at least one active admin.';
    end if;
  end if;

  return new;
end;
$$;

revoke all on function private.staff_guard() from public;

create trigger staff_guard
  before update on public.staff
  for each row execute function private.staff_guard();
