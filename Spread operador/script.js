// Uma forma de uma função receber infinitos parâmetros.

let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 4;

function imprimirNumeros(...args) {
  for (let i = 0; i < args.length; i += 1) {
    console.log(args[i]);
  }
}
imprimirNumeros(num, num1, num2, num3);
console.log("pausa");
imprimirNumeros(num2, num3);
console.log("pausa");
imprimirNumeros(2, 3, 5, 6, 7, 5, 10, 45, 90, 100, 0);
