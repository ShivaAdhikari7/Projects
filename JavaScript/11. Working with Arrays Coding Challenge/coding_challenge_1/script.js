// let dogsJulia = [3, 5, 2, 12, 7];
// let dogsKate = [4, 1, 15, 8, 3];

// let checkDogs = function (arr1, arr2) {
//   const finalArray = [...arr1, ...arr2];
//   for (const dog of finalArray) {
//     let lifeStage = dog <= 3 ? `a puppy` : "an adult";
//     console.log(`The dog is ${lifeStage}`);
//   }
// };

// let checkDogs = function (arr1, arr2) {};

// checkDogs(dogsJulia, dogsKate);

// dogsJuliaCopyArray = dogsJulia.slice();
// let finaldogsJulia = dogsJuliaCopyArray.slice(1, -2);

// const finalArray = [...dogsKate, ...finaldogsJulia];
// finalArray.forEach((age, i) => {
//   console.log(
//     age <= 3
//       ? `Dog ${i + 1} is still a puppy`
//       : `Dog ${i + 1} is an adult and is ${age} years old`
//   );
// });

// Coding Challenge 2:
let dogsJulia = [5,2,4,1,15,8,3]
const calcAvergaeHumanAge= function(dogArray){
  // dogArray.map(function(dogAge){
  //  if(dogAge>2){
  //   console.log(`Dog age in human is ${16+ dogAge*4}`)
  //  }
  //  else{
  //   console.log(`Dog  age in human is ${dogAge*2}`)
  //  }
  // })
//   let ages=dogArray.map(dogAge=>  dogAge>2?16+dogAge*4: dogAge*2)
//   console.log(ages)
  
//  let filterAge= ages.filter(age=>age>18)
//  console.log(filterAge)
 
// let finalAge=filterAge.reduce((acc, curr)=> 
//    acc+curr
//  , 0)/filterAge.length;

//  return finalAge

// Using the arrow function and chaining:
return dogArray.map(dogAge=>dogAge>2?16+dogAge*4: dogAge*2).filter((age)=>
  age>18
   ).reduce((acc, age, i, arr)=>acc+age/arr.length,0)
}
let age=calcAvergaeHumanAge(dogsJulia)
console.log(age)