const calcDate = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24);

const date1 = new Date(2020, 3, 15);
const date2 = new Date(2025, 10, 2);

let days = calcDate(date1, date2);
console.log(`${days} Days`);

const now = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  year: "2-digit",
  day: "numeric",
  month: "2-digit",
  weekday: "short",
};
const locale = navigator.language;

let h1 = document.querySelector("h1");

h1.textContent = new Intl.DateTimeFormat("en-us", {
  day: "2-digit",
  weekday: "short",
  month: "2-digit",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
}).format(now);
