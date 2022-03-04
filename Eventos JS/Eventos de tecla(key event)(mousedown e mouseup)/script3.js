//Sempre que uma tela é pressionada, são gerados dois  eventos keyup e keydown;

//Keyup é qdo soltamos a tecla.
//Keydown é qdo apertamos.

// window.addEventListener("keydown", (e) => {
//   if (e.key == "v") {
//     console.log("Apertou a tecla v");
//   } else if (e.key == "Enter") {
//     console.log("Apertou o enter");
//   }
// });

//Melhor maneira de executar eventos é qdo solta a tecla.
// window.addEventListener("keyup", (e) => {
//   if (e.key == "v") {
//     console.log("Soltou a tecla v");
//   } else if (e.key == "Enter") {
//     console.log("Soltou o enter");
//   }
// });

// Eventos mouse e dblclick

// No mouse temos tbm eventos como mousedown e mouseup, semelhantes aos da tecla;

let btn = document.querySelector("button");

btn.addEventListener("dblclick", () => {
  console.log("Ativou com double click");
});

//Pegar click com botão direito com JS

btn.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  console.log("Botão direito");
});

//Movimento do mouse: sempre que mexer o mouse o evento é disparado, cuidado para não sobrecarregar a memória do computador. Utilizado para saber a posição da tela, atrelado ao movimento do mouse.

// window.addEventListener("mousemove", (e) => {
//   console.log(e.x);
//   console.log(e.y);
// });
