//o objeto das promises é Promise, resolve é o método que resolve uma Promise, o then é o que faz ela poder ser executada em um ponto futuro

let promessa = Promise.resolve(4 + 8);

console.log("Algum código");
promessa
  .then((value) => {
    return value + 5;
  })
  .then((value) => console.log(`A soma é ${value}`)); // encadear várias ações através do then
