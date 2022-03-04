//Await: esperar - irá esperar uma promise ser resolvida, para apresentar os resultados.

function somaComDelay(a, b) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(a + b);
    }, 4000);
  });
}

async function soma(a, b, c) {
  let x = somaComDelay(a, b);
  let y = c;

  return (await x) + y;
}

soma(1, 2, 3).then((value) => console.log(value));

//o await é utilizado qdo estamos esperando um valor no futuro, que não está no código de fato, por exemplo, estamos consultando uma api externa/site externo, damos um await para poder utilizar esse dado que está buscando de fora, para "juntar" com nosso dado que já está dentro.
