// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
A5 — Le nombre mystère (Niveau 3 — Avancé)

Objectif : construire un jeu complet avec while, prompt(), Number(), conditions et compteur.
Contexte : le jeu de la pause déjeuner : deviner un nombre entre 1 et 100 en 7 essais maximum.

Consignes :
1. Tire un nombre entier aléatoire entre 1 et 100 avec Math.random() et Math.floor().
2. Tant que le joueur n'a pas trouvé et qu'il lui reste des essais, demande un nombre avec prompt().
3. Refuse une saisie qui n'est pas un nombre (sans compter l'essai).
4. Réponds « plus grand », « plus petit » ou « trouvé en X essais ! ».
5. Si les 7 essais sont épuisés, révèle le nombre.

Résultat attendu :
un jeu jouable dans la console du navigateur, qui ne plante jamais, même si on tape « abc ».

Recherche (à rédiger dans RECHERCHES.md) :
Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

const nombreMystere = Math.floor(Math.random() * 100) + 1;

const maximumEssais = 7;

let essais = 0;
let trouve = false;
let abandon = false;

while (essais < maximumEssais && !trouve && !abandon) {

  const saisie = prompt(
    `Devine un nombre entre 1 et 100. Essai ${essais + 1}/${maximumEssais}`
  );

  if (saisie === null) {
    console.log("Partie abandonnée.");
    abandon = true;
    continue;
  }

  const texte = saisie.trim();

  if (texte === "") {
    console.log("Saisie invalide : entre un nombre.");
    continue;
  }

  const nombre = Number(texte);

  if (
    !Number.isInteger(nombre) ||
    nombre < 1 ||
    nombre > 100
  ) {
    console.log("Saisie invalide : entre un entier de 1 à 100.");
    continue;
  }

  essais++;

  if (nombre === nombreMystere) {
    trouve = true;
    console.log(`Trouvé en ${essais} essais !`);

  } else if (nombre < nombreMystere) {
    console.log("Plus grand");

  } else {
    console.log("Plus petit");
  }
}

if (!trouve && !abandon) {
  console.log(`Partie terminée ! Le nombre était ${nombreMystere}.`);
}

