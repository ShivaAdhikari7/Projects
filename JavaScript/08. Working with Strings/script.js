const airplane = "Sita Airlines";

// console.log("Hello".length);
// console.log(airplane.slice(-5, -1));

// const hasSeat = function (str) {
//   console.log(str.slice(-1));
//   console.log(
//     str.slice(-1) === "B" || str.slice(-1) === "E"
//       ? "Middle seat is available"
//       : "Middle seat is not available"
//   );
// };
// hasSeat("B1E");
// hasSeat("B1D");
// hasSeat("B1B");

// console.log(typeof airplane);
// console.log(typeof new String("HEllo"));

// const passenger = "jOnAs";
// const passengerLower = passenger.toLowerCase();
// const passengerCorrectName =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrectName);
// console.log("jonas".toUpperCase());

// Compare Email:

// const checkEmail = function (email) {
//   let trimmedEmail = email.toLowerCase().trim();
//   if (trimmedEmail === email) {
//     return 1;
//   } else {
//     return 0;
//   }
// };
// checkEmail("    sHIvA@gMail.com  \n");
// console.log(checkEmail ? "You are logged in" : "You are not logged in");

// Replace and Replace All.
// const pass = "All the passengers are at the door and the door is open as well";
// console.log(pass.replaceAll("door", "gate"));
// console.log(pass.replace("passengers", "civilians"));

// Split and join methods:
// let sentence = "a very good boy is here";
// console.log(sentence.split(" ").join("+"));

// const caplitalizeName = function (name) {
//   //   console.log(name);
//   let splitName = name.split(" ");
//   let captialNames = [];

//   for (const key of splitName) {
//     let captializedName = key[0].toUpperCase() + key.slice(1);
//     captialNames.push(captializedName);
//   }
//   console.log(captialNames.join(" "));
// };

// caplitalizeName("shiva Adhikari");
// caplitalizeName("Bishnu Pathak");
// caplitalizeName("hello myaan what are you doing right now");

// Padding:
const maskCreditCard = function (number) {
  const numberString = String(number);
  const requiredStrNumber = numberString
    .slice(-4)
    .padStart(numberString.length, "*");
  console.log(requiredStrNumber);
};
maskCreditCard(98448829993459);
maskCreditCard(949949949949629);
