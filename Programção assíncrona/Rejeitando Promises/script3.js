//Método reject: rejeita a promessa, e induz o erro:
function verificarNumero(num) {
  return new Promise((resolve, reject) => {
    if (num == 2) {
      resolve(console.log(`O numero é ${num}`));
    } else {
      reject(new Error("Falhou"));
    }
  });
}

verificarNumero(2);
verificarNumero(3);
