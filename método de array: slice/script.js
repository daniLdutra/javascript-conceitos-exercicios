// exibe atraves de "cortes" o array

let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(num.slice(-2)); //exibe os dois último elementos do array.
console.log(num.slice(4, 6)); //exibe o 4 e 5
console.log(num.slice(4, 5)); // exibe o 4
console.log(num.slice(3, -2)); // exibe 3, 4, 5, 6, 7 (não imprimi os dois últimos elementos)
