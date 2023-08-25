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
let div;
let mutiplication;

// console.log(allbouttons);
allbouttons.onclick = function(event){
  //remplacer x par * et ÷ par /
  if(screen.value == "0"){
      event.preventDefault();
      screen.value = "";
      screen.value += event.target.innerHTML;
    }
  //le boutton AC doit reinitialiser les 2 ecrans
  // else if(event.target.innerHTML == "AC"){
  //   event.preventDefault();
  //   screen2.textContent= "";
  //   screen.value = "0";
  // }
  //quand on clique sur = que x soit remplacer par * et ÷ par /
  else if(event.target.innerHTML =="="){
    event.preventDefault();
    // if(event.target.innerHTML == "×"){
    //   op = event.replace("×","*");
    //   console.log(op);
    // }
    // screen2.innerHTML += eval(screen.value);
    // console.log(screen.value);
    // if(screen.value.includes('×') ){
    //   screen.value.replace("×","*");
    // }
    // else if(screen.value.includes("÷"))
    // {
    //   screen.value.replace("÷","/");
    // }
    // console.log({evevtValue: event.target.innerHTML, screenValue: screen.value});
    screen2.innerHTML += eval(screen.value);
    
  }
  else{
      event.preventDefault();
      screen.value += event.target.innerHTML;
    }
}
}

