# Simons-Dark-Matter-Dynamics.github.io

Website for the Simons Collaboration on Dark Matter Dynamics.

## Structure

| Path | Purpose |
|------|---------|
| `index.html` | Home — hero, overview, etc. |
| `people.html` | The PIs, and extensible to trainees/collaborators/etc. |
| `news.html` | Full news list. |
| `publications.html` | Place for listing publications. |
| `data/content.js` | **The content we edit** — news + publications live here. |
| `js/site.js` | Hero animation, nav, scroll reveals, and rendering of news/publications. |
| `styles.css` | The full design system. |
| `images/` | Currently just PI headshots. Grabbed these from your websites.  |

## Updating content (the easy part)

**News and publications.** Open `data/content.js` and edit the
arrays — no HTML required. Items are sorted by date automatically.

- **Add news:** add an object to `SITE_NEWS` with `date`, `title`, `summary`,
  and optional `tag` and `link`. The three most recent items appear on the home
  page automatically; all of them appear on `news.html`.
- **Add a publication:** add an object to `SITE_PUBLICATIONS` with `year`,
  `authors`, `title`, optional `venue`, and an optional `links` map
  (`arXiv`, `DOI`, `ADS`, `PDF`). A copy-ready template is in the file.

## Updating people

In `people.html`, copy one `.person` block and edit the name and affiliation;
drop the headshot in `images/` and point the `src` at it. Use
`<span class="role-pill">…</span>` inside `.frame` for a Director-style badge.
The file also has commented-out sections for **postdocs/students**
and **affiliated collaborators**, if we want.

## Local preview

The data files use plain global arrays, so the site works when opened directly
**or** over a server. If you want to use a server:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Notes

- The footer on every page carries the **Simons Foundation** acknowledgment.
- Fonts (Fraunces, Space Grotesk, Space Mono) load from Google Fonts.
- The hero animation respects `prefers-reduced-motion` (renders a static frame).

## Publishing

GitHub Pages serves the `main` branch root automatically for a `*.github.io`
repository. Push to `main` to update the live site.
