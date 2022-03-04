//Cria uma pausa entre os eventos, para não gerar uma msg atras da outro na tela z do cliente, usa-se o debounce para suavizar e evitar chamar vários eventos tantas vezes seguidas.
let timeout;
window.addEventListener("mousemove", () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => console.log("Debounce!"), 500);
});
