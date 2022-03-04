//Além de propriedades, podemos criar a classe base já com métodos;
//Basta definir ao prototype o método desejado.

function Cachorro(raca) {
  this.raca = raca;
}
Cachorro.prototype.uivar = function () {
  console.log("Auuuu");
};

let pug = new Cachorro("Pug");
console.log(pug.raca);

pug.uivar();
