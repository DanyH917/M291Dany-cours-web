# Brief de Conception — DHgraphics

## 1. Contexte & Problématique

En Suisse romande, de nombreuses personnes lancent une petite entreprise (food truck, commerce, association) avec un budget limité et sans connaissances en graphisme. Elles ne savent pas à quoi ressemble le travail d'un graphiste indépendant, ni combien il coûte, et les portfolios existants sont souvent lents, peu lisibles sur mobile et sans contexte. **DHgraphics** est un site vitrine mobile qui présente mes réalisations sous forme de fiches claires (client, besoin, résultat, prix indicatif) et permet de demander un devis en un clic, sans compte.

## 2. Profil de l'Utilisateur Cible (Persona)

- **Prénom & Âge :** Enzo Rochat, 26 ans — lance son food truck « Le Bivouac » à Yverdon-les-Bains.
- **Contexte d'utilisation :** Le soir sur son canapé ou entre deux marchés, smartphone Android 390 px tenu à une main.
- **Besoins clés :** Voir des exemples concrets proches de son activité, comprendre le prix, contacter rapidement, lire sans effort.
- Fiche complète : [`design/persona.md`](./design/persona.md) · Parcours : [`design/user-flow.md`](./design/user-flow.md)

## 3. Fonctionnalités Essentielles (Périmètre MVP)

1. **Affichage d'une liste de réalisations** sous forme de cartes (image, titre, type de projet, client).
2. **Filtrage instantané** par puces (Tous, Identité visuelle, Logos, Kits déco motocross / Restauration, Commerce, Sport) et **recherche par mot-clé**.
3. **Consultation d'une fiche détaillée** : client, besoin, livrables, points forts / points faibles, durée, prix indicatif.
4. **Demande de devis** : formulaire court (3 champs) avec confirmation visuelle immédiate.

## 4. Écrans

| Écran | On y voit | On peut y faire | Bouton principal |
|-------|-----------|-----------------|------------------|
| **1 — Accueil & Exploration** | Logo à gauche, bouton « Qui suis-je ? » à droite (ouvre la page de présentation de DHgraphics), accroche, recherche, puces de catégories, cartes des projets | Découvrir le graphiste, défiler, rechercher, filtrer | Carte projet (ouvrir la fiche) |
| **2 — Vue filtrée** | Puces actives en surbrillance, compteur « 3 projets trouvés », cartes filtrées | Combiner / retirer des filtres | « Réinitialiser les filtres » |
| **3 — Fiche détaillée** | Galerie de plusieurs photos, client, besoin, livrables, points forts / faibles, prix « dès … CHF » | Revenir à la liste, voir d'autres images | « Demander un devis » (fixe en bas) |
| **4 — Devis & confirmation** | 3 champs, projet pré-rempli, message de succès | Envoyer la demande | « Envoyer » |

## 5. Charte éditoriale & Tonalité

- **Ton :** direct et chaleureux, vouvoiement, zéro jargon de graphiste.
- **Ambiance visuelle :** professionnelle, créative, accessible — *comme un carnet de croquis bien rangé posé sur une table d'atelier*.
- **Palette (en mots) :**
  - Fond : blanc cassé / papier
  - Texte : noir anthracite
  - Accent : orange vif (couleur de la marque DH)
  - Attention / erreur : rouge brique
- **Typographie :** une police sans empattement très lisible pour le texte, une police plus affirmée pour les titres.

## 6. Contraintes Techniques & Ergonomiques

- **Approche :** Mobile First (largeur de référence 390 px).
- **Technologie :** Vanilla HTML5 sémantique, CSS moderne avec variables, JavaScript natif sans bibliothèque.
- **Accessibilité :** Ratios de contraste WCAG AA (≥ 4,5:1), navigation clavier assurée, textes alternatifs sur toutes les images.
- **Ergonomie :** cibles tactiles ≥ 48 × 48 px, images optimisées (WebP, chargement différé).

## 7. Interdits

- Pas de Bootstrap, pas de React, pas de compte obligatoire pour consulter.
- Pas de popup ou de bannière qui cache les projets à l'ouverture.
- Pas de projet affiché sans son contexte (client + besoin).
- Pas de texte en dessous de 16 px sur mobile.
