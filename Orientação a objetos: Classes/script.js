// Classe é um molde para o objeto
//O prototype do JS pode ser chamado de classe;
//Pode-se cria diversos objetos em cima de um prototype.

let cachorro = {
  patas: 4,
  raca: "SRD",
  latir: function () {
    console.log("Au au");
  },
};

let labrador = Object.create(cachorro);
labrador.latir();

labrador.raca = "Labrador";
console.log(labrador.raca);
console.log(cachorro.raca);

let pastor = Object.create(cachorro);
pastor.raca = "Pastor Alemão";
console.log(pastor.raca);
