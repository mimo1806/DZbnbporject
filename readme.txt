====================================================
 DZbnb — Plateforme de Location Touristique en Algérie
 Projet Web — Développement d'Applications Web
 Université Mouloud MAMMERI de Tizi-Ouzou
 Année universitaire : 2025/2026
====================================================

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 DESCRIPTION DU SITE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DZbnb est une plateforme de location touristique dédiée à l'Algérie,
inspirée du modèle Airbnb, permettant aux voyageurs de découvrir
et réserver des logements authentiques à travers les wilayas du pays.

Le site propose 63 logements répartis dans 9 wilayas :
  • Tipaza   (villas, bungalows, maisons, appartements)
  • Alger    (riads, penthouses, studios, villas)
  • Oran     (villas, appartements, chalets, riads)
  • Béjaïa   (villas, chalets, gîtes, maisons)
  • Jijel    (villas, bungalows, chalets, studios)
  • Tizi Ouzou  (chalets, maisons kabyles, gîtes)
  • Mostaganem  (villas, appartements, riads)
  • Annaba   (villas, appartements, chalets)
  • Ghardaïa (ksour, campements, écolodges, auberges)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PAGES DU SITE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  index.html                   → Page d'accueil
  logements/index.html         → Catalogue des logements (filtres + recherche)
  logements/detail.html?id=X   → Détail d'un logement
  connexion.html               → Connexion / Inscription (3 étapes)
  paiement.html                → Finalisation et paiement de la réservation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 INSTRUCTIONS D'UTILISATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Ouvrir index.html dans un navigateur web moderne
   (Chrome, Firefox, Edge, Safari).
2. Naviguer entre les pages via le menu de navigation.
3. Cliquer sur "Voir tous les logements" pour accéder au catalogue.
4. Utiliser les filtres (Wilaya, Type, Prix) ou la barre de recherche
   pour trouver un logement.
5. Cliquer sur une carte logement pour voir son détail complet.

Pour tester la réservation :
  → Ouvrir la page détail d'un logement.
  → Choisir des dates d'arrivée et de départ.
  → Cliquer sur "Réserver".
  → Si non connecté : un modal s'affiche et redirige vers la connexion.
  → Si connecté : redirection automatique vers la page paiement.

Compte de test :
  → Créer un compte via connexion.html (onglet "Créer un compte")
  → Ou remplir n'importe quel email + mot de passe (6 car. minimum)
    dans l'onglet "Se connecter" pour simuler une session.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 FONCTIONNALITÉS TECHNIQUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✔ Affichage dynamique des logements (données JSON, rendu JS)
  ✔ Filtrage par wilaya, type de logement et tranche de prix
  ✔ Recherche en temps réel (nom, wilaya)
  ✔ Tri des résultats (prix, note, nombre de commentaires)
  ✔ Pagination côté client (9 logements par page)
  ✔ Authentification simulée (localStorage)
  ✔ Session utilisateur persistante (localStorage)
  ✔ Condition de réservation : connexion obligatoire
  ✔ Redirection automatique après connexion (paramètre ?redirect=)
  ✔ Inscription en 3 étapes avec validation des champs
  ✔ Page de détail dynamique chargée via paramètre URL (?id=)
  ✔ Calcul automatique du prix total (nuits × prix + frais 10%)
  ✔ Formulaire de paiement avec 4 méthodes (CIB, Edahabia, BNA, Virement)
  ✔ Balises sémantiques HTML5 (header, nav, main, section, footer)
  ✔ Site responsive (mobile, tablette, desktop)
  ✔ Fichiers HTML, CSS et JavaScript séparés (externes)
  ✔ Slider héro animé avec navigation par points et swipe tactile
  ✔ Système de notation avec distribution des étoiles

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 STRUCTURE DES FICHIERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  DZbnb/
  ├── index.html               (page d'accueil)
  ├── connexion.html           (connexion / inscription)
  ├── paiement.html            (finalisation de réservation)
  ├── README.txt
  │
  ├── data/
  │   └── logements.json       (base de données des 63 logements)
  │
  ├── logements/
  │   ├── index.html           (catalogue des logements)
  │   ├── logements.css        (styles de la page liste)
  │   ├── logements.js         (filtres, recherche, pagination)
  │   ├── detail.html          (page de détail d'un logement)
  │   ├── detail.css           (styles de la page détail)
  │   └── detail.js            (logique détail + réservation + auth)
  │
  ├── style/
  │   └── (fichiers CSS partagés)
  │
  └── image/
      └── connexion.png        (image de fond de la page connexion)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 FLUX DE RÉSERVATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  [Accueil]
      ↓  clic "Voir tous les logements"
  [Catalogue] — recherche + filtres + pagination
      ↓  clic sur une carte
  [Détail logement] (?id=X)
      ↓  saisie des dates + voyageurs → clic "Réserver"
      ├── Non connecté → [Modal d'alerte] → [Connexion] → retour [Détail]
      └── Connecté     → [Paiement] (récapitulatif + formulaire carte)
                              ↓  validation du paiement
                         [Confirmation de réservation ✅]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 TECHNOLOGIES UTILISÉES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  • HTML5          (balises sémantiques)
  • CSS3           (variables, flexbox, grid, animations, responsive)
  • JavaScript     (ES6+, DOM, localStorage, URLSearchParams, fetch)
  • JSON           (données des logements)
  • Google Fonts   (Playfair Display, DM Sans)
  • Aucun framework, aucune bibliothèque externe

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 MEMBRES DU GROUPE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Niveau : L2 Informatique

  1. HADDADJ   Manel
  2. CHAOU     Slimane
  3. AZGAGH    Sara
  4. MEZRAG    Lina

====================================================
 © 2026 DZbnb — Université Mouloud MAMMERI, Tizi-Ouzou
====================================================
