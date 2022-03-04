//Outra possibilidade de instanciar um objeto, no JS.

//a primeira letra é declarada em maiuscula
// function Cachorro(raca) {
//   this.raca = raca;
// }

// let husky = new Cachorro("Husky");

// console.log(husky.raca);

function Cachorro(raca, patas, cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
  this.uivar = function () {
    console.log("Auuuu");
  };
}

let husky = new Cachorro("Husky", 4, "cinza");
console.log(husky);

husky.uivar();
