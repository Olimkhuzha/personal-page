# Classmate feedback on draft v1, with verdicts

Verdicts are checked against `docs/CLIENT-REQUIREMENTS.md`. The client wins over any reviewer.

| # | Feedback (source) | Verdict | What to do |
|---|---|---|---|
| 1 | Header moves when switching languages (human review) | **Fix.** RU/KY menu labels are longer than EN, so the header reflows. | Make the header layout stable in all 3 languages: nothing shifts or wraps differently when the language changes. Test at 375px, 768px, 1280px and 1440px. |
| 2 | No Instagram link or feed; Instagram is their main news channel (both reviews) | **Fix.** Client asked for it on Home. | Add an Instagram link/teaser on Home and a real link in the Instagram section and Contact: @mercymed.kg. No feed embed yet (no account access). |
| 3 | Language buttons 34×34px, header button 36px tall (AI review) | **Fix.** Audience has low–medium tech comfort. | All tap targets at least 44×44px. |
| 4 | No `og:` tags or canonical link (AI review) | **Fix.** Cheap and helps findability. | Add og:title, og:description, og:image, og:locale and a canonical URL. |
| 5 | Too much bold (human review) | **Partly valid.** Client prefers finer fonts but allows some bold. | Lower heading weights (e.g. 600 → 500), keep body at 400. Don't make anything heavier. |
| 6 | Too much text in every section (human review) | **Valid.** Client disliked text-heavy pages. | Shorten long paragraphs and remove repeated information. Don't delete facts the client gave. Show me the proposed cuts before applying. |
| 7 | Add icons and animations (human review) | **Icons: maybe, sparingly. Animations: no.** Client wants uncluttered and disliked animated pictures. | At most simple, consistent line icons where they help scanning. No animations beyond what exists. |
| 8 | Admin panel missing (AI review, PRD R4) | **Build it.** Professor asked for it; client needs updatable content. | See the admin panel phases in the prompt. |
| 9 | Good team section; good "awaiting clinic" handling (both reviews) | **Keep.** | Don't break these. |
