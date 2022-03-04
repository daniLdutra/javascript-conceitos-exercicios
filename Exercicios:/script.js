//6 - Armazene valores em variáveis do tipo: string, number, boolean.

// const name = "Daniella";
// console.log(typeof name);

// let age = 35;
// console.log(typeof age);

// var student = true;
// console.log(typeof student);

// 7 - Criar estrutura if que verifica a entrada na balada, se tiver mais de 18 anos pode entrar, tem que usar o let

// let age = 20;

// if (age >= 18) {
//   console.log("Pode entrar!");
// } else {
//   console.log("Entrada negada, permitida para maiores de 18 anos");
// }

// 8 - Crie uma constante com seu nome e  verifique seu nome está na constante

// const VerficaNome = "Daniella";

// if (VerficaNome == "Daniella") {
//   console.log(`Olá ${VerficaNome}, seja bem-vinda!`);
// }

// 9 - Testar base e expoente de um número, a função Math.pow(), recebe dois parâmetros: base, expoente; ** pow(abreviação para power)

// console.log(Math.pow(2, 2));

// console.log(Math.pow(3, 2));

// let num = 18;
// console.log(Math.pow(num, 2));

// 10 - Verificar a velocidade de um carro: velocidade permitida máxima 80 km/hora

// let velocidade = 80;

// if (velocidade <= 80) {
//   console.log(`Velocidade ${velocidade}km/hora,não levou multa`);
// } else {
//   console.log(`Velocidade ${velocidade}km/hora,levou multa!`);
// }

// 11 - Verificar se condutor tem cnh e se é maior que 18 anos;

// const age = 20;
// const cnh = false;

// if (age >= 18 && cnh == false) {
//   console.log("Não pode dirigir, tire a sua CNH");
// } else if (age >= 18 && cnh == true) {
//   console.log("Pode dirigir!");
// } else {
//   console.log("Não pode dirigir");
// }

// 12 - Excreva um loop while que exibe número de 0 a 10

// let number = 0;
// while (number <= 10) {
//   console.log(number);
//   number += 1;
// }

// 13 - Excreva um loop for que exibe número de 100 a 50 no console;

// for (let index = 100; index >= 50; index -= 1) {
//   console.log(index);
// }

// 14 - exibir número par e impar, contador inicia 0 e vai até 50;

// for (let contador = 0; contador <= 50; contador += 1) {
//   if (contador % 2 == 0) {
//     console.log(`Essse número ${contador} é par`);
//   }
//   if (contador % 2 == 1) {
//     console.log(`Esse número ${contador} é ímpar`);
//   }
// }

// 15 - exibir se o número é primo (definição: número primo é o número que tem que ser maior que 1, apenas divisivel por si próprio e por 1);
let num = [1, 3, 5, 4, 10, 17];
for (let primo = 1; primo <= num.length; primo += 1) {
  if (num % primo == 1) {
    console.log(`Esse número ${primo} é primo`);
  } else {
    console.log(`Esse número ${primo} não é primo`);
  }
}
