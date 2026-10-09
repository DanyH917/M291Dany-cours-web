// Maquette cliquable DHgraphics — JavaScript natif, données inventées
const projets = [
  { id: 'cafe-du-port', titre: 'Café du Port', type: 'Identité visuelle', secteur: 'Restauration', lieu: 'Nyon', duree: '3 semaines', prix: 'dès 900 CHF',
    besoin: 'Nouveau logo, menu et enseigne pour la réouverture.', forts: 'Lisible de loin, déclinable sur tous les supports.', faibles: 'Peu de couleurs pour Instagram.',
    visuel: 'linear-gradient(135deg,#C2410C 0 40%,#1F1F1F 40% 60%,#F4E9DC 60%)' },
  { id: 'atelier-velo', titre: 'Atelier Vélo Libre', type: 'Logo', secteur: 'Commerce', lieu: 'Lausanne', duree: '1 semaine', prix: 'dès 350 CHF',
    besoin: 'Un logo simple pour les vitrines et les autocollants.', forts: 'Reconnaissable en petit format.', faibles: 'Version noir et blanc moins forte.',
    visuel: 'radial-gradient(circle at 30% 40%,#1F1F1F 0 22%,#F4E9DC 23%)' },
  { id: 'mx-team-broye', titre: 'MX Team Broye', type: 'Kit déco moto', secteur: 'Sport', lieu: 'Payerne', duree: '2 semaines', prix: 'dès 450 CHF',
    besoin: 'Kit déco pour 6 motos du club avec numéros et sponsors.', forts: 'Très visible en course.', faibles: 'Beaucoup de logos sponsors à placer.',
    visuel: 'linear-gradient(90deg,#C2410C 0 33%,#FAF7F2 33% 66%,#2B2B2B 66%)' },
  { id: 'smash-burger', titre: 'Smash Burger Bar', type: 'Identité visuelle', secteur: 'Restauration', lieu: 'Vevey', duree: '4 semaines', prix: 'dès 1 100 CHF',
    besoin: 'Identité complète pour un food truck : logo, carte, camion.', forts: 'Ambiance forte et cohérente.', faibles: 'Police de titre peu lisible en très petit.',
    visuel: 'linear-gradient(160deg,#1F1F1F 0 50%,#C2410C 50%)' },
  { id: 'boulangerie-chappuis', titre: 'Boulangerie Chappuis', type: 'Identité visuelle', secteur: 'Commerce', lieu: 'Yverdon', duree: '3 semaines', prix: 'dès 850 CHF',
    besoin: 'Moderniser l\'image d\'une boulangerie familiale.', forts: 'Garde l\'esprit artisanal.', faibles: 'Palette proche d\'autres boulangeries.',
    visuel: 'radial-gradient(circle at 70% 60%,#C2410C 0 18%,#F4E9DC 19%)' },
  { id: 'kit-enduro', titre: 'Kit Enduro 250', type: 'Kit déco moto', secteur: 'Sport', lieu: 'Bulle', duree: '1 semaine', prix: 'dès 280 CHF',
    besoin: 'Kit personnalisé pour un pilote amateur.', forts: 'Prêt à imprimer, gabarit exact.', faibles: 'Un seul modèle de moto.',
    visuel: 'linear-gradient(45deg,#2B2B2B 25%,#F4E9DC 25% 50%,#2B2B2B 50% 75%,#F4E9DC 75%)' },
];

const $ = (s) => document.querySelector(s);
let filtre = 'tous';

