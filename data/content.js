/* =========================================================================
  edit this file to update
     • the news items featured on the home page (index.html)
     • the full News page (news.html)
     • the Publications page (publications.html)

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
    date: "2027-01-01",
    tag: "Announcement",
    title: "The Dark Matter Dynamics collaboration officially launches",
    summary:
      "On January 1, 2027, the Targeted Simons Research Group on Dark Matter Dynamics formally begins — a " +
      "three-year program supported by the Simons Foundation and Simons Foundation International. The " +
      "collaboration unites particle theorists, numerical simulators, and semi-analytic modelers who have " +
      "long exchanged ideas across these fields but never before worked as a single, targeted group, around " +
      "a shared goal: building the theoretical framework to test whether dark matter carries a short-range " +
      "force. We are excited to begin this coordinated effort and to turn the coming generation of " +
      "extragalactic surveys into tests of fundamental physics.",
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
   The collaboration launches in January 2027; add papers here as they appear.
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


/* -------------------------------------------------------------------------
   CONTACT
   Shared email -- not sure how else to best deal with this.
   ------------------------------------------------------------------------- */
window.SITE_CONTACT = { email: "" };


/* -------------------------------------------------------------------------
   EVENTS  (workshops & conferences)  →  News & Events page
   Each item:
     date:     "YYYY-MM-DD"    (required — start date; sorts soonest-first)
     end:      "YYYY-MM-DD"    (optional — multi-day end date)
     title:    "Event name"    (required)
     location: "City / venue"  (optional)
     abstract: "1–4 sentences" (optional — description / abstract)
     link:     "https://..."   (optional — event page / registration)
   ------------------------------------------------------------------------- */
window.SITE_EVENTS = [
  {
    date: "2026-10-26",
    end:  "2026-10-27",
    title: "First Annual Collaboration Meeting",
    location: "U.S. East Coast · venue to be announced",
    abstract:
      "The collaboration's first official meeting brings its Principal Investigators together for two days " +
      "of scientific and logistical planning. Discussions will shape a scientific implementation plan — " +
      "mapping the development of new dark matter models onto coordinated simulation campaigns and targeted " +
      "science goals, and connecting these to the graduate students and postdoctoral researchers who will " +
      "carry out the studies. The meeting will also establish the collaboration's logistics, including a " +
      "hiring plan and a schedule of future workshops and conferences."
  }

  /* Template — copy this block for each new event:
  {
    date: "2027-06-01",
    end:  "2027-06-03",
    title: "Event name",
    location: "City / venue",
    abstract: "Description or abstract of the event.",
    link: "https://..."
  } */
];


/* -------------------------------------------------------------------------
   ACTIVITIES  (ongoing group activities)  →  News & Events page
   Each item:
     title:   "Activity name"  (required)
     summary: "1–3 sentences"  (required)
     link:    "https://..."    (optional)
   ------------------------------------------------------------------------- */
window.SITE_ACTIVITIES = [
  /* {
    title: "Collaboration seminar series",
    summary: "Short description of the ongoing activity.",
    link: "https://..."
  } */
];


/* -------------------------------------------------------------------------
   OPEN POSITIONS  →  Join Us page
   Each item:
     title:   "Position title" (required — e.g. "Postdoctoral Researcher")
     place:   "Institution"    (optional — hosting node)
     summary: "1–4 sentences"  (required — role summary)
     link:    "https://..."    (optional — official job posting)
     email:   "name@inst.edu"  (optional — contact; else uses SITE_CONTACT.email)
   ------------------------------------------------------------------------- */
window.SITE_JOBS = [
  /* {
    title: "Postdoctoral Researcher",
    place: "Institution",
    summary: "Short description of the position and what we are looking for.",
    link: "https://...",
    email: "hiring@inst.edu"
  } */
];
