let dogsJulia = [3, 5, 2, 12, 7];
let dogsKate = [4, 1, 15, 8, 3];

// let checkDogs = function (arr1, arr2) {
//   const finalArray = [...arr1, ...arr2];
//   for (const dog of finalArray) {
//     let lifeStage = dog <= 3 ? `a puppy` : "an adult";
//     console.log(`The dog is ${lifeStage}`);
//   }
// };

let checkDogs = function (arr1, arr2) {};

checkDogs(dogsJulia, dogsKate);

dogsJuliaCopyArray = dogsJulia.slice();
let finaldogsJulia = dogsJuliaCopyArray.slice(1, -2);

const finalArray = [...dogsKate, ...finaldogsJulia];
finalArray.forEach((age, i) => {
  console.log(
    age <= 3
      ? `Dog ${i + 1} is still a puppy`
      : `Dog ${i + 1} is an adult and is ${age} years old`
  );
});
