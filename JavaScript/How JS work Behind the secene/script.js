// // Primitive variable vs Refrence variable:
// // var firstName = "siwani";
// // This keyword in method:
// let girl = {
//   firstName: "Savya",
//   lastName: "Gaihre",
//   birthYear: 1998,

//   calcAge: function calcAge() {
//     console.log(this);
//     havegotra = true;

//     let self = this;
//     const func = function () {
//       if (havegotra) console.log(`${self.firstName} is  a brahmin`);
//     };
//     func();

//     return 2022 - this.birthYear;
//   },
// };

// let girl2 = {
//   firstName: "Siwani",
//   lastName: "Adhikari",
//   birthYear: 1992,
// };

// girl2.calcAge = girl.calcAge;

// girl2.calcAge();

// Arguments: We don't have arguments in arrow function but do have in normal function:

let a = function (a, b) {
  console.log(arguments);
  for (let key in arguments) {
    console.log(key);
  }
  return a + b;
};
a(3, 4, 5, 6);
