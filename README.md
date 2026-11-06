# Farmivo

**Plan crop supply before procurement season.**

Farmivo helps agricultural buyers plan sourcing across fragmented grower networks. Its AI translates field and satellite data into supply forecasts that procurement teams can act on.

> Farmivo is a proposed startup concept. The team is fictional, pricing is illustrative and the prototype uses fictional data. Named organisation types are prospective customers with no implied affiliation. The domain `www.farmivo.com` and email `hello@farmivo.com` are placeholders — check availability with a registrar before use.

Categories: AI · AgriTech · Supply Chain Intelligence

## What's here

- **Marketing site** (`/`): hero, purpose and stakes (with sourced statistics), problem, solution, how it works, customers, public-sector angle, AI safeguards, principles, founders' letter, vision, pricing, proposed AWS architecture, team, FAQ and an early-access form.
- **Interactive prototype** (`/app`): a review workspace on fictional forecasts. Switch roles with *Demo as*, open a record to see AI flags with evidence and confidence, assign reviewers, add notes and record decisions (a reason is required). Every change is written to an audit log you can export as CSV. A grounded assistant answers only from the records and refuses decisions that belong to people. Changes persist in `localStorage`.
- **Legal drafts**: `/privacy` and `/terms` (review drafts; operator details to be confirmed).

## Team

- **Hauwa Balarabe** — Founder/CEO. Agribusiness operator with grain aggregation experience.
- **Olumide Akinbode** — Co-founder. Agricultural economist focused on processor sourcing.
- **Nnenna Iheanacho** — CTO. Remote sensing scientist specialising in crop forecasting.

## Sources for the statistics

- ~14% — Share of the world’s food lost after harvest and before reaching retail. ([FAO, State of Food and Agriculture 2019](https://www.fao.org/interactive/state-of-food-agriculture/2019/en))
- 2.17m t — Estimated maize lost after harvest in Nigeria in 2020. ([APHLIS](https://aphlis.net/en/data/tables/overview/NG/all-crops/2020))
- Up to 60% — Estimated post-harvest losses for tubers, fruits and vegetables in Nigeria. ([BusinessDay](https://businessday.ng/news/article/nigerias-post-harvest-losses-surge-amid-covid-19-pandemic/))

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build   # Vite build, server render, and static prerender of /, /app, /privacy, /terms and 404.html
npm test        # Engine and content tests (node --test)
npm run preview
```

The build output in `dist/` is fully static. `public/_headers` and `public/_redirects` cover Netlify/Cloudflare Pages; `vercel.json` covers Vercel.

### Early-access form

Without configuration the form saves the request in the browser and offers a pre-filled email to hello@farmivo.com. To send submissions to HubSpot, set `VITE_HUBSPOT_PORTAL_ID` and `VITE_HUBSPOT_FORM_GUID` at build time, and update the privacy notice first.

### Motion

Scroll reveals, word-by-word manifesto lighting, count-up statistics, timeline and step lines, card tilt and magnetic buttons live in `src/motion.js`. Content is server-rendered and fully visible without JavaScript; motion is skipped when the visitor prefers reduced motion.

## Structure

```
src/content.js        all site copy (edit here)
src/seed.js           fictional prototype records
src/theme.css         colours and fonts
src/App.jsx           marketing pages
src/Purpose.jsx       purpose, stakes, principles, letter, vision
src/app/engine.js     prototype rules (permissions, decisions, audit, assistant)
src/app/Prototype.jsx prototype UI
scripts/prerender.mjs static HTML for every route
```
