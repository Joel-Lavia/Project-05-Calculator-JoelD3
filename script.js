// TODO: Faire la manipulation du DOM dans ce fichier
//cibler touts les bouttons
//cibler l'ecran
const screen = document.getElementById("input");
// je cible tout les elements des type bouttons, avec leurs classe et id 
const bouttons = document.querySelectorAll(".numpad,#divideby,#times,#minus,#plus,#equals");
//je cible l'ecran qui va effectuer les calcules
const screen2 = document.getElementById("calcul");
let screenValue = "";

for(let i = 0; i<bouttons.length; i++){
//stocke tous les elements bouttons dans une  variable allbouttons
const allbouttons = bouttons[i];
//si on clique sur x qu'elle soit remplacer par *
allbouttons.onclick = function(event){
if(screen.value == "0"){
  event.preventDefault();
  screen.value = "";
  screen.value += event.target.innerHTML;
}
else if(event.target.innerHTML == "×"){
  event.preventDefault();
  event.target.innerHTML = "*";
}
else if(event.target.innerHTML == "÷"){
  event.preventDefault();
  event.target.innerHTML = "/";
}
else if(event.target.innerHTML == "C"){
  screen.value =screen.slice(0, -1);
}
else if (event.target.innerHTML == "AC") {
  event.preventDefault();
  screenValue = "";
  screen.value += defaultValue;
  screen2.value += screenValue;
}
else if(event.target.innerHTML == "="){
  event.preventDefault();
  screen2.innerHTML += eval(screen.value); 
}
else{
  event.preventDefault();
  screen.value += event.target.innerHTML;
}
}
}


