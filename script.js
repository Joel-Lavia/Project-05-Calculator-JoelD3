// TODO: Faire la manipulation du DOM dans ce fichier
//cibler touts les bouttons
//cibler l'ecran
//1.Bloquer les bouttons physique(fait)

//2.rendre les bouttons numérique cliquable

/*3.Faire en sorte que quand il y'a un event onclick sur un operateur les données entrées
 dans le screeninput monte sur le screenresult*/
 //4.remplacer x par * et ÷ par / a partir de la methode replace 

const screenInput = document.getElementById("input");
//je cible tout les elements des type bouttons, avec leurs classe et id 
const bouttons = document.querySelectorAll("button");
//je cible l'ecran qui va effectuer les calcules
const screenHistorique = document.getElementById("calcul");
for(let i = 0; i<bouttons.length ;i++){
  const boutton = bouttons[i];
// cette event bloque les bouttons physique du clavier
   document.addEventListener("keydown",function(event){event.preventDefault()});
// cette event rend le boutton numérique cliquable et fait des operations 
   boutton.addEventListener("click",function(event){
   event.preventDefault();
   let valeurScreenHistorique;
//rends les boutton numerique cliquable
if(screenInput.value == "0"){
    screenInput.value ="";
    screenInput.value += event.target.innerText;
}
/*3.Faire en sorte que quand il y'a un event onclick sur un operateur les données entrées
 dans le screeninput monte sur le screenresult*/

/*cette condition fait en sorte que si on clique sur une des operations
que la première valeur saisie dans le ScreenInput monte sur le screenHistorique*/
else if(event.target.innerText == "+" || event.target.innerText == "-" || event.target.innerText == "×" || event.target.innerText == "÷"){
   //stocke la valeur du screenHistorique dans la variable valeurScreenHistorique
   valeurScreenHistorique = screenHistorique.innerText; 
   /*la variable screenResult stocke la concatenation de la valeur afficher 
   dans le screenInput.value et une des operations*/
   valeurScreenHistorique = `${screenInput.value} ${event.target.innerText}`;
   //screenHistorique.innertext afficher la valeur stockée dans la variable valeurScreenHistorique
   screenHistorique.innerText =valeurScreenHistorique;
   //vide la value de screeninput une fois les autres operations effectuer 
   screenInput.value = "";
}
//cette condition gère le bouton égale
 else if(event.target.innerText == "="){
   /*remplacer x par * et ÷ par / a partir de la methode replace 
    renvoie le resulat sur le screenInput*/

    //la variable resultatConcatenation stock la concantenation du screenHistorique de la précedente condition 
    //et celui de la valeur de l'input quand on appuie sur égale pour 
    let resultatConcatenation = `${screenHistorique.innerText}  ${screenInput.value} =`;
    //la variable resultatFinal concatene le screenHistorique et la valeur du screenInput
    let resultatFinal = screenHistorique.innerText + screenInput.value;
    /*screenHistorique.innerText renvoie la concatenation de la variable resultatConcatenation 
    dans le screenHistorique*/
    screenHistorique.innerText = resultatConcatenation;
    //ScreenInput.value revoie le resultat final dans le screenInput.value
    screenInput.value = eval(resultatFinal.replace("×", "*").replace("÷", "/"));  
}
 else {
    screenInput.value += event.target.innerText;
  }
});

};


