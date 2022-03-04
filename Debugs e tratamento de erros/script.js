//Bug: Problema que ocorre no código;
//Debug: Ato de resolver os bugs encontrados no código.

//Strict mode
//Deixa o JS mais rigoroso na hora de programar;
//Declarado no topo de arquivos ou funções;
//Ex:

// "use strict";
// opa = "teste";

// delete Object.prototype; // Mostra erro que não se pode deletar código nativo da linguagem;

//Para função tem qu usar o strict dentro da função
// function teste() {
//   "use strict";
//   let testando = "teste";
// }
// teste();

//Não permite criar proprieades com valor primitivo
// false.prop = "zero";//uso de boolean
// "teste.prop" = " "//erro por usar string no início.

//Debug: console.log

// let a = 1;
// let b = 2;
// let c = 3;

// if (c > a) {
//   a = b;
// }
// console.log(a);

// for (let i = 5; i > 0; i--) {
//   b++;
//   a = a + c + 1;
//   c += 2;
// }
// console.log(a);

// if (b == 2) {
//   a++;
// } else {
//   a = a + b + c;
// }
// console.log(a);

// a = a * b;
// console.log(a);

//Debug: debugger
//Interrompe o código e mostra o erro, precisa retirar do código assim como console

// let a = 1;
// let b = 2;
// let c = 3;

// if (c > a) {
//   a = b;
//   debugger;
// }

// for (let i = 5; i > 0; i--) {
//   b++;
//   a = a + c + 1;
//   c += 2;
//   debugger;
// }

// if (b == 2) {
//   a++;
// } else {
//   a = a + b + c;
//   debugger;
// }

// a = a * b;
// debugger;
