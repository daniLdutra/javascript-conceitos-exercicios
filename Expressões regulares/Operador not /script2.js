// Operador not^: irá verificar se o padrão é  correspondido e não irá aceita-lo;

const notab = /[^ab]/;

console.log(notab.test("a")); // só aceita negar qdo está isolado // false
console.log(notab.test("Aqui tem a")); // em strings maiores ele acaba aceitando // true

const notaz = /[^a-z]/;

console.log(notaz.test("asd")); //aqui nega // false
console.log(notaz.test("123")); // aceita pq são números // true

console.log(notaz.test("124 mhj")); // aceita pq tem  números // true
