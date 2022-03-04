// Uma coleção de propriedades, parecidos com arrays.
// let pessoa = {
//   nome: "Daniella",
//   profissão: "Veterinária e futura programadora",
//   idade: 35,
//   viajar: function () {
//     console.log("Quer conhecer todo o Nordeste");
//   },
// };

// console.log(pessoa.nome);
// console.log(pessoa.idade);
// console.log(pessoa.profissão);
// pessoa.viajar();

// let pessoa = {
//   nome: "Ilan",
//   idade: 26,
//   profissão: "Programador",
// };

// console.log(pessoa.nome); // imprimi Ilan
// delete pessoa.nome; //deleta a propriedade
// console.log(pessoa.nome); // undefined
// console.log(pessoa); // imprimi o objeto, sem o nome, pq foi deletado

// pessoa.casado = false; //inclui uma nova propriedade
// console.log(pessoa); // imprimi o objeto atualizado

//Uma forma de copiar propriedades de um objeto para outro, através do metodo assign (copia para o objeto principal)

// let carro = {
//   portas: 2,
//   portamalas: "2001",
//   motor: "2,0",
// };

// let adicionais = {
//   tetosolar: true,
//   arcondicionado: true,
// };

// Object.assign(carro, adicionais);
// console.log(carro);

//Verifica a Chaves de um obejto, metodo keys:
// let obejtoA = {
//   chave1: 1,
//   chave2: 2,
//   chave3: 3,
// };
// console.log(Object.keys(obejtoA));

// Um objeto pode herdar todas as características do outro, virando uma referência ao mesmo - Mutação (Mutability)

let pessoa = {
  nome: "matheus",
};

let pessoa2 = pessoa;
console.log(pessoa == pessoa2);
//cria um objeto identico com referência ao objeto antigo
pessoa2.nome = "Pedro";

console.log(pessoa.nome);

pessoa.nome = "Maria";

console.log(pessoa2.nome);
