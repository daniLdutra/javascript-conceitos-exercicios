//O bloco try cacth vai tentar executar um código, caso não consiga ele retorna o erro que esse código gerou, muito útil para debug;

// try {
//   let c = a + b;
// } catch (error) {
//   console.log("Algo deu errado " + error);
// }

//Algo deu errado ReferenceError: a is not defined
// let b = 2;
try {
  let a = 2 + b;
} catch (e) {
  console.log(e);
}

//erro: b não está definido, para tratar o erro, declara-se a variavel b

//Try Catch não trava o código, ele deixa o código fluir
