# MercyMed website — rules for Claude Code

Read this file, `docs/CLIENT-REQUIREMENTS.md`, `docs/FEEDBACK-REVIEW.md` and `NOTES.md` at the start of every session.

## Priority order (highest first)

1. **Client requirements** — `docs/CLIENT-REQUIREMENTS.md`
2. My explicit instructions in the chat
3. Decisions already recorded in `NOTES.md`
4. Skills and plugins (Modern Web Guidance, Supabase, Matt Pocock skills, anything else)

Skills **never** override 1–3. If a skill suggests something that conflicts with the client's requirements, don't do it, and mention it in your summary in one line.

## Design is locked

- Light background only. **No dark mode.**
- Keep the existing palette from the logo (CSS variables in `css/styles.css`). Don't add, change or "improve" colours. Never use the bright red (#ed1c24) as an accent.
- Keep Inter. No Arial or Times New Roman. Headings at most weight 500; body 400.
- No animations, parallax, scroll effects, shaders, text effects, custom scrollbars or decorative visual effects.
- No AI-generated images. Use only the photos in `assets/` or ones I give you.
- Menu always reachable at the top and leads back home (a menu button is fine on narrow screens). One brand name: MercyMed. Never mix languages on one page.

## How to use the skills

- **Modern Web Guidance (Google):** use it only for accessibility, forms, HTML semantics, performance, images/fonts loading, security (e.g. HTML sanitization) and code quality. Do **not** use its visual-design guides (color, dark mode, typography styling, visual effects, scrollbars). Its "Modern Web Guidance" summary section in replies is fine.
- **Supabase plugin:** for the database, auth, storage and security rules. Show me every SQL migration / policy before applying it, and explain it in plain words.
- **Matt Pocock skills:** use `code-review` after each phase (review since the phase's starting commit, against `docs/CLIENT-REQUIREMENTS.md` and the phase spec). When a phase needs design decisions, ask **me** to run `/grill-me` (you can't start it yourself).

## Code management

- Work on the branch `mercymed-v2`. Never commit to `main`.
- This folder (hw6) lives inside a larger repo. **Never create, change or delete files outside this folder.**
- Small, focused commits with clear messages, one per logical change. Run `git status` before every commit and only commit files you meant to change.
- **Never push, force, reset --hard, rebase or delete branches.** I push myself.
- Change only what the task needs. Don't rewrite or reformat working code. Don't rename files.
- Stay with plain HTML, CSS and JavaScript. No frameworks, no build step, no npm dependencies in the site unless I approve. Load third-party scripts (e.g. supabase-js) from a CDN with an **exact pinned version**.
- After every change, test locally (the server in `.claude/launch.json`, port 5500): EN / RU / KY, at 375px and 1280px, no console errors, form still works.
- Keep `NOTES.md` up to date at the end of each phase (decisions, open issues).
- Stop at the end of each phase and wait for my approval before starting the next one.

## Hosting plan

If our site wins the class competition, MercyMed will provide their server. Until then we use **free services only**: GitHub Pages + the Supabase free plan.

- **Everything needed to rebuild the project lives in this GitHub repo:** site and panel code, all migrations, the seed script, the `content.js` export and the docs. **Never secrets.**
- **Keep the backend portable:** security rules live in SQL migrations. No Supabase Edge Functions or paid-only features unless I approve.
- **The public site must keep working as plain static files**, so it can be copied to their server later.

## Content rules

- **Never invent facts** (prices, hours, bios, experience, photos). Anything the clinic hasn't given shows the "awaiting clinic" label.
- Contact details are in `docs/CLIENT-REQUIREMENTS.md` §10.
- **The booking form's WhatsApp message must keep using the placeholder number** in `settings.whatsappNumber`. Never put the real number into a `wa.me` link.
- RU and KY text stays labelled "translation pending review".

## Security rules (admin panel)

- This repo is **public** and served by GitHub Pages: everything committed is visible to anyone. Never commit secrets, passwords, personal data or the Supabase **service_role / secret key**. Only the public (publishable/anon) key may appear in code.
- **Row Level Security on every table and storage bucket.** Anyone may read published content; only allow-listed staff may write.
- **No public sign-up.** Staff accounts are created by hand. Writes require a logged-in allow-listed staff member **with two-factor login (TOTP)**.
- Never trust the browser: all access checks happen in Supabase policies, not in JavaScript.
- Render all content from the database with `textContent` / safe DOM methods. **Never `innerHTML` with database content.**
- Uploads: images only (jpg, png, webp), size limit, only staff can upload.
- Admin pages: `noindex`, not linked from the public menu.
- **Never connect to, deploy to or touch MercyMed's own server or OpenEMR.**
- **Team decision (not a client requirement):** the admin backend stays separate from the OpenEMR server, for patient-data safety.
- The public site must still work if Supabase is down or paused: fall back to the content in `js/content.js`.
