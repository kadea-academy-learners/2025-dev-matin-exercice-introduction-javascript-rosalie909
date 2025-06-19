// Valeurs du patrimoine
let maison = 60000000;
let terrains = 40000000;
let liquidites = 20000000;

let patrimoineTotal = maison + terrains + liquidites;

// Part de chaque catégorie
let partPremiereCategorie = patrimoineTotal * 0.75;
let partDeuxiemeCategorie = patrimoineTotal * 0.25;

// Première catégorie : 3 parts égales (Paul, Marie, Alain)
// Alain est représenté par Eric et Claire à parts égales (1/2 chacun)
let partParEnfant = partPremiereCategorie / 3;
let partEric = partParEnfant / 2;
let partClaire = partParEnfant / 2;

// Deuxième catégorie : 3 parts égales (Madame Mukuna, Joseph, Sarah)
let partParMembreDeuxiemeCategorie = partDeuxiemeCategorie / 3;

// Parts individuelles
let paul = partParEnfant;
let marie = partParEnfant;
let eric = partEric;
let claire = partClaire;
let madameMukuna = partParMembreDeuxiemeCategorie;
let joseph = partParMembreDeuxiemeCategorie;
let sarah = partParMembreDeuxiemeCategorie;

