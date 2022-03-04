// O programa vai executar um bloco de código, SE algo acontecer;
// Onde algo é a condição imposta por um statement;
// Que resultar em um boolean (true or false);

let idade = 19;
// if (idade > 18) {
//   console.log("Pode entrar");
// }

// if (idade == 19) {
//   console.log("A idade é igual a 19");
// }

// if (idade > 25) {
//   console.log("A idade é maior que 25");
// }

let nome = "Matheus";
// if (nome == "Matheus" && idade > 10) {
//   console.log("Liberado");
// }
//Lembrando o and (&&) só satisfaz se as duas condições forem true

let passaporte = true;
if ((nome == "Matheus" && idade > 30) || passaporte == true) {
  console.log("Liberado2");
}
