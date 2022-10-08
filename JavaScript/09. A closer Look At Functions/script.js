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
// const oneWord = (str) => str.replace(/ /g, "").toLowerCase();

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

// const JoinedName = (str1, str2) => {
//   return str1.concat(str2);
// };
// const fullName = (str1, str2, func) => {
//   console.log(`The full name is ${func(str1, str2)}`);
// };

// fullName("Shiva", " Adhikari", JoinedName);

// Fuction Returning Functions:
// const greet = function (greeting) {
//   return function (personName) {
//     console.log(`${greeting} ${personName}`);
//   };
// };

// const greets = (greeting) => {
//   return (personName) => {
//     console.log(`${greeting} ${personName}`);
//   };
// };

// const greetings = greets("Hi");
// greetings("Jonas");

// Call, bind and apply in functions:

// const seetaAirlines = {
//   airline: "Seeta",
//   iataCode: "LH",
//   bookings: [],

//   book(flightNum, personName) {
//     console.log(
//       `${personName} book a seat on ${this.airline} ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push(`{flight:${this.iataCode}${flightNum}, ${personName}}`);
//   },
// };

// seetaAirlines.book(23, "Seeta Adhikari");
// seetaAirlines.book(26, "Bipin Adhikari");
// console.log(seetaAirlines.bookings);

// const YetiAirlines = {
//   airline: "Yeti",
//   iataCode: "YH",
//   bookings: [],
// };
// const book = seetaAirlines.book;

// // Call method in function:
// book.call(YetiAirlines, 25, "Shiva Adhikari");
// console.log(YetiAirlines.bookings);

// // Apply  method in function:
// book.apply(YetiAirlines, [29, "Bikash Adhikari"]);
// let flightDetail = [60, "Atmaram Rai"];
// book.apply(YetiAirlines, flightDetail);

// // This apply method's work can also be done by call method by destructuring the array:
// book.call(YetiAirlines, ...flightDetail);

// Bind Method in function:
// bookSeeta = book.bind(seetaAirlines);
// bookSeeta(26, "Shiva Adhikari");

// bookSeeta29 = book.bind(seetaAirlines, 29);
// bookSeeta29("Aakash Adhikari");
// console.log(seetaAirlines.bookings);
// console.log(bookSeeta);

// With AddEvent Listener:
// seetaAirlines.planes = 300;
// seetaAirlines.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector(".btn-new")
//   .addEventListener("click", seetaAirlines.buyPlane.bind(seetaAirlines));

// With our daily practice:

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// If regular to be added the tax is 23%, then:
// const totalTax = addTax.bind(null, 0.1);
// Same as:
// const totalTax = (value) => value + value * 0.23;
// console.log(totalTax(300));

// const addTax = function (rate) {
//   return function (value) {
//     console.log(value + value * rate);
//   };
// };

// const addTax = (rate) => (value) => value + value * rate;

// let totalTax = addTax(0.1);
// console.log(totalTax(200));

// We will look at the closure here:

// let f;
// const e = function () {
//   const a = 3;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const c = 7;
//   f = function () {
//     console.log(c + 3);
//   };
// };
// e();
// f();
// console.dir(f);

// h();
// f();
// console.dir(f);

// More about the clousers:

// const boardingPassengers = (n, wait) => {
//   const noOfPassengers = n / 3;

//   setTimeout(function () {
//     console.log(`Boarding will start in ${wait} seconds`);
//     console.log(
//       `There are 3 group with ${noOfPassengers} passengers in each group`
//     );
//   }, 3000);
//   console.log(`There are total ${n} passengers`);
// };

// const noOfPassengers = 1000;
// boardingPassengers(180, 3);

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.body.addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
