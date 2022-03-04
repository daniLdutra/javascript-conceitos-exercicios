// Um objeto fallback de outro objeto
//fallback: falhar e ainda irá existir uma opção, plano B.
// Prototype é um objeto do objeto que está sendo utilizado.
//exemplo:

// const pessoa = {
//   maos: 2,
// };

// console.log(Object.getPrototypeOf(pessoa)); //pessoa é um protoype do Object

// console.log(Object.getPrototypeOf(pessoa) == Object.prototype);

// console.log(pessoa.hasOwnProperty("maos")); //verifica se existe a propriedade dentro do objeto. // true

//Qdo criamos um objeto a partir de um outro, o base será o prototype;
//Ele herdará ranto os métodos e propriedades de Object (prototype do objeto base), quanto os do objeto base para este novo.

let pessoa = {
  maos: 2,
};

let pessoaNova = Object.create(pessoa);
console.log(pessoaNova.maos);

console.log(pessoaNova.hasOwnProperty('maos')); //na explicação ele disse que não existe essa propriedade dentro do pessoa nova, não entendi, pq pessoaNova na minha cabeça, é uma cópia do pessoa? // deu false

console.log(Object.getPrototypeOf(pessoaNova) == pessoa);
