let correctedwords = [];
document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  let words = text.trim().toLowerCase();
  words = text.split("\n");
  for (const [i, key] of words.entries()) {
    const [first, second] = key.split("_");
    let output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});

// (5) ['first_name', 'some_variable', 'delayed_depature', 'calculate_Age', 'undersocre_case']
// first_name
// some_variable
// delayed_depature
// calculate_Age
// undersocre_case

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
// _Delayed_Departure;fao93766109;txl2133758440;11:25;
let firstSplice = flights.split("+")[0].split(";");
let secondSplice = flights.split("+")[1].split(";");
// console.log(firstSplice);
console.log(secondSplice);
let flight = firstSplice[0].split("_");
// console.log(flight);
let output = `❤️${flight.join(" ")} from ${firstSplice[1]
  .slice(0, 3)
  .toUpperCase()} to ${firstSplice[2]
  .slice(0, 3)
  .toUpperCase()}  (${firstSplice[3].replace(":", "h")})
                ${secondSplice[0].slice(1)} from ${secondSplice[1]
  .slice(0, 3)
  .toUpperCase()} to ${secondSplice[2]
  .slice(0, 3)
  .toUpperCase()}  (${secondSplice[3].replace(":", "h")})   
  `;
console.log(output);
console.log("_Arrival".slice(1));
