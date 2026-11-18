# MercyMed website — project notes

Assignment 6 draft by Team 3 (AUCA). Live at **https://olimkhuzha.github.io/personal-page/hw6/**
Committed as `mercymed website v1` on `main` of `Olimkhuzha/personal-page`.

Sources used: Team 3 PRD (v1.0), the client questionnaire (Oct 2026), Dr. Lukas's presentation slides, the Q&A transcript, and the MercyMed logo guide. Nothing on the site is invented; anything the clinic hasn't provided is shown as an "awaiting clinic" placeholder.

---

## What we built

A static, one-page website with a sticky menu that jumps to each section.

| Section | Content |
|---|---|
| Hero | Slide 12 headline, two buttons (WhatsApp appointment, see services), Instagram link, 4 highlights from slide 6 |
| About | Overview, history (mobile clinics 10+ years, clinic opened Oct 2023), what evidence-based medicine means, mission and values |
| Services | Daily consultations, preventive check-ups, documents and certificates, additional services, prices placeholder |
| Appointment | 4-field form that opens WhatsApp with a pre-filled message |
| Team | 10 cards: photo, name, role, experience, short bio |
| Corporate / International / Education | Who each is for and what MercyMed offers them |
| Mobile clinics | How it works in 3 steps |
| Instagram | Link to @mercymed.kg; the feed itself is a placeholder until account access is given |
| Contact | Location, address, phone / WhatsApp, email and Instagram as links; opening hours placeholder |

### Files

- `index.html` — page structure
- `css/styles.css` — layout, colours, responsive rules
- `js/content.js` — **all editable content** (EN / RU / KY text, team list, contact details, WhatsApp number). Staff update the site here; a future admin panel can use the same structure. Setting a value to `null` shows the "awaiting clinic" label.
- `js/app.js` — rendering, language switch, mobile menu, section highlighting, form validation and WhatsApp link
- `assets/logo/` — logo with the background whitened
- `assets/team/` — portraits cropped from slide 5

### Tested

- Desktop (1280px) and phone (375px); no sideways scrolling, no console errors
- Language switch EN / RU / KY changes all text, page title and `lang` attribute
- Form: empty fields, future date of birth and bad phone numbers show inline errors and WhatsApp doesn't open; valid data opens `wa.me` with all 4 fields in the chosen language
- Live GitHub Pages link loads with styles, scripts and images

Not tested: a real WhatsApp send (the number is a placeholder).

---

## Client's design restrictions

- **Style:** professional, informative, uncluttered. Not overwhelming (disliked malish.kg's services section and eldikfmc.com's text-heavy landing page). No repeated information in several places.
- **Colours:** light background. Main colour yellow-orange from the logo, secondary grey from the logo. Accent should lean orange, **not the brightest red**.
- **Fonts:** fine, modern fonts — **not Arial or Times New Roman**, not too bold.
- **Photos:** **real photographs, not AI-generated images.**
- **Menu:** always visible at the top and leads back home (liked this on kinderpraxis-emme.ch and charlesmcdonaldmusic.com).
- **Branding:** one clear name and identity (criticised greenlukas.uz for mixing names).
- **Up to date:** must be easy for staff to update text, prices, photos, promotions and team changes. Disliked eldikfmc.com for outdated staff info.
- **Languages:** Kyrgyz, Russian and English, real translations rather than raw machine translation. Medical terms to be checked by MercyMed staff.
- **Booking:** patients should not book additional services (ultrasound, lab, etc.) directly; they see a doctor first.
- **Not wanted via the website:** patient records, lab results, medical AI.
- **Team page:** short bios only (name, experience, specialty, ~2 sentences), no page per staff member, and not only doctors.

---

## Decisions

