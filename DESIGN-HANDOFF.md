# Handoff : Ecovaptoiture — Site vitrine v2

## Overview
Site vitrine pour **Ecovaptoiture**, entreprise de nettoyage écologique de toitures à la vapeur basse pression (Landes 40 / Pyrénées-Atlantiques 64). Ce bundle contient la **v2 refonte** (`index-v2.html`) avec palette alignée au logo (vert feuille + bleu vapeur) et briefs de génération d'images. L'objectif est une page d'accueil convertissante, orientée devis gratuit.

## About the Design Files
Les fichiers fournis sont des **références de design en HTML + Tailwind (via CDN)** — des prototypes illustrant l'apparence et le comportement souhaités. Ce ne sont pas des fichiers de production à shipper tels quels.

La tâche consiste à **recréer ces designs dans l'environnement du projet cible**. Le projet actuel est un site statique HTML + Node (build.js, client.config.js) qui peut être conservé tel quel — dans ce cas, `index-v2.html` peut remplacer directement `index.html` après validation visuelle. Alternativement, si le projet migre vers un framework (Astro, Next.js, 11ty, etc.), recréer les composants avec les mêmes tokens et structures sémantiques.

## Fidelity
**Haute-fidélité (hifi)** — Les couleurs, typographies, espacements et interactions sont finaux. Le développeur doit recréer l'UI à l'identique.

## Screens / Views

### Page d'accueil (`index-v2.html`)
La page est composée des sections suivantes, dans l'ordre :

1. **Topbar** (hidden sur mobile) — bande sombre `linear-gradient(90deg, #0d3f27, #0a2447)`, h-9, texte 11px tracking-widest, infos téléphone + email alignées à droite.

2. **Navbar sticky** — fond `bg-white/95` + `backdrop-blur-md`, hauteur 96px (h-24), logo `.logo-navbar` à gauche (h-24), 6 liens nav au centre (Accueil, Nettoyage toiture, Gouttières, Hydrofuge, À propos, Contact), CTA "Devis gratuit" à droite. Underline animée dégradée sous les liens.

3. **Hero** — background `linear-gradient(135deg, #0d3f27 0%, #115432 30%, #124781 70%, #0f3b68 100%)` + particules vapeur CSS (`.vapor-particle` montent du bas avec `@keyframes rise`). Titre H1 72–88px Baloo 2 bold, mot "vapeur" en dégradé vert→bleu souligné SVG. Grid 12 colonnes : 7/12 texte à gauche, 5/12 photo à droite. Badge 100% éco en haut-droite avec texte circulaire rotatif (18s). Badge flottant "Vapeur basse pression 140°C · 0.3 bar" en bas-gauche de la photo. Vague SVG en bas pour transition.

4. **Quick info bande** — 2 cartes en grid MD:2 cols, `-mt-10` pour chevauchement du hero. Carte 1 blanche (home icon), carte 2 dégradée vert→bleu (check icon).

5. **Services** — `bg-ink-50`, grid 4 colonnes (sm:2, lg:4), 8 cartes dont la dernière CTA pleine couleur. Chaque carte : icône 56×56 rounded-14, h3 Baloo 2 bold lg, description, numéro watermark bottom-right. Hover = translateY(-6px) + bord dégradé anim + icône rotate(-6deg) scale(1.08).

6. **Pourquoi nous choisir** — grid 12 cols, mosaïque photos à gauche (placeholders rayés avec briefs), panel texte à droite avec 2 lignes "check icon + paragraphe" + 4 stats animées (compteurs déclenchés par IntersectionObserver) + bouton "En savoir plus".

7. **Avant / Après** — grid 5 cols (2 texte / 3 slider). Slider custom avec handle draggable, `clip-path: inset(0 X% 0 0)` sur `.ba-before`, label "Avant" (noir) et "Après" (vert 900) en overlay.

8. **Process 4 étapes** — même background dégradé que hero + texture de points. 4 colonnes, cercle 96px avec icône lucide, badge "ÉTAPE 0N", titre, description.

