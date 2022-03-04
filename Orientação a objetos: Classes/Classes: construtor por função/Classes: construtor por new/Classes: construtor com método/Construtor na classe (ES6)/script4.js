//Cria uma classe, não precisa mais criar por meio de uma função

class Cachorro {
  constructor(raca) {
    this.raca = raca;
  }
}

let labrador = new Cachorro("Labrador");
console.log(labrador.raca);
