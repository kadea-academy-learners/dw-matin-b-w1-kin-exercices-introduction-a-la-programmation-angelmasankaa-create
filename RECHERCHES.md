# RECHERCHES — Semaine 13

> Pour chaque exercice : reformule avec tes mots (pas de copier-coller), ajoute un test que tu as exécuté toi-même,
> et cite une source précise (une page, pas juste « Google »). MDN en français est la référence.
> Si tu as utilisé une IA, indique ton prompt et vérifie sa réponse sur MDN.
> Ne modifie pas les titres `## F1 — …` : ils servent à l'évaluation automatique.

## F1 — Ma carte d'apprenant

**Question :** Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

En JavaScript, typeof null renvoie "object" à cause d'une ancienne particularité du langage. Au début de JavaScript, les valeurs étaient représentées d'une manière qui a provoqué cette confusion. Ce comportement a été conservé pour ne pas casser les anciens programmes. Pourtant, null représente bien l'absence volontaire d'une valeur, et non un objet.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
console.log(typeof null);
// Résultat attendu : "object"

console.log(null === null);
// Résultat attendu : true

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/null


**IA utilisée ? (prompt + vérification sur MDN) :** oui
J'ai demandé à ChatGPT de m'aider à comprendre plus facilement la particularité de typeof null en prenant les explication sur MDN 

## F2 — Le convertisseur de saisie

**Question :** Qu'est-ce que NaN, et pourquoi NaN === NaN renvoie false ? Quelle fonction utiliser pour le détecter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

NaN signifie Not a Number cette valeur apparaît lorsqu'un calcul numérique ne peut pas produire un nombre valide en JavaScript NaN est particulier car il n'est égal à aucune valeur même pas à lui-même Pour vérifier si une valeur est NaN on peut utiliser Number.isNaN().

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```console.log(Number("bonjour"));
// Résultat attendu : NaN

console.log(NaN === NaN);
// Résultat attendu : false

console.log(Number.isNaN(Number("bonjour")));
// Résultat attendu : true

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN

**IA utilisée ? (prompt + vérification sur MDN) :** oui
 J'ai utilisé le prompt :  Aide-moi à comprendre plus facilement en te basant sur La documentation MDN le fonctionnement de NaN et de Number.isNaN().
 
## F3 — Pair ou impair : le tirage des tickets

**Question :** Que renvoie -7 % 2 ? Déduis-en pourquoi il vaut mieux tester % 2 !== 0 plutôt que % 2 === 1 pour détecter un nombre impair.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

L'opérateur % permet d'obtenir le reste d'une division. Quand on écrit -7 % 2, JavaScript renvoie -1. Cela signifie qu'un nombre impair négatif ne donne pas forcément 1 comme reste. Il est donc préférable d'utiliser % 2 !== 0 pour reconnaître tous les nombres impairs, positifs comme négatifs.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```console.log(-7 % 2);
// Résultat attendu : -1

console.log(-7 % 2 === 1);
// Résultat attendu : false

console.log(-7 % 2 !== 0);
// Résultat attendu : true

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Remainder

**IA utilisée ? (prompt + vérification sur MDN) :** OUI 
ChatGPT m'a aidée à simplifier l'explication du modulo. J'ai ensuite vérifié sur MDN pourquoi le reste d'une division peut être négatif.

## F4 — Le contrôleur du bus

**Question :** Peut-on enchaîner plusieurs ternaires ? Pourquoi est-ce souvent déconseillé ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...Oui on peut utiliser plusieurs opérateurs ternaires les uns à la suite des autres cela permet de vérifier plusieurs conditions dans une seule expression mais lorsque les conditions deviennent nombreuses le code est plus difficile à lire dans ce cas je préfère utiliser if else if et else pour mieux comprendre chaque situation

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```const age = 16;

const categorie = age < 12
  ? "Enfant"
  : age < 18
    ? "Adolescent"
    : "Adulte";

console.log(categorie);
// Résultat attendu : "Adolescent"

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_operator

**IA utilisée ? (prompt + vérification sur MDN) :** oui 
J'ai utilisé ChatGPT pour mieux comprendre comment enchaîner plusieurs conditions ternaires La documentation MDN m'a permis de vérifier leur fonctionnement et de comprendre pourquoi une structure if...else est parfois plus lisible

## F5 — Ma première fonction fléchée

**Question :** Quand peut-on enlever les parenthèses autour des paramètres, et quand peut-on enlever return et les accolades ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...Dans une fonction fléchée on peut enlever les parenthèses lorsqu'il y a un seul paramètre simple si la fonction n'a aucun paramètre ou en possède plusieurs les parenthèses sont nécessaires. On peut également enlever les accolades et le mot-clé return lorsque la fonction contient une seule expression à retourner. Cela permet d'écrire des fonctions plus courtes.

**Mon test dans la console :**
const carre = nombre => nombre * nombre;

console.log(carre(5));
// Résultat attendu : 25

const addition = (a, b) => a + b;

console.log(addition(3, 4));
// Résultat attendu : 7
```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :**https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions 

