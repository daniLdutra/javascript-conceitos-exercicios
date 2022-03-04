//Realiza a mesma coisa que o regex, porém retorna um objeto com algumas informações, pode retornar null ao invés de false, qdo não é encontrado nada.

const digitos = /\d+/;

console.log(digitos.exec("Tem o número 100 aqui")); // retorna um objeto com várias informações, dependendo da raiz do negócio pode ser mais interessante trabalhar com exec, ao invés de trabalhar com test que só retornará se o padrão existe ou não;

console.log(digitos.exec("Tem o número aqui"));
