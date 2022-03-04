//Coloca-se uma instrução na regex que funciona como um || (or) das condicionais;

let frutas = /\d+ (bananas|maçãs|laranjas)/;

console.log(frutas.test("10 bananas"));
console.log(frutas.test("20 batatas"));
console.log(frutas.test("15 maçãs"));
