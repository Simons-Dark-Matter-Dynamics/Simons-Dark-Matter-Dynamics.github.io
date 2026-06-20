# Simons-Dark-Matter-Dynamics.github.io

Website for the Simons Collaboration on Dark Matter Dynamics.

## What's here

A simple static site — no build step, no dependencies. It is served directly by
GitHub Pages from the repository root.

| File | Purpose |
|------|---------|
| `index.html` | **About** page (home) — overview, science motivation, the five research aims, and organization. |
| `people.html` | **People** page — the ten Principal Investigators. |
| `styles.css` | Shared stylesheet for all pages (clean academic theme). |

## Editing

- **Add a person:** in `people.html`, copy one `.person` block and edit the name,
  role, and affiliation. For a photo, replace the initials
  `<div class="avatar">XX</div>` with
  `<img class="avatar" src="images/lastname.jpg" alt="Name">` and add the image
  under an `images/` folder.
- **Add trainees or affiliated collaborators:** `people.html` already contains
  commented-out, ready-to-fill sections for postdocs/students and external
  collaborators — just uncomment and populate.
- **Add a new page:** copy the header/footer from an existing page, add a link in
  the `<nav>` of every page, and reuse the styles in `styles.css`.

## Local preview

Open `index.html` directly in a browser, or run a local server from the repo root:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Publishing

GitHub Pages serves the `main` branch root automatically for a `*.github.io`
repository. Pushing to `main` updates the live site.
