//Define-se variáveis com propriedadesdo objeto com uma notação diferente

const person = {
  name: 'Jhon',
  lastname: 'Doe',
};

const { name: fname, lastname: lname } = person;

console.log(fname);
console.log(lname);

// Para array a mesma coisa

let nomes = ['Dani', 'Elza', 'Ilan'];
let [nomeA, nomeB, nomeC] = nomes;
console.log(nomeA);
console.log(nomeB);
console.log(nomeC);
