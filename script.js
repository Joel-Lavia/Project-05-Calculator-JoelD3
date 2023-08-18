// TODO: Faire la manipulation du DOM dans ce fichier
//cibler touts les bouttons
//cibler l'ecran
const screen = document.getElementById("input");
const bouttons = document.querySelectorAll("button");
for(let i = 0; i<bouttons.length; i++){
//stocke tous les elements bouttons dans une  variable allbouttons
const allbouttons = bouttons[i];
//creer une variable qui stocke le type  et une condition qui doit gerer ces type de bouttons
allbouttons.onclick = function(event){
  // if(document.querySelector("#plus")){
  //  const allsub = event.preventDefault();
  // }
// else 
if(screen.value == "0"){
  screen.value = "";
  screen.value += event.target.innerHTML;
}

else{
  screen.value += event.target.innerHTML;
}
// if(screen.value ==)

// }
}
}