**IA utilisée ? (prompt + vérification sur MDN) :** oui
 ChatGPT m'a aidée à comprendre les différentes écritures d'une fonction fléchée J'ai ensuite vérifié sur MDN dans quels cas les parenthèses les accolades et le mot-clé return peuvent être supprimés

## F6 — Le compte à rebours

**Question :** À quoi sert le mot-clé continue ? Quelle différence avec break ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

... Le mot-clé continue permet de passer directement à l'itération suivante d'une boucle sans exécuter le reste du code de l'itération actuelle. En revanche, break arrête complètement la boucle. J'utilise donc continue lorsque je veux ignorer une valeur et break lorsque je veux arrêter le traitement.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}

// Résultat attendu : 1, 2, 4, 5

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/continue

**IA utilisée ? (prompt + vérification sur MDN) :** oui 
J'ai demandé à ChatGPT de m'expliquer simplement la différence entre continue et break J'ai ensuite consulté MDN pour confirmer que continue passe à l'itération suivante alors que break interrompt la boucle

## M1 — FizzBuzz kinois

**Question :** Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...FizzBuzz est un exercice connu dans les entretiens de développeurs parce qu'il permet de vérifier les bases de la programmation. Il montre si une personne comprend les conditions, les boucles et les opérateurs comme le modulo. Même si l'exercice paraît simple, il faut réfléchir à l'ordre des conditions pour obtenir les bons résultats.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```for (let nombre = 1; nombre <= 15; nombre++) {
  if (nombre % 3 === 0 && nombre % 5 === 0) {
    console.log("FizzBuzz");
  } else if (nombre % 3 === 0) {
    console.log("Fizz");
  } else if (nombre % 5 === 0) {
    console.log("Buzz");
  }
}

// Résultats attendus :
// 3  → Fizz
// 5  → Buzz
// 6  → Fizz
// 9  → Fizz
// 10 → Buzz
// 12 → Fizz
// 15 → FizzBuzz

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/if...else

**IA utilisée ? (prompt + vérification sur MDN) :** oui
ChatGPT m'a aidée à comprendre l'intérêt de FizzBuzz dans l'apprentissage de la programmation J'ai vérifié sur MDN le fonctionnement des conditions if, else if et else, qui permettent de résoudre cet exercice. La popularité de FizzBuzz en entretien est une information distincte de cette documentation

## M2 — Le distributeur automatique (DAB)

**Question :** Comment afficher 75000 sous la forme 75 000 avec toLocaleString() ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...La méthode toLocaleString() permet de présenter un nombre selon les règles d'écriture d'une langue. Par exemple, en français, on sépare les milliers avec un espace. Pour afficher 75000 sous la forme 75 000, il suffit d'utiliser toLocaleString("fr-FR"). Cela rend les montants plus faciles à lire.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```const montant = 75000;

console.log(montant.toLocaleString("fr-FR"));

// Résultat attendu : "75 000"

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString

**IA utilisée ? (prompt + vérification sur MDN) :** oui

J'ai utilisé ChatGPT pour comprendre comment présenter correctement un montant en JavaScript La documentation MDN m'a permis de confirmer que toLocaleString("fr-FR") adapte l'affichage d'un nombre aux conventions françaises.

## M3 — Le détecteur de champs vides (Truthy / Falsy)

