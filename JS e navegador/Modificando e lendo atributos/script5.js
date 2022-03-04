//Pode-se resgatar um valor de um atributo ou trocar com o JS, exemplo o href de um a ou src de um elemento img:
// getAttribute pega o valor
// setAttribute atualiza o valor

//Exemplo:
// let url = document.getElementById("link");
// console.log(url.getAttribute("href"));

// url.setAttribute("href", "www.horadecodar.com.br");
// console.log(url.getAttribute("href"));

let a = document.querySelector("footer a");

console.log(a.getAttribute("href"));

let link = "https://www.horadecodar.com.br";
a.setAttribute("href", link);