function afficherListe() {
  const q = $('#recherche').value.trim().toLowerCase();
  const liste = projets.filter((p) =>
    (filtre === 'tous' || p.type === filtre) &&
    (!q || [p.titre, p.type, p.secteur, p.lieu].join(' ').toLowerCase().includes(q)));
  $('#cartes').innerHTML = liste.map((p) => `
    <li class="carte">
      <a href="#projet/${p.id}">
        <span class="visuel" role="img" aria-label="Aperçu du projet ${p.titre}" style="background:${p.visuel}"></span>
        <span class="carte-texte">
          <span class="tag">${p.type}</span>
          <span class="carte-titre">${p.titre}</span>
          <span class="meta">${p.secteur} · ${p.lieu}</span>
        </span>
      </a>
    </li>`).join('');
  $('#compteur').textContent = `${liste.length} projet${liste.length > 1 ? 's' : ''} trouvé${liste.length > 1 ? 's' : ''}`;
  $('#vide').hidden = liste.length > 0;
}

function afficherFiche(id) {
  const p = projets.find((x) => x.id === id);
  if (!p) { location.hash = '#accueil'; return; }
  $('#titre-fiche').textContent = `${p.titre} — ${p.type}`;
  $('#fiche-visuel').style.background = p.visuel;
  $('#fiche-visuel').setAttribute('aria-label', `Visuel du projet ${p.titre}`);
  $('#fiche-infos').innerHTML = [['Client', `${p.titre}, ${p.lieu}`], ['Type', p.type], ['Durée', p.duree], ['Prix indicatif', p.prix]]
    .map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
  $('#fiche-texte').innerHTML = `<p><strong>Besoin :</strong> ${p.besoin}</p><p><strong>+ Points forts :</strong> ${p.forts}</p><p><strong>– Points faibles :</strong> ${p.faibles}</p>`;
  $('#btn-devis').href = `#devis/${p.id}`;
}

function router() {
  const [ecran, id] = location.hash.replace('#', '').split('/');
  document.querySelectorAll('.ecran').forEach((e) => { e.hidden = true; });
  let cible = '#ecran-accueil';
  if (ecran === 'projet') { afficherFiche(id); cible = '#ecran-fiche'; }
  else if (ecran === 'devis') {
    cible = '#ecran-devis';
    $('#form-devis').hidden = false; $('#succes').hidden = true;
    const p = projets.find((x) => x.id === id);
    if (p && !$('#projet').value) $('#projet').value = `Je souhaite un projet similaire à « ${p.titre} ».`;
  }
  else if (ecran === 'qui') cible = '#ecran-qui';
  $(cible).hidden = false;
  if (ecran) { const h = $(cible).querySelector('h1'); h.tabIndex = -1; h.focus(); }
  window.scrollTo(0, 0);
}

document.querySelectorAll('.chip').forEach((b) => b.addEventListener('click', () => {
  filtre = b.dataset.filtre;
  document.querySelectorAll('.chip').forEach((c) => c.setAttribute('aria-pressed', String(c === b)));
  afficherListe();
}));
$('#recherche').addEventListener('input', afficherListe);
$('#reset').addEventListener('click', () => { $('#recherche').value = ''; document.querySelector('[data-filtre="tous"]').click(); });

$('#form-devis').addEventListener('submit', (e) => {
  e.preventDefault();
  const checks = [['prenom', (v) => v.trim().length > 0], ['email', (v) => /.+@.+\..+/.test(v)], ['projet', (v) => v.trim().length > 5]];
  let premierErreur = null;
  checks.forEach(([id, ok]) => {
    const champ = $('#' + id); const valide = ok(champ.value);
    $('#err-' + id).hidden = valide;
    champ.setAttribute('aria-invalid', String(!valide));
    if (valide) champ.removeAttribute('aria-describedby'); else champ.setAttribute('aria-describedby', 'err-' + id);
    if (!valide && !premierErreur) premierErreur = champ;
  });
  if (premierErreur) { premierErreur.focus(); return; }
  $('#succes-titre').textContent = `Merci ${$('#prenom').value.trim()} ! Demande envoyée`;
  $('#form-devis').hidden = true; $('#succes').hidden = false; $('#succes').focus();
});

window.addEventListener('hashchange', router);
afficherListe();
router();
