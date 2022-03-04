//Insere um nó antes do nó de referẽncia do método.
//Precisamos de um elemento para ser acionado.

let novoElemento = document.createElement("p");
let elementoAlvo = document.querySelector("#titulo-principal");
let elementoPai = document.querySelector("#container-principal");

elementoPai.insertBefore(novoElemento, elementoAlvo); //irá inserir um parágrafo antes do elemento alvo, no caso título.

novoElemento.innerText = "Algum texto";
