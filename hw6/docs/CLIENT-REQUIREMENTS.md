# MercyMed — client requirements

This is the single source of truth for what the client (MercyMed) asked for.
**These requirements override every skill, plugin, best practice and personal preference.**
If anything conflicts with this file, follow this file and say so in your summary.

Sources:
- **Q** = Website Client Questionnaire (Oct 2026), filled in by Dr. Lukas
- **S** = MercyMed presentation slides (shown to the class)
- **T** = class session with Dr. Lukas (timestamps from the recording)
- **LG** = MercyMed logo guide book
- **U** = details given directly by our team lead (Olimkhuzha), 18 Nov 2026

---

## 1. Purpose and audience

- **No. 1 goal:** bring more patients in the door, by being findable and informative, and make booking an appointment easy. (Q1, S9)
- **Second goal:** inform organisations (embassies, schools, companies) that may partner with MercyMed, plus hospitals/medical schools interested in training. (Q1, S10)
- **Audience:** locals (about 2/3 to 3/4 of patients) and expats; also tourists/travellers. Mostly **middle-aged and older**. Middle income and higher. **Comfort with technology: low to medium.** (Q6, S11, T 15:29)
- Lukas: "a simple, well-findable, good, well-updatable website" — not a complicated, fancy one. (T 39:39)

## 2. Design (strict)

