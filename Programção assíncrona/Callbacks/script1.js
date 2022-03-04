// função anônima que executa uma ação no código;
//Uma das vertentes a prog Assíncrona é fazer ações que acontecem depois de um tempo por meio de callbacks;
//callback com a função setTimeout

console.log("Ainda não chamou o callback");

setInterval(function () {
  console.log("Chamou o callback");
}, 2000);

console.log("Ainda não chamou o callback");
