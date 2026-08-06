/* ============================================================
   Olas de Chile Ecocamp — données statiques
   ============================================================ */
window.ODC_DATA = (function () {
  var P = "https://images.pexels.com/photos/";
  var q = "?auto=compress&cs=tinysrgb&w=1000";

  var IMG = {
    hero: P + "30548681/pexels-photo-30548681.jpeg?auto=compress&cs=tinysrgb&w=1800",
    intro: P + "30041430/pexels-photo-30041430.jpeg" + q,
    eco: P + "27873610/pexels-photo-27873610.jpeg" + q,
    cat1: P + "19585294/pexels-photo-19585294.jpeg" + q,
    cat2: P + "19178410/pexels-photo-19178410.jpeg" + q,
    cat3: P + "7967392/pexels-photo-7967392.jpeg" + q,
    cat4: P + "10513799/pexels-photo-10513799.jpeg" + q,
    services: P + "6524840/pexels-photo-6524840.jpeg" + q,
    about: P + "13644736/pexels-photo-13644736.jpeg" + q,
    directions: P + "30157492/pexels-photo-30157492.jpeg" + q,
    gal1: P + "13644736/pexels-photo-13644736.jpeg?auto=compress&cs=tinysrgb&w=1400",
    gal2: P + "30157492/pexels-photo-30157492.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gal3: P + "8960427/pexels-photo-8960427.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gal4: P + "6524840/pexels-photo-6524840.jpeg?auto=compress&cs=tinysrgb&w=1200"
  };

  /* Les 4 catégories. `in` / `out` référencent les clés am_* de translations.js */
  var CATEGORIES = [
    {
      key: "cat1",
      img: IMG.cat1,
      in: ["grill", "hammock", "table", "terrace"],
      out: ["plug", "bulb"],
      sites: [
        { n: 1, name: "El Buey", d: "s1_desc" },
        { n: 2, name: "Las Urracas", d: "s2_desc" },
        { n: 3, name: "La Cúpula", d: "s3_desc" },
        { n: 7, name: "Puertecillo", d: "s7_desc" },
        { n: 15, name: "Buchupureo", d: "s15_desc" },
        { n: 16, name: "Rinconada", d: "s16_desc" }
      ]
    },
    {
      key: "cat2",
      img: IMG.cat2,
      in: ["grill", "hammock", "table"],
      out: ["plug", "bulb", "parking"],
      sites: [
        { n: 4, name: "Portofino", d: "s4_desc" },
        { n: 5, name: "Totoralillo", d: "s5_desc" },
        { n: 6, name: "Tahai", d: "s6_desc" }
      ]
    },
    {
      key: "cat3",
      img: IMG.cat3,
      in: ["grill", "table", "plug", "parking"],
      out: ["bulb", "hammock", "septic"],
      sites: [
        { n: 8, name: "Pullay", d: "s8_desc" },
        { n: 9, name: "El Faro", d: "s9_desc" },
        { n: 10, name: "Mehuín", d: "s10_desc" },
        { n: 11, name: "Carelmapu", d: "s11_desc" }
      ]
    },
    {
      key: "cat4",
      img: IMG.cat4,
      in: ["grill", "table"],
      out: ["plug", "bulb", "parking", "hammock"],
      sites: [
        { n: 12, name: "Infiernillo", d: "s12_desc" },
        { n: 13, name: "La Puntilla", d: "s13_desc" },
        { n: 14, name: "Tumán", d: "s14_desc" }
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

  return {
    IMG: IMG,
    CATEGORIES: CATEGORIES,
    ACTIVITIES: ACTIVITIES,
    EXTRAS: EXTRAS,
    ECO: ECO,
    RULES: RULES,
    FAQ: FAQ,
    PACKING: PACKING,
    NEARBY: NEARBY,
    PHONE: "+56954504499",
    PHONE_PRETTY: "+56 9 5450 4499",
    WA: "https://wa.me/56954504499",
    INSTAGRAM: "https://www.instagram.com/olasdechile"
  };
})();
