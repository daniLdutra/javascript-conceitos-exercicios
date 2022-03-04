// Uma Promise pode falhar, podemos reter esse erro com um método chamado catch, exibindo no console e fazendo o debug no código;

let promiseErrada = Promise.resolve(new Error("Algo deu errado"));

promiseErrada
  .then((value) => console.log(value))
  .catch((reason) => console.log("Erro: " + reason));
