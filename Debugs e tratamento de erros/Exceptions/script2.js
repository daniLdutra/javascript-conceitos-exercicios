// Podemos criar erros no programa, caso alaguma condição não seja atendida;
//Porém as exceptions abortam o programa, só geram erro;

// let a = 1;
// if (a != 2) {
//   throw new Error("O valor de a não pode ser 1");
// }

function saudacao(nome) {
  if (typeof nome != "string") {
    throw new Error("O parâmetro nome  precisa ser string");
  } else {
    console.log(`Olá ${nome}.`);
  }
}
saudacao("Daniella");
saudacao(5);