| # | Decision | Why |
|---|---|---|
| 1 | One scrolling page with a sticky menu | Team choice; client liked one-page sites (greenlukas.uz, eldikfmc.com) |
| 2 | Appointment form has only the 4 required fields: name, surname, date of birth, mobile number | Client's minimal data set; receptionist sorts out the doctor on WhatsApp, as today |
| 3 | Form opens WhatsApp (`wa.me`) with a pre-filled message; nothing stored; no time slots | Client's "easier option"; avoids double booking with O-Doctor and OpenEMR |
| 4 | Team photos taken from slide 5, labelled "awaiting confirmation" | Team choice; slides are the only photos provided |
| 5 | Nargiza's card uses her slide image (the ultrasound machine) | Team choice; slide has no portrait of her |
| 6 | Headline from slide 12; no hero image | Client never gave a hero message; slide 12 is the client's own wording |
| 7 | Front end only; no admin panel in this draft; all content in `js/content.js` | Keeps the draft deliverable; ready for an admin panel later |
| 8 | Additional services listed for information only; every booking button means a consultation | Client wants patients to see a doctor first |
| 9 | "Laboratory on site, 30% discount" | Interview says it's a partner lab (Express Plus) renting a room; slides say "in-house" |
| 10 | Russian and Kyrgyz drafts labelled "translation pending review" | Client wants staff to check medical terms |
| 11 | Inter font, orange buttons with dark text, darker orange for small text | Modern Cyrillic font; dark text keeps buttons readable (contrast) |
| 12 | All team cards and photos the same size | Team feedback after first version |
| 13 | v2 work happens on branch `mercymed-v2`; nothing is committed to `main` and Claude never pushes | Phase 0 (Nov 2026); the team lead reviews and pushes |
| 14 | Git guardrail hook (`.claude/hooks/block-dangerous-git.sh`) checks every Bash and PowerShell command and blocks push, reset --hard, clean -f, rebase, pull --rebase, branch -d/-D, checkout -f / checkout . and restore . | Phase 0; adapted from the git-guardrails-claude-code skill, which only covered Bash |
| 15 | The hook fails closed: missing jq, bad input, a script error, or a hook that can't start (`onFailure: block`) blocks the command | The skill's original script silently allowed everything when jq was missing |
| 16 | Permission deny rules in `.claude/settings.json` repeat the same commands as a second layer | Defence in depth; they only match the plain command spellings |
| 17 | `.gitattributes` keeps `*.sh` on LF line endings | A CRLF checkout on Windows would break the hook and block every command |
| 18 | Contact details from CLIENT-REQUIREMENTS §10: address, phone +996 770 231 813 (`tel:`), email (`mailto:`), Instagram @mercymed.kg. The booking form still uses the placeholder `whatsappNumber` | Phase 1; the real number may not go into a `wa.me` link until the clinic confirms the receptionist's number |
| 19 | Links are only built from `tel:`, `mailto:` and `https:` values (`makeLink` in `app.js`); anything else shows as plain text | Safe now, and ready for content coming from a database later |
| 20 | From 1200px wide the header has two rows (logo + language + button, then the menu); the header button has a fixed minimum width | Feedback #1: the one-row header overflowed at 1280px and changed size per language. Approved by the team lead |
| 21 | Every button and link is at least 44×44px (`min-inline-size` / `min-block-size`) | Feedback #3 |
| 22 | Open Graph tags and a canonical link point at the GitHub Pages address | Feedback #4; **change them when the site moves to mercymed.kg** |
| 23 | Font weights at most 500; only Inter 400 and 500 are loaded | Feedback #5 and the "not too bold" design rule |
| 24 | Text shortened (feedback #6) as approved: one-sentence About intro, no repeats. The six consultation languages are listed only in International, not on Home. "Evidence-based" stays visible on Home and About | International patients look for their own language there |
| 25 | Feedback #7 (icons) not done | Not marked "Fix" in FEEDBACK-REVIEW.md |
| 26 | Below 1200px the menu stays behind the ☰ button; CLAUDE.md rule changed to "Menu always reachable at the top and leads back home (a menu button is fine on narrow screens)" | Team lead decision after the Phase 1 review |
| 27 | `meta description` and `og:description` switch to RU/KY with the language | Never mix languages on one page |
| 28 | Links that open a new tab carry hidden text "(opens in a new tab)" for screen readers | Phase 1 review |

Not building: online booking calendar, OpenEMR integration, patient accounts or lab results, medical AI, per-doctor pages, deployment to the clinic's German server.

---

## Open issues

### Needed from MercyMed
- [ ] Receptionist's **WhatsApp number** (currently placeholder `996000000000`; set `settings.whatsappNumber` and `whatsappIsPlaceholder: false`)
- [ ] Opening hours (address, phone, email and Instagram are now in; RU/KY address wording to be checked)
- [ ] Prices
- [ ] Instagram feed access (the link is in)
- [ ] **Confirm the slide 5 photos are real, not AI-generated**, or send real ones; real portrait of Nargiza
- [ ] Experience and short bios for each team member (Madison, Simbat, Nargiza have none)
- [ ] Review of Russian and Kyrgyz text, especially medical terms such as "далилдүү медицина" (evidence-based medicine)
- [ ] SEO keywords the team wants to be found for; a real hero message if they prefer one
- [ ] Real photos of the clinic and mobile clinics

### Known limitations of the draft
- Most text is inserted by JavaScript, so search engines that don't run JavaScript see a mostly empty page. Fix before launch (render the text into the HTML).
- No admin panel yet; updates mean editing `js/content.js`.
- Some portraits still show a little slide text at the edges (e.g. Mahabat).
- Inter is loaded from Google Fonts; the page falls back to system fonts if it can't load.
- Not hosted on the clinic's server or `mercymed.kg` yet (needs their tech support, Troy).
- Description tags switch language only in the browser (JavaScript). Link previews (WhatsApp, Facebook) and search engines read the English tags in the HTML. Fixed by the same "render text into the HTML" work before launch.
- `docs/CLIENT-REQUIREMENTS.md` still says "Menu always visible at the top"; only CLAUDE.md was changed (decision 26). Confirm with the clinic if needed.
- The menu highlights "About" while the top of the page (hero) is on screen; this was already so before Phase 1.

### Git guardrails (development only)
- A safety net against mistakes, not against deliberate evasion: git aliases, variables (`$g push`) or a quoted full path with spaces can still get past it. The rules in `CLAUDE.md` still apply.
- Quoted text with spaces (e.g. commit messages) is ignored, so messages can mention these commands. A quoted string that starts with `git` is still checked, so a message like "git push docs" is blocked.
- `git restore --staged .` is blocked even though it is harmless; use `git restore --staged <file>`.
- The hook needs Git Bash and jq (installed with `winget install jqlang.jq`). Each check takes about 1 second on this PC.
- The deny rules couldn't be tested on their own, because the hook always blocks first.

### Next steps
1. Show the draft to Dr. Lukas and the MercyMed team for mid-point feedback (planned before end of November).
2. Fill in content as the clinic sends it.
3. Plan phase 2: admin panel for staff updates, and server-rendered text for SEO.
