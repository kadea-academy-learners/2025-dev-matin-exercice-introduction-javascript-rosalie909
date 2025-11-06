let salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste;
// Ecrivez votre code ici
salaireMensuel=500;
loyer=(salaireMensuel*30)/100;
nourriture=(salaireMensuel*20)/100;
transport=(salaireMensuel*10)/100;
autresDepenses=(75-salaireMensuel);
totalDepenses= loyer+nourriture+transport+autresDepenses;
reste=salaireMensuel-totalDepenses;
if (reste>=100)
{
  console.log("Budget bien géré");
}
else{
  console.log("Attention, budget serré");
}
//----------------------------------------
let loisir;

loisir=(salaireMensuel*15)/100;

totalDepenses= loyer+nourriture+transport+autresDepenses+loisir;
reste=salaireMensuel-totalDepenses;
//---------------------------
let pourcentageloyer, pourcentagenourriture,pourcentagetransport,pourcentageautresdepenses,pourcentageloisirs;

pourcentageloyer =(loyer/salaireMensuel)*100;
pourcentagenourriture=(nourriture/salaireMensuel)*100;
pourcentagetransport=(transport/salaireMensuel)*100;
pourcentageloisirs=(loisir/salaireMensuel)*100;
pourcentageautresdepenses=(autresDepenses/salaireMensuel)*100;

//------------------------
let newsalaire,augmentation;
augmentation=(salaireMensuel*10)/100;
newsalaire=salaireMensuel+augmentation;

loyer=(newsalaire*30)/100;
nourriture=(newsalaire*20)/100;
transport=(newsalaire*10)/100;
autresDepenses=(newsalaire-75);
loisir=(newsalaire*15)/100;
//----------------------------
totalDepenses= loyer+nourriture+transport+autresDepenses+loisir;
let SALAIRE;
SALAIRE=(newsalaire*90)/100;

if (totalDepenses>SALAIRE)
{
  console.log("Dépenses trop élevées, réduisez vos charges")
}
else{
  console.log("")
}



// Ne pas modifier le code ci-dessous
moduleexports = {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste,
};
