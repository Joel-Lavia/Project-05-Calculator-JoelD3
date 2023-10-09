// TODO: Faire la manipulation du DOM dans ce fichier
//cibler touts les bouttons
//cibler l'ecran
//1.Bloquer les bouttons physique
//2.rendre les bouttons cliquable
const screeninput = document.getElementById("input");
//je cible tout les elements des type bouttons, avec leurs classe et id 
const bouttons = document.querySelectorAll("button");
//je cible l'ecran qui va effectuer les calcules
const screenresult = document.getElementById("calcul");
for(let i = 0; i<bouttons.length ;i++){
const boutton = bouttons[i];
window.addEventListener("keydown",function(event){event.preventDefault()});

  
};


