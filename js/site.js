
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
        '<p>The collaboration launches in Fall 2026. Publications will be listed here as they appear.</p></div>';
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

  /* The hero figure (a Feynman scattering diagram with a sweeping light beam)
     is rendered as inline SVG and animated purely in CSS — no JS required. */

  /* ---------- Boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    initReveal();
    // re-run reveal for any content injected above (publications sections)
    setTimeout(initReveal, 60);
  });
})();
