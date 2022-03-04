//Não podemoa add propriedades na classe, somente via prototype;
//A classe só aceita métodos;

class Cachorro {
  constructor(raca) {
    this.raca = raca;
  }
}

let labrador = new Cachorro("Labrador");
Cachorro.prototype.patas = 4;

console.log(labrador.patas);
