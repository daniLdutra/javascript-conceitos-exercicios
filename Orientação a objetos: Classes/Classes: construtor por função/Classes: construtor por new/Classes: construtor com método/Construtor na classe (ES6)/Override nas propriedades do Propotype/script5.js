// Override = substituir/sobrepor

//Cria-se um valor um valor padrão sem afetar na classe.

class Cachorro {
  constructor(raca) {
    this.raca = raca;
  }
  latir() {
    console.log("Au au");
  }
}

let labrador = new Cachorro("Labrador");
labrador.latir();
console.log(labrador.raca);

Cachorro.prototype.raca = "SRD";
console.log(Cachorro.prototype.raca);