9. **Avis clients** — 3 cartes blanches avec étoiles `#f5b728`, témoignage, avatar avec initiales en dégradé vert→bleu.

10. **Partenaires** — bandeau marquee avec 7 marques rendues en texte stylisé (Kärcher, Sika, Sikkens, Algimouss, Owatrol, Guardex, Rubson), dupliquées pour loop infini.

11. **Devis** — bloc full-width rounded-3xl dégradé vert→bleu, grid 5 cols (2 photo / 3 formulaire). Formulaire avec 4 champs (nom, tel, email, message), bouton blanc "Demander un RDV".

12. **Zone d'intervention** — background dégradé vert→bleu foncé, grid 2 cols : liste villes (10 Landes + 10 PA) à gauche, placeholder carte à droite.

13. **Footer** — `bg-ink-900`, grid 4 cols, logo + desc + réseaux sociaux, contact, services, copyright.

14. **CTA flottant** — position fixed bottom-right, 56×56 rounded-full dégradé, anim pulseRing 2.6s.

## Interactions & Behavior

- **Reveal on scroll** : IntersectionObserver (threshold 0.12) ajoute `.visible` → `translateY(28px) → 0` + opacity. Variantes `.reveal-left`, `.reveal-right`, `.reveal-stagger`.
- **Counters** : IntersectionObserver (threshold 0.5) anime `data-counter` (ease-out cubic, durée configurable via `data-counter-duration`).
- **Slider avant/après** : drag pointer/touch sur `#ba-handle`, calcul pourcentage → `clip-path: inset(0 X% 0 0)` sur `.ba-before`. Click ailleurs déplace également.
- **Mobile menu** : toggle `.hidden` sur `#mobile-menu` + swap icônes burger/X.
- **Particules vapeur** : générées en JS dans `#vapor-field` et `#vapor-field-devis` (18 et 10 particules), positions et delays randomisés.
- **Marquee partenaires** : CSS `@keyframes partners-scroll` 40s linear infinite, masque `mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent)`.

## State Management
Site statique, aucune gestion d'état globale. Interactions locales uniquement (slider, menu mobile, formulaire).

## Design Tokens

### Couleurs (aligned sur le logo)

| Token | Valeur | Usage |
|-------|--------|-------|
| `--leaf` | `#156b3c` | Vert ÉCO principal (titre, boutons leaf) |
| `--leaf-500` | `#2ea35e` | Vert lumineux (dégradés) |
| `--leaf-600` | `#1e8549` | Hover boutons verts |
| `--leaf-800` | `#115432` | Texte foncé sur fond clair |
| `--vapor` | `#1a6cc2` | Bleu VAP principal (logo) |
| `--vapor-500` | `#3a7fe1` | Bleu lumineux (dégradés) |
| `--vapor-300` | `#8fbcf7` | Accents clairs sur fond sombre |
| `--ink-50` | `#f7f9f8` | Fond sections alternées |
| `--ink-500` | `#5f7166` | Texte secondaire |
| `--ink-700` | `#334038` | Texte nav |
| `--ink-800` | `#1f2823` | Texte corps |
| `--ink-900` | `#0f1411` | Footer, titre |
| `--paper` | `#fafbfa` | Fond global body |

