# MercyMed admin panel — specification

Status: **draft for team lead review** (Phase 2, Nov 2026). No code yet.
Built from the `/grill-me` session with the team lead (decisions Q1–Q28 plus four additions), `docs/CLIENT-REQUIREMENTS.md` and `CLAUDE.md`.
If anything here conflicts with `docs/CLIENT-REQUIREMENTS.md`, the requirements win.

---

## 1. Goal and scope

MercyMed staff keep the website up to date themselves, "more or less in real time" (CLIENT-REQUIREMENTS §8), without touching code.

**In scope:** section texts, prices, promotions, team members, contact details, opening hours and photos, in EN / RU / KY.

**Out of scope (stays in code, changed only by the developer):** layout, colours, fonts, section order, menu, interface labels (buttons, form labels and errors), the WhatsApp message template and the **placeholder booking number** (`settings.whatsappNumber`). (Q9, Q19)

**Never:** patient data, bookings, lab results, medical AI, any connection to MercyMed's own server or OpenEMR (§6, §13).

## 2. People and roles

| Role | Can do |
|---|---|
| **Editor** | Edit, preview, publish, delete and restore **all** content (Q1 change, Q24) |
| **Admin** | Everything an editor can, plus manage staff: promote to admin, demote to editor, switch access off and on, and permanently remove items that have been in **Deleted** for 90+ days |
| **Project owner** (the person who owns the Supabase project) | Creates staff accounts by hand, resets lost two-factor devices, runs exports into the repo. Team lead now; MercyMed after handover. Not a role inside the panel. |

- Starting roles: to be confirmed by the team lead with Dr. Lukas (Q1).
- **No public sign-up.** Accounts are created only by the project owner in the Supabase dashboard.
- **At least one active admin** must always exist; the database refuses a change that would leave none (Q11).
- "Removing" a staff member means **switching their access off**. Their account and name stay, so the history still reads "changed by …" (Q11).

## 3. Login and sessions

1. Email + password, then a 6-digit code from an authenticator app (TOTP).
2. **Editing requires two-factor login with at least one device.** Without it, the panel only shows the setup screen; the database itself refuses every write (§7).
3. Until a **second device** (e.g. a backup phone or tablet kept at the clinic) is added, a reminder banner shows on every screen. It does not block editing (Q21).
4. **Automatic logout after 30 minutes without activity** (Q20).
5. **Unsaved work** is kept in the browser on that computer (Q20, addition 2):
   - tied to the staff member who wrote it, and offered back **only to that person** after they log in again;
   - **cleared on a normal "Log out"**;
   - never contains anything except the text and settings being edited (no password, no code).
6. **Lost device:** the project owner removes that person's two-factor device in the Supabase dashboard; the person then logs in and sets up a new one. Steps in §10.2 and in `docs/STAFF-GUIDE.md` (Q5, addition 4). If they still have their second device, they can log in with it and nothing needs resetting.
7. **Forgotten password:** the standard Supabase reset email. The two-factor code is still needed afterwards, so a stolen mailbox alone is not enough.

## 4. Language rules (Q3 change, Q14, Q15, addition 3)

The client never wants languages mixed on one page (§2, §7).

| Rule | Detail |
|---|---|
| **Language-independent fields** | Prices, dates, weekdays, opening times, phone, email, links, "practising since" year. Entered once, shown on all three language pages. |
| **Existing text** | When an item that already has text is edited, **EN, RU and KY must all be filled in** before Publish is allowed. A text field is either empty in all three or filled in all three. |
| **New items** (promotions) | May be published in only some languages. They appear **only on those language pages**, with no fallback text. A language counts as published when all of that language's fields for the item are filled in (title, text and — if there is a photo — the photo description). When a published promotion is edited later, the languages it is already published in must stay complete; a language can be added any time. |
| **"Did the meaning change?"** | When someone edits one language of an existing text, Publish asks this. **Yes** → the other languages are un-ticked for review. **No** (typo fix) → review status stays. |
| **Reviewed ticks** | Each language of each item has a "reviewed" tick. Any staff member can tick it; history records who did. While a language is un-ticked, that language page shows the "translation pending review" note. |
| **Photo descriptions** | Team photos: automatic from name + role in each language. Promotion and section photos: written by staff in **each language the item is published in** (section photos are on every page, so all three). |

## 5. Screens

