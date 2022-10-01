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

// let person1 = {
//   firstName: "Shiva",
//   lastName: "Adhikari",
//   birthYear: "1998",
//   location: "Kathmandu",
//   job: "Programmer",
//   haslicense: false,

// calcAge: function () {
//   return 2022 - this.birthYear;
// },

//   calcAge: function () {
//     console.log(this);
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
// };
// // person1.age = 24;
// // console.log(person1.age);

// person1.calcAge();
// console.log(person1.age);
// console.log(person1);

// // Shiva is a 24-year old programmer, and he has a driving license.

// console.log(
//   `${person1.firstName} is a ${person1.age} old ${person1.job} and he ${
//     person1.haslicense ? "has a " : "has not a"
//   } driving license`
// );

/**************************************************/
// Coding Challenge 3:
/**************************************************/

// const Mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };

// const John = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };

// console.log(
//   `${
//     John.calcBMI() > Mark.calcBMI()
//       ? `John's BMI (${John.calcBMI()}) is higher than Mark's (${Mark.calcBMI()})`
//       : `Mark's BMI (${Mark.calcBMI()}) is higher than John's (${John.calcBMI()})`
//   }`
// );

/**************************************************/
// Iteration: For Loops
/**************************************************/

const years = [1990, 1992, 1932, 45];

const ages = [];

// Looping forwards:
// for (let i = 0; i < years.length; i++) {
//   ages.push(typeof years[i]);
//   if (typeof years[i] !== "string") break;
//   console.log(`The given values are: ${years[i]}`);
// }

// console.log(ages);

// Looping backwards:

// for (let i = years.length - 1; i >= 0; i--) {
//   {
//     console.log(`${years[i]}`);
//   }
// }

/**************************************************/
// Iteration: While Loops:
/**************************************************/

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled the ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;

//   if (dice === 6) {
//     console.log(`You rolled ${dice} so the game is about to end hai ta.`);
//   }
// }

/**************************************************/
// Coding Challenge 4:
/**************************************************/

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let total = [];

// const calcTip = (inputVal) =>
//   inputVal >= 50 && inputVal <= 300 ? 0.15 * inputVal : 0.2 * inputVal;

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   total.push(calcTip(bills[i]) + bills[i]);
// }
// console.log(tips);
// console.log(total);

// const calcAverage = (arr) => {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(`The average of the array is ${calcAverage(bills)}`);

// Finding maximum in an array:
// let arr = [1, 13, 5, 29, 6, 3];
// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) max = arr[i];
// }

// console.log(max);

// Finding minimum in an array:
// let array = [2, 3, 5, 29, 6, 3];
// let array = [200, 500, 100, 300, 99];
// let min = array[0];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] < min) {
//     min = array[i];
//   }
// }
// console.log(min);

// Finding the amplitude:
// let tempratures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// let anothertemp = [2, 5, 10, 25, 30];
// const calcAmplitude = (arr) => {
//   let max = arr[0];
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "number") continue;
//     if (arr[i] > max) max = arr[i];
//     if (arr[i] < min) min = arr[i];
//   }
//   return max - min;
// };
// console.log(`${calcAmplitude(tempratures)} is the amplitude`);

// Swap two numbers without using third variable:
let x = 5;
let y = 6;
x = x + y;
y = x - y;
x = x - y;
console.log(x, y);

// Find the prime numbers from 1 to 100.

const findPrimeNumber = (num) => {
  let isPrime = true;
  for (let i = 2; i * i < num; i++) {
    if (num % i == 0) {
      isPrime = 0;
    }
  }
  if (isPrime) {
    console.log(num);
  }
};
for (let i = 2; i <= 100; i++) {
  findPrimeNumber(i);
}
