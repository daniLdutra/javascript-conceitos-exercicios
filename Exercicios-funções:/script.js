// 1 - Escreva uma função que imprime "Hello World!" no console.

// const saudacao = () => {
//   console.log("Hello World!");
// };
// saudacao();

// 2 - Escreva uma função que recebe um parâmetro de idade, e imprima uma msg no console com template literals.

// const idade = (i) => {
//   console.log(`Você tem ${i} anos`);
// };
// idade(35);

// 3 - Escreva uma função que recebe 2 números e retorne a soma;

// const soma = (a, b) => {
//   return a + b;
// };
// console.log(soma(5, 10));

// 4 -  Escreva uma função que retorn um número aleatório, número máximo retornado deve ser passado via parâmetros;

// const numeroAleatorio = (n) => {
//   return Math.floor(Math.random() * n + 1);
//   //Math.random entrega número quebrado;
//   //Usa-se o Math.floor para arredondar, ele arredonda para baixo, se add +1, o valor é mostrado a cima.
// };
// console.log(numeroAleatorio(100));

// 5 - Função que recebe parâmetros como idade, se tiver mais de 18 anos, pode entrar na auto escola, se tiver menos, não pode.

// const verificaIdade = (idade) => {
//   if (idade >= 18) {
//     console.log("Pode se matricular na auto escola");
//   } else {
//     console.log("Não pode se matricular, aguarde fazer 18 anos");
//   }
//   return idade;
// };
// verificaIdade(18);

// 6 - Função que detecta tipo de dado passado: number, string ou boolean

// const detectaTipoDado = (dado) => {
//   if (typeof dado === "boolean") {
//     console.log("Este dado é um boolean");
//   } else if (typeof dado === "number") {
//     console.log("Este dado é um number");
//   } else if (typeof dado === "string") {
//     console.log("Este dado é uma string");
//   }
// };
// detectaTipoDado(25);
// detectaTipoDado("Pomzi");
// detectaTipoDado(false);

// 7 - Escreva uma função que receba um número negativo e retorne um positivo;

// const conversao = (numNegativo) => {
//   return Math.abs(numNegativo);
// };
// console.log(conversao(-100));

// 8 - Escreva uma função que recebe string, se o texto conter mais de 10  caracteres imprima "Texto muito grande, se conter menos: texto dentro do limite"

// const checarTamanhoTexto = (caracteres) => {
//   if (caracteres.length > 10) {
//     console.log("Texto muito grande");
//   } else {
//     console.log("Texto dentro do limite");
//   }
// };
// checarTamanhoTexto("Dani");

// 9 - Escreva uma função que recebe 2 números e retorne o resultado da potência;(base * espoente)

// const potencia = (a, b) => {
//   return Math.pow(a, b);
// ou return a ** b;
// };
// console.log(potencia(3, 2));

// 10 - Escreva uma função que recebe um número, e o decrementa de 1 em 1 com um loop, imprimir no console os número pares;

const verificaPares = (numero) => {
  for (let index = numero; index > 0; index -= 1) {
    // console.log(index);
    if (index % 2 === 0) {
      console.log(index);
    }
  }
};
verificaPares(100);
