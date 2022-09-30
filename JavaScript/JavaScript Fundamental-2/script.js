"use strict";
// let aa;
// a = 5;
// console.log(a);

/**************************************************/
// Functions:
/**************************************************/

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

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const checkWinner = () => {
//   let dolphinAvg = calcAverage(85, 54, 41);
//   let koalaAvg = calcAverage(23, 34, 27);

//   if (dolphinAvg >= 2 * koalaAvg) {
//     console.log(`Dophin wins (${dolphinAvg} vs ${koalaAvg}).`);
//   } else if (koalaAvg > 2 * dolphinAvg) {
//     console.log(`Koala wins (${koalaAvg} vs ${dolphinAvg})`);
//   } else {
//     console.log("No teams win");
//   }
// };

// checkWinner();

/**************************************************/
// Array Introduction
/**************************************************/

// const calcAge = (birthYear) => 2022 - birthYear;

// const friendsAge = [1998, 1999, 2000, 1997];

// const AgeCalculator = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let ages = calcAge(friendsAge[i]);
//     console.log(ages);
//   }
// };

// AgeCalculator(friendsAge);

/**************************************************/
// Coding Challenge: 2
/**************************************************/

// const clacTip = (inputVal) => {
//   if (inputVal > 300 || inputVal < 50) {
//     return 0.15 * inputVal;
//   } else if (inputVal > 50 && inputVal < 300) {
//     return 0.2 * inputVal;
//   }
//  };

// const clacTip = (inputVal) =>
//   inputVal >= 50 && inputVal <= 300 ? inputVal * 0.15 : inputVal * 0.2;

// let bill = [125, 555, 44];

// let tip = [clacTip(bill[0]), clacTip(bill[1]), clacTip(bill[bill.length - 1])];
// console.log(tip);

// let total = [
//   bill[0] + tip[0],
//   bill[1] + tip[1],
//   bill[bill.length - 1] + tip[tip.length - 1],
// ];
// console.log(total);

// /**************************************************/
// // Introduction to Objects:
// /**************************************************/

// const person = {
//   firstName: "Shiva",
//   lastName: "Adhikari",
//   age: 24,
//   friends: ["Aditya", "Kartik", "Virat"],
// };

// const nameKey = "Name";
// console.log(person["first" + nameKey]);
// console.log(person["last" + nameKey]);

// let choosed = prompt(`Choose Person's firstName, lastName, age, friends.`);

// if (person[choosed]) {
//   console.log(person[choosed]);
// } else {
//   let choosed = prompt(`Choose Person's firstName, lastName, age, friends.`);
//   console.log(person[choosed]);
// }

// Shiva has 3 friends and his best friend is Aditya

// console.log(
//   `${person.firstName} has ${person.friends.length} friends and his best friend is ${person.friends[0]}`
// );

/**************************************************/
// Objects Functions:
/**************************************************/

let person1 = {
  firstName: "Shiva",
  lastName: "Adhikari",
  birthYear: "1998",
  location: "Kathmandu",
  job: "Programmer",
  haslicense: false,

  // calcAge: function () {
  //   return 2022 - this.birthYear;
  // },

  calcAge: function () {
    console.log(this);
    this.age = 2022 - this.birthYear;
    return this.age;
  },
};
// person1.age = 24;
// console.log(person1.age);

person1.calcAge();
console.log(person1.age);
console.log(person1);

// Shiva is a 24-year old programmer, and he has a driving license.

console.log(
  `${person1.firstName} is a ${person1.age} old ${person1.job} and he ${
    person1.haslicense ? "has a " : "has not a"
  } driving license`
);
