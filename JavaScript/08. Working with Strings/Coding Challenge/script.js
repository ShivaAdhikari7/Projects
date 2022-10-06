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
