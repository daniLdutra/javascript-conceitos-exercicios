// 1 - Crie uma classe que simula uma conta no banco(deve conter uma propriedade saldo), métodos deposito e saque, teste os métodos.

// class Banco {
//   constructor(saldo) {
//     this.saldo = saldo;
//   }
//   deposito(valor) {
//     this.saldo += valor;
//   }
//   saque(valor) {
//     this.saldo -= valor;
//   }
// }

// let contaBanco = new Banco(1000);
// console.log(contaBanco);

// contaBanco.deposito(1000);
// console.log(contaBanco.saldo);

// contaBanco.saque(500);
// console.log(contaBanco.saldo);

// 2 - Crie uma classe que simula um carrinho de compras de um e-commerce;
//Propriedade itens, quantidade total e valor total, crie métodos para add e remover itens;

class CarrinhoCompras {
  constructor(itens, quantidade, valorTotal) {
    this.itens = itens;
    this.quantidade = quantidade;
    this.valorTotal = valorTotal;
  }
}

let compras = new CarrinhoCompras(
  [
    {
      id: 01,
      nome: "Camisa",
      qtd: 1,
      preco: 100,
    },
    { id: 02, nome: "Calça", qtd: 1, preco: 100 },
    { id: 03, nome: "Meia", qtd: 1, preco: 100 },
  ],
  3,
  300
);

console.log(compras.itens);
console.log(compras.quantidade);
console.log(compras.valor);
