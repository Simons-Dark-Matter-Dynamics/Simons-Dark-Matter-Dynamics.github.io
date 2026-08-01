
(function () {
  "use strict";
  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Navigation: scrolled state + mobile drawer ---------- */
  var nav = $(".nav");
  function onScroll() { if (nav) nav.classList.toggle("scrolled", window.scrollY > 24); }
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  var toggle = $(".nav-toggle"), links = $(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    $$(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); });
    });
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    var els = $$(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("in"); }); return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- Helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  var MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  function fmtDate(iso) {
    var p = String(iso).split("-"); if (p.length < 3) return esc(iso);
    return MONTHS[(+p[1]) - 1] + " " + (+p[2]) + ", " + p[0];
  }

  /* ---------- News rendering ---------- */
  function sortedNews() {
    return (window.SITE_NEWS || []).slice().sort(function (a, b) {
      return (a.date < b.date ? 1 : a.date > b.date ? -1 : 0);
    });
  }
  function newsCard(n, lead) {
    var clickable = n.link ? ' is-link" data-href="' + esc(n.link) + '"' : '"';
    return '' +
      '<article class="card' + (lead ? ' lead-card' : '') + (n.link ? ' is-link' : '') + '"' +
        (n.link ? ' data-href="' + esc(n.link) + '" tabindex="0" role="link"' : '') + '>' +
        '<div class="kicker"><span>' + fmtDate(n.date) + '</span>' +
          (n.tag ? '<span class="tag">' + esc(n.tag) + '</span>' : '') + '</div>' +
        '<h3>' + esc(n.title) + '</h3>' +
        '<p>' + esc(n.summary) + '</p>' +
        (n.link ? '<span class="more">Read more</span>' : '') +
      '</article>';
  }
  function wireCards(root) {
    $$(".card.is-link", root).forEach(function (c) {
      var go = function () { window.open(c.getAttribute("data-href"), "_blank", "noopener"); };
      c.addEventListener("click", go);
      c.addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
    });
  }

  // Home page: featured top 3 (first item large)
  var feat = $("#news-featured");
  if (feat) {
    var top = sortedNews().slice(0, 3);
    if (top.length) {
      feat.innerHTML = top.map(function (n, i) { return newsCard(n, i === 0); }).join("");
      wireCards(feat);
    } else {
      feat.innerHTML = '<div class="empty"><div class="ico">— NO ENTRIES YET —</div><p>News will appear here. Add items in <code>data/content.js</code>.</p></div>';
    }
  }

  // News page: full list
  var newsAll = $("#news-all");
  if (newsAll) {
    var all = sortedNews();
    if (all.length) {
      newsAll.innerHTML = all.map(function (n) { return newsCard(n, false); }).join("");
      wireCards(newsAll);
    } else {
      newsAll.innerHTML = '<div class="empty"><div class="ico">— NO ENTRIES YET —</div><p>News will appear here. Add items in <code>data/content.js</code>.</p></div>';
    }
  }

  /* ---------- Publications rendering (grouped by year) ---------- */
  var pubRoot = $("#pub-list");
  if (pubRoot) {
    var pubs = (window.SITE_PUBLICATIONS || []).slice();
    if (!pubs.length) {
      pubRoot.innerHTML = '<div class="empty"><div class="ico">— AWAITING FIRST RESULTS —</div>' +
        '<p>The collaboration launches in January 2027. Publications will be listed here as they appear.</p></div>';
    } else {
      var byYear = {};
      pubs.forEach(function (p) { (byYear[p.year] = byYear[p.year] || []).push(p); });
      var years = Object.keys(byYear).sort(function (a, b) { return b - a; });
      pubRoot.innerHTML = years.map(function (y) {
        var rows = byYear[y].map(function (p) {
          var links = p.links ? Object.keys(p.links).map(function (k) {
            return '<a href="' + esc(p.links[k]) + '" target="_blank" rel="noopener">' + esc(k) + '</a>';
          }).join("") : "";
          return '<div class="pub"><div><h3>' + esc(p.title) + '</h3>' +
            '<p class="authors">' + esc(p.authors) + '</p>' +
            (p.venue ? '<span class="venue">' + esc(p.venue) + '</span>' : '') + '</div>' +
            '<div class="pub-links">' + links + '</div></div>';
        }).join("");
        return '<section class="reveal" style="margin-bottom:48px"><div class="pub-year">' + esc(y) +
          '</div><div class="pub-list">' + rows + '</div></section>';
      }).join("");
    }
  }

  /* ---------- Events / Activities / Jobs + contact (News & Events, Join Us) ---------- */
  function eventDateLabel(e) {
    if (!e.end || e.end === e.date) return fmtDate(e.date);
    var a = String(e.date).split("-"), b = String(e.end).split("-");
    if (a.length < 3 || b.length < 3) return fmtDate(e.date);
    if (a[0] === b[0] && a[1] === b[1]) return MONTHS[(+a[1]) - 1] + " " + (+a[2]) + "–" + (+b[2]) + ", " + a[0];
    if (a[0] === b[0]) return MONTHS[(+a[1]) - 1] + " " + (+a[2]) + " – " + MONTHS[(+b[1]) - 1] + " " + (+b[2]) + ", " + a[0];
    return fmtDate(e.date) + " – " + fmtDate(e.end);
  }
  var evRoot = $("#events-list");
  if (evRoot) {
    var events = (window.SITE_EVENTS || []).slice().sort(function (a, b) {
      return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;   // soonest first
    });
    evRoot.innerHTML = events.length ? events.map(function (e) {
      var meta = '<span>' + eventDateLabel(e) + '</span>' + (e.location ? '<span>' + esc(e.location) + '</span>' : '');
      var links = e.link ? '<div class="links"><a href="' + esc(e.link) + '" target="_blank" rel="noopener">Details ↗</a></div>' : '';
      return '<article class="info-card"><div class="meta">' + meta + '</div>' +
        '<h3>' + esc(e.title) + '</h3>' + (e.abstract ? '<p>' + esc(e.abstract) + '</p>' : '') + links + '</article>';
    }).join("") : '<div class="empty"><div class="ico">— NOTHING SCHEDULED YET —</div><p>Upcoming workshops and conferences will be announced here.</p></div>';
  }
  var actRoot = $("#activities-list");
  if (actRoot) {
    var acts = window.SITE_ACTIVITIES || [];
    actRoot.innerHTML = acts.length ? acts.map(function (a) {
      var links = a.link ? '<div class="links"><a href="' + esc(a.link) + '" target="_blank" rel="noopener">Learn more ↗</a></div>' : '';
      return '<article class="info-card"><h3>' + esc(a.title) + '</h3><p>' + esc(a.summary) + '</p>' + links + '</article>';
    }).join("") : '<div class="empty"><div class="ico">— MORE SOON —</div><p>Current group activities will be listed here.</p></div>';
  }
  var jobRoot = $("#jobs-list");
  if (jobRoot) {
    var jobs = window.SITE_JOBS || [];
    var contactEmail = (window.SITE_CONTACT && window.SITE_CONTACT.email) || "";
    jobRoot.innerHTML = jobs.length ? jobs.map(function (j) {
      var mail = j.email || contactEmail;
      var links = '<div class="links">' +
        (j.link ? '<a href="' + esc(j.link) + '" target="_blank" rel="noopener">View posting ↗</a>' : '') +
        (mail ? '<a href="mailto:' + esc(mail) + '">Email ↗</a>' : '') + '</div>';
      return '<article class="info-card">' + (j.place ? '<div class="meta"><span>' + esc(j.place) + '</span></div>' : '') +
        '<h3>' + esc(j.title) + '</h3><p>' + esc(j.summary) + '</p>' + links + '</article>';
    }).join("") :
      '<div class="empty"><div class="ico">— NO OPEN POSITIONS —</div><p>There are no posted openings at this time. ' +
      'We welcome inquiries from prospective graduate students, postdoctoral researchers, and collaborators' +
      (contactEmail ? ' — email <a href="mailto:' + esc(contactEmail) + '">' + esc(contactEmail) + '</a>.' : '.') + '</p></div>';
  }
  // Join Us contact email → wire any [data-contact-email] anchors to a mailto.
  $$("[data-contact-email]").forEach(function (el) {
    var email = (window.SITE_CONTACT && window.SITE_CONTACT.email) || "";
    if (email) { el.href = "mailto:" + email; el.textContent = email; }
    else { el.removeAttribute("href"); el.textContent = "Contact email coming soon"; el.classList.add("is-disabled"); }
  });

  /* ---------- People: landing grid + click-to-open bio modal ---------- */
  (function () {
    var PEOPLE = window.SITE_PEOPLE || [];
    if (!PEOPLE.length) return;
    if (!$("#people-pi") && !$("#people-scientist") && !$("#people-affiliate")) return;

    // Compact grid card (old landing format); the whole card opens the bio modal.
    function card(p, idx) {
      var pill = p.role ? '<span class="role-pill">' + esc(p.role) + '</span>' : '';
      return '<article class="person" role="button" tabindex="0" aria-haspopup="dialog" ' +
        'aria-label="' + esc(p.name) + ' — view bio" data-idx="' + idx + '">' +
        '<div class="frame">' + pill +
          '<img src="' + esc(p.photo) + '" alt="" loading="lazy"></div>' +
        '<p class="pname">' + esc(p.name) + '</p>' +
        '<p class="paffil">' + esc(p.affiliation) + '</p>' +
      '</article>';
    }
    function fill(sel, category) {
      var root = $(sel); if (!root) return;
      var html = "", any = false;
      PEOPLE.forEach(function (p, i) {
        if (p.category === category) { html += card(p, i); any = true; }
      });
      if (!any) { var s = root.closest("section"); if (s) s.style.display = "none"; return; }
      root.innerHTML = html;
    }
    fill("#people-pi", "pi");
    fill("#people-scientist", "scientist");
    fill("#people-affiliate", "affiliate");

    // Bio modal — native <dialog> gives a dimmed backdrop, Esc-to-close, and focus handling.
    var dlg = document.createElement("dialog");
    dlg.className = "bio-dialog";
    dlg.setAttribute("aria-labelledby", "bio-name");
    dlg.innerHTML =
      '<button class="bio-close" type="button" aria-label="Close">✕</button>' +
      '<div class="bio-dialog-head">' +
        '<div class="bio-photo"><span class="role-pill"></span><img alt=""></div>' +
        '<div><p class="pname" id="bio-name"></p><p class="ppos"></p><p class="paffil"></p></div>' +
      '</div>' +
      '<div class="bio-dialog-body"></div>';
    document.body.appendChild(dlg);
    var dImg  = dlg.querySelector(".bio-photo img"),
        dPill = dlg.querySelector(".bio-photo .role-pill"),
        dName = dlg.querySelector("#bio-name"),
        dPos  = dlg.querySelector(".ppos"),
        dAff  = dlg.querySelector(".paffil"),
        dBody = dlg.querySelector(".bio-dialog-body");

    function openBio(idx) {
      var p = PEOPLE[idx]; if (!p) return;
      dImg.src = p.photo; dImg.alt = "";   // decorative: the name is the dialog's heading
      if (p.role) { dPill.textContent = p.role; dPill.hidden = false; } else { dPill.hidden = true; }
      dName.textContent = p.name;
      if (p.position) { dPos.textContent = p.position; dPos.hidden = false; } else { dPos.hidden = true; }
      dAff.textContent = p.affiliation;
      dBody.innerHTML = p.bio ? "<p>" + esc(p.bio) + "</p>" : '<p class="bio-pending">Bio forthcoming.</p>';
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    }
    dlg.querySelector(".bio-close").addEventListener("click", function () { dlg.close(); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); }); // click on backdrop
    // On close, the native <dialog> restores focus to the invoking card. We keep
    // that (correct for keyboard users); :focus-visible ensures the ring shows
    // only for keyboard navigation, not after a mouse click.

    document.addEventListener("click", function (e) {
      var t = e.target.closest ? e.target.closest(".person[data-idx]") : null;
      if (t) openBio(+t.getAttribute("data-idx"));
    });
    document.addEventListener("keydown", function (e) {
      var a = document.activeElement;
      if ((e.key === "Enter" || e.key === " ") && a && a.classList &&
          a.classList.contains("person") && a.hasAttribute("data-idx")) {
        e.preventDefault(); openBio(+a.getAttribute("data-idx"));
      }
    });

    // Print/search appendix: every bio stays in the DOM (hidden on screen, shown
    // when printing) so a PDF/print carries all bios and in-page search finds them.
    var appx = document.createElement("section");
    appx.className = "bio-print";
    appx.setAttribute("aria-hidden", "true");
    appx.innerHTML = PEOPLE.map(function (p) {
      var meta = [p.position, p.affiliation].filter(Boolean).join(" · ");
      if (p.role) meta += (meta ? " · " : "") + p.role;
      return "<article><h3>" + esc(p.name) + "</h3>" +
        (meta ? '<p class="bp-meta">' + esc(meta) + "</p>" : "") +
        (p.bio ? "<p>" + esc(p.bio) + "</p>" : "") + "</article>";
    }).join("");
    var main = document.querySelector("main");
    if (main) main.appendChild(appx);
  })();

  /* The hero figure (a Feynman scattering diagram with a sweeping light beam)
     is rendered as inline SVG and animated purely in CSS — no JS required. */

  /* ---------- Boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    initReveal();
    // re-run reveal for any content injected above (publications sections)
    setTimeout(initReveal, 60);
  });
})();
