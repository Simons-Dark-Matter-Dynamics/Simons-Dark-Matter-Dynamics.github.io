# Simons-Dark-Matter-Dynamics.github.io

Website for the Simons Collaboration on Dark Matter Dynamics.

## Structure

| Path | Purpose |
|------|---------|
| `index.html` | Home — hero, overview, the physics, the five research Aims (a velocity ladder), and the 3 latest news items. |
| `people.html` | The ten Principal Investigators (extensible to trainees & collaborators). |
| `news.html` | Full news list. |
| `publications.html` | Publications, grouped by year. |
| `data/content.js` | **The content you edit** — news and publications live here. |
| `js/site.js` | Hero animation, nav, scroll reveals, and rendering of news/publications. |
| `styles.css` | The full design system. |
| `images/` | PI headshots. |

## Updating content (the easy part)

**News and publications are data-driven.** Open `data/content.js` and edit the
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
The file also has commented-out, ready-to-fill sections for **postdocs/students**
and **affiliated collaborators**.

## Local preview

The data files use plain global arrays, so the site works when opened directly
**or** over a server. A server is recommended:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Notes

- The big footer on every page carries the **Simons Foundation** acknowledgment.
  Drop the official Simons Foundation logo into `images/` and swap the inline
  `.ack-mark` SVG for it if/when you'd like.
- Fonts (Fraunces, Space Grotesk, Space Mono) load from Google Fonts.
- The hero animation respects `prefers-reduced-motion` (renders a static frame).

## Publishing

GitHub Pages serves the `main` branch root automatically for a `*.github.io`
repository. Push to `main` to update the live site.
