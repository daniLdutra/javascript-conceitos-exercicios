let elemento = document.querySelector("#titulo-principal");

console.log("Altura " + elemento.offsetWidth); // considera as bordas;
console.log("Largura " + elemento.offsetHeight);

console.log("Altura " + elemento.clientWidth); // não considera as bordas;
console.log("Largura " + elemento.clientHeight);
