<<<<<<< HEAD:2025-dev-matin-exercice-structure-conditionnelle-charles-ngalima-main/01-variables/exercice_5/main.js
// ecrire le code de conversion ici
let celsius=10;

// Conversion Celsius à Fahrenheit
function celsiusToFahrenheit(celsius) {
  // ecrire le code de conversion ici
  let fahrenheit = (celsius *9/5)+32;
  console.log(fahrenheit);
  // la ligne suivante ne doit pas être modifiée
  return fahrenheit;
=======
// Fonction de conversion Celsius -> Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
>>>>>>> 486ff92 (Exercice 9 terminé et 01-variables/exercice_1/main copy 3.js,01-variables/exercice_3/main.js,01-variables/exercice_3/main.js,01-variables/exercice_3/main.js,01-variables/exercice_4/main.js fichiers 5):01-variables/exercice_5/main.js
}

// Exemple d'utilisation (affiche dans la console)
let celsius = 25;
let resultatFahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C équivaut à ${resultatFahrenheit}°F.`);

// Export pour le test
module.exports = { celsiusToFahrenheit };
