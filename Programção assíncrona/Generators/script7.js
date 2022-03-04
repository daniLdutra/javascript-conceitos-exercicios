//Funcionam de forma semelhante as Promises
//Pode ser usando nos loops, evitando que sejam infinitos, ela só será executada se for chamada novamente, no caso dos loops com generator
//As ações podem ser pausados e continuadas depois;
//Pode-se utilizar através de id, que são valores únicos, por exemplo uma tabela de produtos, em colunas chave, chamada id, gera um id a apartir do generator.
// function * : indica que é um generator
// usa-se o yield para salvar o valor como uma primise em algum lugar na memória do computador / salvar o estado da variável;
//depois consegue-se acessar ele chamando a função e usando o metódo next e o valor (value)

function* criadorId() {
  let id = 0; //Ponto de início;
  while (true) {
    //estrutura infinita
    yield id++; //incrementa o id e salva na memória
  }
}
let criaId = criadorId();
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);

console.log(criaId.next());