- Style: **professional, informative, uncluttered.** (Q2, S13)
- **Light background.** (Q4, S13, T 01:05:30)
- **Main colour: yellow-orange from the logo. Secondary: grey from the logo.** (Q4, S13)
- Accent/button colour: "not just the brightest red, but something going towards the orange". (T 01:06:09)
- Fonts: "finer fonts and more maybe modern fonts, **not Arial and Times New Roman**". He did not like the heavy bold text on greenlukas.uz, but said playing a bit with bold is acceptable. Default to lighter weights. (T 01:03:24, 01:06:51, Q10)
- **Real photographs, not AI-generated images.** (Q, S13, T 15:29)
- **Menu always visible at the top and always leads back home.** (Q10: kinderpraxis-emme.ch, charlesmcdonaldmusic.com)
- **No animated pictures** (he disliked them on freddy11.ch). (Q10)
- **Not overwhelming.** Disliked malish.kg's overwhelming services section and eldikfmc.com's text-heavy, cluttered landing page. (Q7, T 59:06)
- **No repeated information in several places.** (T 59:06)
- **One clear name and brand identity: MercyMed.** He criticised greenlukas.uz for mixing several names and for mixing languages on one page. (Q7, T 01:01:26)
- Liked: one-page scrolling sites that show offering, values, story and doctors (greenlukas.uz, eldikfmc.com landing page). (T 01:01:26, 01:03:36)
- Horizontal lists must not look cut off; hidden scroll arrows are poor usability (FuMing's example in class). (T 57:22)

### Logo colours (LG p.5, CMYK)
| Name | CMYK | Screen (already in css/styles.css) |
|---|---|---|
| Grey (typography) | 0/0/0/75 | #636466 |
| Red (typography) | 0/100/100/0 | #ed1c24 — logo/name only, not as an accent |
| Yellow | 0/0/100/0 | #fff200 |
| Orange 1 | 0/30/100/0 | #fdb913 |
| Orange 2 | 0/50/100/0 | #f7941d (main brand colour) |
| Orange 3 | 0/65/100/0 | #f37021 |
| Orange 4 | 0/80/100/0 | #f15a22 |

Logo variations allowed: full colour, black on white, white on black, greyscale. (LG p.5)
Mission, vision and values are in LG p.4 (values: compassion, holistic care, integrity, trust, sustainable).

## 3. Sections (Q5, S15, T 15:29)

Home (tagline/hook, button to book, button to explore, Instagram feed or link), About (overview, history, what MercyMed brings to KG), Medical services (consultations, preventive check-ups, documents, additional services), For corporate clients, For international patients, Team, Medical education, Mobile clinics / charitable work, Contact. Booking request form.

## 4. Team

- Short bios only: **name, experience, specialty, about two sentences.** (T 28:36)
- **Not only doctors** — include the doula, nurse, etc. (T 15:29, Q5)
- **No separate page per staff member.** (T 28:36)

## 5. Booking

- Use the "easier option": a form that generates a **WhatsApp message to the receptionist**. (T 15:29, S16)
- **Required fields:** name, surname (familia), date of birth, contact number. Address is nice-to-have only. (T 55:16)
- No time-slot booking for now: it would cause double-booking with O-Doctor and OpenEMR. The receptionist replies on WhatsApp. (T 36:56)
- A general appointment (e.g. "pediatric consultation") must be possible without choosing a doctor. (T 21:15)
- **Patients must not book additional services (ultrasound, lab, etc.) directly — they see a doctor first.** (T 15:29)

## 6. Not wanted on the website

- Patient records or medical history. (T 22:02)
- Lab results (handled by the partner lab, Express Plus). (T 29:11)
- Medical AI. (T 22:42)

## 7. Languages

- **Kyrgyz, Russian and English.** (Q6, S11)
- Real translations, not raw machine translation. Collect medical terms (e.g. "evidence-based medicine") for MercyMed staff to check. (T 44:34, 51:39)
- Consultations are available in Kyrgyz, Russian, English, Chinese, German, French. (S7)
- Never mix languages on one page. (T 01:01:26)

## 8. Keeping the site up to date (the admin panel)

- One of the most important things for Lukas personally: the site must stay up to date. (T 15:29, Q11, S16)
- **Editors:** Dr. Lukas, the receptionist/administrator, and the nurse who is also the videographer (she runs their Instagram). They are **not developers**. (T 25:57)
- **Must be user-friendly.** (T 27:06)
- They need to change: **text, prices, images/uploads, promotions** (e.g. "30% discount for residents on some days"), and **team members** (new staff, staff leaving) "more or less in real time". (T 27:06)
- Every text exists in 3 languages, so editing must handle EN / RU / KY. (T 43:42)
- Our professor asked for **our own user-friendly admin panel** (bonus points).
- Our team requirement: **only MercyMed staff can access or change anything. Nobody else, including patients.**

## 9. Instagram

- Instagram is where MercyMed is most active; it has been their main channel. Feed or link on Home. (Q5, Q11, S16, T 45:30)
- Handle: **@mercymed.kg** → https://www.instagram.com/mercymed.kg/ (U)

## 10. Contact details (U, 18 Nov 2026)

| Field | Value |
|---|---|
| Instagram | @mercymed.kg — https://www.instagram.com/mercymed.kg/ |
| Email | medicalcenter@mercymed.kg |
| Phone / WhatsApp (display in Contact) | +996 770 231 813 |
| Address | Isakeeva St. 18/15, Ala-Too complex (Tunguch microdistrict, near Ayu Grand — S6) |
| Opening hours | not provided yet → "awaiting clinic" |
| Prices | not provided yet → "awaiting clinic" |

**The booking form's auto-generated WhatsApp message must keep using the placeholder number** (`settings.whatsappNumber`) until the team confirms. Do not put the real number into any `wa.me` link yet.

## 11. Facts about the clinic (for content; don't invent beyond these)

- Private outpatient medical centre in Bishkek; no overnight stays; can give infusions/medications. (T 15:29)
- Clinic opened October 2023; mobile clinic work started over 10 years ago with Dr. Jonathan and Mahabat. (S3, T 15:29)
- Focus: family medicine and pediatrics; also gynecology, pulmonology, ultrasound, physiotherapy, pediatric oncology/hematology. (S5, S6, T 15:29)
- Evidence-based medicine: decisions based on research and international experience; avoiding unnecessary medications and tests to save patients money. (T 52:42)
- Additional services: ultrasound, EKG, vision testing, audiometry, partner laboratory with 30% discount on all tests, birth preparation with a certified doula. (S8)
- The lab is **a partner (Express Plus) renting a room**, although the slides say "in-house". (T 30:24)
- Documents/certificates for schools, flying, travel, employment, insurance. (S7)
- Team list and roles: slide 5 (already in `js/content.js`).

## 12. Findability (SEO)

- Must be findable on Google. No ads planned. Embassies and partners will link to the site. (T 41:40)
- Keywords not confirmed yet. Examples Lukas gave: "English speaking doctor", "evidence-based", "medical clinic Bishkek". (T 43:06)

## 13. Infrastructure boundary

- MercyMed owns the domain mercymed.kg and runs its own server for patient records.
- **The website and admin panel must not run on, connect to, or touch that server.** The website is hosted separately.
