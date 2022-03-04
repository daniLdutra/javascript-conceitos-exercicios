//Funções são estruturas de códigos menores que são reaproveitadas, durante a execução/construção de um programa.
// Poupar repetição de código, através do loop, pode-se invocar a função quantas vezes for necessária.

// function imprimirNoConsole() {
//   console.log("Olá mundo");
// }
// imprimirNoConsole();

// function imprimirUmNumero(num) {
//   console.log("O número é " + num);
// }
// imprimirUmNumero(2);
// imprimirUmNumero(4);
// imprimirUmNumero(20);
// imprimirUmNumero(500);

// const numeroAleatorio = function () {
//   console.log(Math.random());
// };
// numeroAleatorio();
// numeroAleatorio();

// const soma = function (a, b) {
//   return a + b;
// };
// console.log(soma(3, 8));

// const saudacao = function (nome) {
//   if (nome == "Daniella") {
//     return "Olá Daniella";
//   }
// };
// console.log(saudacao("Daniella"));

// function multiplicadorTreNumeros(x, y, z) {
//   return x * y * z;
// }

// console.log(multiplicadorTreNumeros(2, 6, 8));

// const mult = multiplicadorTreNumeros(1, 5, 3);
// console.log("O valor de mult é " + mult);

// function podeDirigir(idade, cnh) {
//   if (idade >= 18 && cnh == true) {
//     return "Pode dirigir";
//   } else {
//     return "Não pode dirigir";
//   }
// }
// console.log(podeDirigir(19, true));
// console.log(podeDirigir(25, true));
// console.log(podeDirigir(44, 0));
// console.log(podeDirigir(19, 1));
// console.log(podeDirigir(17, false));

// Escopo da função acontece dentro da função e fica separado do escopo global;

//exemplo:
// let n = 10;
// const numero = function () {
//   let n = 25;
//   console.log(n); // escopo variavel
// };
// numero();
// console.log(n); // escopo global

// let a = 10;

// function multiplicar(x, y) {
//   let a = x * y;

//   if (a > 10) {
//     let a = 0;
//     a++;
//     console.log(a); // escopo do if
//   }
//   console.log(a); // escopo da função
// }
// console.log(a); // escopo global

// multiplicar(3, 7);

// Arrow functions

// const parOuimpar = (n) => {
//   return n % 2 == 0;
// };
// console.log(parOuimpar(2));

// let soma = (a, b) => {
//   return a + b;
// };
// console.log(soma(10, 20));

// Se ó tem um parâmetro podemos remover os parênteses do argumento e o return;
// Se a expressão for pequena, pode até ser feita em uma linha sem prejudicar a leitura do código;
//exemplos:
// const raizQuadrada = (x) => {
//   return x * x;
// };
// const raizQuadrada2 = (n) => n * n;

// console.log(raizQuadrada(2));
// console.log(raizQuadrada2(4));

// Podemos chamar uma função em JS sem o número igual de parâmetros determinados;

// function nomeComIdade(nome, idade) {
//   if (idade === undefined) {
//     console.log("Seu nome é " + nome);
//   } else {
//     console.log("Seu nome é " + nome + "e você tem " + idade + "anos.");
//   }
// }
// nomeComIdade("João");
// nomeComIdade("João", 42);

// function soma(a, b) {
//   if (a === undefined || b === undefined) {
//     return "Essa função precisa ter dois argumentos";
//   } else {
//     return a + b;
//   }
// }
// console.log(soma(1));
// console.log(soma(1, 2));

// Argumentos com valor default;

// function potencia(base, exp = 2) {
//   // se não for passado o valor de expoente, fica pré determinado como no segundo parâmetro
//   return Math.pow(base, exp);
// }
// console.log(potencia(2));
// console.log(potencia(2, 2));
// console.log(potencia(2, 3));

// Closure (função dentro de outra função)

// function contador(i) {
//   let cont = i;
//   let somarContador = function () {
//     console.log(cont);
//     cont += 1;
//   };
//   return somarContador;
// }
// let meuContador = contador(5);
// meuContador();
// meuContador();

//Recursion: funcionalidade que permite uma função se chamar novamente; (pode ser um problema se ela se chamar várias vezes);

function recursao(n) {
  if (n - 1 < 2) {
    console.log("Recursão parou");
  } else if (n % 2 != 0) {
    console.log("Número ímpar " + n);
    recursao(n - 1);
  } else {
    console.log("Número par " + n);
    recursao(n - 2);
  }
}
// recursao(39);
recursao(55);
