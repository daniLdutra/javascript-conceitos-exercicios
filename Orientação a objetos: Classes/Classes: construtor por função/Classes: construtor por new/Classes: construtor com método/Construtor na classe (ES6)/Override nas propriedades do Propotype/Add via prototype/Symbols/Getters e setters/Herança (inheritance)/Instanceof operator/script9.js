// Verifica quem é o pai do objeto X;

class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

class Cachorro extends Mamifero {
  // cachorro se torna filho do mamífero com o método extends
  constructor(patas, raca) {
    super(patas, patas); // super muda o valor lá de cima
    this.raca = raca;
  }
}

let pug = new Cachorro(4, "Pug");
console.log(pug);

console.log(new Cachorro() instanceof Mamifero);
