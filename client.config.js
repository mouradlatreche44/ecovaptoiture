/**
 * ============================================================
 *  FICHIER DE CONFIGURATION CLIENT — ECOVAPTOITURE
 * ============================================================
 */

window.CLIENT = {

  // ── IDENTITÉ ─────────────────────────────────────────────
  nom:          "Ecovaptoiture",
  slogan:       "Le nettoyage écologique de toiture, sans produit chimique",
  description:  "Ecovaptoiture : nettoyage vapeur écologique de toitures, terrasses et bardages dans les Landes (40) et Pyrénées-Atlantiques (64). Démoussage, hydrofuge, entretien gouttières.",

  // ── CONTACT ──────────────────────────────────────────────
  telephone:      "0602020301",
  telephoneAff:   "06 02 02 03 01",
  email:          "ecovaptoiture@gmail.com",
  adresse:        "Saint-Vincent-de-Tyrosse, 40230",
  departement:    "Landes (40) & Pyrénées-Atlantiques (64)",

  // ── ZONE D'INTERVENTION ──────────────────────────────────
  zoneHero:       "Intervention dans les Landes (40) et les Pyrénées-Atlantiques (64)",
  communes: [
    "Saint-Vincent-de-Tyrosse", "Dax", "Mont-de-Marsan", "Soustons", "Hossegor",
    "Capbreton", "Labenne", "Tarnos", "Bayonne", "Anglet",
    "Biarritz", "Pau", "Orthez", "Saint-Jean-de-Luz", "Hendaye",
  ],
  departementCode: "Landes (40) & Pyrénées-Atlantiques (64)",

  // ── DISPONIBILITÉ ────────────────────────────────────────
  horaires: [
    { jours: "Lundi — Vendredi", heures: "8h — 19h" },
    { jours: "Samedi",            heures: "9h — 17h" },
    { jours: "Dimanche",          heures: "Fermé" },
  ],

  // ── COULEURS ─────────────────────────────────────────────
  couleurs: {
    primary:  "#15803d",  // vert foncé (logo)
    accent:   "#1a6cc2",  // bleu du logo
    cream:    "#f0fdf4",
  },

  reseaux: {
    facebook:  "#",
    instagram: "#",
    tiktok:    "#",
    linkedin:  "#",
    youtube:   "#",
  },

  marques: ["Vapeur basse pression", "Hydrofuge microporeux", "Biocide écologique", "Traitement longue durée"],

  services: [
    {
      id:     "nettoyage-vapeur",
      titre:  "Nettoyage vapeur écologique",
      label:  "Nettoyage vapeur",
      soustitre: "Toitures · Terrasses · Bardages",
      description: "Nettoyage à la vapeur basse pression, sans produit chimique, sans haute pression destructrice. Préserve les matériaux et élimine mousses, lichens et algues en profondeur.",
      image:  "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&q=85&auto=format&fit=crop",
      points: [
        "Nettoyage vapeur de toiture (tuiles, ardoises, fibrociment, zinc)",
        "Nettoyage de terrasse (bois, pierre, dalles)",
        "Nettoyage de bardages et façades",
        "Démoussage profond avec traitement biocide écologique",
        "Traitement anti-mousse longue durée (3 à 5 ans)",
        "Hydrofuge microporeux toiture et façade (garantie 10 ans)",
      ],
    },
  ],

  stats: [
    { valeur: "750 000", label: "habitants dans la zone Landes & Pays Basque" },
    { valeur: "100%",    label: "procédé écologique sans produit chimique" },
    { valeur: "10 ans",  label: "garantie hydrofuge selon support" },
    { valeur: "48h",     label: "délai de devis gratuit" },
  ],

  avis: [
    {
      nom:    "Céline B.",
      ville:  "Dax",
      note:   5,
      date:   "Il y a 2 semaines",
      texte:  "Toiture couverte de mousses nettoyée à la vapeur : rendu impeccable, sans casse de tuile, sans produit chimique. Équipe sérieuse et propre.",
      avatar: "CB",
    },
    {
      nom:    "Laurent M.",
      ville:  "Bayonne",
      note:   5,
      date:   "Il y a 1 mois",
      texte:  "Démoussage + hydrofuge sur ma toiture en tuiles : travail nickel, devis respecté, explications claires du procédé vapeur.",
      avatar: "LM",
    },
    {
      nom:    "Sophie R.",
      ville:  "Hossegor",
      note:   5,
      date:   "Il y a 3 semaines",
      texte:  "Terrasse bois remise à neuf avant l'été, sans décolorer le pin. Franchement bluffée par le résultat de la vapeur basse pression.",
      avatar: "SR",
    },
  ],

  mapsEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=-1.4050%2C43.5631%2C-1.2050%2C43.7631&layer=mapnik&marker=43.6631%2C-1.3050",

  annee: "2026",
};
