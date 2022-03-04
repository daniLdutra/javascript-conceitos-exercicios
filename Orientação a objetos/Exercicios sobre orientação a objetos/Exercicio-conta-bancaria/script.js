//Crie uma classe de conta bancária,
// propriedades construtor: saldo conta corrente e saldo conta poupança
//Crie métodos de deposito e saque
//Método para transferir dinheiro da conta poupança para corrente

class Conta {
  constructor(saldoContaCorrente, saldoPoupanca, juros) {
    this.saldoContaCorrente = saldoContaCorrente;
    this.saldoPoupanca = saldoPoupanca;
    this.juros = juros;
  }
  deposito(dinheiro) {
    this.saldoContaCorrente += dinheiro;
  }
  saque(dinheiro) {
    this.saldoContaCorrente -= dinheiro;
  }

  tranferenciaContaPoupanca(valor) {
    this.saldoContaCorrente -= valor;
    this.saldoPoupanca += valor;
  }

  jurosAniversario() {
    let juros = (this.saldoPoupanca * this.juros) / 100;
    this.saldoPoupanca += juros;
  }
}

let conta = new Conta(1000, 5000, 1);
console.log(conta);

conta.deposito(1000);
console.log(conta);

conta.saque(50);
console.log(conta);

conta.tranferenciaContaPoupanca(500);
console.log(conta);

conta.jurosAniversario();
console.log(conta);

//Crie uma conta especial que herda da conta normal;
//Na conta especial o juros são dobrados da conta normal.

class ContaEspecial extends Conta {
  constructor(saldoContaCorrente, saldoPoupanca, juros) {
    super(saldoContaCorrente, saldoPoupanca, juros * 2);
  }
}

let contaEspecial = new ContaEspecial(10000, 1000, 1);
console.log(contaEspecial);

contaEspecial.saque(100);
console.log(contaEspecial);

contaEspecial.jurosAniversario();
console.log(contaEspecial);