All screens use the site's look (same CSS variables and Inter, light background only), large buttons, plain words, and work on a phone. Panel interface in **EN / RU / KY**, switch remembered per person (Q26). Panel lives at `admin/` on the same site, `noindex`, not linked from the public menu (Q6).

| # | Screen | Who | What |
|---|---|---|---|
| 1 | **Log in** | all | Email, password, then 6-digit code |
| 2 | **Two-factor setup** | all | QR code to scan; shown on first login and from "Add a second device" |
| 3 | **Home** | all | Second-device reminder (if needed); **Recent changes** (who, what, when → view / restore) (Q27); big buttons to each section below |
| 4 | **Page texts** | all | One card per section (Home, About, Services, Corporate, International, Education, Mobile clinics, Instagram, Contact). Lists (e.g. services) are edited one item per line. |
| 5 | **Prices** | all | Rows: service name (EN/RU/KY), price in som, optional "from", optional note; add, remove, drag to reorder (Q17) |
| 6 | **Promotions** | all | List in display order with status (*Showing today*, *Scheduled*, *Ended*, *Hidden: only 2 shown*); add / edit / reorder (§6.3) |
| 7 | **Team** | all | Cards: photo, name, role, "practising since", bio; add, remove, reorder (Q25) |
| 8 | **Contact and opening hours** | all | Address (EN/RU/KY), phone, email, Instagram; hours per weekday + optional note (Q18) |
| 9 | **Photos** | all | Fixed slots: Hero, About, Mobile clinics, Education, Instagram teaser. Each empty slot is hidden on the site (Q22) |
| 10 | **Deleted** | all; permanent removal admins only | Deleted items with "Restore"; "Remove for good" after 90 days (Q24) |
| 11 | **History** (per item) | all | Every published version with who/when; "Restore this version" (Q4) |
| 12 | **Staff** | admins | List of staff, role, access on/off, number of two-factor devices; promote / demote / switch off / on. No "create account" button. |
| 13 | **Export** | all (committing is the developer's job) | Downloads a new `content.js` with published content only (§8) |

### 5.1 The edit screen (same on every content screen)

- EN, RU and KY **side by side** on wide screens, stacked on a phone; language-independent fields once, above them.
- Under each language: the **Reviewed** tick.
- Buttons: **Save draft**, **Preview**, **Publish**, **Cancel**. Delete is a separate, clearly marked button with a confirm step.
- Clear errors next to the field, in the panel language (e.g. "Russian text is missing", "End date is before start date", "Photo is larger than 5 MB").
- Publish → "Did the meaning change?" dialog when applicable (§4).

### 5.2 Preview

Opens the real public page with that one draft applied, visible only to the logged-in staff member, with a clear "Preview — not published" bar. Language buttons switch the preview language.

## 6. Content model and behaviour

### 6.1 Drafts, publishing, conflicts, history

- **One item at a time** (Q12): an item is one section text card, one price row, one promotion, one team member, the contact card, the hours, or one photo slot.
- **Draft → Preview → Publish**, by whoever edited it (Q2).
- **Two people, same item** (Q13): every item has a version number. Publishing sends the version the editor started from; if someone else published in between, the save is refused: *"Someone else changed this while you were editing. Reload to see their version."* Nothing is silently overwritten.
- **History** (Q4): every publish writes a copy of the item to the history, with who and when. Kept forever. **Restore** publishes that old copy as a new version (so the restore itself is in the history too).
- **Delete** (Q24): moves the item to **Deleted** (it disappears from the site). Anyone can restore it. Admins can remove it for good after 90 days. Photos in storage are kept while any saved version still uses them.

### 6.2 Tables (Supabase / Postgres)

Content tables hold the **published** values. All have `id`, `version`, `updated_at`, `updated_by`, `deleted_at` (soft delete) and, where they contain text, `reviewed_en/ru/ky`. List tables have `sort`.

| Table | Fields (besides the common ones) | Checks in the database |
|---|---|---|
| `page_texts` | `key` (e.g. `about.history`), `text_en/ru/ky` | all three filled, or all empty |
| `prices` | `name_en/ru/ky`, `amount_som` (whole number ≥ 0), `is_from`, `note_en/ru/ky` | name: all three; note: all or none |
| `promotions` | `title_*`, `text_*`, `price_som` (optional), `photo_path` (optional), `photo_alt_*`, `starts_on`, `ends_on` (dates), `weekdays` (optional list 1–7) | `ends_on ≥ starts_on`; at least one complete language; per language title + text (+ photo description if photo) all or none |
| `team_members` | `name`, `role_en/ru/ky`, `bio_en/ru/ky`, `practising_since` (year), `photo_path`, `photo_focus` | role: all three; bio: all or none; year between 1950 and this year |
| `contact` (one row) | `address_en/ru/ky`, `phone`, `email`, `instagram_url`, `instagram_handle`, `hours_note_en/ru/ky` | link must start with `https://`; email format; address all three |
| `opening_hours` | `weekday` (1–7), `closed`, `opens`, `closes` | `closes > opens` unless closed; one row per weekday |
| `section_photos` | `slot` (hero / about / mobile / education / instagram), `photo_path`, `photo_alt_en/ru/ky` | description in all three when a photo is set |
| `drafts` | `item_table`, `item_id` (empty for new items), `data`, `base_version`, `author`, `updated_at` | staff only |
| `versions` | `item_table`, `item_id`, `version`, `data`, `published_by`, `published_at`, `meaning_changed` | written by the database itself, never directly |
| `staff` | `user_id`, `display_name`, `role` (admin / editor), `active`, `panel_lang` | at least one active admin |

`updated_by`, `version` and the history rows are filled in by database triggers, not by the browser, so they can't be faked.

Interface labels, the WhatsApp message template and `whatsappNumber` stay in `js/content.js` / code and are **not** in the database.

### 6.3 Promotions (Q16, Q23, Q28)

- Shown on Home, above the highlights, **only on the language pages it is published in**.
- **Active today** means: today (Bishkek time, UTC+6) is between `starts_on` and `ends_on`, and — if weekdays are chosen — today is one of them. Whole days only (00:00–23:59).
- Home shows **at most 2** active promotions per language page, in the order staff set. The panel warns: *"Only 2 promotions are shown on Home. This one is currently hidden."*
- After the end date it disappears by itself and stays in the list as *Ended* (and in the history).
- The same date rules run on the fallback content, so an expired promotion never shows even when the site runs from `content.js`.

### 6.4 Team (Q25)

- "Practising since" is a year; the site shows "N+ years" in each language, so it never goes out of date. Empty year → "awaiting clinic", as today.
- Missing bio → "awaiting clinic", as today.
- Photo description is automatic: name + role in the page language.

### 6.5 Photos (Q8, Q22)

- JPG, PNG or WebP, **max 5 MB**, enforced by the storage bucket (not only by the browser).
- The browser shrinks photos to at most 1600 px wide before upload.
- Files get random names (no personal data in file names).
- **Real photos only** — the panel says so next to every upload button (§2: no AI-generated images).
- Section photo slots and the hero slot are **hidden on the site while empty**; no stand-in images. Hero photo placement (beside the headline on wide screens, below the buttons on phones) is shown to the team lead as a mock-up in Phase 5 before it is built. This reverses NOTES decision 6 (a team choice, not a client one).

## 7. Security rules

The repository is **public**. Only the public (publishable / anon) key may appear in code; the service_role / secret key never does.

| Rule | How |
|---|---|
| Row Level Security on **every** table | Turned on for all tables in §6.2 |
| Public can read published content only | Anonymous `SELECT` on content tables where `deleted_at is null`; promotions only while active today (Bishkek). No public access to `drafts`, `versions`, `staff` |
| Only allow-listed staff with two-factor can write | One database function `is_staff()` = the logged-in user is in `staff`, `active = true`, **and** the session is two-factor verified (`aal2`). Every insert / update / delete policy requires it |
| Only admins manage staff | Updates to `staff` require `is_admin()` (same as above plus `role = 'admin'`); a trigger refuses leaving zero active admins |
| Permanent delete | Only `is_admin()` and only for items deleted 90+ days ago |
| No public sign-up | Turned off in the Supabase dashboard; accounts created by hand |
| Storage bucket `site-photos` | Public read; upload / replace / delete only `is_staff()`; allowed types `image/jpeg, image/png, image/webp`; size limit 5 MB. The type check uses the type the uploader declares, so a disguised file is still possible for a staff account; files are served from Supabase's own address (not the site's) and are only ever shown in `<img>`, so a disguised file can't run |
| Browser is never trusted | All checks above live in Supabase policies, constraints and triggers; the panel's own checks are only for friendlier messages |
| Safe rendering | Public site and panel render database content with `textContent` / safe DOM methods only, never `innerHTML`. Links only from `tel:`, `mailto:`, `https:` (existing `makeLink`) |
| Panel pages | `noindex`, not linked from the public menu, no third-party scripts except supabase-js from a CDN with an **exact pinned version** (and an integrity hash) |
| Content-Security-Policy on panel pages | A `<meta http-equiv="Content-Security-Policy">` tag on every `admin/` page: `default-src 'none'`; `script-src 'self'` plus **only** the exact pinned supabase-js URL (no `'unsafe-inline'`, no `'unsafe-eval'`); `connect-src` the project's `https://<project>.supabase.co` (and `wss://` for it); `img-src 'self' blob: data:` plus the project's storage address; `style-src 'self' https://fonts.googleapis.com`; `font-src https://fonts.gstatic.com`; `base-uri 'none'`; `form-action 'self'`; `object-src 'none'`. All panel scripts are separate files (no inline `<script>`, no `onclick=`) |
| Password length | **Minimum 12 characters**, set in the Supabase dashboard (Phase 3 setup step) |
| Staff personal data | Staff names, emails and the history are readable only by logged-in staff and never exported (§8) |

