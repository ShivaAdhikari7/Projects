// const calcDate = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24);

// const date1 = new Date(2020, 3, 15);
// const date2 = new Date(2025, 10, 2);

// let days = calcDate(date1, date2);
// console.log(`${days} Days`);

// const now = new Date();
// const options = {
//   hour: "numeric",
//   minute: "numeric",
//   year: "2-digit",
//   day: "numeric",
//   month: "2-digit",
//   weekday: "short",
// };
// const locale = navigator.language;

// let h1 = document.querySelector("h1");

// h1.textContent = new Intl.DateTimeFormat("en-us", {
//   day: "2-digit",
//   weekday: "short",
//   month: "2-digit",
//   year: "numeric",
//   hour: "numeric",
//   minute: "numeric",
// }).format(now);

// // Set timeout function is here:
// let ingredients = ["pizza", "Spanich"];
// let time = setTimeout(
//   (ing1, ing2) => console.log(`Pizza is ready with ${ing1} and ${ing2}`),
//   1000,
//   ...ingredients
// );
// if (ingredients.includes("panich")) clearTimeout(time);

// // Make a clock that will show the time minute-wise:
// let hr = document.querySelector("hr");
// let min = document.querySelector("min");
// let sec = document.querySelector("sec");

// setInterval(() => {
//   const now = new Date();
//   let time = Intl.DateTimeFormat("en-us", {
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//   });

//   // hr.textContent = hr;
//   // min.textContent = min;
//   // sec.textContent = sec;
// }, 1000);

// Logout option:
// setInterval(() => {}, 1000);

// // Creating and deleting the element from the DOM:
// let message = document.createElement("div");
// message.classList.add("cookie-message");

// message.innerHTML = `This is the element which can delete the parent. <button class="btn">Got it</button>`;

// document.body.append(message);

// document.querySelector(".btn").addEventListener("click", () => {
//   // message.remove();
//   message.parentElement.removeChild(message);
// });
// console.log(getComputedStyle(message).backgroundColor);

// let a = (message.style.fontSize =
//   Number.parseInt(getComputedStyle(message).fontSize) + 1 + "px");
// console.log(a);
// console.log(getComputedStyle(message).fontSize);

// message.addEventListener("click", (e) => {
//   console.log(e.target.getBoundingClientRect());
// });

// let h1 = document.querySelector("h1");

// let printH1 = () => {
//   console.log("Hello");
// };
// h1.addEventListener("mouseenter", printH1);
// // h1.removeEventListener("mouseenter", printH1);

// setTimeout(() => {
//   h1.removeEventListener("mouseenter", printH1);
// }, 3000);

// Generating the random color:
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => {
  return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(
    0,
    255
  )})`;
};

let nav = document.querySelector("nav");
let ul = document.querySelector(".nav_links");
let a = document.querySelector(".nav_link");

nav.addEventListener("click", function (e) {
  console.log(e.target);
  console.log(e.currentTarget);
  console.log("nav clicked");
  console.log(e.currentTarget === this);
  this.style.backgroundColor = randomColor();
});

ul.addEventListener("click", function (e) {
  console.log(e.target);
  console.log(e.currentTarget);
  console.log("ul clicked");
  this.style.backgroundColor = randomColor();
  this.style.border = "2px solid #fff";
});
a.addEventListener("click", function (e) {
  console.log(e.target);
  console.log(e.currentTarget);
  console.log("link clicked");
  this.style.backgroundColor = rgba(0, 0, 0, 0.1);
  // e.stopPropagation();
});
