# MercyMed website — project notes

Assignment 6 draft by Team 3 (AUCA). Live at **https://olimkhuzha.github.io/personal-page/hw6/**
Committed as `mercymed website v1` on `main` of `Olimkhuzha/personal-page`.

Sources used: Team 3 PRD (v1.0), the client questionnaire (Oct 2026), Dr. Lukas's presentation slides, the Q&A transcript, and the MercyMed logo guide. Nothing on the site is invented; anything the clinic hasn't provided is shown as an "awaiting clinic" placeholder.

---

## What we built

A static, one-page website with a sticky menu that jumps to each section.

| Section | Content |
|---|---|
| Hero | Slide 12 headline, two buttons (WhatsApp appointment, see services), consultation languages, 4 highlights from slide 6 |
| About | Overview, history (mobile clinics 10+ years, clinic opened Oct 2023), what evidence-based medicine means, mission and values |
| Services | Daily consultations, preventive check-ups, documents and certificates, additional services, prices placeholder |
| Appointment | 4-field form that opens WhatsApp with a pre-filled message |
| Team | 10 cards: photo, name, role, experience, short bio |
| Corporate / International / Education | Who each is for and what MercyMed offers them |
| Mobile clinics | How it works in 3 steps |
| Instagram | Placeholder until account access is given |
| Contact | Location, plus placeholders for address, hours, phone, email, Instagram |

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

Not building: online booking calendar, OpenEMR integration, patient accounts or lab results, medical AI, per-doctor pages, deployment to the clinic's German server.

---

## Open issues

### Needed from MercyMed
- [ ] Receptionist's **WhatsApp number** (currently placeholder `996000000000`; set `settings.whatsappNumber` and `whatsappIsPlaceholder: false`)
- [ ] Address, opening hours, phone, email (the phone in the questionnaire belongs to the logo designer)
- [ ] Prices
- [ ] Instagram account link / feed access
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

### Next steps
1. Show the draft to Dr. Lukas and the MercyMed team for mid-point feedback (planned before end of November).
2. Fill in content as the clinic sends it.
3. Plan phase 2: admin panel for staff updates, and server-rendered text for SEO.
