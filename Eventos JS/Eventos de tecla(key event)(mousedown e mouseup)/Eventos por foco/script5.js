//Muito utilizado em formulários nos inputs, qdo precise-se realizar alguma validação ou apresentar msg para usuário.
//focus entra no input e blur qdo sai

let input = document.querySelector("#input1");

input.addEventListener("focus", () => {
  console.log("Entrou no input");
});

input.addEventListener("blur", () => {
  console.log("Saiu no input");
});
