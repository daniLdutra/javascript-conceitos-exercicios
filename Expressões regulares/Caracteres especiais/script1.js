// \D - Caracteres que não são números
// \W - Caracteres que não são alfa-numéricos(não são números e letras)
// \S - Caractere que não aceita espaço em branco, quabra de linhas e tags.

// . - aceita qualquer caractes, menos nova linhas

// const pontoRegex = /./;
// console.log(pontoRegex.test("asd")); //true
// console.log(pontoRegex.test(" ")); // true
// console.log(pontoRegex.test("123")); // true
// console.log(pontoRegex.test("123asd")); // true

// \d - qualquer digito de caractere (números)

// const dRegex = /\d/;
// console.log(dRegex.test("asd")); // false
// console.log(dRegex.test("123")); // true
// console.log(dRegex.test("123asd")); // true
// console.log(dRegex.test(" ")); //false

// \D - Caracteres que não são números

// const dRegex2 = /\D/;
// console.log(dRegex2.test("asd")); // true
// console.log(dRegex2.test("123")); // false
// console.log(dRegex2.test("123asd")); // true
// console.log(dRegex2.test(" ")); //true

// \s - qualquer caractere de  espaço em branco

// const sRegex = /\s/;
// console.log(sRegex.test("asd")); // false
// console.log(sRegex.test("123")); // false
// console.log(sRegex.test("123asd")); // false
// console.log(sRegex.test(" ")); // true

// \w - Um caractere alfanumérico ('teste')

// const wRegex = /\w/;
// console.log(wRegex.test("asd")); // true
// console.log(wRegex.test("123")); // true
// console.log(wRegex.test("123asd")); // true
// console.log(wRegex.test(" ")); // false

//Exemplos reais
//Para verificar se o caracter é ano

// let ano = /\d\d\d\d/;
// console.log(ano.test("05"));
// console.log(ano.test("2019"));
// console.log(ano.test("opa"));

// let palavrasTresLetras = /\w\w\w/;
// console.log(palavrasTresLetras.test("dia"));
// console.log(palavrasTresLetras.test("ano"));
// console.log(palavrasTresLetras.test("oi"));
// console.log(palavrasTresLetras.test("teste"));

//Para verificar se tem dia
const dia = /\d\d/;

console.log(dia.test("2019") && "2019".length == 2);
console.log(dia.test("2"));
console.log(dia.test("asd"));
console.log(dia.test("05") && "05".length == 2);
