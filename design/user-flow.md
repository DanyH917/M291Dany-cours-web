# User flow — tâche principale

**Persona :** Enzo, 26 ans, lance son food truck à Yverdon ([persona.md](./persona.md))

**Tâche :** Trouver une réalisation proche de son projet (identité visuelle pour un restaurant) et envoyer une demande de devis.

**Début :** la personne ouvre DHgraphics sur son téléphone depuis un lien Instagram.  
**Fin réussie :** la personne a envoyé sa demande de devis et voit la confirmation « Demande envoyée — réponse sous 48 h ».

**Durée visée :** moins de 90 secondes, sans compte ni inscription.

## Chemin

| # | Écran traversé | Action de l'utilisateur | Feedback attendu de l'interface |
|---|----------------|-------------------------|---------------------------------|
| 1 | **Accueil & Exploration** | Enzo ouvre l'app : il voit le logo DHgraphics à gauche, le bouton « Qui suis-je ? » à droite, une phrase d'accroche et la liste des réalisations en cartes. Il touche « Qui suis-je ? » pour découvrir le graphiste, revient à l'accueil et fait défiler. | La page « Qui suis-je ? » s'ouvre puis se referme avec « ← Retour ». Les 12 projets s'affichent en cartes (image, titre, type, client). Chargement < 2 s. |
| 2 | **Vue filtrée** | Il touche la puce **« Identité visuelle »** puis **« Restauration »** (ou tape « restaurant » dans la recherche). | Les puces actives passent en surbrillance, le compteur indique « 3 projets trouvés », seules les cartes correspondantes restent. |
| 3 | **Fiche détaillée du projet** | Il touche la carte « Café du Port — Identité complète ». | La fiche s'ouvre : galerie de plusieurs photos, client, besoin, ce qui a été livré, points forts / points faibles, durée, prix indicatif (« dès 900 CHF »). Bouton « Demander un devis » collé en bas. |
| 4 | **Formulaire de devis** | Il touche « Demander un devis », remplit 3 champs (prénom, e-mail, son projet en 2 lignes) ; le projet consulté est déjà pré-rempli. | Les champs valides se cochent en vert, un message clair s'affiche sous un champ incorrect (« Il manque le @ dans l'e-mail »). |
| 5 | **Confirmation** | Il touche « Envoyer ». | Écran de succès avec coche ✓ : « Merci Enzo ! Demande envoyée — réponse sous 48 h ». Bouton « Voir d'autres projets » pour revenir à la liste. |

## Variante d'échec (optionnel)

- **Aucun résultat après filtrage :** l'écran dit « Aucun projet pour ce filtre — voir tous les projets » avec un bouton pour réinitialiser les filtres.
- **Envoi impossible (pas de réseau) :** l'écran dit « Votre message n'est pas parti. Vérifiez votre connexion et réessayez » ; les champs restent remplis.
