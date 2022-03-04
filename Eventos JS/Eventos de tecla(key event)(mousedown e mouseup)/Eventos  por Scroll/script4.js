//Podemos criar um elemento assim que o scroll atingir a posição x;

window.addEventListener("scroll", (e) => {
  if (window.pageXOffset > 1000) {
    console.log("Ativou - Chegou a posição");
  }
});
//pageXOffset: acessa o eixo de cima para baixo
//Mto utilizado em eventos de animação
