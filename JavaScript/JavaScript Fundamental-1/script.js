// let myCurrentJob = "Programmer";
// let myFirstJob = "Teacher";

// console.log(myCurrentJob, myFirstJob);

// let a = "5";
// a = 5;
// a = true;

// console.log(typeof a);

// First Coding challenge:

// First Case:
let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;

console.log(`Mark BMI is ${markBMI}`);

let johnBMI = johnWeight / (johnHeight * johnHeight);

console.log(`John BMI is ${johnBMI}`);

let markHigherBMI;

if (markBMI > johnBMI) {
  console.log(`MarkBMI is higher(${markBMI})`);
} else {
  console.log(`John BMI is higher(${johnBMI})`);
}

let fullName = "Shiva Adhikari";
let job = "Programmer";
let birthYear = 1998;
let currentYear = 2022;

console.log(
  "I'm" +
    " " +
    fullName +
    ",my job is " +
    job +
    " and I am  " +
    (currentYear - birthYear) +
    " years old"
);
console.log(
  `I'm ${fullName}, my job is ${job} and I'm ${
    currentYear - birthYear
  } years old`
);
