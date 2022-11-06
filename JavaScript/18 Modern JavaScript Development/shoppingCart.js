console.log("Exporting module");

export const arr = [1, 2, 3];
export const cart = [];

export default function (item, quantity) {
  console.log(`${quantity} number of ${item} has been added to cart`);
  cart.push(quantity);
}
