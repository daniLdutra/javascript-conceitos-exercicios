// for (let i = 0; i < 100; i += 3) {
//   console.log(`A soma de i com 2 é: ${i + 2}`);
// }

// // Uso do Break no loop
// let nome = "Matheus";

// for (let index = 0; index < 10; index += 1) {
//   if (index == 3) {
//     nome = "João";
//   } else if (index == 5 && nome == "João") {
//     console.log("O nome é João, pode parar");
//     break;
//   }
//   console.log(index);
// }

//Uso do Continue no loop
for (let index = 10; index > 0; index -= 1) {
  if (index % 2 == 0) {
    console.log("Caiu no continue");
    continue;
  }
  console.log(index);
}
