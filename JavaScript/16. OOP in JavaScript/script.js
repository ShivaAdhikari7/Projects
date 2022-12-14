"use strict";

// // const Person = function (firstName, birthYear) {
// //   (this.firstName = firstName), (this.birthYear = birthYear);
// // };
// // Person.prototype.calcAge = function () {
// //   return 2021 - this.birthYear;
// // };
// // const shiva = new Person("shiva", 1998);
// // console.log(shiva.calcAge());

// // console.log(shiva.__proto__.__proto__.__proto__);

// // const arr = [1, 2, 3];
// // console.log(arr);

// // console.dir(document.querySelector("h1"));
// // console.dir((x) => x + 1);

// // Coding Challenge 1:

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(this.speed);
// };
// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(this.speed);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.accelerate = function () {
//   this.speed = this.speed + 20;
//   this.charge = this.charge - 1;
//   console.log(
//     `${this.make} is running at the speed of ${this.speed} and with charge ${this.charge} %`
//   );
// };

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = this.charge + chargeTo;
//   console.log(this.charge);
// };

// const Tesla = new EV("Tesla", 120, 22);
// Tesla.chargeBattery(56);
// Tesla.accelerate();
// const BMW = new Car("BMW", 150);
// const Mercedes = new Car("Mercedes", 95);
// BMW.accelerate();
// BMW.brake();
// Mercedes.accelerate();
// Mercedes.brake();
// console.log(BMW);

// Coding challenge 2:
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed = this.speed + 10;
    console.log(this.speed);
  }
  brake() {
    this.speed = this.speed - 10;
    console.log(this.speed);
  }
  get speedUS() {
    console.log(this.speed / 1.6);
  }

  set speedUS(speed) {
    this._speed = speed * 1.6;
  }
}

class EVCl extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `The car is running at ${this.speed} km/hr with the charge of ${
        this.#charge
      } %`
    );
    return this;
  }
  chargeBatter(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

const mercedes = new EVCl("Mercedes", 120, 70);
mercedes.accelerate().accelerate().chargeBatter(90).accelerate();

// const BMW = new Car("BMW", 150);
// const Mercedes = new Car("Mercedes", 95);
// BMW.accelerate();
// BMW.brake();
// BMW.speedUS;
// BMW.speedUS = 190;
// BMW.accelerate();

// ES6 classes:
// class PersonCl {
//   constructor(FullName, birthYear) {
//     (this.FullName = FullName), (this.birthYear = birthYear);
//   }
//   calcAge() {
//     console.log(`The age is ${2021 - this.birthYear}`);
//   }

//   set FullName(name) {
//     if (name.includes(" ")) this._fullName = name;
//     else `This ${name} cannot be given to the class`;
//   }

//   get FullName() {
//     return this._fullName;
//   }
// }

// const adhikari = new PersonCl();
// console.log(adhikari.FullName);

// PersonCl.prototype.greet = function () {
//   console.log(`Good morning ${this.firstName}`);
// };

// const ram = new PersonCl("Ram", 1999);
// ram.calcAge();
// ram.greet();

// const account = {
//   owner: "Shiva Adhikari",
//   movements: [100, 200, 300, 400],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(account.latest);
// account.latest = 500;
// console.log(account.movements);

// More on classes:
// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     (this.currency = currency),
//       (this.pin = pin),
//       (this.movements = []),
//       console.log(`Thank you for opening the account ${owner}`);
//   }

//   deposit(val) {
//     this.movements.push(val);
//   }
//   withdraw(val) {
//     this.deposit(-val);
//   }
// }

// const shiva = new Account("Shiva Adhikari", 5000, 1);
// shiva.deposit(200);
// shiva.withdraw(400);
