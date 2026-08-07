/* ============================================================
   Olas de Chile Ecocamp — données statiques
   ============================================================ */
window.ODC_DATA = (function () {
  var W = "https://static.wixstatic.com/media/";
  var Q = "/v1/fill/w_1200,h_800,al_c,q_85,enc_avif,quality_auto/";

  var IMG = {
    hero: W + "d23542_9499eee315484ff78a5f3e06c20b9eb6~mv2.jpg/v1/fill/w_1800,h_1200,al_c,q_85,enc_avif,quality_auto/hero.jpg",
    intro: W + "d23542_e9f635844db84be79685ba75f5399fa1~mv2.jpg" + Q + "intro.jpg",
    eco: W + "d23542_fbe581ed32e946c7953bcb17f87e5f0c~mv2.jpg" + Q + "solar.jpg",
    cat1: W + "d23542_13924b1fe4584154a0083b174dc730b7~mv2.jpg/v1/fill/w_1000,h_750,al_c,q_85,enc_avif,quality_auto/cat1.jpg",
    cat2: W + "d23542_db5b912bc67b452d8147d3f8271a5933~mv2.jpg/v1/fill/w_1000,h_750,al_c,q_85,enc_avif,quality_auto/cat2.jpg",
    cat3: W + "d23542_77f8a3accae84ad1a5074af1f1843912~mv2.jpg/v1/fill/w_1000,h_750,al_c,q_85,enc_avif,quality_auto/cat3.jpg",
    cat4: W + "d23542_722ac0cb5e084bff9682a042b9bdfb15~mv2.jpg/v1/fill/w_1000,h_750,al_c,q_85,enc_avif,quality_auto/cat4.jpg",
    services: W + "d23542_1a00ef08d80a49a9bb4d3262735b4678~mv2.jpg" + Q + "surf.jpg",
    about: W + "d23542_eae392bc3f1746c4b5cece744ef53f67~mv2.png/v1/fill/w_1200,h_800,al_c,q_85,enc_avif,quality_auto/about.jpg",
    directions: W + "d23542_103ce58b44604495b4a7c913645d5d52~mv2.jpg" + Q + "directions.jpg",
    gal1: W + "d23542_9499eee315484ff78a5f3e06c20b9eb6~mv2.jpg/v1/fill/w_1400,h_1000,al_c,q_85,enc_avif,quality_auto/gal1.jpg",
    gal2: W + "d23542_9855a40635fa4be48c6cbeaa6e6af9bc~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_85,enc_avif,quality_auto/gal2.jpg",
    gal3: W + "d23542_0890dc8045e0412bafccdac1443e4e88~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_85,enc_avif,quality_auto/gal3.jpg",
    gal4: W + "d23542_9371199d588e4b18af4476bf680ae36a~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_85,enc_avif,quality_auto/gal4.jpg",
    gal5: W + "d23542_e9f635844db84be79685ba75f5399fa1~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_85,enc_avif,quality_auto/gal5.jpg",
    gal6: W + "d23542_b6897009f6b64b4e8898135fd3a8d77f~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_85,enc_avif,quality_auto/gal6.jpg",
    gal7: W + "d23542_e316d3b4153b4d71961e9e683ebb2865~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_85,enc_avif,quality_auto/gal7.jpg",
    gal8: W + "d23542_7c74444f0e554cb0be310a12ab44eb03~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_85,enc_avif,quality_auto/gal8.jpg",
    site_plan: "assets/plano.webp",
    chile_map: W + "d23542_2e6be141a3b3400ba505d7bfe017b4f5~mv2.jpg/v1/fill/w_700,h_1400,al_c,q_85,enc_avif,quality_auto/chile.jpg"
  };

  /* Photos du slideshow hero — toutes les photos de la galerie du site original */
  var HERO_SLIDES = [
    "d23542_9499eee315484ff78a5f3e06c20b9eb6~mv2.jpg",
    "d23542_e9f635844db84be79685ba75f5399fa1~mv2.jpg",
    "d23542_b6897009f6b64b4e8898135fd3a8d77f~mv2.jpg",
    "d23542_e316d3b4153b4d71961e9e683ebb2865~mv2.jpg",
    "d23542_7c74444f0e554cb0be310a12ab44eb03~mv2.jpg",
    "d23542_5552336918274477b7d1e4d2a2913b44~mv2.jpg",
    "d23542_9855a40635fa4be48c6cbeaa6e6af9bc~mv2.jpg",
    "d23542_c90fa974df2a49ac8be48b59816877f2~mv2.jpg",
    "d23542_a0a9a82dd4db4ebc9c16e56914dd4979~mv2.jpg",
    "d23542_ca8373fc9e4e4f9e9b2edf1a645d63a9~mv2.jpg",
    "d23542_5127d5796de8430a815a0fe08bfca197~mv2.jpg",
    "d23542_9371199d588e4b18af4476bf680ae36a~mv2.jpg",
    "d23542_0890dc8045e0412bafccdac1443e4e88~mv2.jpg",
    "d23542_178217cd3e884dd08114910700271809~mv2.jpg",
    "d23542_7e4df10eb2d34654bed926a568b825cc~mv2.jpg",
    "d23542_6e0f950734f845cda25c4649b4364907~mv2.jpg"
  ];

  /* Les 4 catégories. `in` / `out` référencent les clés am_* de translations.js */
  var CATEGORIES = [
    {
      key: "cat1",
      img: IMG.cat1,
      in: ["grill", "hammock", "table", "terrace"],
      out: ["plug", "bulb"],
      sites: [
        { n: 1, name: "El Buey", d: "s1_desc", r: "Arica, I Región" },
        { n: 2, name: "Las Urracas", d: "s2_desc", r: "Iquique, I Región" },
        { n: 3, name: "La Cúpula", d: "s3_desc", r: "Antofagasta, II Región" },
        { n: 7, name: "Puertecillo", d: "s7_desc", r: "O'Higgins, VI Región" },
        { n: 15, name: "Buchupureo", d: "s15_desc", r: "Ñuble, XVI Región" },
        { n: 16, name: "Rinconada", d: "s16_desc", r: "Bio Bío, VIII Región" }
      ]
    },
    {
      key: "cat2",
      img: IMG.cat2,
      in: ["grill", "hammock", "table"],
      out: ["plug", "bulb", "parking"],
      sites: [
        { n: 4, name: "Portofino", d: "s4_desc", r: "Atacama, III Región" },
        { n: 5, name: "Totoralillo", d: "s5_desc", r: "La Serena, IV Región" },
        { n: 6, name: "Tahai", d: "s6_desc", r: "Rapa Nui, V Región" }
      ]
    },
    {
      key: "cat3",
      img: IMG.cat3,
      in: ["grill", "table", "plug", "parking"],
      out: ["bulb", "hammock", "septic"],
      sites: [
        { n: 8, name: "Pullay", d: "s8_desc", r: "Ñuble, XVI Región" },
        { n: 9, name: "El Faro", d: "s9_desc", r: "Chiloé, X Región" },
        { n: 10, name: "Mehuín", d: "s10_desc", r: "Valdivia, XIV Región" },
        { n: 11, name: "Carelmapu", d: "s11_desc", r: "De los Lagos, X Región" }
      ]
    },
    {
      key: "cat4",
      img: IMG.cat4,
      in: ["grill", "table"],
      out: ["plug", "bulb", "parking", "hammock"],
      sites: [
        { n: 12, name: "Infiernillo", d: "s12_desc", r: "O'Higgins, VI Región" },
        { n: 13, name: "La Puntilla", d: "s13_desc", r: "O'Higgins, VI Región" },
        { n: 14, name: "Tumán", d: "s14_desc", r: "O'Higgins, VI Región" }
      ]
    }
  ];

  var ACTIVITIES = [
    { key: "svc1", icon: "bike" },
    { key: "svc2", icon: "kayak" },
    { key: "svc3", icon: "surf" },
    { key: "svc4", icon: "sup" },
    { key: "svc5", icon: "trek" }
  ];

  var EXTRAS = [
    { key: "svc6", icon: "shop" },
    { key: "svc7", icon: "camera" },
    { key: "svc8", icon: "van" },
    { key: "svc9", icon: "spa" },
    { key: "svc10", icon: "event" },
    { key: "svc11", icon: "laundry" }
  ];

  var ECO = [
    { key: "eco1", icon: "solar" },
    { key: "eco2", icon: "water" },
    { key: "eco3", icon: "compost" },
    { key: "eco4", icon: "tree" },
    { key: "eco5", icon: "recycle" },
    { key: "eco6", icon: "bird" }
  ];

  var RULES = [
    { key: "rule1", icon: "clock", items: 4 },
    { key: "rule2", icon: "users", items: 3 },
    { key: "rule3", icon: "paw", items: 2 },
    { key: "rule4", icon: "plug", items: 3 },
    { key: "rule5", icon: "water", items: 3 },
    { key: "rule6", icon: "recycle", items: 3 },
    { key: "rule7", icon: "fire", items: 4 },
    { key: "rule8", icon: "bulb", items: 3 }
  ];

  /* 12 questions fréquentes (indicaciones.html) */
  var FAQ = 12;

  /* Checklist bagages */
  var PACKING = [
    { key: "pack1", icon: "tent", items: 4 },
    { key: "pack2", icon: "bulb", items: 4 },
    { key: "pack3", icon: "grill", items: 5 },
    { key: "pack4", icon: "shirt", items: 5 },
    { key: "pack5", icon: "check", items: 5 }
  ];

  var NEARBY = [
    { key: "near1", icon: "wave" },
    { key: "near2", icon: "shop" },
    { key: "near3", icon: "pin" }
  ];

  var REVIEWS = [
    { name: "Nicole Soto", date: "Octubre 2023", stars: 5 },
    { name: "Ambrosio Hernández", date: "Mayo 2023", stars: 5 },
    { name: "Natalia Gómez Massa", date: "Febrero 2023", stars: 5 },
    { name: "María Palazzo", date: "Enero 2023", stars: 5 }
  ];

  return {
    IMG: IMG,
    HERO_SLIDES: HERO_SLIDES,
    CATEGORIES: CATEGORIES,
    ACTIVITIES: ACTIVITIES,
    EXTRAS: EXTRAS,
    ECO: ECO,
    RULES: RULES,
    FAQ: FAQ,
    PACKING: PACKING,
    NEARBY: NEARBY,
    REVIEWS: REVIEWS,
    REVIEWS_COUNT: 4,
    GOOGLE_REVIEWS: "https://www.google.com/maps/search/Olas+de+Chile+Ecocamp+Pichilemu",
    PHONE: "+56954504499",
    PHONE_PRETTY: "+56 9 5450 4499",
    WA: "https://wa.me/56954504499",
    INSTAGRAM: "https://www.instagram.com/olasdechile"
  };
})();
