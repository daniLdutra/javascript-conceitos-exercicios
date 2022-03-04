//Qdo não definimos o evento muito bem, (seletor brando), ou um elemento que está dentro de outro e tem um evento;
//Pode ocorrer uma propagação, um evento ativar outro evento tbm e aí ocorre uma propagação.
//O método que resolve esse problema é o stopPropagation;

let p = document.querySelector('p');
let btn = document.querySelector('button');

p.addEventListener('click', (e) => {
  // console.log("clicou no paragrafo");
  e.stopPropagation();
});
btn.addEventListener('click', () => {
  console.log('clicou no botão');
});
