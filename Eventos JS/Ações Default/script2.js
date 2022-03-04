//Prevent Default: evento perde o comportamento dele e adquiri o evento estabelecido.
//Cria-se uma nova lógica/ação para o evento.

let a = document.querySelector("a");

a.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("clicou mais não mudou o link");
});

//Reescrever a função da tag a. Interrompe eventos já pré programados pelo carregador.

//Exemplo para utilização: em casos de formulários em que vc não quer que carregue de forma automática, vc que que ele carregue de forma assíncrona, usa-se o default, ele irá esperar vc realziar outro metódo de envio;
