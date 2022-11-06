// import { arr as a } from "./shoppingCart.js";

// import { cart } from "./shoppingCart";

// console.log("Importing module");
// console.log(a);
// import { cart, arr } from "./shoppingCart.js";
// import add from "./shoppingCart.js";
// add("bread", 2);
// add("bread", 2);
// add("bread", 5);
// console.log(cart);
// console.log(arr);

// const getPost = async function () {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// console.log("Fetching data");
// // let data = await getPost();
// // console.log(data);
// // getPost()
// //   .then((data) => console.log(data))
// //   .catch((err) => console.error(err));
// console.log("Something");

// const shoppingCart = (function () {
//   const cart = [];
//   const shippingCost = 100;
//   const total = 230;

//   const addToCart = function (item, quantity) {
//     cart.push({ quantity, item });
//     console.log(
//       `${item} having ${quantity} and shipping cost is ${shippingCost}`
//     );
//   };
//   const placeOrder = function (item, quantity) {
//     console.log(`${item} with ${quantity} is ordered`);
//   };

//   return {
//     cart,
//     addToCart,
//     placeOrder,
//   };
// })();

// shoppingCart.addToCart("apple", 2);
// console.log(shoppingCart);

// Using the npm and node modules:
// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

// const object1 = {
//   fullName: "Shiva Adhikari",
//   cart: [
//     { quantity: 5, item: "apple" },
//     { quantity: 5, item: "pizza" },
//   ],
//   user: { loggedIn: false },
// };

// const copiedObject = Object.assign({}, object1);
// const cloneDeepObject = cloneDeep(object1);
// object1.user.loggedIn = true;

// console.log(object1);
// console.log(copiedObject);
// console.log(cloneDeepObject);
