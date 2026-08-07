/* ============================================================
   Olas de Chile Ecocamp — app.js
   Moteur partagé : icônes, nav/footer, i18n, comportements,
   puis les constructeurs propres à chaque page.
   ============================================================ */
(function () {
  "use strict";

  var T = window.TRANSLATIONS;
  var D = window.ODC_DATA;
  var PAGE = document.body.getAttribute("data-page") || "home";

  /* ==========================================================
     Icônes
     ========================================================== */
  var S = function (p) {
    return (
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + "</svg>"
    );
  };

  var ICONS = {
    table: S('<path d="M3 9h18M3 9v6M21 9v6M7 15v4M17 15v4"/>'),
    grill: S('<path d="M4 8h16M4 8v2a4 4 0 004 4h8a4 4 0 004-4V8M8 14v4M16 14v4M9 8V4M12 8V3M15 8V4"/>'),
    hammock: S('<path d="M3 6c3 0 6 4 9 4s6-4 9-4M3 6v8a3 3 0 003 3M21 6v8a3 3 0 01-3 3M6 17h12"/>'),
    plug: S('<path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 01-6 6 6 6 0 01-6-6V8zM12 17v5"/>'),
    bulb: S('<path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z"/>'),
    parking: S('<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 17V7h3.5a3 3 0 010 6H9"/>'),
    septic: S('<path d="M12 2.7S6 9.3 6 13.4A6 6 0 0018 13.4C18 9.3 12 2.7 12 2.7z"/>'),
    terrace: S('<path d="M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6"/>'),
    solar: S('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
    tree: S('<path d="M12 2L8 6h2L6 10h2L4 14h5v8h6v-8h5l-4-4h2l-4-4h2z"/>'),
    recycle: S('<path d="M7 19H4.8a1.8 1.8 0 01-1.55-2.66L7.2 9.5M11 19h8.2a1.8 1.8 0 001.55-2.66L19.5 14.2M11 19l-3 3m0-6l3 3"/><path d="M16.7 5.5l-1.2-2.1a1.8 1.8 0 00-3.14.01L8.75 8"/>'),
    water: S('<path d="M12 2.7S6 9.3 6 13.4A6 6 0 0018 13.4C18 9.3 12 2.7 12 2.7z"/><path d="M9.5 14a2.5 2.5 0 002.5 2.5"/>'),
    compost: S('<path d="M12 22a8 8 0 008-8c0-5-8-12-8-12S4 9 4 14a8 8 0 008 8z"/><path d="M12 22V12"/><path d="M12 16l3-3M12 18l-3-3"/>'),
    bird: S('<path d="M16 7h.01"/><path d="M3.4 18a10 10 0 009.6-14.2A6 6 0 0121 9c0 5-4 9-9 9H3.4z"/><path d="M12 18v3"/>'),
    paw: S('<circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="4" cy="8" r="2"/><path d="M5 21h12a3 3 0 003-3v-1a4 4 0 00-8 0M5 21a3 3 0 01-3-3"/>'),
    wave: S('<path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0M2 18c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/>'),
    pin: S('<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>'),
    clock: S('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    users: S('<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/>'),
    fire: S('<path d="M12 22a7 7 0 007-7c0-5-4-6-4-10 0 0-3 1.5-3 5 0-1.5-1.5-3-1.5-3S8 9 8 11c0-1-1-2-1-2a7 7 0 00-2 6 7 7 0 007 7z"/>'),
    bike: S('<circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 100-2 1 1 0 000 2zM12 17.5L9 9l3-3 3 3 3.5 8.5M5.5 17.5L9 9"/>'),
    kayak: S('<path d="M3 4l18 16M21 4L3 20"/><path d="M7.5 8.5c3 0 6 3 9 7"/>'),
    surf: S('<path d="M4 20c8 0 16-6 16-16-8 0-16 6-16 16z"/><path d="M9 15l6-6"/>'),
    sup: S('<path d="M2 15c3-4 6-6 10-6s8 2 10 6c-3 4-6 6-10 6S5 19 2 15z"/><path d="M17 3v8"/>'),
    trek: S('<path d="M3 20l6-11 4 6 3-4 5 9z"/><circle cx="9" cy="4.5" r="1.8"/>'),
    shop: S('<path d="M3 9l1.5-5h15L21 9M3 9h18M3 9v11h18V9"/><path d="M9 20v-6h6v6"/>'),
    camera: S('<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>'),
    van: S('<path d="M1 16V8a2 2 0 012-2h11l5 5v5"/><path d="M1 16h22"/><circle cx="7" cy="18.5" r="2"/><circle cx="17" cy="18.5" r="2"/>'),
    spa: S('<path d="M12 22c4-3 6-6 6-10a6 6 0 00-12 0c0 4 2 7 6 10z"/><path d="M12 12v10"/>'),
    event: S('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>'),
    laundry: S('<rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="14" r="4"/><path d="M8 6h.01M12 6h.01"/>'),
    tent: S('<path d="M12 4L3 20h18L12 4z"/><path d="M12 4v16M7 20l5-9 5 9"/>'),
    shirt: S('<path d="M20.4 4.5L16 3a4 4 0 01-8 0L3.6 4.5a1 1 0 00-.6 1.3l1.4 3.9a1 1 0 001.2.6L7 9.8V21h10V9.8l1.4.5a1 1 0 001.2-.6l1.4-3.9a1 1 0 00-.6-1.3z"/>'),
    plus: S('<path d="M12 5v14M5 12h14"/>'),
    check: S('<path d="M20 6L9 17l-5-5"/>'),
    cross: S('<path d="M18 6L6 18M6 6l12 12"/>'),
    arrow: S('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    phone: S('<path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.12 4.2 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>'),
    instagram: S('<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><path d="M17.5 6.5h.01"/>'),
    whatsapp:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 005.6 1.4h.01c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.4-8.3zM12 21.6c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.7 9.7 0 01-1.5-5.2c0-5.4 4.4-9.8 9.9-9.8 2.6 0 5.1 1 7 2.9a9.8 9.8 0 012.9 7c0 5.5-4.5 9.8-9.9 9.8zm5.4-7.3c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1s-.8 1-.9 1.2c-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.3z"/></svg>',
    /* Logo officiel. Le badge a un contour et un texte noirs sur fond
       transparent : la pastille claire (.logo-mark) le garde lisible
       aussi bien sur le hero sombre que sur la nav claire. */
    logo:
      '<picture class="logo-mark">' +
        '<source srcset="assets/logo.avif" type="image/avif" />' +
        '<source srcset="assets/logo.webp" type="image/webp" />' +
        '<img src="assets/logo-web.png" alt="Olas de Chile Ecocamp" width="280" height="280" />' +
      "</picture>"
  };

  /* ==========================================================
     Langue
     ========================================================== */
  var lang = "es";
  try {
    var stored = localStorage.getItem("odc-lang");
    if (stored === "es" || stored === "en") lang = stored;
    else if ((navigator.language || "").toLowerCase().indexOf("es") !== 0) lang = "en";
  } catch (e) {}

  function t(key) {
    return (T[lang] && T[lang][key]) || key;
  }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  }
  function wa(msg) {
    return D.WA + "?text=" + encodeURIComponent(msg);
  }

  /* ==========================================================
     Nav + Footer partagés
     ========================================================== */
  var NAV = [
    { href: "index.html", key: "nav_home", page: "home" },
    { href: "sitios.html", key: "nav_sites", page: "sites" },
    { href: "servicios.html", key: "nav_services", page: "services" },
    { href: "conocenos.html", key: "nav_about", page: "about" },
    { href: "indicaciones.html", key: "nav_directions", page: "directions" }
  ];

  function buildChrome() {
    var links = "";
    var mobile = "";
    for (var i = 0; i < NAV.length; i++) {
      var a = NAV[i];
      var active = a.page === PAGE ? " active" : "";
      var aria = a.page === PAGE ? ' aria-current="page"' : "";
      links += '<a href="' + a.href + '" class="nav-link' + active + '"' + aria + ' data-i18n="' + a.key + '"></a>';
      mobile += '<a href="' + a.href + '"' + aria + ' data-i18n="' + a.key + '"></a>';
    }

    document.getElementById("siteHeader").innerHTML =
      '<header class="nav' + (PAGE === "home" ? "" : " solid") + '" id="nav">' +
        '<a href="index.html" class="nav-logo">' + ICONS.logo + "<span>Olas de Chile</span></a>" +
        '<nav class="nav-links" aria-label="Principal">' + links + "</nav>" +
        '<div class="nav-right">' +
          '<div class="lang-toggle" role="group" aria-label="Language">' +
            '<button type="button" data-lang="es">ES</button>' +
            '<span class="lang-sep">/</span>' +
            '<button type="button" data-lang="en">EN</button>' +
          "</div>" +
          '<a href="' + D.WA + '" target="_blank" rel="noopener" class="nav-cta" data-wa="msg" data-i18n="nav_book"></a>' +
          '<button class="nav-burger" id="burger" aria-label="Menu" aria-expanded="false">' +
            "<span></span><span></span><span></span>" +
          "</button>" +
        "</div>" +
      "</header>" +
      '<div class="mobile-menu" id="mobileMenu">' + mobile +
        '<a href="' + D.WA + '" target="_blank" rel="noopener" class="nav-cta" data-wa="msg" data-i18n="nav_book"></a>' +
      "</div>";

    var flinks = "";
    for (var j = 0; j < NAV.length; j++) {
      flinks += '<a href="' + NAV[j].href + '" data-i18n="' + NAV[j].key + '"></a>';
    }

    document.getElementById("siteFooter").innerHTML =
      '<footer class="footer">' +
        '<div class="wrap footer-top">' +
          '<div class="footer-brand">' +
            '<span class="footer-logo">' + ICONS.logo + "<span>Olas de Chile</span></span>" +
            '<p data-i18n="footer_tagline"></p>' +
          "</div>" +
          '<div class="footer-col">' +
            '<h4 data-i18n="footer_explore"></h4>' +
            '<nav class="footer-links">' + flinks + "</nav>" +
          "</div>" +
          '<div class="footer-col">' +
            '<h4 data-i18n="footer_contact"></h4>' +
            '<a class="footer-contact" href="tel:' + D.PHONE + '">' + ICONS.phone + "<span>" + D.PHONE_PRETTY + "</span></a>" +
            '<a class="footer-contact" href="' + D.WA + '" target="_blank" rel="noopener" data-wa="msg">' + ICONS.whatsapp + "<span>WhatsApp</span></a>" +
            '<a class="footer-contact" href="' + D.INSTAGRAM + '" target="_blank" rel="noopener">' + ICONS.instagram + "<span>@olasdechile</span></a>" +
            '<a class="footer-contact" href="indicaciones.html">' + ICONS.pin + '<span data-i18n="contact_location"></span></a>' +
          "</div>" +
        "</div>" +
        '<div class="wrap footer-bottom">' +
          '<span id="year"></span> · <span data-i18n="footer_copy"></span>' +
        "</div>" +
      "</footer>" +
      '<a class="wa-float" href="' + D.WA + '" target="_blank" rel="noopener" aria-label="WhatsApp" data-wa="msg">' +
        ICONS.whatsapp +
        '<span class="wa-tooltip" data-i18n="nav_book"></span>' +
      "</a>" +
      '<button class="back-to-top" id="backToTop" aria-label="Volver arriba">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>' +
      "</button>";
  }

  /* ==========================================================
     Blocs réutilisables
     ========================================================== */
  function contactSection() {
    return (
      '<section class="section contact" id="contact">' +
        '<div class="wrap contact-inner reveal">' +
          '<p class="eyebrow" data-i18n="contact_eyebrow"></p>' +
          '<h2 class="title"><span data-i18n="contact_title_1"></span> <em data-i18n="contact_title_2"></em></h2>' +
          '<p class="lead" data-i18n="contact_lead"></p>' +
          '<div class="contact-actions">' +
            '<a class="btn btn-light" href="' + D.WA + '" target="_blank" rel="noopener" data-wa="msg">' +
              ICONS.whatsapp + '<span data-i18n="contact_cta_whatsapp"></span></a>' +
            '<a class="btn btn-ghost" href="tel:' + D.PHONE + '">' +
              ICONS.phone + '<span data-i18n="contact_cta_call"></span></a>' +
          "</div>" +
          '<div class="contact-info">' +
            '<span class="info-item">' + ICONS.pin + '<span data-i18n="contact_location"></span></span>' +
            '<a class="info-item" href="tel:' + D.PHONE + '">' + ICONS.phone + '<span data-i18n="contact_phone"></span></a>' +
            '<a class="info-item" href="' + D.INSTAGRAM + '" target="_blank" rel="noopener">' +
              ICONS.instagram + '<span data-i18n="contact_instagram"></span></a>' +
          "</div>" +
        "</div>" +
      "</section>"
    );
  }

  function pageHero(key, img) {
    return (
      '<section class="page-hero">' +
        '<div class="page-hero-bg"><img src="' + img + '" alt="" /></div>' +
        '<div class="page-hero-overlay"></div>' +
        '<div class="wrap page-hero-content">' +
          '<p class="eyebrow" data-i18n="' + key + '_eyebrow"></p>' +
          '<h1 class="title"><span data-i18n="' + key + '_title_1"></span> <em data-i18n="' + key + '_title_2"></em></h1>' +
          '<p class="lead" data-i18n="' + key + '_lead"></p>' +
        "</div>" +
      "</section>"
    );
  }

  function amenityList(keys, ok) {
    var out = "";
    for (var i = 0; i < keys.length; i++) {
      out +=
        '<li class="am ' + (ok ? "am-yes" : "am-no") + '">' +
        (ok ? ICONS.check : ICONS.cross) +
        '<span data-i18n="am_' + keys[i] + '"></span></li>';
    }
    return out;
  }

  /* ==========================================================
     Constructeurs de page
     ========================================================== */
  var BUILD = {};

  /* ---------- Accueil ---------- */
  BUILD.home = function () {
    var cats = "";
    for (var i = 0; i < D.CATEGORIES.length; i++) {
      var c = D.CATEGORIES[i];
      cats +=
        '<a class="cat-card reveal d' + (i + 1) + '" href="sitios.html#' + c.key + '">' +
          '<div class="cat-media"><img src="' + c.img + '" alt="" loading="lazy" />' +
            '<span class="cat-count" data-i18n="' + c.key + '_count"></span></div>' +
          '<div class="cat-body">' +
            '<h3 class="cat-name" data-i18n="' + c.key + '_name"></h3>' +
            '<p class="cat-desc" data-i18n="' + c.key + '_desc"></p>' +
            '<div class="cat-foot">' +
              '<p><span class="cat-price" data-i18n="' + c.key + '_price"></span>' +
                '<span class="unit" data-i18n="price_unit"></span></p>' +
              '<span class="cat-arrow">' + ICONS.arrow + "</span>" +
            "</div>" +
          "</div>" +
        "</a>";
    }
    document.getElementById("catGrid").innerHTML = cats;

    var gal = "";
    var srcs = [D.IMG.gal1, D.IMG.gal2, D.IMG.gal3, D.IMG.gal4, D.IMG.gal5, D.IMG.gal6, D.IMG.gal7, D.IMG.gal8];
    for (var g = 0; g < srcs.length; g++) {
      gal +=
        '<button type="button" class="gallery-item" data-full="' + srcs[g] + '">' +
          '<img src="' + srcs[g] + '" alt="" loading="lazy" />' +
          '<span class="gallery-cap" data-i18n="gallery_' + (g + 1) + '"></span></button>';
    }
    document.getElementById("galleryGrid").innerHTML = gal;

    var initials = ["N", "A", "N", "M"];
    var tst = "";
    for (var k = 1; k <= 4; k++) {
      tst +=
        '<article class="testimonial reveal d' + ((k % 3) + 1) + '">' +
          '<div class="stars">' + new Array(6).join(ICONS.star) + "</div>" +
          '<p class="testimonial-text" data-i18n="test' + k + '_text"></p>' +
          '<div class="testimonial-author"><span class="avatar">' + initials[k - 1] + "</span>" +
            "<span><span class=\"author-name\" data-i18n=\"test" + k + "_name\"></span>" +
            '<span class="author-date" data-i18n="test' + k + '_date"></span></span></div>' +
        "</article>";
    }
    document.getElementById("testimonialsGrid").innerHTML = tst;

    document.getElementById("contactMount").innerHTML = contactSection();
  };

  /* ---------- Sitios ---------- */
  BUILD.sites = function () {
    document.getElementById("pageHero").innerHTML = pageHero("sitios", D.IMG.cat1);

    /* Filtres */
    var filters = '<button type="button" class="chip active" data-filter="all" data-i18n="sitios_all"></button>';
    for (var f = 0; f < D.CATEGORIES.length; f++) {
      filters +=
        '<button type="button" class="chip" data-filter="' + D.CATEGORIES[f].key + '" ' +
        'data-i18n="' + D.CATEGORIES[f].key + '_short"></button>';
    }
    document.getElementById("siteFilters").innerHTML = filters;

    var html = "";
    for (var i = 0; i < D.CATEGORIES.length; i++) {
      var c = D.CATEGORIES[i];

      var sites = "";
      for (var j = 0; j < c.sites.length; j++) {
        var s = c.sites[j];
        sites +=
          '<article class="site-card">' +
            '<div class="site-card-head">' +
              '<span class="site-num">' + s.n + "</span>" +
              "<span><span class=\"site-name\">" + esc(s.name) + "</span>" +
              '<span class="site-cat" data-i18n="' + c.key + '_short"></span></span>' +
            "</div>" +
            '<p class="site-desc" data-i18n="' + s.d + '"></p>' +
            '<span class="site-region">' + esc(s.r) + "</span>" +
            '<div class="site-card-foot">' +
              '<p><span class="site-price" data-i18n="' + c.key + '_price"></span>' +
                '<span class="unit" data-i18n="price_unit"></span></p>' +
              '<a class="site-btn" target="_blank" rel="noopener" ' +
                'data-wa="site" data-site="' + s.n + " · " + esc(s.name) + '" ' +
                'href="' + D.WA + '" data-i18n="site_book"></a>' +
            "</div>" +
          "</article>";
      }

      html +=
        '<section class="cat-block reveal" id="' + c.key + '" data-cat="' + c.key + '">' +
          '<div class="cat-block-head">' +
            '<figure class="cat-block-img"><img src="' + c.img + '" alt="" loading="lazy" /></figure>' +
            '<div class="cat-block-info">' +
              '<p class="eyebrow" data-i18n="' + c.key + '_count"></p>' +
              '<h2 class="title" data-i18n="' + c.key + '_name"></h2>' +
              '<p class="body" data-i18n="' + c.key + '_desc"></p>' +
              '<p class="price-pill">' +
                '<span class="price-value" data-i18n="' + c.key + '_price"></span>' +
                '<span class="price-label" data-i18n="price_unit"></span></p>' +
              '<div class="am-cols">' +
                '<div><h4 data-i18n="included"></h4><ul>' + amenityList(c.in, true) + "</ul></div>" +
                '<div><h4 data-i18n="not_included"></h4><ul>' + amenityList(c.out, false) + "</ul></div>" +
              "</div>" +
            "</div>" +
          "</div>" +
          '<div class="site-grid">' + sites + "</div>" +
        "</section>";
    }
    document.getElementById("catBlocks").innerHTML = html;
    document.getElementById("contactMount").innerHTML = contactSection();

    /* Filtrage */
    document.getElementById("siteFilters").addEventListener("click", function (e) {
      var btn = e.target.closest(".chip");
      if (!btn) return;
      var val = btn.getAttribute("data-filter");
      var chips = this.querySelectorAll(".chip");
      for (var a = 0; a < chips.length; a++) chips[a].classList.toggle("active", chips[a] === btn);
      var blocks = document.querySelectorAll(".cat-block");
      for (var b = 0; b < blocks.length; b++) {
        blocks[b].hidden = val !== "all" && blocks[b].getAttribute("data-cat") !== val;
      }
    });
  };

  /* ---------- Servicios ---------- */
  BUILD.services = function () {
    document.getElementById("pageHero").innerHTML = pageHero("svc", D.IMG.services);

    function cards(list, mountId) {
      var html = "";
      for (var i = 0; i < list.length; i++) {
        var it = list[i];
        html +=
          '<article class="svc-card reveal d' + ((i % 4) + 1) + '">' +
            '<span class="svc-icon">' + ICONS[it.icon] + "</span>" +
            '<h3 data-i18n="' + it.key + '_name"></h3>' +
            '<p data-i18n="' + it.key + '_desc"></p>' +
            '<a class="svc-link" target="_blank" rel="noopener" href="' + D.WA + '" ' +
              'data-wa="svc" data-svc="' + it.key + '">' +
              '<span data-i18n="site_book"></span>' + ICONS.arrow + "</a>" +
          "</article>";
      }
      document.getElementById(mountId).innerHTML = html;
    }

    cards(D.ACTIVITIES, "activitiesGrid");
    cards(D.EXTRAS, "extrasGrid");
    document.getElementById("contactMount").innerHTML = contactSection();
  };

  /* ---------- Conócenos ---------- */
  BUILD.about = function () {
    document.getElementById("pageHero").innerHTML = pageHero("about", D.IMG.about);

    var eco = "";
    for (var i = 0; i < D.ECO.length; i++) {
      var e = D.ECO[i];
      eco +=
        '<article class="eco-card reveal d' + ((i % 3) + 1) + '">' +
          '<span class="eco-icon">' + ICONS[e.icon] + "</span>" +
          '<h3 data-i18n="' + e.key + '_title"></h3>' +
          '<p data-i18n="' + e.key + '_text"></p>' +
        "</article>";
    }
    document.getElementById("ecoGrid").innerHTML = eco;

    /* Toutes les vagues qui donnent leur nom aux sitios, du nord au sud */
    var waves = "";
    for (var c = 0; c < D.CATEGORIES.length; c++) {
      var cat = D.CATEGORIES[c];
      for (var s = 0; s < cat.sites.length; s++) {
        waves +=
          '<li class="wave-chip"><span class="wave-n">' + cat.sites[s].n + "</span>" +
          "<span>" + esc(cat.sites[s].name) + '<small> — ' + esc(cat.sites[s].r) + "</small></span></li>";
      }
    }
    document.getElementById("waveList").innerHTML = waves;

    document.getElementById("contactMount").innerHTML = contactSection();
  };

  /* ---------- Indicaciones ---------- */
  BUILD.directions = function () {
    document.getElementById("pageHero").innerHTML = pageHero("dir", D.IMG.directions);

    var near = "";
    for (var i = 0; i < D.NEARBY.length; i++) {
      var n = D.NEARBY[i];
      near +=
        '<article class="near-card reveal d' + (i + 1) + '">' +
          '<span class="svc-icon">' + ICONS[n.icon] + "</span>" +
          '<h3 data-i18n="' + n.key + '_title"></h3>' +
          '<p data-i18n="' + n.key + '_text"></p>' +
        "</article>";
    }
    document.getElementById("nearGrid").innerHTML = near;

    var rules = "";
    for (var r = 0; r < D.RULES.length; r++) {
      var rule = D.RULES[r];
      var items = "";
      for (var k = 1; k <= rule.items; k++) {
        items += '<li data-i18n="' + rule.key + "_" + k + '"></li>';
      }
      rules +=
        '<article class="rule-card reveal d' + ((r % 3) + 1) + '">' +
          '<h3><span class="svc-icon">' + ICONS[rule.icon] + "</span>" +
            '<span data-i18n="' + rule.key + '_title"></span></h3>' +
          "<ul>" + items + "</ul>" +
        "</article>";
    }
    document.getElementById("rulesGrid").innerHTML = rules;

    /* Checklist bagages */
    var pack = "";
    for (var p = 0; p < D.PACKING.length; p++) {
      var grp = D.PACKING[p];
      var lis = "";
      for (var q = 1; q <= grp.items; q++) {
        lis += '<li>' + ICONS.check + '<span data-i18n="' + grp.key + "_" + q + '"></span></li>';
      }
      pack +=
        '<article class="pack-card reveal d' + ((p % 3) + 1) + '">' +
          '<h3><span class="svc-icon">' + ICONS[grp.icon] + "</span>" +
            '<span data-i18n="' + grp.key + '_title"></span></h3>' +
          '<ul class="pack-list">' + lis + "</ul>" +
        "</article>";
    }
    document.getElementById("packGrid").innerHTML = pack;

    /* FAQ — accordéon */
    var faq = "";
    for (var f = 1; f <= D.FAQ; f++) {
      var id = "faq-" + f;
      faq +=
        '<div class="faq-item">' +
          '<button type="button" class="faq-q" aria-expanded="false" aria-controls="' + id + '">' +
            '<span class="faq-n">' + (f < 10 ? "0" + f : f) + "</span>" +
            '<span data-i18n="faq' + f + '_q"></span>' +
            '<span class="faq-toggle">' + ICONS.plus + "</span>" +
          "</button>" +
          '<div class="faq-a" id="' + id + '" hidden>' +
            '<p data-i18n="faq' + f + '_a"></p>' +
          "</div>" +
        "</div>";
    }
    document.getElementById("faqList").innerHTML = faq;

    document.getElementById("faqList").addEventListener("click", function (e) {
      var btn = e.target.closest(".faq-q");
      if (!btn) return;
      var open = btn.getAttribute("aria-expanded") === "true";
      /* Un seul panneau ouvert à la fois */
      var all = this.querySelectorAll(".faq-q");
      for (var i = 0; i < all.length; i++) {
        all[i].setAttribute("aria-expanded", "false");
        document.getElementById(all[i].getAttribute("aria-controls")).hidden = true;
      }
      if (!open) {
        btn.setAttribute("aria-expanded", "true");
        document.getElementById(btn.getAttribute("aria-controls")).hidden = false;
      }
    });

    document.getElementById("contactMount").innerHTML = contactSection();
  };

  /* ==========================================================
     i18n
     ========================================================== */
  function applyLang() {
    document.documentElement.lang = lang;

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = t(nodes[i].getAttribute("data-i18n"));
    }

    /* Liens WhatsApp contextuels */
    var links = document.querySelectorAll("[data-wa]");
    for (var j = 0; j < links.length; j++) {
      var el = links[j];
      var kind = el.getAttribute("data-wa");
      var msg = t("wa_msg");
      if (kind === "site") msg = t("wa_site") + " " + el.getAttribute("data-site") + ".";
      else if (kind === "svc") msg = t("wa_svc") + " " + t(el.getAttribute("data-svc") + "_name") + ".";
      el.href = wa(msg);
    }

    var btns = document.querySelectorAll(".lang-toggle button");
    for (var k = 0; k < btns.length; k++) {
      btns[k].classList.toggle("active", btns[k].getAttribute("data-lang") === lang);
    }

    var metaKey = document.body.getAttribute("data-meta");
    var meta = document.querySelector('meta[name="description"]');
    if (meta && metaKey) meta.setAttribute("content", t(metaKey));

    try { localStorage.setItem("odc-lang", lang); } catch (e) {}
  }

  /* ==========================================================
     Comportements
     ========================================================== */
  function initNav() {
    var nav = document.getElementById("nav");
    var float = document.querySelector(".wa-float");
    var btt = document.getElementById("backToTop");

    function onScroll() {
      nav.classList.toggle("scrolled", window.scrollY > 60);
      float.classList.toggle("show", window.scrollY > 400);
      btt.classList.toggle("show", window.scrollY > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    btt.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    var burger = document.getElementById("burger");
    var menu = document.getElementById("mobileMenu");
    burger.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
    });
    menu.addEventListener("click", function (e) {
      if (!e.target.closest("a")) return;
      menu.classList.remove("open");
      burger.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  }

  function initLangToggle() {
    document.addEventListener("click", function (e) {
      var btn = e.target.closest(".lang-toggle button");
      if (!btn) return;
      lang = btn.getAttribute("data-lang");
      applyLang();
    });
  }

  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      for (var i = 0; i < els.length; i++) els[i].classList.add("visible");
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("visible");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    for (var j = 0; j < els.length; j++) io.observe(els[j]);
  }

  function initLightbox() {
    var grid = document.getElementById("galleryGrid");
    if (!grid) return;

    var box = document.getElementById("lightbox");
    var img = document.getElementById("lightboxImg");

    function close() {
      box.hidden = true;
      document.body.style.overflow = "";
    }

    grid.addEventListener("click", function (e) {
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

  function initHeroSlideshow() {
    var container = document.getElementById("heroSlides");
    if (!container || !D.HERO_SLIDES || !D.HERO_SLIDES.length) return;

    var W = "https://static.wixstatic.com/media/";
    var Q = "/v1/fill/w_1800,h_1200,al_c,q_85,enc_avif,quality_auto/";
    var html = "";
    for (var i = 0; i < D.HERO_SLIDES.length; i++) {
      html += '<div class="hero-slide' + (i === 0 ? ' active' : '') + '">' +
        '<img src="' + W + D.HERO_SLIDES[i] + Q + 'h' + (i + 1) + '.jpg" alt=""' + (i > 0 ? ' loading="lazy"' : '') + ' /></div>';
    }
    container.innerHTML = html;

    var slides = container.querySelectorAll(".hero-slide");
    if (slides.length < 2) return;

    var prev = document.getElementById("heroPrev");
    var next = document.getElementById("heroNext");
    var dots = document.getElementById("heroDots");
    var current = 0;
    var timer = null;
    var INTERVAL = 5000;

    for (var i = 0; i < slides.length; i++) {
      var dot = document.createElement("button");
      dot.className = "hero-dot";
      dot.setAttribute("aria-label", "Ir a foto " + (i + 1));
      dots.appendChild(dot);
    }
    var dotEls = dots.querySelectorAll(".hero-dot");
    dotEls[0].classList.add("active");

    function goTo(idx) {
      slides[current].classList.remove("active");
      dotEls[current].classList.remove("active");
      current = ((idx % slides.length) + slides.length) % slides.length;
      slides[current].classList.add("active");
      dotEls[current].classList.add("active");
    }

    function step(dir) {
      clearTimeout(timer);
      goTo(current + dir);
      timer = setTimeout(function () { step(1); }, INTERVAL);
    }

    prev.addEventListener("click", function () { step(-1); });
    next.addEventListener("click", function () { step(1); });

    dots.addEventListener("click", function (e) {
      var dot = e.target.closest(".hero-dot");
      if (!dot) return;
      var idx = Array.prototype.indexOf.call(dotEls, dot);
      goTo(idx);
      clearTimeout(timer);
      timer = setTimeout(function () { step(1); }, INTERVAL);
    });

    // Keyboard navigation
    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });

    timer = setTimeout(function () { step(1); }, INTERVAL);
  }

  /* ==========================================================
     Boot
     ========================================================== */
  buildChrome();
  if (BUILD[PAGE]) BUILD[PAGE]();
  applyLang();
  initNav();
  initLangToggle();
  initReveal();
  initLightbox();
  initSmoothScroll();
  initHeroSlideshow();
  document.getElementById("year").textContent = new Date().getFullYear();

  /* Cible d'ancre au chargement (ex. sitios.html#cat3) */
  if (location.hash) {
    var el = document.querySelector(location.hash);
    if (el) setTimeout(function () { el.scrollIntoView({ block: "start" }); }, 60);
  }
})();
