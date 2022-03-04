// Get serve para resgatar o valor de uma propriedade e exibi-la
// Set serve para alterar o valor de uma propriedade.

class Cachorro {
  constructor(raca) {
    this.raca = raca;
  }

  get verRaca() {
    return " A raça é " + this.raca;
  }
  set novaRaca(value) {
    this.raca = value;
  }
}

let golden = new Cachorro("Pastor Alemão");
console.log(golden.verRaca);
golden.novaRaca = "Golden";
