// Método push: insere elemento no array;
//Método pop: remove elemento do final do array;

let nomes = ["Matheus", "Maria", "José"];

let elementoRemovido = nomes.pop(); // remove o último elemento do arrayz
console.log(elementoRemovido); //Mostra elemento removido.
console.log(nomes); //exibe o array sem o José

nomes.push("Pedro"); // Pedro é inserido na última posição do array
console.log(nomes);
