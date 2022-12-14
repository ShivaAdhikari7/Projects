"use strict";

/************************************/
// Array Destructuring:
/************************************/

// 1. Array destructuring with default value
// const arr = [2, 5, 4];
// // const [a, b, c] = arr;
// const [a, b = 1, c, d = 5] = arr;
// console.log(a, b, c, d);

//2. Switching varibales:
// const array = ["Rota", "Khir"];
// const [main, secondary] = array;
// console.log(`main: ${main}, secondary: ${secondary}`);
// const [secondaryFood, mainFood] = [main, secondary];
// console.log(`main: ${mainFood}, secondary: ${secondaryFood}`);

// 3. Nested Destructuring:
// const arr = [2, 3, [5, 7]];
// const [a, b, [c, d]] = arr;
// console.log(a, b, c, d);

// 4. Recieve 2 return values from function:
// const resturant = {
//   resturnatName: "Classic Italiano",
//   location: "Sansfransico",
//   categories: ["Iitalian", "Indian", "Nepali"],
//   starterMenu: ["Garlic", "Bread"],
//   mainMenu: ["Pizza", "pasta", "Risotto"],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };
// console.log(resturant.order(1, 0));
// const [main, secondary] = resturant.order(0, 1);
// console.log(main, secondary);

// const resturant = {
//   resturantName: "Classic Italiano",
//   location: "Sansfransico",
//   categories: ["Iitalian", "Indian", "Nepali"],
//   starterMenu: ["Garlic", "Bread"],
//   mainMenu: ["Pizza", "pasta", "Risotto"],

//   openingHours: {
//     thursday: {
//       open: 12,
//       close: 10,
//     },
//     friday: {
//       open: 9,
//       close: 11,
//     },
//     saturday: {
//       open: 10,
//       close: 10,
//     },
//   },
//   order: function (mainIndex, secondaryIndex) {
//     return [this.mainMenu[mainIndex], this.starterMenu[secondaryIndex]];
//   },

//   orderDelievery: function (
//     // { mainIndex, secondaryIndex, address, time } = this.orderDelievery  athawa yo garda in hunxa
//     // { mainIndex, secondaryIndex, address, time }
//     {
//       mainIndex = this.orderDelievery,
//       secondaryIndex = this.orderDelievery,
//       time = this.orderDelievery,
//       address = this.orderDelievery,
//     }
//   ) {
//     const [mainfood, starterfood] = this.order(mainIndex, secondaryIndex);
//     console.log(
//       `Your order ${mainfood} and ${starterfood} will be recieved at the ${address} at ${time}`
//     );
//   },
//   orderedRecepies: function () {
//     for (let i = 0; i < arguments.length; i++) {
//       console.log(`Your recipes are: ${arguments[i]}`);
//     }
//   },

//   orderPizza: function (mainIngredients, ...otherIngrediants) {
//     console.log(mainIngredients, otherIngrediants);
//   },
// };
// console.log(resturant.openingHours["friday"]);
// resturant.order();
// // 6.Practical Examples in object destructing:
// resturant.orderDelievery({
//   mainIndex: 0,
//   secondaryIndex: 1,
//   address: "Kupandole",
//   time: "20:08",
// });

// console.log(resturant.openingHours.friday.close);

// 1. Destructuring Objects:
// const { resturantName, categories } = resturant;
// // console.log(`"resturantName": ${resturantName}, categories: ${categories}`);
// console.log(resturantName, categories);

// 2. change default name:
// const { resturantName: hotelName, openingHours: hours } = resturant;
// console.log(hotelName, hours);

// 3. Default Values
// const { menu = {}, starterMenu = {} } = resturant;
// console.log(menu, starterMenu);

// 4. Mutating Variables:
// (a = 20), (b = 30);
// console.log(a, b);

// const obj = {
//   a: 3,
//   b: 6,
// };
// ({ a, b } = obj);
// console.log(a, b);

// 5. Nested Objects:
// const { openingHours } = resturant;

// const { friday } = openingHours;
// console.log(friday);

// const {
//   friday: { open, close },
// } = openingHours;
// console.log(open, close);

// const {
//   openingHours: {
//     friday: { open, close },
//   },
// } = resturant;
// console.log(open, close);
// const {
//   openingHours: { friday },
// } = resturant;
// console.log(friday);

/************************************/
// Spread Operator:
/************************************/

// let arr = [1, 2, 3];
// let newArr = [3, 4, ...arr];

// // Use cases:
// // Copy the array:
// let newMenu = [...resturant.mainMenu];
// console.log(newMenu);

// // Join two arrays
// let joinedArray = [...resturant.mainMenu, ...resturant.starterMenu];
// console.log(joinedArray);

// // Spread operator in String:
// let str = "Hello";
// console.log(...str);

// // Spread operator in Real life:
// let recipes = ["Alu", "French Fries", "Gopi"];
// resturant.orderedRecepies(...recipes);

// // Spread operators work only in iterables.
// // The iterables are: arrays, strings, maps, sets but not object .
// // From ES62018 the spread operator works in the objects as well although it is not iterables:

// // Spread operator in objects:
// let newResturant = { Founder: "Shiva Adhikari", ...resturant };
// console.log(newResturant);

// // The most important thing about the spread operator is we can copy the object safely.
// const copyResturant = { ...newResturant };

// copyResturant.Founder = "Yuvraj Adhikari";
// console.log(copyResturant);