**Dégradé signature** : `linear-gradient(92deg, #156b3c 0%, #2ea35e 40%, #3a7fe1 65%, #1a6cc2 100%)` (suit l'axe du logo ÉCO → VAP).

**Dégradé hero/process** : `linear-gradient(135deg, #0d3f27 0%, #115432 30%, #124781 70%, #0f3b68 100%)`.

### Typographie

- **Headings** : `'Baloo 2'` weights 500/600/700/800, `letter-spacing: -0.02em`
- **Body** : `'Inter'` weights 300/400/500/600/700, `line-height: 1.55`
- **Mono** : `'JetBrains Mono'` (placeholders, captions tech)

Échelle :
- H1 hero : 72–88px (sm:6xl / lg:7xl / xl:[5.5rem])
- H2 sections : 36–60px (4xl–6xl)
- H3 cards : 18–20px (lg–xl)
- Corps : 14–18px
- Labels sections : 12px weight 700 tracking 0.2em uppercase

### Espacements

- Sections verticales : `py-20 lg:py-28` (80/112px)
- Container : `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Gap grids : 4–6 (16–24px), 10–16 (40–64px) sur grids grand format

### Border-radius

- Boutons : `999px` (pill)
- Cards : `20px` (rounded-xl/2xl)
- Sections highlight : `24–28px` (rounded-3xl)
- Icons wraps : `12–14px`

### Shadows

- Card hover : `0 30px 50px -20px rgba(15,59,104,0.18)`
- CTA primaire : `0 10px 28px -8px rgba(26,108,194,0.45), 0 6px 18px -6px rgba(21,107,60,0.4)`
- Slider B/A : `0 30px 60px -20px rgba(15,59,104,0.3)`

## Assets

### Logo
`assets/img/logo-ecovap.png` — logo Ecovaptoiture, à afficher h-20/h-24 dans navbar et h-20 dans footer. Le texte du logo est tracé ÉCO (vert) + VAP (bleu) — la palette du site en dérive.

### Photos
**Aucune photo réelle n'est livrée** — tous les emplacements sont des **placeholders** à rayures tramées avec un brief monospace explicite. Les prompts de génération d'image (ChatGPT / Nano Banana) sont dans le fichier `BRIEFS-IMAGES.md`. 10 images à générer, cibles listées avec dimensions + nom de fichier final dans `assets/img/photos/`.

### Icônes
**Lucide** via CDN `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js` — utilisées partout via `<i data-lucide="nom" />`. En production, importer `lucide-react` ou équivalent framework.

### Fonts
Google Fonts, chargées dans `<head>` : Baloo 2 (500/600/700/800), Inter (300/400/500/600/700), JetBrains Mono (400/500).

### Dépendances CDN actuelles (à remplacer en prod)
- Tailwind CSS JIT via `cdn.tailwindcss.com` → **à remplacer par build Tailwind local** + config
- Lucide icons UMD → à remplacer par package npm
- Google Fonts → soit CDN, soit self-hosted via `@fontsource/*`

## Files

Fichiers inclus dans ce bundle :

- `README.md` — ce document
- `index-v2.html` — page d'accueil v2 finale (référence principale)
- `BRIEFS-IMAGES.md` — **10 prompts prêts à l'emploi** pour ChatGPT Images / Nano Banana / Gemini 2.5 Flash Image, avec conseils cohérence et conventions de nommage
- `assets/` — dossier complet avec le logo et ressources existantes du projet

## Notes pour l'implémentation

1. **Priorité 1** : générer les 10 images via `BRIEFS-IMAGES.md`, les placer dans `assets/img/photos/`, puis remplacer les blocs `.photo-placeholder` par des `<img>` / `<picture>` dans le HTML.
2. **Priorité 2** : remplacer Tailwind CDN par build local (`tailwindcss init`, déplacer `tailwind.config` de l'inline vers un `tailwind.config.js`).
3. **Priorité 3** : propager la palette (tokens `--leaf-*`, `--vapor-*`, `--ink-*`) sur les autres pages du site (`nettoyage-toiture.html`, `gouttieres.html`, `hydrofuge.html`, `a-propos.html`, `contact.html`, `mentions-legales.html`) qui tournent encore sur l'ancienne palette.
4. **Accessibilité** : vérifier contrastes texte/fond sur les sections sombres (ratios AA minimum) ; ajouter `aria-label` sur les liens icon-only ; gérer le focus visible sur navigation clavier.
5. **SEO** : contenu FR/région sud-ouest déjà présent, enrichir `<meta>` OG + JSON-LD LocalBusiness.
6. **Formulaire devis** : stub `onsubmit` actuellement — brancher sur un endpoint (Netlify Forms, Formspree, ou backend custom).
