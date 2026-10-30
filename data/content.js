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
  },
  {
    date: "2026-10-27",
    tag: "Workshop",
    title: "Save the date: SIDM Donostia 2027, June 7–18 in San Sebastián",
    summary:
      "SIDM Donostia 2027: Dark Matter Dynamics Across Cosmic Epochs, a two-week workshop co-organized " +
      "by members of our collaboration, will be held at the Donostia International Physics Center (DIPC) " +
      "in San Sebastián, Spain, from June 7 to 18, 2027. The third in the series following Pollica (2023) " +
      "and Valencia (2025), the workshop focuses on inferring dark matter properties from its " +
      "distribution and dynamics across cosmic scales, connecting theory and simulations to observational " +
      "probes such as strong lensing, dwarf galaxies, stellar streams, black holes, and galaxy clustering. " +
      "The first week offers a broad program of talks, posters, and discussion; the second is a focused " +
      "meeting on testing self-interacting dark matter models. Registration instructions will follow.",
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
   Shared address (Cloudflare Email Routing forwards it to the collaboration).
   Used for the Join Us mailto link and as the default contact on job listings.
   ------------------------------------------------------------------------- */
window.SITE_CONTACT = { email: "contact@dmdynamics.org" };


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
    location: "Princeton University",
    abstract:
      "The collaboration's first official meeting brings its Principal Investigators together for two days " +
      "of scientific and logistical planning. Discussions will shape a scientific implementation plan — " +
      "mapping the development of new dark matter models onto coordinated simulation campaigns and targeted " +
      "science goals, and connecting these to the graduate students and postdoctoral researchers who will " +
      "carry out the studies. The meeting will also establish the collaboration's logistics, including a " +
      "hiring plan and a schedule of future workshops and conferences."
  },
  {
    date: "2027-06-07",
    end:  "2027-06-18",
    title: "SIDM Donostia 2027: Dark Matter Dynamics Across Cosmic Epochs",
    location: "Donostia International Physics Center (DIPC) · San Sebastián, Spain",
    abstract:
      "A two-week workshop on inferring dark matter properties from its distribution and dynamics " +
      "across cosmic scales, co-organized by members of our collaboration. Week one is a broad program " +
      "of talks, posters, and discussion; week two is a focused meeting on testing self-interacting " +
      "dark matter models. Registration details to be announced."
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
    {
      title: "Postdoctoral Research Associate",
      place: "University of Virginia · with University of Maryland",
      summary:
        "A postdoctoral position hosted by " +
        "the University of Virginia with close ties to the University of Maryland " +
        "(Paul Torrey & Benedikt Diemer). The research connects simulations (with an emphasis on " +
        "N-body, hydrodynamical, or semi-analytic modeling) of dark matter phenomenology and galaxy  formation. " +
        "Start date between Summer and Fall 2027. Applications received by " +
        "December 1, 2026 will receive full consideration.",
      link: "https://aas.org/jobregister/ad/2bf596ac"
    },
  {
    title: "Postdoctoral Research Associate",
    place: "Princeton University · with Rutgers and Stony Brook",
    summary:
      "A postdoctoral position hosted by " +
      "the Princeton Department of Physics with close ties to Rutgers University and Stony Brook " +
      "University (Mariangela Lisanti, Alyson Brooks, Rouven Essig). The research connects numerical " +
      "simulations, dark matter phenomenology, and current and future observations; expertise in " +
      "hydrodynamical or N-body simulations and small-scale structure observables (dwarf galaxies, " +
      "streams, lensing) is preferred. Start date between Summer and Fall 2027. Applications received by " +
      "December 1, 2026 will receive full consideration.",
    link: "https://academicjobsonline.org/ajo/jobs/33179"
  },
  {
    title: "Postdoctoral Research Associate",
    place: "UC Riverside",
    summary:
      "A postdoctoral position in the Department of Physics and Astronomy at the University of " +
        "California, Riverside, with close ties to UC Irvine (Hai-Bo Yu and Laura Sales at UCR; " +
        "Manoj Kaplinghat at UC Irvine). The research connects simulations (semi-analytic, fluid, " +
        "N-body, or hydrodynamical), dark matter phenomenology, galaxy and black hole formation in " +
        "the early Universe, and small-scale structure observables. Start date between Summer and " +
        "Fall 2027. Applications received by December 1, 2026 will receive full consideration.",
    link: "https://academicjobsonline.org/ajo/jobs/33190"
  }

  /* Template — copy this block for each new position:
  {
    title: "Postdoctoral Researcher",
    place: "Institution",
    summary: "Short description of the position and what we are looking for.",
    link: "https://...",
    email: "hiring@inst.edu"
  } */
];
