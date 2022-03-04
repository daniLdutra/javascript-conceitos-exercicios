let validandoDominio = /[?www].\w+\.com|com.br/;
// | = choice
//w+ = aceita cadeia de caracteres.

console.log(validandoDominio.test("www.google.com"));
console.log(validandoDominio.test("www.teste"));
console.log(validandoDominio.test("teste.com"));
console.log(validandoDominio.test("www.horadecodar.com.br"));
console.log(validandoDominio.test("horadecodar.com.br"));
