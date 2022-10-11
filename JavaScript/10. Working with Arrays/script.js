"use strict";

const currencies = new Map([
  ["USD", "United States Dollar"],
  ["Eur", "Euro"],
  ["GBP", "Pound Sterling"],
]);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(...movements.entries());
// // for of loop:
// for (const movement of movements) {
//   console.log(
//     movement > 0
//       ? `You deposited ${movement}`
//       : `You withdraw ${Math.abs(movement)}`
//   );
// }

// console.log("------------forEach------------");
// movements.forEach((movement) => {
//   console.log(
//     movement > 0
//       ? `You deposited ${movement}`
//       : `You withdraw ${Math.abs(movement)}`
//   );
// });

// // Looping through the array to get index as well:
// for (const [i, key] of movements.entries()) {
//   console.log(`${i + 1}: ${Math.abs(key)}`);
// }
// movements.forEach((move, i, arr) => {
//   console.log(Math.abs(move), i, arr);
// });

// Here we are going to learn about the map function:
const euroToUSD = 1.1;
const arrUSD = movements.map((mov) => mov * euroToUSD);
console.log(arrUSD);

const movementDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? `deposited` : `withdraw `} ${Math.abs(
      mov
    )}`
);
console.log(movementDescription);
// Filter Function:
const filteredMovements = movements.filter((mov) => mov > 0);
console.log(filteredMovements);

// Reduce function:
const reduedMovements = movements.reduce((mov) => mov);
console.log(reduedMovements);

// Withdarw array and deposit array using filter function:
const withdraw = movements.filter(mov=>mov<0)
console.log(withdraw);

const deposit = movements.filter(mov=>mov>0);
console.log(deposit)

// Using reduce function in movements:
const balance= movements.reduce((acc, mov)=>acc+mov, 0)
console.log(balance);
// Same job using for loop:

let sum=0;
 for(const value of movements){
  sum= value+sum;
 }
 console.log(sum);

 document.querySelector('.balance').value= movements.reduce((curr, mov)=>curr+mov, 0);
 
// Maximum using reduce method:
const max= movements.reduce((acc, mov)=>{
  console.log(`Accumulator: ${acc}`)
  if(acc> mov) return acc;
  else return mov;
}, movements[0])
console.log(max)
console.log(movements)