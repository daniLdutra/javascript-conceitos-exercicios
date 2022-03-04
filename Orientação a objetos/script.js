//Forma de programar em que se utiliza o objeto como seu principal princípio;
//A maioria dos softwares, na parte de back-end são desenvolvidas em cima desse paradigma.
//Grandes frameworks se aproveitam dessa técnica: Laravel, Django.

//Métodos:
//Propriedade que serve como função:

// let cachorro = {
//   latir: function () {
//     console.log("Au au");
//   },
//   rosnar: function () {
//     console.log("grrrrr");
//   },
// };
// cachorro.latir();
// cachorro.rosnar();

//latir e rosnar são propriedades, nesse exemplo foi criado uma função anônima.

// const cachorro = {
//   raca: "SRD",
//   uivar: function () {
//     console.log("Auuuuuu");
//   },
//   setRaca: function (raca) {
//     this.raca = raca;
//   }, // será referência nova raça, qdo invocada função
//   getRaca: function () {
//     return "A raca é " + this.raca;
//   }, //método get exibe msg para a função invocada.
// };

// console.log(cachorro.raca); // SRD
// cachorro.setRaca("Pastor Alemão"); // atribuida nova raça
// console.log(cachorro.raca); //nova raça apresentada no console;

// console.log(cachorro.getRaca()); //invocando função para exibir msg do getRaca
