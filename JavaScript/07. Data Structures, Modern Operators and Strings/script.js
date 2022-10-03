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
const resturant = {
  resturnatName: "Classic Italiano",
  location: "Sansfransico",
  categories: ["Iitalian", "Indian", "Nepali"],
  starterMenu: ["Garlic", "Bread"],
  mainMenu: ["Pizza", "pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
console.log(resturant.order(1, 0));
const [main, secondary] = resturant.order(0, 1);
console.log(main, secondary);
