/* ============================================================
   Olas de Chile Ecocamp — main.js  (vanilla, no build step)
   ============================================================ */
(function () {
  "use strict";

  var T = window.TRANSLATIONS;
  var PHONE = "+56954504499";
  var WA = "https://wa.me/56954504499";

  var IMG = {
    site1: "https://images.pexels.com/photos/19585294/pexels-photo-19585294.jpeg?auto=compress&cs=tinysrgb&w=1000",
    site2: "https://images.pexels.com/photos/19178410/pexels-photo-19178410.jpeg?auto=compress&cs=tinysrgb&w=1000",
    site3: "https://images.pexels.com/photos/10513799/pexels-photo-10513799.jpeg?auto=compress&cs=tinysrgb&w=1000",
    site4: "https://images.pexels.com/photos/7967392/pexels-photo-7967392.jpeg?auto=compress&cs=tinysrgb&w=1000",
    gal1: "https://images.pexels.com/photos/13644736/pexels-photo-13644736.jpeg?auto=compress&cs=tinysrgb&w=1400",
    gal2: "https://images.pexels.com/photos/30157492/pexels-photo-30157492.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gal3: "https://images.pexels.com/photos/8960427/pexels-photo-8960427.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gal4: "https://images.pexels.com/photos/6524840/pexels-photo-6524840.jpeg?auto=compress&cs=tinysrgb&w=1200"
  };

  var ICONS = {
    table: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9h18M3 9v6M21 9v6M7 15v4M17 15v4"/></svg>',
    grill: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h16M4 8v2a4 4 0 004 4h8a4 4 0 004-4V8M8 14v4M16 14v4M9 8V4M12 8V3M15 8V4"/></svg>',
    solar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
    tree: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L8 6h2L6 10h2L4 14h5v8h6v-8h5l-4-4h2l-4-4h2z"/></svg>',
    recycle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 19H4.8a1.8 1.8 0 01-1.55-2.66L7.2 9.5M11 19h8.2a1.8 1.8 0 001.55-2.66L19.5 14.2M11 19l-3 3m0-6l3 3"/><path d="M16.7 5.5l-1.2-2.1a1.8 1.8 0 00-3.14.01L8.75 8"/></svg>',
    wave: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0M2 18c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/></svg>',
    paw: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="4" cy="8" r="2"/><path d="M5 21h12a3 3 0 003-3v-1a4 4 0 00-8 0M5 21a3 3 0 01-3-3"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>',
    star: '<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
  };

  var ECO_ICONS = ["solar", "tree", "recycle", "wave", "paw", "leaf"];

  /* ---------- language ---------- */
  var lang = "es";
  var stored = null;
  try { stored = localStorage.getItem("odc-lang"); } catch (e) {}
  if (stored === "es" || stored === "en") {
    lang = stored;
  } else if ((navigator.language || "").toLowerCase().indexOf("es") !== 0) {
    lang = "en";
  }

  function t(key) {
    return (T[lang] && T[lang][key]) || key;
  }

  /* ---------- build dynamic sections ---------- */
  function buildSites() {
    var html = "";
    for (var i = 1; i <= 4; i++) {
      html +=
        '<article class="site-card reveal d' + i + '">' +
          '<div class="site-media">' +
            '<img src="' + IMG["site" + i] + '" alt="" loading="lazy" />' +
            '<span class="site-tag" data-i18n="site' + i + '_tag"></span>' +
          "</div>" +
          '<div class="site-body">' +
            '<h3 class="site-name" data-i18n="site' + i + '_name"></h3>' +
            '<p class="site-desc" data-i18n="site' + i + '_desc"></p>' +
            '<div class="site-feats">' +
              '<span class="feat">' + ICONS.table + '<span data-i18n="site_feat_table"></span></span>' +
              '<span class="feat">' + ICONS.grill + '<span data-i18n="site_feat_grill"></span></span>' +
              '<span class="feat">' + ICONS.solar + '<span data-i18n="site_feat_solar"></span></span>' +
            "</div>" +
            '<div class="site-foot">' +
              "<p>" +
                '<span class="site-price" data-i18n="site' + i + '_price"></span>' +
                '<span class="site-price-unit" data-i18n="site_price_unit"></span>' +
              "</p>" +
              '<a class="site-btn" data-wa-site="' + i + '" href="' + WA + '" target="_blank" rel="noopener" data-i18n="site_book"></a>' +
            "</div>" +
          "</div>" +
        "</article>";
    }
    document.getElementById("sitesGrid").innerHTML = html;
  }

  function buildEco() {
    var html = "";
    for (var i = 1; i <= 6; i++) {
      html +=
        '<li class="eco-item">' +
          '<span class="eco-icon">' + ICONS[ECO_ICONS[i - 1]] + "</span>" +
          '<span data-i18n="eco_' + i + '"></span>' +
        "</li>";
    }
    document.getElementById("ecoList").innerHTML = html;
  }

  function buildGallery() {
    var srcs = [IMG.gal1, IMG.gal2, IMG.gal3, IMG.gal4];
    var html = "";
    for (var i = 0; i < 4; i++) {
      html +=
        '<button type="button" class="gallery-item" data-full="' + srcs[i] + '">' +
          '<img src="' + srcs[i] + '" alt="" loading="lazy" />' +
          '<span class="gallery-cap" data-i18n="gallery_' + (i + 1) + '"></span>' +
        "</button>";
    }
    document.getElementById("galleryGrid").innerHTML = html;
  }

  function buildTestimonials() {
    var initials = ["N", "A", "N"];
    var html = "";
    for (var i = 1; i <= 3; i++) {
      html +=
        '<article class="testimonial reveal d' + i + '">' +
          '<div class="stars">' + new Array(6).join(ICONS.star) + "</div>" +
          '<p class="testimonial-text" data-i18n="test' + i + '_text"></p>' +
          '<div class="testimonial-author">' +
            '<span class="avatar">' + initials[i - 1] + "</span>" +
            "<span>" +
              '<span class="author-name" data-i18n="test' + i + '_name"></span>' +
              '<span class="author-date" data-i18n="test' + i + '_date"></span>' +
            "</span>" +
          "</div>" +
        "</article>";
    }
    document.getElementById("testimonialsGrid").innerHTML = html;
  }

  /* ---------- i18n ---------- */
  function applyLang() {
    document.documentElement.lang = lang;
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = t(nodes[i].getAttribute("data-i18n"));
    }

    // Prefilled WhatsApp links per site
    var links = document.querySelectorAll("[data-wa-site]");
    for (var j = 0; j < links.length; j++) {
      var n = links[j].getAttribute("data-wa-site");
      links[j].href = WA + "?text=" + encodeURIComponent(t("wa_msg") + " " + t("site" + n + "_name"));
    }

    var buttons = document.querySelectorAll(".lang-toggle button");
    for (var k = 0; k < buttons.length; k++) {
      buttons[k].classList.toggle("active", buttons[k].getAttribute("data-lang") === lang);
    }

    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", t("hero_subtitle"));

    try { localStorage.setItem("odc-lang", lang); } catch (e) {}
  }

  /* ---------- behaviour ---------- */
  function initNav() {
    var nav = document.getElementById("nav");
    function onScroll() {
      nav.classList.toggle("scrolled", window.scrollY > 60);
      document.querySelector(".wa-float").classList.toggle("show", window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    var burger = document.getElementById("burger");
    var menu = document.getElementById("mobileMenu");
    burger.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
    });
    var links = menu.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function () {
        menu.classList.remove("open");
        burger.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    }
  }

  function initLangToggle() {
    var buttons = document.querySelectorAll(".lang-toggle button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        lang = this.getAttribute("data-lang");
        applyLang();
      });
    }
  }

  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      for (var i = 0; i < els.length; i++) els[i].classList.add("visible");
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    for (var j = 0; j < els.length; j++) io.observe(els[j]);
  }

  function initLightbox() {
    var box = document.getElementById("lightbox");
    var img = document.getElementById("lightboxImg");

    function close() { box.hidden = true; document.body.style.overflow = ""; }

    document.getElementById("galleryGrid").addEventListener("click", function (e) {
      var btn = e.target.closest(".gallery-item");
      if (!btn) return;
      img.src = btn.getAttribute("data-full");
      box.hidden = false;
      document.body.style.overflow = "hidden";
    });

    document.getElementById("lightboxClose").addEventListener("click", close);
    box.addEventListener("click", function (e) { if (e.target === box) close(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !box.hidden) close();
    });
  }

  function initSmoothScroll() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href");
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* ---------- boot ---------- */
  buildSites();
  buildEco();
  buildGallery();
  buildTestimonials();
  applyLang();
  initNav();
  initLangToggle();
  initReveal();
  initLightbox();
  initSmoothScroll();
  document.getElementById("year").textContent = new Date().getFullYear();
})();
