// JSON = Javascript Object Notation;
// Utilizado para comunicação entre os serviços, back end <-> front end;
//Apenas aspas duplas;
//Não aceita comentários;

//Podemos converter o JSON para uma string ou uma string para JSON;

const car = {
  brand: "BMW",
  wheels: 4,
  doors: 2,
  type: "Sedan",
};
let jsonToString = JSON.stringify(car);
console.log(jsonToString); // transforma um JSON em uma string

let stringToJason = JSON.parse(jsonToString);
console.log(stringToJason); // transforma uma string em JSON
