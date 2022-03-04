// Junta elementos em um array em uma frase, por meio  de um separador;

let frase = "Testando o método split";
let palavras = frase.split(" ");
console.log(palavras);

let novaFrase = palavras.join("@");
console.log(novaFrase);
