"use strict";
// let aa;
// a = 5;
// console.log(a);

// Function Declarations:
// function myage1(birthYear) {
//   return 2022 - birthYear;
// }

// const myage2 = function (birthYear) {
//   return 2022 - birthYear;
// };

// // Function Expressions:
// let age = myage1(1998);
// console.log(`My age is ${age}`);

// console.log(`${myage2(1998)} is my age`);

// // Arrow Function:
// const age3 = (birthYear) => 2022 - birthYear;
// const age4 = (birthYear) => {
//   console.log(`You were born in ${birthYear}`);
//   return 2022 - birthYear;
// };

// const retirementYearLeft = (birthYear, firstName) => {
//   age = 2022 - birthYear;
//   retireAt = 100 - age;
//   return `${firstName} will retire at the age of ${retireAt}`;
// };

// console.log(age3(1998));
// console.log(age3(1998));
// console.log(retirementYearLeft(1998, "Shiva "));

// Coding Challenge: 4

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = () => {
  let dolphinAvg = calcAverage(85, 54, 41);
  let koalaAvg = calcAverage(23, 34, 27);

  if (dolphinAvg > 2 * koalaAvg) {
    console.log(`Dophin wins (${dolphinAvg} vs ${koalaAvg}).`);
  } else if (koalaAvg > dolphinAvg) {
    console.log(`Koala wins (${koalaAvg} vs ${dolphinAvg})`);
  }
};

checkWinner();
