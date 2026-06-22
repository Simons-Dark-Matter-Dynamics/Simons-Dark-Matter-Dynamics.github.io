/* =========================================================================
   CONTENT SOURCE OF TRUTH  —  edit this file to update the website.

   This single file powers:
     • the top 3 news items featured on the home page (index.html)
     • the full News page (news.html)
     • the Publications page (publications.html)

   No build step, no database. Add an entry to the array, save, done.
   Items are sorted automatically by date (newest first), so order here
   does not matter.
   ========================================================================= */


/* -------------------------------------------------------------------------
   NEWS
   Each item:
     date:    "YYYY-MM-DD"   (required — used for sorting & display)
     title:   "Headline"      (required)
     summary: "1–3 sentences" (required)
     tag:     "Announcement" | "Meeting" | "Result" | "Press" | ...  (optional)
     link:    "https://..."   (optional — external article / more info)
   ------------------------------------------------------------------------- */
window.SITE_NEWS = [
  {
    date: "2026-03-03",
    tag: "Update",
    title: "Placeholder news headline",
    summary:
      "Placeholder summary text. This is where a short description of a collaboration update will go — replace this entry in data/content.js with a real item when news is ready to publish.",
    link: ""
  },
  {
    date: "2026-02-15",
    tag: "Update",
    title: "Placeholder news headline",
    summary:
      "Placeholder summary text. Lorem ipsum stand-in copy used to demonstrate the news layout until the first real announcements are available.",
    link: ""
  },
  {
    date: "2026-01-20",
    tag: "Update",
    title: "Placeholder news headline",
    summary:
      "Placeholder summary text. This card shows how a news item appears; swap in real content by editing the SITE_NEWS array.",
    link: ""
  }
];


/* -------------------------------------------------------------------------
   PUBLICATIONS
   Each item:
     year:    2026               (required — used for grouping & sorting)
     authors: "Last, F., et al." (required)
     title:   "Paper title"      (required)
     venue:   "Journal / arXiv"  (optional)
     links:   { arXiv: "url", DOI: "url", ADS: "url", PDF: "url" }  (optional)
   The collaboration launches in Fall 2026; add papers here as they appear.
   ------------------------------------------------------------------------- */
window.SITE_PUBLICATIONS = [

  /* Template — copy this block for each new paper, then fill it in:
  {
    year: 2026,
    authors: "Author, A., Author, B., et al.",
    title: "Title of the collaboration paper",
    venue: "arXiv:2026.xxxxx",
    links: { arXiv: "https://arxiv.org/abs/2026.xxxxx", ADS: "https://ui.adsabs.harvard.edu/abs/..." }
  }
  */

];
