const calcDate = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24);

const date1 = new Date(2020, 3, 15);
const date2 = new Date(2025, 10, 2);

let days = calcDate(date1, date2);
console.log(`${days} Days`);
