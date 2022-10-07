// Closer Look at Functions:

// const bookings = [];
// const BookFlight = (
//   flightName,
//   noOfPassengers = 1,
//   price = 199 * noOfPassengers
// ) => {
//   const booking = {
//     flightName,
//     noOfPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// BookFlight("Boeing345", 2);
// BookFlight("Boeing345", 2, 559);
// BookFlight("AirBus", 2, undefined);
// console.log(bookings);

// Passing by refrence and Passing by value:
// const jonas = {
//   fullName: "Jonas Sch",
//   passport: 12345,
// };
// const flightName = "LH224";

// const checkIn = function (flight, passenger) {
//   flight = "HB223";
//   passenger.fullName = "Mr. Jonas Sch";

//   if (jonas.passport === 12345) {
//     console.log("You are checked in");
//   } else {
//     console.log("You are not checked in");
//   }
// };
// const changePassword = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000);
//   console.log(person.passport);
// };
// changePassword(jonas);
// console.log(jonas);
// checkIn(flightName, jonas);

// Higher Level and lower level functions: as well as callback functions:
const oneWord = (str) => str.replace(/ /g, "").toLowerCase();

// oneWord("JavaScript is best");

// const firstUpperWord = (str) => {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };
// // firstUpperWord("JavaScript is best");

// const transform = (str, func) => {
//   console.log(`Original String ${str}`);
//   console.log(`Transformed String: ${func(str)}`);
//   console.log(`Transformed by:${func.name}`);
// };

// transform("Javascript is best", oneWord);

// My Own Example of Callback Function:

const JoinedName = (str1, str2) => {
  return str1.concat(str2);
};
const fullName = (str1, str2, func) => {
  console.log(`The full name is ${func(str1, str2)}`);
};

fullName("Shiva", " Adhikari", JoinedName);
