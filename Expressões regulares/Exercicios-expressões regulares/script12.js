// 1 - Criar um regex que ó aceita letras maiusculas

// let letraMaiuscula = /^[A-Z]+/;

// console.log(letraMaiuscula.test("DANI"));
// console.log(letraMaiuscula.test("pomzi"));

// 2 - Crie uma regex que só aceita strings terminadas com ID;

// let validarId = /\d+ID\b/;

// // \b garante que a string termine com ID;

// console.log(validarId.test("1245"));
// console.log(validarId.test("1245ID"));
// console.log(validarId.test("1245AD"));
// console.log(validarId.test("ID1234"));

// 3 - Crie uma regex que aceite a seguinte expressão: "Marca: nomeDaMarca"
// nome da marca: Nike, Adidas, Puma, Asics;

// let nomeDaMarca = /Marca: (Adidas|Nike|Puma|Asics)/;

// console.log(nomeDaMarca.test("Marca: Adidas"));
// console.log(nomeDaMarca.test("Marca: Nike"));
// console.log(nomeDaMarca.test("Marca: Puma"));
// console.log(nomeDaMarca.test("Marca: Asics"));
// console.log(nomeDaMarca.test("Marca: jkdjak"));

// 4 - regex que vallide endereços de IP: 127.0.0.1

// let enderecoIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

// console.log(enderecoIp.test("127.0.0.1"));
// console.log(enderecoIp.test("8.8.8.8"));
// console.log(enderecoIp.test("12.10.5.1"));
// console.log(enderecoIp.test("12.168.5"));
// console.log(enderecoIp.test("192"));

//validar nome do usuário em um sistema

let validarNome = /^(?=.{3,16}$)[a-z-9-_]/;

console.log(validarNome.test("daniella-dutra_12356789"));

console.log(validarNome.test("dan"));
console.log(validarNome.test("daniella_dutra"));
console.log(validarNome.test("daniella-dutra"));
console.log(validarNome.test("daniella-dutra12"));

console.log(validarNome.test("daniella*dutra1")); //Não sei pq aceitou.
