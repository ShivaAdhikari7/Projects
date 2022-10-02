// Primitive variable vs Refrence variable:

// This keyword in method:
let girl = {
  firstName: "Savya",
  lastName: "Gaihre",
  birthYear: 1998,

  calcAge: function calcAge() {
    console.log(this);
    return 2022 - this.birthYear;
  },
};

let girl2 = {
  firstName: "Siwani",
  lastName: "Adhikari",
  birthYear: 1992,
};

girl2.calcAge = girl.calcAge;

girl2.calcAge();
