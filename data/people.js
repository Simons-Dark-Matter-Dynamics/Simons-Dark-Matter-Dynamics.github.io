/* =========================================================================
   edit this file to update the People page.

   Each item:
     name:        "First Last"                 (required)
     photo:       "images/xxx.jpg"             (required — needs the associated file in images/)
     position:    "Academic title"             (required)
     affiliation: "Institution"                (required)
     category:    "pi" | "scientist" | "affiliate"   (required — which section - can modify if we want a different format)
     role:        "Director" | "Deputy Director"     (optional — shows a badge)
     bio:         "75–300 words"               (required per Simons instructions)
     links:       { web: "url", scholar: "url" }     (optional)

   Categories render in this order, each in its own section on people.html:
     pi         → Principal Investigators (director/deputy badged, listed first)
     scientist  → Group Scientists (funded postdocs / students / research staff)
     affiliate  → Affiliated Collaborators (non-funded)
   Within a section, order follows this array (director & deputy first for PIs).
   ========================================================================= */

window.SITE_PEOPLE = [

  /* ---------------- Principal Investigators ---------------- */
  {
    name: "Manoj Kaplinghat",
    photo: "images/kaplinghat.jpg",
    position: "Professor of Physics & Astronomy",
    affiliation: "UC Irvine",
    category: "pi",
    role: "Director",
    bio: "Manoj Kaplinghat is a Professor of Physics & Astronomy at the University of California, Irvine, where his research spans astrophysics, cosmology, and particle physics, using observations across these scales to probe the fundamental nature of dark matter. He is a leading theorist of self-interacting dark matter, and his work connecting particle-physics models to the observed diversity of galactic rotation curves and the structure of dwarf galaxies has helped establish self-interactions as a testable alternative to the collisionless paradigm. He has also shaped the interpretation of indirect searches for dark matter, from the gamma-ray excess toward the Galactic Center to constraints from Milky Way satellites. As Director of the Targeted Simons Research Group on Dark Matter Dynamics, he leads the collaboration's effort to translate models of short-range dark matter forces into observationally testable predictions across galactic and cosmological scales. He was elected a Fellow of the American Physical Society in 2020. Kaplinghat earned his B.Tech. from the Indian Institute of Technology Bombay and his Ph.D. from The Ohio State University and held research positions at the University of Chicago and UC Davis before joining UC Irvine in 2004."
  },
  {
    name: "Mariangela Lisanti",
    photo: "images/lisanti.jpg",
    position: "Professor of Physics",
    affiliation: "Princeton University",
    category: "pi",
    role: "Deputy Director",
    bio: "Mariangela Lisanti is a Professor of Physics at Princeton University. A theoretical particle physicist, she studies the nature of dark matter through work that bridges particle theory, astrophysics, and data science, with a focus on how departures from the standard Cold Dark Matter paradigm imprint themselves on galactic and sub-galactic observables. As Deputy Director of the Targeted Simons Research Group on Dark Matter Dynamics, she helps steer the collaboration's program connecting particle-physics models of dark matter to the statistical signatures that upcoming surveys can measure. Her honors include a Simons Investigator award and Princeton's President's Award for Distinguished Teaching. Lisanti earned her A.B. from Harvard University and her Ph.D. from Stanford University, and joined the Princeton faculty in 2013 following a fellowship at the Princeton Center for Theoretical Science."
  },
  {
    name: "Alyson Brooks",
    photo: "images/brooks.jpg",
    position: "Professor of Physics & Astronomy",
    affiliation: "Rutgers University",
    category: "pi",
    bio: "Alyson Brooks is a Professor of Physics and Astronomy at Rutgers University and a theoretical astrophysicist who builds some of the highest-resolution cosmological simulations of galaxy formation. Her work has helped establish how the physics of gas and stars reshapes the dark matter distribution within galaxies, making her an authority on both galaxy formation and the astrophysical systematics that constrain dark matter models — especially in dwarf galaxies. Within the Targeted Simons Research Group on Dark Matter Dynamics, she brings this expertise to separating the signatures of dark matter physics from those of baryonic feedback in low-mass systems. Brooks received a Sloan Research Fellowship in 2015 and the American Physical Society's Maria Goeppert Mayer Award in 2019. She earned her B.A. from Macalester College and her Ph.D. in astronomy from the University of Washington."
  },
  {
    name: "Francis-Yan Cyr-Racine",
    photo: "images/cyr-racine.jpg",
    position: "Associate Professor of Physics & Astronomy",
    affiliation: "University of New Mexico",
    category: "pi",
    bio: "Francis-Yan Cyr-Racine is an Associate Professor of Physics and Astronomy at the University of New Mexico, where he leads a research group in particle cosmology. His work brings together particle physics, cosmology, and astronomy to determine how nonstandard dark matter alters the growth of cosmic structure and the observables it leaves behind, and he is a co-developer of the widely used ETHOS (Effective Theory of Structure Formation) framework for mapping dark matter microphysics onto structure-formation predictions. In the Targeted Simons Research Group on Dark Matter Dynamics, he contributes this theoretical machinery for translating short-range dark matter forces into testable cosmological signatures, work connected to NSF-funded collaboration with UC Irvine on dark matter physics. Cyr-Racine earned his Ph.D. from the University of British Columbia in 2012 and was a postdoctoral fellow at Harvard University before joining the University of New Mexico."
  },
  {
    name: "Benedikt Diemer",
    photo: "images/diemer.jpg",
    position: "Associate Professor of Astronomy",
    affiliation: "University of Maryland",
    category: "pi",
    bio: "Benedikt Diemer is an Associate Professor in the Department of Astronomy at the University of Maryland, where his group specializes in computational structure formation — running and analyzing large cosmological simulations of how matter collapses into the cosmic web, dark matter halos, and galaxies. His research has advanced our understanding of the structure of dark matter halos, specifically their density profiles, concentration–mass relations, and edges. He is the author of widely used community software, including the Colossus toolkit for cosmology and halo calculations. Within the Targeted Simons Research Group on Dark Matter Dynamics, Diemer contributes expertise in modeling the internal structure and evolution of dark matter halos — precisely the regime where self-interactions leave their imprint. He joined the University of Maryland faculty in 2020 following a PhD at the University of Chicago and postdoctoral research at the Harvard & Smithsonian Center for Astrophysics."
  },
  {
    name: "Rouven Essig",
    photo: "images/essig.jpg",
    position: "Professor of Physics & Astronomy",
    affiliation: "Stony Brook University",
    category: "pi",
    bio: "Rouven Essig is a Professor at the C.N. Yang Institute for Theoretical Physics at Stony Brook University and a theoretical particle physicist studying dark matter using particle theory, condensed matter physics, astrophysics, and cosmology. He helped pioneer direct-detection searches for sub-GeV dark matter and new fixed-target searches for dark forces. Although primarily a theorist, he participates in several experiments and is co-spokesperson of the SENSEI and APEX experiments. He has studied the impact of annihilating, decaying, self-interacting, and dissipative dark matter on a wide range of scales. Within the Targeted Simons Research Group on Dark Matter Dynamics, he helps sharpen predictions of self-interacting dark matter models for a variety of observables and how to distinguish these from cold dark matter. An APS Fellow, he shared the New Horizons in Physics Prize in 2021 and received a Simons Investigator Award in 2019. He earned degrees from the University of the Witwatersrand and a Ph.D. from Rutgers, and joined Stony Brook in 2011 after postdoctoral work at SLAC."
  },
  {
    name: "Ethan Nadler",
    photo: "images/nadler.png",
    position: "Assistant Professor of Astronomy & Astrophysics",
    affiliation: "UC San Diego",
    category: "pi",
    bio: "Ethan Nadler is an Assistant Professor in the Department of Astronomy & Astrophysics at the University of California, San Diego. His research lies at the intersection of galaxy formation, dark matter, and near-field cosmology, with a focus on understanding the formation of the faintest galaxies and probing fundamental dark matter physics. To address these questions, he combines cosmological simulations, galaxy formation theory, and observations of dwarf galaxies and strong gravitational lenses to constrain the particle properties of dark matter. Within the Targeted Simons Research Group on Dark Matter Dynamics, Nadler develops cosmological simulations incorporating new dark matter physics and empirical models of the galaxy-halo connection to make predictions for dwarf galaxies and strong-lensing data, helping link dark matter theory to astrophysical observations across the collaboration's velocity ladder. Nadler received his Ph.D. in Physics from Stanford University and was subsequently a joint Carnegie Observatories–USC postdoctoral fellow before joining UC San Diego."
  },
  {
    name: "Laura Sales",
    photo: "images/sales.jpg",
    position: "Associate Professor of Physics & Astronomy",
    affiliation: "UC Riverside",
    category: "pi",
    bio: "Laura Sales is an Associate Professor of Astrophysics in the Department of Physics and Astronomy at the University of California, Riverside, where her group uses and develops numerical simulations to study galaxy formation, dark matter, and cosmology. Her work spans the dynamics of satellite and dwarf galaxies, ultra-diffuse galaxies, and the effects of stellar and black-hole feedback, and she frequently partners with particle physicists to test how alternative dark matter models alter observable galactic properties. In the Targeted Simons Research Group on Dark Matter Dynamics, Sales brings this simulation expertise to Milky Way–like hosts and their satellite populations, where tidal stripping and evaporation may distinguish dark matter physics from baryonic feedback. Her expertise will also contribute to the study of the structure and dynamics of dwarf galaxies in the field and the evolution of galaxies in massive hosts like galaxy clusters.  Before joining UC Riverside in 2015 she was an ITC Fellow at Harvard University, following postdoctoral positions at the Kapteyn Institute and the Max Planck Institute for Astrophysics. She earned her Ph.D. from the National University of Córdoba, Argentina."
  },
  {
    name: "Paul Torrey",
    photo: "images/torrey.png",
    position: "Associate Professor of Astronomy",
    affiliation: "University of Virginia",
    category: "pi",
    bio: "Paul Torrey is an Associate Professor in the Department of Astronomy at the University of Virginia and a computational astrophysicist whose group builds, runs, and analyzes large-scale cosmological simulations of galaxy formation. His work probes how assumptions about the Universe — including the nature of dark matter — shape what astronomers observe with facilities such as the James Webb Space Telescope, and he has been a central contributor to the Illustris and IllustrisTNG simulation projects. Within the Targeted Simons Research Group on Dark Matter Dynamics, Torrey contributes expertise in hydrodynamical galaxy-formation simulations, helping the collaboration disentangle the effects of dark matter from those of baryonic physics across a wide range of environments. He was a NASA Hubble Fellow during postdoctoral work at MIT and Caltech, spent five years on the faculty of the University of Florida before joining UVA, and is an NSF CAREER award recipient. Torrey earned his B.S. from Cornell University and his Ph.D. in astrophysics from Harvard University.",
    links:"https://astronomy.as.virginia.edu/paul-torrey"
  },
  {
    name: "Hai-Bo Yu",
    photo: "images/yu.png",
    position: "Professor of Physics & Astronomy",
    affiliation: "UC Riverside",
    category: "pi",
    bio: "Hai-Bo Yu is a Professor of Physics & Astronomy and Deputy Director of the Center for Experimental Cosmology and Instrumentation at the University of California, Riverside. A theoretical physicist specializing in the particle physics of dark matter, he is among the researchers who have helped revive and develop the self-interacting dark matter paradigm, in which dark matter particles collide and exchange energy. His work has shown how self-interactions can reshape the inner structure of dark matter halos and how dense, gravothermally collapsed halos may help explain anomalies in gravitational lensing, stellar streams, satellite galaxies, and the origin of supermassive black holes. Within the Targeted Simons Research Group on Dark Matter Dynamics, Yu provides theoretical leadership on dark matter dynamics and its connection to observables on galactic and cluster scales. His research program connects the fundamental interactions of dark matter to a broad range of astrophysical phenomena across cosmic environments. Yu received the 2016 Outstanding Young Researcher Award from the International Organization of Chinese Physicists and Astronomers. He earned his PhD from the University of Maryland, College Park, and was a postdoctoral researcher at the University of Michigan and the University of California, Irvine, before joining the faculty at UC Riverside in 2013."
  }

  /* ---------------- Group Scientists (funded) ----------------
     Add funded postdocs / students / research staff here as they are named:
  ,{
    name: "Name",
    photo: "images/photo.jpg",
    position: "Postdoctoral Researcher",
    affiliation: "Institution",
    category: "scientist",
    bio: "…"
  }
  */

  /* ---------------- Affiliated Collaborators (non-funded) ----------------
     Add confirmed non-funded collaborators here:
  ,{
    name: "Name",
    photo: "images/photo.jpg",
    position: "Professor of Astronomy",
    affiliation: "Institution",
    category: "affiliate",
    bio: "…"
  }
  */

];
