//Operador plus +
// qdo um operador + está em uma expressão siginifica que ele pode ser repetido mais de uma vez.

let muitosOuPoucosDigitos = /\d+/;

console.log(muitosOuPoucosDigitos.test("123"));
console.log(muitosOuPoucosDigitos.test("123456789"));
console.log(muitosOuPoucosDigitos.test(" "));
