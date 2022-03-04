//Symbols age como uma constante na propriedade objetos.
//Não podem ser alterado e criada duas vezes.

class Cachorro {
  constructor(raca) {
    this.raca = raca;
  }
}

let patas = Symbol();

Cachorro.prototype[patas] = 4;

console.log(Cachorro.prototype[patas]);