**Known limits**
- **Draft photos:** a photo uploaded for a draft is stored in the public bucket straight away, so anyone who knows its random URL can open it before the item is published. The URL is not shown anywhere public and can't be guessed, but staff should not upload anything they wouldn't want seen early.
- **No `frame-ancestors`:** GitHub Pages can't send security headers, and `frame-ancestors` (protection against the panel being shown inside another site's frame) doesn't work in a `<meta>` tag. Risk is low because every write still needs a login with two-factor; revisit if the site moves to a host that can send headers.
- **Uploaded file type** is the type the uploader declares (see the storage row above).

## 8. Moving content from `content.js` to the database (Q7, addition 1)

1. **Seed (Phase 3, once):** a script reads today's `js/content.js` and creates the rows in §6.2 (texts, team, contact; prices and hours stay empty → "awaiting clinic"). All existing RU/KY texts start **un-ticked** (pending review), EN ticked. Shown to the team lead before it is run.
2. **After seeding the database is the master.** Staff never edit `content.js`.
3. **Public site (Phase 4):** loads published content from Supabase; if Supabase doesn't answer within a few seconds (down, paused or blocked), it uses `content.js`. The site looks and behaves the same either way.
4. **Export:** the Export screen builds a new `content.js` from **published content only** — no drafts, no history, no deleted items, no staff names or emails, no `updated_by`. Interface labels and `whatsappNumber` are copied unchanged from the current file. The developer reviews the diff and commits it. Recommended after bigger changes and at least monthly.
5. **Who runs Export and commits after handover:** **open — to confirm with Dr. Lukas** (options: Troy, FuMing's company, or nobody). If nobody, the fallback stays at the last committed export and slowly goes out of date; the site still works, but during a Supabase outage it would show older content (see §10.3).

## 9. What changes for the public site

- Same look and sections as now, plus: promotions on Home (max 2), the price table in Services, opening hours in Contact, and the optional photo slots — all hidden while empty.
- The "translation pending review" note follows the reviewed ticks instead of being always on for RU/KY.

## 10. Handover procedures

### 10.1 Supabase project ownership (Q10)
- **Preferred:** the project is created under an account using a MercyMed email (e.g. `medicalcenter@mercymed.kg`), with the team lead invited as a member.
- **If MercyMed hasn't confirmed the email by Phase 3:** the team lead creates it under their own account and transfers it at handover:
  1. MercyMed creates its own Supabase account and organization.
  2. The team lead invites that account to the current organization as Owner, or MercyMed invites the team lead to theirs.
  3. In the dashboard: Project settings → General → **Transfer project** → choose MercyMed's organization (both accounts must be owners of their organizations; exact menu names checked in Phase 3).
  4. MercyMed checks the site and panel still work, then removes the team lead's access.
  5. The project URL and public key stay the same, so no code change is needed.

### 10.2 Resetting a lost two-factor device (Q5, addition 4)
Done by the **project owner**:
1. Confirm who is asking (in person or by phone call to a known number).
2. Supabase dashboard → Authentication → Users → the person → remove their lost two-factor device (exact steps checked in Phase 3).
3. The person logs in and sets up a new device, and is reminded to add a second one.
4. Note the reset (date, person, by whom) in the clinic's own records.

### 10.3 Other
- Creating, switching off and re-enabling staff accounts: `docs/STAFF-GUIDE.md` (Phase 6).
- **Export and commit of `content.js`:** before handover, the team lead. After handover: to confirm with Dr. Lukas (Troy, FuMing's company, or nobody; §8 step 5). Whoever it is needs write access to the repository; staff in the panel do not.
- The free Supabase plan pauses an unused project after about a week; the site keeps working from `content.js`, and the panel shows how to wake it up.

## 11. Test plan

Run in Phase 3 (database), Phase 5 (panel) and again in Phase 6. Each attack test is run against the real Supabase API (not only through the panel), as an anonymous visitor and with test accounts: an **active editor**, an **active admin**, a **switched-off editor**, and a **logged-in editor without two-factor (aal1)**.

### 11.1 Attack tests (all must be refused)
| # | Who | Tries to | Expected |
|---|---|---|---|
| A1 | anonymous | insert / update / delete in every table | refused |
| A2 | anonymous | read `drafts`, `versions`, `staff` | no rows |
| A3 | anonymous | read deleted items, or a promotion that hasn't started / has ended | no rows |
| A4 | anonymous | upload, replace or delete a file in `site-photos` | refused |
| A5 | anonymous | sign up a new account | refused |
| A6 | editor without two-factor (aal1) | any write or upload | refused |
| A7 | switched-off editor (with two-factor) | any write or upload | refused |
| A8 | editor | promote themselves or anyone to admin, switch someone off | refused |
| A9 | last remaining admin | demote or switch off themselves | refused |
| A10 | editor | permanently delete an item | refused |
| A11 | editor | set `updated_by` / `version` / write `versions` directly | ignored / refused |
| A12 | editor | upload `.svg`, `.html`, `.gif`, a 6 MB JPG | refused |
| A13 | editor | save text containing `<script>`, `<img onerror>`, `javascript:` links | saved as plain text; shows as text on the site; no script runs; link not made |
| A14 | editor | publish an existing text with RU empty | refused by the database, not only the panel |
| A15 | anyone | search the repo and the exported `content.js` for the service_role key, staff emails, drafts | nothing found |
| A16 | attacker (test) | inject an inline `<script>` into a panel page (e.g. through the browser console adding a script element with inline code, and an `onclick=` attribute) | blocked by the Content-Security-Policy; a CSP violation shows in the console; nothing runs |
| A17 | anyone | set a staff password shorter than 12 characters | refused by Supabase |

### 11.2 Behaviour tests
- Draft → preview → publish; preview visible only to the logged-in person.
- Two browsers edit the same item → second publish refused with the message.
- History shows each publish; Restore brings back the old text as a new version.
- Delete → disappears from the site → restore from Deleted.
- "Did the meaning change?" Yes un-ticks the other languages; No keeps them.
- A promotion published in EN only appears on the EN page only.
- 3 active promotions → only the top 2 show; the warning shows on the third.
- Weekday promotion: shows only on its weekdays, checked around midnight Bishkek time (with the computer's clock in another time zone).
- Idle 30 min → logged out; the draft is offered back to the same person only; normal logout clears it.
- Two-factor: one device → editing works with the banner; second device added → banner gone.
- Photos: a large phone photo is shrunk and uploaded; empty slots are hidden on the site.
- Fallback: block the Supabase address in the browser → the site shows `content.js` content with no errors.
- Export contains only published content (A15).
- Public site, panel and preview at **375 px and 1280 px**, in EN / RU / KY, no console errors, booking form still opens `wa.me` with the **placeholder number**.

## 12. Deviations from earlier decisions

- **Hero photo** slot added (reverses NOTES decision 6, a team choice; the client asked for real photos).
- **Menu button below 1200 px** is kept (CLAUDE.md rule changed after Phase 1). `docs/CLIENT-REQUIREMENTS.md` §2 still says "Menu always visible at the top"; to confirm with the client.

## 13. Open questions (not blocking Phase 3)

- Starting roles (who is admin) — team lead to confirm with Dr. Lukas.
- MercyMed email for the Supabase account — to confirm before Phase 3.
- Exact Supabase dashboard menu names for project transfer and removing a two-factor device — checked during Phase 3.
- Who runs Export and commits `content.js` after handover — team lead to confirm with Dr. Lukas (§8 step 5).
