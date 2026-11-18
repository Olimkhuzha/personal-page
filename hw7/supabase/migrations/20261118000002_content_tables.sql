-- MercyMed admin panel — migration 2: content tables
-- Spec: docs/ADMIN-SPEC.md §4, §6.2–6.5, §7. Needs migration 1 (private.is_staff / is_admin).
--
-- What this does:
--   1. Seven tables holding the PUBLISHED content: page texts, prices, promotions, team members,
--      contact details, opening hours and section photos.
--   2. Database checks for the language rules (all three languages, or none; promotions per language),
--      dates, prices, links and photo file names — so the rules hold even if someone skips the panel.
--   3. A trigger on every table that sets version, time and "changed by" itself (the browser can't fake them)
--      and handles soft delete (Deleted list).
--   4. Security rules: everyone reads published content (anonymous visitors only the public columns,
--      never "changed by"); only verified staff write;
--      only admins permanently remove items that have been in Deleted for 90+ days.
--
-- Drafts and history come in migration 3; the photo bucket in migration 4.

-- ================================================================ shared trigger
-- Runs before every insert/update on the content tables.
-- TG_ARGV[0] = 'soft_delete' for tables that have a deleted_at column.
create function private.stamp_row()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  if tg_op = 'INSERT' then
    new.version := 1;
  else
    new.version := old.version + 1;
  end if;
  new.updated_at := now();
  new.updated_by := (select auth.uid());

  if tg_argv[0] = 'soft_delete' then
    if tg_op = 'INSERT' then
      new.deleted_at := null;                       -- new items can't start out deleted
    elsif new.deleted_at is not null and old.deleted_at is null then
      new.deleted_at := now();                      -- deleting: the database sets the time
    elsif new.deleted_at is not null then
      new.deleted_at := old.deleted_at;             -- can't move the time back to skip the 90 days
    end if;                                         -- null = restored from Deleted
  end if;

  return new;
end;
$$;
revoke all on function private.stamp_row() from public;

-- Helper used only inside the checks below, written out each time:
--   nullif(btrim(x), '')  turns '' and '   ' into null, so "filled in" means real text.

-- ================================================================ page texts
-- One row per editable text on the site, e.g. key 'about.history'. kind 'list' = one item per line.
-- Rows are created by the seed (migration/seed step); staff only edit them, never add or delete.
create table public.page_texts (
  key         text primary key check (key ~ '^[a-z][a-zA-Z0-9]*(\.[a-zA-Z0-9]+)+$'),
  kind        text not null default 'text' check (kind in ('text', 'list')),
  text_en     text check (char_length(text_en) <= 4000),
  text_ru     text check (char_length(text_ru) <= 4000),
  text_ky     text check (char_length(text_ky) <= 4000),
  reviewed_en boolean not null default false,
  reviewed_ru boolean not null default false,
  reviewed_ky boolean not null default false,
  version     integer not null default 1,
  updated_at  timestamptz not null default now(),
  updated_by  uuid references auth.users (id) on delete set null,
  -- all three languages filled in, or all three empty
  constraint page_texts_all_languages check (
    num_nonnulls(nullif(btrim(text_en), ''), nullif(btrim(text_ru), ''), nullif(btrim(text_ky), '')) in (0, 3)
  )
);

-- ================================================================ prices
create table public.prices (
  id          uuid primary key default gen_random_uuid(),
  name_en     text not null check (char_length(name_en) <= 200),
  name_ru     text not null check (char_length(name_ru) <= 200),
  name_ky     text not null check (char_length(name_ky) <= 200),
  amount_som  integer not null check (amount_som between 0 and 10000000),
  is_from     boolean not null default false,
  note_en     text check (char_length(note_en) <= 300),
  note_ru     text check (char_length(note_ru) <= 300),
  note_ky     text check (char_length(note_ky) <= 300),
  sort        integer not null default 0,
  reviewed_en boolean not null default false,
  reviewed_ru boolean not null default false,
  reviewed_ky boolean not null default false,
  version     integer not null default 1,
  updated_at  timestamptz not null default now(),
  updated_by  uuid references auth.users (id) on delete set null,
  deleted_at  timestamptz,
  constraint prices_name_all_languages check (
    num_nonnulls(nullif(btrim(name_en), ''), nullif(btrim(name_ru), ''), nullif(btrim(name_ky), '')) = 3
  ),
  constraint prices_note_all_or_none check (
    num_nonnulls(nullif(btrim(note_en), ''), nullif(btrim(note_ru), ''), nullif(btrim(note_ky), '')) in (0, 3)
  )
);

-- ================================================================ promotions
-- A language is "published" when its title and text are filled in (and its photo description, if there is a photo).
create table public.promotions (
  id           uuid primary key default gen_random_uuid(),
  title_en     text check (char_length(title_en) <= 120),
  title_ru     text check (char_length(title_ru) <= 120),
  title_ky     text check (char_length(title_ky) <= 120),
  text_en      text check (char_length(text_en) <= 600),
  text_ru      text check (char_length(text_ru) <= 600),
  text_ky      text check (char_length(text_ky) <= 600),
  price_som    integer check (price_som between 0 and 10000000),
  photo_path   text check (photo_path ~ '^promotions/[0-9a-f-]{36}\.(jpg|png|webp)$'),
  photo_alt_en text check (char_length(photo_alt_en) <= 200),
  photo_alt_ru text check (char_length(photo_alt_ru) <= 200),
  photo_alt_ky text check (char_length(photo_alt_ky) <= 200),
  starts_on    date not null,
  ends_on      date not null,
  weekdays     smallint[] check (
                 weekdays is null
                 or (cardinality(weekdays) between 1 and 7 and weekdays <@ array[1,2,3,4,5,6,7]::smallint[])
               ),                                   -- 1 = Monday … 7 = Sunday; null = every day
  sort         integer not null default 0,
  reviewed_en  boolean not null default false,
  reviewed_ru  boolean not null default false,
  reviewed_ky  boolean not null default false,
  version      integer not null default 1,
  updated_at   timestamptz not null default now(),
  updated_by   uuid references auth.users (id) on delete set null,
  deleted_at   timestamptz,
  constraint promotions_dates check (ends_on >= starts_on),
  -- per language: title and text together, or neither
  constraint promotions_en_complete check (num_nonnulls(nullif(btrim(title_en), ''), nullif(btrim(text_en), '')) in (0, 2)),
  constraint promotions_ru_complete check (num_nonnulls(nullif(btrim(title_ru), ''), nullif(btrim(text_ru), '')) in (0, 2)),
  constraint promotions_ky_complete check (num_nonnulls(nullif(btrim(title_ky), ''), nullif(btrim(text_ky), '')) in (0, 2)),
  -- at least one language
  constraint promotions_one_language check (
    num_nonnulls(nullif(btrim(title_en), ''), nullif(btrim(title_ru), ''), nullif(btrim(title_ky), '')) >= 1
  ),
  -- photo description: in exactly the languages the promotion is published in; none without a photo
  constraint promotions_photo_alt check (
    case when photo_path is null then
      num_nonnulls(nullif(btrim(photo_alt_en), ''), nullif(btrim(photo_alt_ru), ''), nullif(btrim(photo_alt_ky), '')) = 0
    else
      (nullif(btrim(title_en), '') is null) = (nullif(btrim(photo_alt_en), '') is null)
      and (nullif(btrim(title_ru), '') is null) = (nullif(btrim(photo_alt_ru), '') is null)
      and (nullif(btrim(title_ky), '') is null) = (nullif(btrim(photo_alt_ky), '') is null)
    end
  )
);

-- A language that is already published can't be emptied later (spec §4); new languages can be added.
create function private.promotions_keep_languages()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  if (nullif(btrim(old.title_en), '') is not null and nullif(btrim(new.title_en), '') is null)
     or (nullif(btrim(old.title_ru), '') is not null and nullif(btrim(new.title_ru), '') is null)
     or (nullif(btrim(old.title_ky), '') is not null and nullif(btrim(new.title_ky), '') is null) then
    raise exception 'A language that is already published cannot be removed from a promotion.';
  end if;
  return new;
end;
$$;
revoke all on function private.promotions_keep_languages() from public;

-- ================================================================ team members
create table public.team_members (
  id               uuid primary key default gen_random_uuid(),
  name             text not null check (char_length(btrim(name)) between 1 and 120),
  role_en          text not null check (char_length(role_en) <= 120),
  role_ru          text not null check (char_length(role_ru) <= 120),
  role_ky          text not null check (char_length(role_ky) <= 120),
  bio_en           text check (char_length(bio_en) <= 600),
  bio_ru           text check (char_length(bio_ru) <= 600),
  bio_ky           text check (char_length(bio_ky) <= 600),
  practising_since smallint check (practising_since between 1950 and 2100),  -- the panel also refuses future years
  photo_path       text check (photo_path ~ '^(team/[0-9a-f-]{36}\.(jpg|png|webp)|assets/team/[a-z-]+\.jpg)$'),
  photo_focus      text check (photo_focus ~ '^\d{1,3}% \d{1,3}%$'),         -- e.g. '75% 20%'
  sort             integer not null default 0,
  reviewed_en      boolean not null default false,
  reviewed_ru      boolean not null default false,
  reviewed_ky      boolean not null default false,
  version          integer not null default 1,
  updated_at       timestamptz not null default now(),
  updated_by       uuid references auth.users (id) on delete set null,
  deleted_at       timestamptz,
  constraint team_role_all_languages check (
    num_nonnulls(nullif(btrim(role_en), ''), nullif(btrim(role_ru), ''), nullif(btrim(role_ky), '')) = 3
  ),
  constraint team_bio_all_or_none check (
    num_nonnulls(nullif(btrim(bio_en), ''), nullif(btrim(bio_ru), ''), nullif(btrim(bio_ky), '')) in (0, 3)
  )
);
-- photo_path also allows today's photos in the repo (assets/team/…) so the seed can keep them.

-- ================================================================ contact (exactly one row)
create table public.contact (
  id               smallint primary key default 1 check (id = 1),
  address_en       text check (char_length(address_en) <= 200),
  address_ru       text check (char_length(address_ru) <= 200),
  address_ky       text check (char_length(address_ky) <= 200),
  phone            text check (phone ~ '^\+?[0-9 ()-]{7,20}$'),
  email            text check (email ~ '^[^\s@<>"]+@[^\s@<>"]+\.[a-z]{2,}$'),
  instagram_url    text check (instagram_url ~ '^https://(www\.)?instagram\.com/[A-Za-z0-9._]+/?$'),
  instagram_handle text check (instagram_handle ~ '^@[A-Za-z0-9._]{1,30}$'),
  hours_note_en    text check (char_length(hours_note_en) <= 200),
  hours_note_ru    text check (char_length(hours_note_ru) <= 200),
  hours_note_ky    text check (char_length(hours_note_ky) <= 200),
  reviewed_en      boolean not null default false,
  reviewed_ru      boolean not null default false,
  reviewed_ky      boolean not null default false,
  version          integer not null default 1,
  updated_at       timestamptz not null default now(),
  updated_by       uuid references auth.users (id) on delete set null,
  constraint contact_address_all_or_none check (
    num_nonnulls(nullif(btrim(address_en), ''), nullif(btrim(address_ru), ''), nullif(btrim(address_ky), '')) in (0, 3)
  ),
  constraint contact_note_all_or_none check (
    num_nonnulls(nullif(btrim(hours_note_en), ''), nullif(btrim(hours_note_ru), ''), nullif(btrim(hours_note_ky), '')) in (0, 3)
  )
);

-- ================================================================ opening hours (one row per weekday)
-- Unknown day (both times empty, not closed) shows "awaiting clinic".
create table public.opening_hours (
  weekday    smallint primary key check (weekday between 1 and 7),   -- 1 = Monday … 7 = Sunday
  closed     boolean not null default false,
  opens      time,
  closes     time,
  version    integer not null default 1,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users (id) on delete set null,
  constraint opening_hours_valid check (
    (closed and opens is null and closes is null)
    or (not closed and opens is null and closes is null)
    or (not closed and opens is not null and closes is not null and closes > opens)
  )
);

-- ================================================================ section photos (fixed slots)
create table public.section_photos (
  slot         text primary key check (slot in ('hero', 'about', 'mobile', 'education', 'instagram')),
  photo_path   text check (photo_path ~ '^sections/[0-9a-f-]{36}\.(jpg|png|webp)$'),
  photo_alt_en text check (char_length(photo_alt_en) <= 200),
  photo_alt_ru text check (char_length(photo_alt_ru) <= 200),
  photo_alt_ky text check (char_length(photo_alt_ky) <= 200),
  reviewed_en  boolean not null default false,
  reviewed_ru  boolean not null default false,
  reviewed_ky  boolean not null default false,
  version      integer not null default 1,
  updated_at   timestamptz not null default now(),
  updated_by   uuid references auth.users (id) on delete set null,
  -- with a photo: description in all three languages (the photo shows on every language page); without: none
  constraint section_photos_alt check (
    num_nonnulls(nullif(btrim(photo_alt_en), ''), nullif(btrim(photo_alt_ru), ''), nullif(btrim(photo_alt_ky), ''))
      = case when photo_path is null then 0 else 3 end
  )
);

-- ================================================================ triggers
create trigger stamp before insert or update on public.page_texts     for each row execute function private.stamp_row();
create trigger stamp before insert or update on public.prices         for each row execute function private.stamp_row('soft_delete');
create trigger stamp before insert or update on public.promotions     for each row execute function private.stamp_row('soft_delete');
create trigger stamp before insert or update on public.team_members   for each row execute function private.stamp_row('soft_delete');
create trigger stamp before insert or update on public.contact        for each row execute function private.stamp_row();
create trigger stamp before insert or update on public.opening_hours  for each row execute function private.stamp_row();
create trigger stamp before insert or update on public.section_photos for each row execute function private.stamp_row();

create trigger keep_languages before update on public.promotions
  for each row execute function private.promotions_keep_languages();

-- ================================================================ access (grants + RLS)
-- New tables are not exposed automatically, so access is granted table by table.
-- Anonymous visitors: read only. Logged-in users: the rules below decide.

alter table public.page_texts     enable row level security;
alter table public.prices         enable row level security;
alter table public.promotions     enable row level security;
alter table public.team_members   enable row level security;
alter table public.contact        enable row level security;
alter table public.opening_hours  enable row level security;
alter table public.section_photos enable row level security;

-- Anonymous visitors may read ONLY the columns the public site needs:
-- never updated_by (who changed it), updated_at, version or deleted_at.
-- So the public site must list columns explicitly; "select *" fails for anonymous visitors.
grant select (key, kind, text_en, text_ru, text_ky, reviewed_en, reviewed_ru, reviewed_ky)
  on public.page_texts to anon;
grant select (id, name_en, name_ru, name_ky, amount_som, is_from, note_en, note_ru, note_ky, sort,
              reviewed_en, reviewed_ru, reviewed_ky)
  on public.prices to anon;
grant select (id, title_en, title_ru, title_ky, text_en, text_ru, text_ky, price_som,
              photo_path, photo_alt_en, photo_alt_ru, photo_alt_ky, starts_on, ends_on, weekdays, sort,
              reviewed_en, reviewed_ru, reviewed_ky)
  on public.promotions to anon;
grant select (id, name, role_en, role_ru, role_ky, bio_en, bio_ru, bio_ky, practising_since,
              photo_path, photo_focus, sort, reviewed_en, reviewed_ru, reviewed_ky)
  on public.team_members to anon;
grant select (id, address_en, address_ru, address_ky, phone, email, instagram_url, instagram_handle,
              hours_note_en, hours_note_ru, hours_note_ky, reviewed_en, reviewed_ru, reviewed_ky)
  on public.contact to anon;
grant select (weekday, closed, opens, closes)
  on public.opening_hours to anon;
grant select (slot, photo_path, photo_alt_en, photo_alt_ru, photo_alt_ky, reviewed_en, reviewed_ru, reviewed_ky)
  on public.section_photos to anon;

-- Logged-in users read all columns (staff need "changed by" for the history); the rows they see
-- are still limited by the policies below.
grant select on public.page_texts, public.prices, public.promotions, public.team_members,
                public.contact, public.opening_hours, public.section_photos
  to authenticated;

-- Lists: staff add, edit, delete (soft) and — admins only — remove for good.
grant insert, update, delete on public.prices, public.promotions, public.team_members to authenticated;
-- Fixed items: staff only edit; nobody adds or deletes rows through the API.
grant update on public.page_texts, public.contact, public.opening_hours, public.section_photos to authenticated;

-- ---------- read: published content for everyone, everything for verified staff
create policy "public read" on public.page_texts     for select to anon, authenticated using (true);
create policy "public read" on public.contact        for select to anon, authenticated using (true);
create policy "public read" on public.opening_hours  for select to anon, authenticated using (true);
create policy "public read" on public.section_photos for select to anon, authenticated using (true);
create policy "public read" on public.prices         for select to anon, authenticated using (deleted_at is null);
create policy "public read" on public.team_members   for select to anon, authenticated using (deleted_at is null);
-- promotions: only while active today in Bishkek (dates and weekdays), not deleted
create policy "public read" on public.promotions     for select to anon, authenticated using (
  deleted_at is null
  and (now() at time zone 'Asia/Bishkek')::date between starts_on and ends_on
  and (weekdays is null
       or extract(isodow from (now() at time zone 'Asia/Bishkek'))::smallint = any (weekdays))
);

create policy "staff read all" on public.prices       for select to authenticated using ((select private.is_staff()));
create policy "staff read all" on public.promotions   for select to authenticated using ((select private.is_staff()));
create policy "staff read all" on public.team_members for select to authenticated using ((select private.is_staff()));

-- ---------- add (lists only)
create policy "staff add" on public.prices       for insert to authenticated with check ((select private.is_staff()));
create policy "staff add" on public.promotions   for insert to authenticated with check ((select private.is_staff()));
create policy "staff add" on public.team_members for insert to authenticated with check ((select private.is_staff()));

-- ---------- edit (includes soft delete and restore)
create policy "staff edit" on public.page_texts     for update to authenticated using ((select private.is_staff())) with check ((select private.is_staff()));
create policy "staff edit" on public.prices         for update to authenticated using ((select private.is_staff())) with check ((select private.is_staff()));
create policy "staff edit" on public.promotions     for update to authenticated using ((select private.is_staff())) with check ((select private.is_staff()));
create policy "staff edit" on public.team_members   for update to authenticated using ((select private.is_staff())) with check ((select private.is_staff()));
create policy "staff edit" on public.contact        for update to authenticated using ((select private.is_staff())) with check ((select private.is_staff()));
create policy "staff edit" on public.opening_hours  for update to authenticated using ((select private.is_staff())) with check ((select private.is_staff()));
create policy "staff edit" on public.section_photos for update to authenticated using ((select private.is_staff())) with check ((select private.is_staff()));

-- ---------- remove for good: admins, after 90 days in Deleted
create policy "admin remove after 90 days" on public.prices for delete to authenticated
  using ((select private.is_admin()) and deleted_at < now() - interval '90 days');
create policy "admin remove after 90 days" on public.promotions for delete to authenticated
  using ((select private.is_admin()) and deleted_at < now() - interval '90 days');
create policy "admin remove after 90 days" on public.team_members for delete to authenticated
  using ((select private.is_admin()) and deleted_at < now() - interval '90 days');
