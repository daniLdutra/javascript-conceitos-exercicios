//Ações condicionais a algum tipo de resposta feita pelo usuário.
//Por exemplo: clicks, apertar alguma tecla, até movimento de mouse;
//Handlers: tratar ou lidar com evento.

//Como adicionar eventos:

// let btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   console.log("Clicou em mim!");
// });

// Remover evento:
// let btn = document.querySelector("#btn2");
// function msg() {
//   console.log("Clicou");
// }
// btn.addEventListener("click", msg);
// setTimeout(() => {
//   btn.removeEventListener("click", msg);
// }, 5000);

//Removendo click do botão 1
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function msg() {
  console.log("Clicou em mim!");
  //Nesse caso precisa-se realizar uma função externa, qdo for criar o remove.
}
btn1.addEventListener("click", msg);

btn2.addEventListener("click", () => {
  btn1.removeEventListener("click", msg);
});

//Objeto do evento: ele contém propriedades
function msg(e) {
  console.log(e);
}
btn1.addEventListener("click", msg);
