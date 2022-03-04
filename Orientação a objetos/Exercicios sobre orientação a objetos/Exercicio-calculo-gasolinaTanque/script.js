//39 - Crie uma classe que simule um carro, propriedades: marca, cor, gasolina restante.
//Crie o método de dirigir o carro e vá diminuindo gradativamente.
//E um de abastacer para aumenatar a gasolina gradativamente.

class Carro {
  constructor(marca, cor, gasolinaRestante, consumo) {
    this.marca = marca;
    this.cor = cor;
    this.gasolinaRestante = gasolinaRestante;
    this.consumo = consumo;
  }
  dirigir(km) {
    let litrosConsumidos = km / this.consumo;
    this.gasolinaRestante -= litrosConsumidos;
  }
  abastecer(litros) {
    this.gasolinaRestante += litros;
  }
}

let carro = new Carro('BMW', 'branca', 100, 14);

console.log(carro);

carro.dirigir(100);

console.log(carro);

carro.abastecer(50);

console.log(carro);
