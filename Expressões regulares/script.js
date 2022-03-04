//Maneira de simplicar o código, cria verificações para atingir o resultado.

//São expressões do tipo objeto:
// New RegExp e  /.../
// retorno do padrão é true ou falso

// const reg1 = new RegExp("bola");
// console.log(reg1.test("Tem bola")); // true
// console.log(reg1.test("Não tem")); // false

// const reg2 = /bola/;

// console.log(reg2.test("Tem bola")); // true
// console.log(reg2.test("Não tem")); // false
// console.log(/testando/.test("testando"));

const reg1 = /[12345]/;
console.log(reg1.test("Temos o número 6"));
console.log(reg1.test("Temos o número 2"));
console.log(reg1.test("Temos o número 23"));
console.log(reg1.test("Temos o número 60"));

//essa expressão serve para verificar se tem número na frase ou string, basicamente,pq esse intervalo acaba aceitando várias combinações.

const reg2 = /[0-9]/;
console.log(reg2.test("Temos o número 612456398"));
console.log(reg2.test("Temos o número"));
