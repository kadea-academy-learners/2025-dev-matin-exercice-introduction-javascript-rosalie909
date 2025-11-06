
// Ecrivez votre code ici


let salaireMensuel = 500;

let loyer = salaireMensuel * 0.30;       
let nourriture = salaireMensuel * 0.20;  
let transport = salaireMensuel * 0.10;   
let autresDepenses = 50;
autresDepenses += 25;                    

let totalDepenses = loyer + nourriture + transport + autresDepenses;

let reste = salaireMensuel - totalDepenses;

console.log("Salaire mensuel :", salaireMensuel);
console.log("Loyer :", loyer);
console.log("Nourriture :", nourriture);
console.log("Transport :", transport);
console.log("Autres dépenses :", autresDepenses);
console.log("Total des dépenses :", totalDepenses);
console.log("Reste après dépenses :", reste);

// Ne pas modifier le code ci-dessous
module.exports = {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste,
};
