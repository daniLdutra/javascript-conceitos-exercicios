//Shift: remove o primeiro elemento do array;
//unshift: adiciona um ou mais elementos no ínicio do array;

let carros = ["BMW", "Audi", "VW", "Fiat"];
let removerPrimeiroCarro = carros.shift();
console.log(removerPrimeiroCarro);
console.log(carros);

carros.unshift("Gurgel");
console.log(carros);
console.log(carros[0]);
