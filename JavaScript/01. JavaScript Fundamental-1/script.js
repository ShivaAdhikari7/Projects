// // let myCurrentJob = "Programmer";
// // let myFirstJob = "Teacher";

// // console.log(myCurrentJob, myFirstJob);

// // let a = "5";
// // a = 5;
// // a = true;

// // console.log(typeof a);

// // First Coding challenge:

// // First Case:
// let markWeight = 78;
// let markHeight = 1.69;

// let johnWeight = 92;
// let johnHeight = 1.95;

// let markBMI = markWeight / markHeight ** 2;

// console.log(`Mark BMI is ${markBMI}`);

// let johnBMI = johnWeight / (johnHeight * johnHeight);

// console.log(`John BMI is ${johnBMI}`);

// let markHigherBMI;

// if (markBMI > johnBMI) {
//   console.log(`MarkBMI is higher(${markBMI})`);
// } else {
//   console.log(`John BMI is higher(${johnBMI})`);
// }

// let fullName = "Shiva Adhikari";
// let job = "Programmer";
// let birthYear = 1998;
// let currentYear = 2022;

// console.log(
//   "I'm" +
//     " " +
//     fullName +
//     ",my job is " +
//     job +
//     " and I am  " +
//     (currentYear - birthYear) +
//     " years old"
// );
// console.log(
//   `I'm ${fullName}, my job is ${job} and I'm ${
//     currentYear - birthYear
//   } years old`
// );

// Challenge 3:

const dolphinAvg = (97 + 112 + 101) / 3;
const koalaAvg = (109 + 95 + 106) / 3;

// if (dolphinAvg > koalaAvg) {
//   console.log(`Dolphin wins with the average of ${dolphinAvg}`);
// } else if (koalaAvg > dolphinAvg) {
//   console.log(`Koala wins with the average of ${koalaAvg}`);
// } else {
//   console.log("Match is drawn");
// }

// if (dolphinAvg > koalaAvg && dolphinAvg >= 100) {
//   console.log(`Dolphin wins with the average of ${dolphinAvg}`);
// } else if (koalaAvg > dolphinAvg && koalaAvg >= 100) {
//   console.log(`Koala wins with the average of ${koalaAvg}`);
// } else if (koalaAvg === dolphinAvg && dolphinAvg > 100 && koalaAvg > 100) {
//   console.log("Match is drawn");
// }

// Coding challenge: 4
let bill = 430;

let tip = bill > 50 && bill < 300 ? (15 / 100) * bill : (20 / 100) * bill;

console.log(
  `The bill was ${bill}, the tip was ${tip} and the total value is ${
    bill + tip
  }`
);
