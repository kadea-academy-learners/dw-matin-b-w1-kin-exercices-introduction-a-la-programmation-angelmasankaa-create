# 📊 Évaluation automatique — Semaine 13 (JavaScript)

> Générée le 2026-10-16 02:06 UTC · commit `eaebcf7` · évaluation déterministe basée uniquement sur le cahier d'exercices et le barème.

## Note finale : **10 / 15**

Exercices : **92 / 95** · Parfaits : 17 / 19 · Non rendus : 0

## 1. Résultat par exercice

| Exercice | Note /5 | Statut | Tests | Recherche /3 | Commit | Feedback |
|---|:-:|---|:-:|:-:|:-:|---|
| **F1** — Ma carte d'apprenant | **3** | 🟠 Résultat incorrect | 4/5 | 0 | ✅ | Ta fiche ne correspond pas au résultat attendu : vérifie la phrase et les 6 typeof (n'oublie pas que typeof null renvoie « object »).<br>• La phrase « Je m'appelle …, j'ai … ans et j'habite à … » n'est pas affichée.<br>• Justifie en commentaire le choix de `const` ou `let` pour tes variables.<br>📚 Recherche non rédigée. |
| **F2** — Le convertisseur de saisie | **5** | ✅ Parfait | 3/3 | 0 | ✅ | Parfait ! Le piège de la concaténation est identifié, corrigé avec Number() et tes prédictions sont vérifiées.<br>📚 Recherche non rédigée. |
| **F3** — Pair ou impair : le tirage des tickets | **5** | ✅ Parfait | 3/3 | 0 | ✅ | Parfait ! Modulo et égalité stricte maîtrisés, les cas 17, 24 et 0 sont corrects.<br>📚 Recherche non rédigée. |
| **F4** — Le contrôleur du bus | **5** | ✅ Parfait | 5/5 | 0 | ✅ | Parfait ! Ternaire simple et conditions à trois branches corrects, bornes respectées.<br>📚 Recherche non rédigée. |
| **F5** — Ma première fonction fléchée | **5** | ✅ Parfait | 4/4 | 0 | ✅ | Parfait ! Fonctions fléchées concises avec retour implicite et gabarit littéral.<br>📚 Recherche non rédigée. |
| **F6** — Le compte à rebours | **5** | ✅ Parfait | 2/2 | 0 | ✅ | Parfait ! Les 3 parties de la boucle `for` sont maîtrisées et `continue` est bien placé.<br>📚 Recherche non rédigée. |
| **M1** — FizzBuzz kinois | **5** | ✅ Parfait | 3/3 | 0 | ✅ | Parfait ! Conditions ordonnées du cas le plus restrictif au plus général, résultat exact de 1 à 30.<br>📚 Recherche non rédigée. |
| **M2** — Le distributeur automatique (DAB) | **5** | ✅ Parfait | 9/9 | 0 | ✅ | Parfait ! Règles vérifiées dans le bon ordre, cas limites gérés, la fonction renvoie son message.<br>📚 Recherche non rédigée. |
| **M3** — Le détecteur de champs vides (Truthy / Falsy) | **5** | ✅ Parfait | 11/11 | 0 | ✅ | Parfait ! Les valeurs truthy / falsy sont maîtrisées, ternaire sans comparaison.<br>📚 Recherche non rédigée. |
| **M4** — Le score par défaut : \|\| contre ?? | **5** | ✅ Parfait | 5/5 | 0 | ✅ | Parfait ! Le piège de `0 \|\| 'aucun'` est expliqué et corrigé à bon escient avec `??`.<br>📚 Recherche non rédigée. |
| **M5** — La vitre teintée (portée de bloc) | **5** | ✅ Parfait | 3/3 | 0 | ✅ | Parfait ! Portée de bloc respectée, plus aucune ReferenceError et l'arrêt du programme est expliqué.<br>📚 Recherche non rédigée. |
| **M6** — Le détective du return | **5** | ✅ Parfait | 5/5 | 0 | ✅ | Parfait ! return et console.log sont bien distingués, le piège de l'ASI est corrigé et expliqué.<br>📚 Recherche non rédigée. |
| **M7** — La tirelire numérique | **5** | ✅ Parfait | 3/3 | 0 | ✅ | Parfait ! Accumulateur bien initialisé, 12 tours exacts et bonus toutes les 4 semaines : 27000 FC.<br>📚 Recherche non rédigée. |
| **M8** — La batterie qui se décharge | **5** | ✅ Parfait | 3/3 | 0 | ✅ | Parfait ! Boucle while avec condition d'arrêt sûre et compteur : 6 h, 10 %.<br>📚 Recherche non rédigée. |
| **A1** — Kadea Express v2 : le calculateur de livraison | **5** | ✅ Parfait | 9/9 | 0 | ✅ | Parfait ! Règles métier, paramètre par défaut, TVA et arrondi corrects, y compris aux bornes.<br>📚 Recherche non rédigée. |
| **A2** — Le moteur de paie v2 | **5** | ✅ Parfait | 7/7 | 0 | ✅ | Parfait ! Accumulateur avec .forEach(), heures supplémentaires et recherche du maximum corrects.<br>📚 Recherche non rédigée. |
| **A3** — L'inventaire en console | **5** | ✅ Parfait | 7/7 | 0 | ✅ | Parfait ! Tableau d'objets maîtrisé avec filter, map et find, cas undefined géré et vérifié avec console.table().<br>📚 Recherche non rédigée. |
| **A4** — Le classement de la promo | **5** | ✅ Parfait | 9/9 | 0 | ✅ | Parfait ! Fonctions, boucles, conditions et méthodes de tableau bien combinées ; bulletin vérifié avec console.table().<br>📚 Recherche non rédigée. |
| **A5** — Le nombre mystère | **4** | 🟡 Règles non respectées | 4/4 | 0 | ✅ | Le jeu fonctionne, mais respecte les consignes : while, Math.random() + Math.floor(), prompt() + Number(), détection de NaN, gabarits littéraux.<br>• Détecte une saisie invalide avec `Number.isNaN()` (ou `isNaN()`).<br>📚 Recherche non rédigée. |