**Question :** Quelle est la liste complète des valeurs falsy en JavaScript ? (Indice : il y en a plus que dans cet exercice.)

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...En JavaScript une valeur falsy est une valeur considérée comme fausse lorsqu'on l'utilise dans une condition Les valeurs falsy sont false, 0, -0, 0n, "", null, undefined et NaN. Il existe aussi un cas particulier dans les navigateurs document all Les autres valeurs sont généralement considérées comme truthy, même un tableau ou un objet vide

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```console.log(Boolean(0));
// Résultat attendu : false

console.log(Boolean(""));
// Résultat attendu : false

console.log(Boolean(null));
// Résultat attendu : false

console.log(Boolean([]));
// Résultat attendu : true

console.log(Boolean({}));
// Résultat attendu : true

**Source :** https://developer.mozilla.org/fr/docs/Glossary/Falsy

**IA utilisée ? (prompt + vérification sur MDN) :** oui
'avais besoin de mieux distinguer les valeurs truthy et falsy ChatGPT m'a donné une explication simplifiée puis j'ai consulté MDN pour vérifier la liste complète des valeurs considérées comme fausses dans une condition

## M4 — Le score par défaut : || contre ??

**Question :** Que fait l'opérateur ?? (coalescence des nuls) et en quoi est-il différent de || ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

... L'opérateur ?? permet de donner une valeur par défaut lorsqu'une variable vaut null ou undefined L'opérateur || est différent car il remplace toutes les valeurs falsy, comme 0, false ou une chaîne vide Si je veux conserver un score de zéro, il est donc préférable d'utiliser ??

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```const score = 0;

console.log(score || 10);
// Résultat attendu : 10

console.log(score ?? 10);
// Résultat attendu : 0

const autreScore = null;

console.log(autreScore ?? 10);
// Résultat attendu : 10

**Source :**https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing 

**IA utilisée ? (prompt + vérification sur MDN) :** oui

ChatGPT m'a aidée à comprendre pourquoi || et ?? ne donnent pas toujours les mêmes résultats. J'ai confirmé sur MDN que ?? remplace uniquement null et undefined, contrairement à ||, qui prend en compte toutes les valeurs falsy.

## M5 — La vitre teintée (portée de bloc)

**Question :** Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...On évite généralement var dans le JavaScript moderne parce qu'il ne respecte pas la portée des blocs comme let et const Une variable déclarée avec var appartient à la fonction qui la contient ou à la portée globale si elle est déclarée en dehors d'une fonction. Le hoisting signifie que les déclarations sont prises en compte avant l'exécution du code. Avec var une variable peut donc être accessible avant sa déclaration avec la valeur undefined ce qui peut provoquer des erreurs difficiles à comprendre

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```{
  var ancienneVariable = "Bonjour";
  let nouvelleVariable = "Mbote";
}

console.log(ancienneVariable);
// Résultat attendu : "Bonjour"

console.log(typeof nouvelleVariable);
// Résultat attendu : "undefined"

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/var

**IA utilisée ? (prompt + vérification sur MDN) :** oui
J'ai demandé une explication plus accessible sur la portée des variables et le hoisting. En consultant MDN, j'ai mieux compris les particularités de var et les raisons pour lesquelles let et const sont généralement préférés

## M6 — Le détective du return

**Question :** Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

... L'insertion automatique de point-virgule, appelée ASI, est un mécanisme de JavaScript qui ajoute parfois un point-virgule lorsqu'il manque Par exemple, si on écrit return puis qu'on passe à la ligne, JavaScript peut considérer que l'instruction est terminée La fonction risque alors de renvoyer undefined au lieu de la valeur souhaitée C'est pourquoi il vaut mieux écrire la valeur à retourner sur la même ligne que return

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```const mauvaisRetour = () => {
  return
  100;
};

console.log(mauvaisRetour());
// Résultat attendu : undefined

const bonRetour = () => {
  return 100;
};

console.log(bonRetour());
// Résultat attendu : 100

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/return

**IA utilisée ? (prompt + vérification sur MDN) :** oui
ChatGPT m'a expliqué le mécanisme d'insertion automatique des points-virgules avec un exemple simple J'ai ensuite vérifié sur MDN pourquoi un retour à la ligne immédiatement après return peut modifier le résultat d'une fonction

## M7 — La tirelire numérique

