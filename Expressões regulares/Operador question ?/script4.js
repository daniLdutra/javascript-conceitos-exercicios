//Faz com que o dígito anterior seja opcional;

const padrao = /Abacax?i/;
console.log(padrao.test("Abacaxi")); // true
console.log(padrao.test("Abacai")); // true

const padrao2 = /\d+\w?/; //que pode conter infinitos dígitos e pode conter caracter alfanuméricos.

console.log(padrao2.test("123")); // true
console.log(padrao2.test("123a")); // true
console.log(padrao2.test("123 ")); //irá aceitar espaço, pq a expressão já atingiu o que foi pedido através dos dígitos. true
