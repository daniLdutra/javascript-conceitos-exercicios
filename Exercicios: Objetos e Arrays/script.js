// 1 - Criar array com 5 itens e acessar os itens 1,3,4

// const numeros = [5, 10, 15, 20, 25];
// console.log(numeros[0]);
// console.log(numeros[2]);
// console.log(numeros[3]);

// 2 - Criar um array com 2 elementos e outro com 4;
//Imprima o número de elementos de cada um na tela;

// const nomes = ["dani", "ilan"];
// const testes = [true, false, true, false];
// console.log(nomes.length);
// console.log(testes.length);

// 3- |Criar um objeto com propriedades: rodas = 8, limite de passageiros = 40, portas = 2;
//Imprima as propriedades

const onibus = {
  rodas: 8,
  limitePassageiros: 40,
  portas: 2,
};
// console.log(onibus.rodas);
// console.log(onibus.limitePassageiros);
// console.log(onibus.portas);

// 4 - Add a propriedade janelas no ônibus com valor de 20, delete a propriedade rodas, imprima a propriedade janelas;

// delete onibus.rodas;
// console.log(onibus);

// onibus.janelas = 20;
// console.log(onibus.janelas);

// 5 - Crie um array com 5 nomes e inclua o seu. Verifique se seu nome existe no array, se existir imprima uma msg no console;

// const nomes = [
//   "elza",
//   "ilan",
//   "Nono",
//   "Geraldo",
//   "Daniella",
//   "Pomzi",
//   "menina",
//   "fifi",
//   "pandinha",
// ];

// if (nomes.includes("Daniella")) {
//   console.log("O nome da Daniella está na lista");
// } else {
//   console.log("Nome não localizado");
// }

// 6 - Crie dois arrays, um com mais de 5 elementos e outro com menos.
//Função deve verificar o número de elementos, se possuir menor que 5, imprima "poucos elementos", e se tiver mais, imprima "Mtos elementos."

// const filhos = [
//   "zizi",
//   "fifi",
//   "menina",
//   "pata-curta",
//   "lito",
//   "velho",
//   "totoca",
// ];
// const pais = ["Elzinha", "Geraldinho"];

// const verificaElementos = (arr) => {
//   if (arr.length >= 5) {
//     console.log("Muitos elementos ");
//   } else {
//     console.log("Poucos elementos");
//   }
// };
// verificaElementos(pais);
// verificaElementos(filhos);

// 7 - Crie um array com 5 elementos, faça uma iteração entre todos eles e imprima no console;

// const elementos = [2, 5, 6, 8, 9];
// for (let i = 0; i < elementos.length; i += 1) {
//   const result = elementos[i];
//   console.log(result);
// }

// 8 - Crie um JSON com 3 propriedades, atribua a ele a uma variável, acesse e imprima no console;

// const hobbies = {
//   instagram: "moda",
//   passear: "filhas",
//   drink: "vinho",
// };
// console.log(hobbies.instagram);
// console.log(hobbies.passear);
// console.log(hobbies.drink);

// 9 - Crie um array a partir de uma frase e imprima cada palavra através for;
// let frase = "Pomzi o mais princeso que já existiu";
// const fraseArray = frase.split(" ");

// for (let i = 0; i < fraseArray.length; i += 1) {
//   console.log(fraseArray[i], i);
// }

// 10 - Crie um objeto calculadora, que tenha os seguintes metodos: somar, subtrair, multiplicar, dividir (os metodos só devem aceitar dois parâmetros)

const calculadora = {
  somar: (a, b) => a + b,
  subtrair: (a, b) => a - b,
  multiplicar: (a, b) => a * b,
  dividir: (a, b) => a / b,
};
console.log(calculadora.somar(2, 2));
console.log(calculadora.subtrair(5, 2));
console.log(calculadora.multiplicar(3, 6));
console.log(calculadora.dividir(100, 5));
