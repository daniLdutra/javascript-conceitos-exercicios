let validarDataDeNasc = /[0-31]{2}[/][0-12]{2}[/][1920-2020]{4}/;

console.log(validarDataDeNasc.test("25/12/2015"));
console.log(validarDataDeNasc.test("25/12/15"));
console.log(validarDataDeNasc.test("2/2/2015"));
console.log(validarDataDeNasc.test("28/10/1985"));

// não sei pq não passou
