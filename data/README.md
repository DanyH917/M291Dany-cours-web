# Données de DHgraphics

Ce dossier décrit et valide les données qui alimentent la vitrine.

| Fichier | Rôle |
|---------|------|
| [`../data.json`](../data.json) | Base officielle : **32 réalisations** (cartes, filtres, recherche, fiches détaillées). |
| [`schema.json`](./schema.json) | Schéma JSON Schema *draft-07* qui valide `data.json` (atelier s10-av1). |
| [`data-avance.json`](./data-avance.json) | Échantillon de 6 projets avec adresse, coordonnées GPS et horaires d'ouverture du client (atelier s10-av2). |
| [`schema-avance.json`](./schema-avance.json) | Schéma qui valide `data-avance.json`. |

## Structure d'une fiche (`data.json`)

| Clé | Type | Obligatoire | Exemple | Utilisé pour |
|-----|------|:---:|---------|--------------|
| `id` | entier ≥ 1, unique | ✅ | `1` | lien vers la fiche `#projet/1` |
| `titre` | texte (3–80) | ✅ | `"Identité complète du Café du Port"` | titre de la carte |
| `client` | texte | | `"Café du Port"` | fiche détaillée |
| `commune` | texte | ✅ | `"Nyon"` | carte + recherche |
| `canton` | `GE` `VD` `VS` `NE` `FR` `JU` `BE` | | `"VD"` | recherche |
| `categorie` | `Identité visuelle` · `Logo` · `Kit déco moto` | ✅ | `"Logo"` | **puces de filtres** |
| `secteur` | `Restauration` · `Commerce` · `Sport` · `Association` · `Artisanat` · `Services` | | `"Sport"` | 2ᵉ filtre |
| `description` | texte (20–200) | ✅ | | fiche détaillée |
| `prixMoyen` | nombre ≥ 0 (CHF) | ✅ | `900.00` | « dès 900 CHF » |
| `dureeSemaines` | entier 1–12 | | `3` | fiche détaillée |
| `enVedette` | booléen | | `true` | projets mis en avant sur l'accueil |
| `annee` | entier | | `2025` | tri |
| `tags` | tableau de 1 à 5 mots-clés (minuscules, sans accent) | ✅ | `["logo", "menu"]` | recherche |
| `pointsForts` / `pointsFaibles` | texte | | | fiche détaillée |
| `image` | chemin `images/nom.jpg` | ✅ | `"images/cafe-du-port.jpg"` | visuel de la carte |

Répartition : 13 identités visuelles, 11 logos, 8 kits déco moto — dans 7 cantons romands.

## Valider les données

### Dans VS Code (automatique)

Le fichier [`.vscode/settings.json`](../.vscode/settings.json) relie chaque fichier de données à son schéma. Une erreur (clé mal écrite, mauvais type, catégorie inconnue) est **soulignée en rouge** dès l'ouverture de `data.json`, avec le message dans l'onglet *Problèmes* (`Ctrl + Maj + M`).

### Avec un validateur en ligne

Coller `data/schema.json` et `data.json` dans un validateur JSON Schema (ex. *jsonschemavalidator.net*) → résultat attendu : **aucune erreur**.

### Contre-épreuve : le schéma détecte bien les erreurs

| Erreur volontaire | Message du validateur |
|-------------------|-----------------------|
| `"prix"` au lieu de `"prixMoyen"` | `'prixMoyen' is a required property` + `'prix' was unexpected` |
| `"prixMoyen": "350"` (texte au lieu d'un nombre) | `'350' is not of type 'number'` |
| `"categorie": "Affiche"` | `'Affiche' is not one of ['Identité visuelle', 'Logo', 'Kit déco moto']` |

## Données avancées (`data-avance.json`)

Chaque projet reçoit deux sous-objets pour une future carte interactive :

```json
"coordonnees": { "lat": 46.3829, "lng": 6.2418 },
"horaires": {
  "lundi":    [{ "ouverture": "07:30", "fermeture": "23:00" }],
  "mardi":    [{ "ouverture": "09:00", "fermeture": "12:00" }, { "ouverture": "13:30", "fermeture": "18:30" }],
  "dimanche": []
}
```

- `lat` / `lng` sont vérifiés dans les limites de la Suisse romande (lat 45,8–47,6 · lng 5,9–7,8).
- Chaque jour contient une **liste de plages** : ça permet une pause de midi ; une liste vide `[]` veut dire « fermé ».
- Les heures sont au format `HH:MM` (24 h).
