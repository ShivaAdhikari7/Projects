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

const resturant = {
  resturantName: "Classic Italiano",
  location: "Sansfransico",
  categories: ["Iitalian", "Indian", "Nepali"],
  starterMenu: ["Garlic", "Bread"],
  mainMenu: ["Pizza", "pasta", "Risotto"],

  openingHours: {
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
  },
  order: function (mainIndex, secondaryIndex) {
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

  orderPizza: function (mainIngredients, ...otherIngrediants) {
    console.log(mainIngredients, otherIngrediants);
  },
};
resturant.order();
// 6.Practical Examples in object destructing:
resturant.orderDelievery({
  mainIndex: 0,
  secondaryIndex: 1,
  address: "Kupandole",
  time: "20:08",
});

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

let arr = [4, 5, 6];

// It is spread operator becuase it is in the right side of the assignment operator.
let array = [1, 2, 3, ...arr];

// It is the rest operator because it is in the left side of the assignment operator.
const [a, b, ...otherArray] = array;
console.log(a, b, otherArray);

// Rest and Spread operator at the same time:
const [alu, gopi, ...otherSabji] = [
  ...resturant.mainMenu,
  ...resturant.starterMenu,
];
console.log(alu, gopi, otherSabji);

console.log(resturant.openingHours);

// const { openingHours } = resturant;
// const {
//   friday: { open, close },
// } = openingHours;

// Rest operator in objects:

const {
  openingHours: { saturday, ...weekdays },
} = resturant;
console.log(saturday, weekdays);

let addNumbers = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

let x = [3, 56, 78, 9, 5, 4, 6, 7];
addNumbers(...x);

// Real life example:
resturant.orderPizza("mushrooms", "alu", "egg", "daal");