**Question :** Cite tous les opérateurs d'affectation composée (+=, -=…) et donne un exemple pour chacun.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...Les opérateurs d'affectation composée permettent de modifier une variable sans réécrire son nom plusieurs fois Par exemple solde += 1000 revient à écrire solde = solde + 1000 Il existe des opérateurs pour les calculs, les opérations sur les bits et les affectations logiques Ils permettent d'écrire du code plus court tout en gardant le même principe

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```let solde = 5000;

solde += 2000;
console.log(solde);
// Résultat attendu : 7000

solde -= 1000;
console.log(solde);
// Résultat attendu : 6000

solde *= 2;
console.log(solde);
// Résultat attendu : 12000

solde /= 3;
console.log(solde);
// Résultat attendu : 4000

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_and_operators#op%C3%A9rateurs_daffectation

**IA utilisée ? (prompt + vérification sur MDN) :** oui
J'ai utilisé ChatGPT pour comprendre plus facilement les opérateurs d'affectation composée J'ai ensuite consulté MDN pour retrouver les différents opérateurs et vérifier comment ils permettent de modifier une variable

## M8 — La batterie qui se décharge

**Question :** Quelle est la différence entre while et do...while ? Que donnerait l'étape 4 avec un do...while ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...
La boucle while vérifie sa condition avant d'exécuter le code. Si la condition est fausse dès le départ, la boucle ne s'exécute pas. Avec do...while, le code est exécuté une première fois avant que la condition soit vérifiée. Dans l'exercice de la batterie, cela signifie qu'une décharge pourrait se produire une fois même si la batterie est déjà à 20 % ou moins.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```let batterie = 20;

while (batterie > 20) {
  batterie -= 15;
}

console.log(batterie);
// Résultat attendu : 20

let autreBatterie = 20;

do {
  autreBatterie -= 15;
} while (autreBatterie > 20);

console.log(autreBatterie);
// Résultat attendu : 5

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/do...while

**IA utilisée ? (prompt + vérification sur MDN) :** oui
ChatGPT m'a aidée à comparer les boucles while et do...while La documentation MDN m'a permis de confirmer que do...while exécute son bloc au moins une fois même lorsque la condition est fausse au départ

## A1 — Kadea Express v2 : le calculateur de livraison

**Question :** Pourquoi 0.1 + 0.2 ne donne-t-il pas 0.3 en JavaScript ? Et pourquoi toFixed() est un piège si on veut continuer à calculer ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...En JavaScript les nombres décimaux sont généralement stockés en binaire avec une précision limitée Certains nombres comme 0.1 et 0.2, ne peuvent pas être représentés exactement, ce qui explique pourquoi leur addition ne donne pas exactement 0.3. La méthode toFixed() permet d'arrondir l'affichage d'un nombre, mais elle renvoie une chaîne de caractères Il faut donc faire attention si on veut continuer les calculs avec ce résultat

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```console.log(0.1 + 0.2);
// Résultat attendu : 0.30000000000000004

const resultat = (0.1 + 0.2).toFixed(2);

console.log(resultat);
// Résultat attendu : "0.30"

console.log(typeof resultat);
// Résultat attendu : "string"

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

**IA utilisée ? (prompt + vérification sur MDN) :** oui
J'ai demandé à ChatGPT de simplifier l'explication des erreurs de précision avec les nombres décimaux J'ai ensuite consulté MDN pour comprendre pourquoi 0.1 + 0.2 ne donne pas exactement 0.3 et pourquoi toFixed() renvoie une chaîne de caractères

## A2 — Le moteur de paie v2

**Question :** La méthode .reduce() n'a pas été vue en atelier. Explique ce qu'elle fait et réécris l'étape 2 avec elle.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...La méthode .reduce() permet de parcourir un tableau pour obtenir une seule valeur à partir de ses éléments. Par exemple, on peut l'utiliser pour additionner les heures travaillées pendant une semaine. Elle utilise un accumulateur qui conserve le résultat au fur et à mesure. Cela évite d'écrire une boucle complète pour effectuer une addition.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```const heures = [8, 9, 10, 8, 7];

const totalHeures = heures.reduce(
  (total, heure) => total + heure,
  0
);

console.log(totalHeures);
// Résultat attendu : 42

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

