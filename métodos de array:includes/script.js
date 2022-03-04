//Verifica se um array contém um determinado elemento, sem precisar usar forEach ou for

let carros = ["BMW", "Fiat", "Audi"];

console.log(carros.includes("Fiat")); // retorna true;

if (carros.includes("BMW")) {
  console.log("Compre o carro");
} else {
  console.log("Procure em outra loja");
}
