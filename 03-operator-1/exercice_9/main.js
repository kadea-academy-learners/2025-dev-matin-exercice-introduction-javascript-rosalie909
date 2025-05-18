// main.js

const totalHeritage = 60000000 + 40000000 + 20000000; // 120 000 000 CDF

// Répartition en catégories
const premiereCategorie = totalHeritage * 0.75; // 75% pour les enfants (90 000 000)
const deuxiemeCategorie = totalHeritage * 0.25; // 25% pour conjoint + frères (30 000 000)

// Première catégorie : 3 parts égales (Paul, Marie, Alain)
// Alain décédé -> sa part est partagée à 50/50 entre Éric et Claire
const partEnfant = premiereCategorie / 3; // 30 000 000

const paul = partEnfant;  // 30 000 000
const marie = partEnfant; // 30 000 000
const eric = partEnfant / 2;   // 15 000 000
const claire = partEnfant / 2;  // 15 000 000

// Deuxième catégorie : 3 parts égales (épouse, Joseph, Sarah)
const partConjointFreres = deuxiemeCategorie / 3; // 10 000 000

const madameMukuna = partConjointFreres;  // 10 000 000
const joseph = partConjointFreres;        // 10 000 000
const sarah = partConjointFreres;         // 10 000 000

// Affichage console (optionnel)
console.log("Héritage de Paul :", paul, "CDF");
console.log("Héritage de Marie :", marie, "CDF");
console.log("Héritage d'Éric :", eric, "CDF");
console.log("Héritage de Claire :", claire, "CDF");
console.log("Héritage de Madame MUKUNA :", madameMukuna, "CDF");
console.log("Héritage de Joseph :", joseph, "CDF");
console.log("Héritage de Sarah :", sarah, "CDF");

// Export pour les tests
module.exports = {
  paul,
  marie,
  eric,
  claire,
  madameMukuna,
  joseph,
  sarah,
};

