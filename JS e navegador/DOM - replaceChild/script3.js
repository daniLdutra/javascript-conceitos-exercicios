//Troca o elemento.

let novoElemento = document.createElement("p");

novoElemento.innerText = "Trocou h1 pelo p, usando replaceChild";

let heading = document.querySelector("#titulo-principal"); //trocou o h1 por uma tag p

let paiheading = heading.parentNode;
paiheading.replaceChild(novoElemento, heading); //passa o novo filho e o antigo que será substituidos
