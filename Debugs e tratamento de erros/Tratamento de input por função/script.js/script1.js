// Tratar os dados antes do recebimento, para evitar erros;

//exemplo de tratamento de números;
function checarNumero(valor) {
  let resultado = Number(valor);

  if (Number.isNaN(resultado)) {
    alert("Erro, Digite um número");
  } else {
    return resultado;
  }
}

checarNumero(5);
checarNumero("teste");

let resultado = prompt("Digite um número");

checarNumero(resultado);