**IA utilisée ? (prompt + vérification sur MDN) :** oui
Comme nous n'avions pas encore étudié reduce() en atelier j'ai utilisé ChatGPT pour comprendre son fonctionnement J'ai ensuite consulté MDN pour vérifier le rôle de l'accumulateur et la manière dont cette méthode permet d'obtenir une seule valeur à partir d'un tableau

## A3 — L'inventaire en console

**Question :** Comment afficher seulement les colonnes nom et stock avec console.table() ? Et que renvoient .find() et .filter() quand rien ne correspond ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...La méthode console.table() permet d'afficher des données sous forme de tableau dans la console. Pour afficher uniquement les colonnes nom et stock, on peut les préciser dans un deuxième argument. La méthode .find() renvoie le premier élément correspondant à une condition ou undefined si rien ne correspond. En revanche, .filter() renvoie un tableau vide [] lorsqu'aucun élément ne correspond.

**Mon test dans la console :** 

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```const produits = [
  { nom: "Riz", stock: 10, prix: 5000 },
  { nom: "Sucre", stock: 5, prix: 3000 }
];

console.table(produits, ["nom", "stock"]);

console.log(produits.find(produit => produit.nom === "Lait"));
// Résultat attendu : undefined

console.log(produits.filter(produit => produit.stock > 20));
// Résultat attendu : []

**Source :** https://developer.mozilla.org/fr/docs/Web/API/console/table_static
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


**IA utilisée ? (prompt + vérification sur MDN) :** oui
ChatGPT m'a aidée à comprendre les différences entre les méthodes utilisées pour afficher et rechercher des produits J'ai vérifié sur MDN comment sélectionner des colonnes avec console.table() et ce que renvoient .find() et .filter() lorsqu'aucun élément ne correspond

## A4 — Le classement de la promo

**Question :** Comment classer le bulletin de la meilleure à la moins bonne moyenne avec .sort() ? Pourquoi .sort() modifie-t-il le tableau d'origine, et comment l'éviter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...La méthode .sort() permet de trier les éléments d'un tableau. Pour classer les apprenants de la meilleure à la moins bonne moyenne, on peut comparer les moyennes en faisant b.moyenne - a.moyenne. Il faut cependant savoir que .sort() modifie directement le tableau d'origine. Pour éviter cela, on peut créer une copie avec [...tableau] avant de faire le tri

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```const apprenants = [
  { nom: "Sarah", moyenne: 12 },
  { nom: "Grace", moyenne: 17 },
  { nom: "David", moyenne: 15 }
];

const classement = [...apprenants].sort(
  (a, b) => b.moyenne - a.moyenne
);

console.log(classement.map(apprenant => apprenant.nom));
// Résultat attendu : ["Grace", "David", "Sarah"]

console.log(apprenants[0].nom);
// Résultat attendu : "Sarah"

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

**IA utilisée ? (prompt + vérification sur MDN) :** oui
J'ai utilisé ChatGPT pour mieux comprendre le tri des moyennes avec sort(). La documentation MDN m'a permis de vérifier que cette méthode modifie le tableau d'origine et qu'il est possible d'éviter cela en travaillant sur une copie

## A5 — Le nombre mystère

**Question :** Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...La recherche dichotomique consiste à réduire progressivement les possibilités en divisant l'intervalle de recherche en deux. Par exemple, pour trouver un nombre entre 1 et 100, on peut commencer par proposer 50. Selon que le nombre est plus grand ou plus petit, on élimine environ la moitié des possibilités à chaque essai. Comme 2⁷ = 128, sept comparaisons suffisent pour identifier un nombre parmi 100 possibilités, à condition de toujours choisir le milieu de l'intervalle restant.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```const nombrePossibilites = 100;

const essaisNecessaires = Math.ceil(
  Math.log2(nombrePossibilites)
);

console.log(essaisNecessaires);
// Résultat attendu : 7

console.log(2 ** 7);
// Résultat attendu : 128

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/log2
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil

**IA utilisée ? (prompt + vérification sur MDN) :** oui
J'ai demandé à ChatGPT de m'expliquer plus simplement le principe de la recherche dichotomique J'ai ensuite utilisé la documentation MDN pour vérifier le calcul avec Math.log2() et Math.ceil() qui permet de déterminer le nombre maximal d'essais nécessaires
