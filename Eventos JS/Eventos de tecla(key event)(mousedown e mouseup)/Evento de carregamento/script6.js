//Utilizado qdo o usuário está carregando a página, usa-se o load, para enviar uma msg de boas-vindas ou msg de informções, exemplo: aceitar os termos de utilização da página ou beforeunload: qo usuário vai fechar a página: qdo está  salvando informações de um formulário por exemplo e o usuário está no termino do preenchimento para que não perca td.
// window.addEventListener("load", (e) => {
//   alert("Assine os nossos termos de uso");
// });

window.addEventListener("beforeunload", (e) => {
  event.returnValue = null;
  //Para funcionar precisa chamar esse evento
});
//qdo for atualizar a página irá receber uma msg que os dados podem ser perdidos.
