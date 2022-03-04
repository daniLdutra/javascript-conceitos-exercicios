//Insere-se o número de ocorrência entre {};
//validação de telefone:
let telefone = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(telefone.test("(48)4004-5050"));
console.log(telefone.test("(11)94004-5050"));
console.log(telefone.test("(21)999-5050"));
console.log(telefone.test("4004-5"));

//validação telefone:

const cep = /\d{5}-\d{3}/;

console.log(cep.test("05741-090"));
console.log(cep.test("asd"));
