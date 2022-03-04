//Finally é exeutado independente do resultado do try/catch.

try {
  let c = a + b;
} catch (error) {
  console.log("Algo deu errado: " + error);
} finally {
  console.log("Executou");
}
//método não muito utilizado.