/************************************/
// Rest Operator:
/************************************/

// let arr = [4, 5, 6];

// // It is spread operator becuase it is in the right side of the assignment operator.
// let array = [1, 2, 3, ...arr];

// // It is the rest operator because it is in the left side of the assignment operator.
// const [a, b, ...otherArray] = array;
// console.log(a, b, otherArray);

// // Rest and Spread operator at the same time:
// const [alu, gopi, ...otherSabji] = [
//   ...resturant.mainMenu,
//   ...resturant.starterMenu,
// ];
// console.log(alu, gopi, otherSabji);

// console.log(resturant.openingHours);

// // const { openingHours } = resturant;
// // const {
// //   friday: { open, close },
// // } = openingHours;

// // Rest operator in objects:

// const {
//   openingHours: { saturday, ...weekdays },
// } = resturant;
// console.log(saturday, weekdays);

// let addNumbers = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// let x = [3, 56, 78, 9, 5, 4, 6, 7];
// addNumbers(...x);

// // Real life example:
// resturant.orderPizza("mushrooms", "alu", "egg", "daal");

// Iteration using for of loop:

let openingHours = {
  thursday: {
    open: 12,
    close: 10,
  },
  friday: {
    open: 9,
    close: 11,
  },
  saturday: {
    open: 10,
    close: 10,
  },
};

const resturant = {
  resturantName: "Classic Italiano",
  location: "Sansfransico",
  categories: ["Iitalian", "Indian", "Nepali"],
  starterMenu: ["Garlic", "Bread"],
  mainMenu: ["Pizza", "pasta", "Risotto"],

  openingHours,
  order(mainIndex, secondaryIndex) {
    return [this.mainMenu[mainIndex], this.starterMenu[secondaryIndex]];
  },

  orderDelievery: function (
    // { mainIndex, secondaryIndex, address, time } = this.orderDelievery  athawa yo garda in hunxa
    // { mainIndex, secondaryIndex, address, time }
    {
      mainIndex = this.orderDelievery,
      secondaryIndex = this.orderDelievery,
      time = this.orderDelievery,
      address = this.orderDelievery,
    }
  ) {
    const [mainfood, starterfood] = this.order(mainIndex, secondaryIndex);
    console.log(
      `Your order ${mainfood} and ${starterfood} will be recieved at the ${address} at ${time}`
    );
  },
  orderedRecepies: function () {
    for (let i = 0; i < arguments.length; i++) {
      console.log(`Your recipes are: ${arguments[i]}`);
    }
  },

  orderPizza(mainIngredients, ...otherIngrediants) {
    console.log(mainIngredients, otherIngrediants);
  },
};

// Optional Chaining:
let days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

// for (const day of days) {
//   // if (resturant.openingHours[day]?.open) {
//   //   console.log(
//   //     `On  ${day} we are open at ${resturant.openingHours[day].open} `
//   //   );
//   // } else {
//   //   console.log(`We are closed on ${day}`);
//   // }

//   let open = resturant.openingHours[day]?.open ?? "closed";

//   console.log(`On ${day} we are open at ${open}`);
// }

// // Optional chaining in method:
// console.log(resturant.order?.(0, 1) ?? "Method doesn't exist");

// Iterating the objects:

// Iterating the object Keys:
let keys = Object.keys(openingHours);

let openStr = ` We are open for ${keys.length} days: `;

for (let key of keys) {
  openStr = openStr + `${key},`;
}
console.log(openStr);

// Iterating the object Values:

let values = Object.values(openingHours);

const { open, close } = Object.values(openingHours)[0];
console.log(open, close);

for (let { open, close } of Object.values(openingHours)) {
  console.log(open, close);
}

// Iterating the whole object:
// for (let [key, { open, close }] of Object.entries(openingHours)) {
//   console.log(key, open, close);
// }

// let veryNewMenu = [...resturant.mainMenu, ...resturant.starterMenu];
// for (const [i, el] of veryNewMenu.entries()) {

//   console.log(`${i + 1}: ${el}`);
// }

// Maps:

const rest = new Map();

rest
  .set("open", 12)
  .set("categories", ["Apple", "Ball", "cat"])
  .set("close", 22);
console.log(rest);

console.log(
  rest.get("open") == 12 && rest.get("close") > 22
    ? "we are open"
    : "We are close"
);

// Quiz app:
const question = new Map([
  ["question", "Which is the best programming language in the world?"],
  [1, "C"],
  [2, "Python"],
  [3, "JavaScript"],
  ["Correct", 3],
  [true, "Your answer is correct"],
  [false, "Try again"],
]);
console.log(question);

// for (const [key, { open, close }] of Object.entries(openingHours)) {
//   console.log(key, open, close);
// }

// // Converting into map if you already have an object:
// const openHour = new Map(Object.entries(openingHours));
// for (const [key, { open, close }] of openHour) {
//   console.log(key, open, close);
// }

// Quiz application:
// console.log(question);
// console.log(question.get("question"));

// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer: ${key}: ${value}`);
// }
// const answer = Number(prompt("Enter the number between 1 to 3"));

// // Both are correct:
// console.log(answer === 3 ? question.get(true) : question.get(false));

// console.log(question.get(question.get("Correct") === answer));

// Changing question to arrays:
// let arr = [...question];
// console.log([...question.values(question)]);
