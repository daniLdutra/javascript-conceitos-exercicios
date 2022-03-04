//Quando há a necessidade de vários ifs, podemos utilizar o switch/case
//Para sair de um case, usa-se o break;
// Podemos inserir uma expressão default, caso nenhum valor for correspondido (funciona como um else);

let nome = "Daniella";

switch (nome) {
  case "Matheus":
    console.log("O nome é Matheus");
    break;

  case "João":
    console.log("O nome é João");
    break;

  default:
    console.log("O nome não foi encontrado");
    break;
}
