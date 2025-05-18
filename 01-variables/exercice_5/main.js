// Fonction de conversion Celsius -> Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Exemple d'utilisation (affiche dans la console)
let celsius = 25;
let resultatFahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C équivaut à ${resultatFahrenheit}°F.`);

// Export pour le test
module.exports = { celsiusToFahrenheit };