## 2. Barème officiel (/15)

| Critère | Niveau | Points /3 | Feedback |
|---|---|:-:|---|
| Fondations : variables, types primitifs et conversions | Compétent : Satisfaisant (69 %) | **2** | Déclarations correctes avec const / let, aucun var. Les 5 types primitifs sont reconnus. Le piège '5' + 3 est identifié et corrigé avec Number().<br>_Preuves : F1, F2, M3_ |
| Logique conditionnelle et opérateurs | Compétent : Satisfaisant (80 %) | **2** | if / else if / else corrects, égalité stricte === systématique, modulo maîtrisé (pair / impair, multiples). Ternaire simple fonctionnel.<br>_Preuves : F3, F4, M1, M2, M4_ |
| Fonctions, return et portée | Compétent : Satisfaisant (80 %) | **2** | Les fonctions renvoient leur résultat avec return (pas de console.log à l'intérieur) et sont appelées avec les bons arguments. Portée de bloc respectée : aucune ReferenceError.<br>_Preuves : F5, M2, M5, M6_ |
| Boucles, accumulateurs et méthodes de tableau | Avancé (100 %) | **3** | Boucle adaptée choisie (for / while). Tableaux d'objets traités avec .filter(), .map(), .find() et un return dans chaque callback ; cas undefined de .find() géré ; console.table() utilisé.<br>_Preuves : F6, M1, M7, M8 ; niveau Avancé : A2, A3, A4, A5_ |
| Recherche, qualité du code et restitution | En développement : À améliorer (50 %) | **1** | Recherches partielles ou sans test. Peu de commits (un seul commit en fin de semaine).<br>_Recherches 0 % · commits par exercice 100 % · règles de code 100 %_ |
| **Total** | | **10 / 15** | |

## Comment lire cette évaluation

| Statut | Signification | Note /5 |
|---|---|:-:|
| ⬜ Non rendu | Fichier absent ou zone de travail vide / non modifiée | 0 |
| ❌ Erreur d'exécution | SyntaxError, ReferenceError, exception ou boucle infinie (> 2 s) | 1 |
| 🟠 Résultat incorrect | Au moins un résultat attendu du cahier n'est pas obtenu | 2 (3 si au moins la moitié des tests passe) |
| 🟡 Règles non respectées | Résultats justes, mais var, ==, concaténation, `function`, `let` inutile ou notion imposée absente | 4 |
| ✅ Parfait | Résultats justes et toutes les règles respectées | 5 |

Recherche /3 : 1 point pour une réponse rédigée (≥ 120 caractères), 1 point pour un test exécuté, 1 point pour un lien source précis. Commit : un commit dont le message cite l'exercice (ex. `feat: M2 dab`).

> ℹ️ L'explication orale de ton code reste évaluée par ton coach. Corrige, commit, merge sur `develop` et push : l'évaluation est relancée automatiquement.
