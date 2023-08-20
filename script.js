// TODO: Faire la manipulation du DOM dans ce fichier
//cibler touts les bouttons
//cibler l'ecran
const screen = document.getElementById("input");
// je cible tout les elements des type bouttons, avec leurs classe et id 
const bouttons = document.querySelectorAll(".numpad,#divideby,#times,#minus,#plus,#equals");
//je cible l'ecran qui va effectuer les calcules
const screen2 = document.getElementById("calcul");

for(let i = 0; i<bouttons.length; i++){
//stocke tous les elements bouttons dans une  variable allbouttons
const allbouttons = bouttons[i];
// console.log(allbouttons);
allbouttons.onclick = function(event){
   
if(screen.value == "0"){
  event.preventDefault();
  screen.value = "";
  screen.value += event.target.innerHTML;
}
else{
  event.preventDefault();
  screen.value += event.target.innerHTML;
}
// si on clique sur = -+/* que le boutton  renvoie les chiffres au second ecran
if(screen.value == "="){
  screen2.innerHTML += screen.value;
  event.preventDefault();
}
else if(screen.value == "+"){
  event.preventDefault(event);
  screen2.innerHTML +=screen.value; 
}
}
}

 


