const fs = require("fs");
const txt = fs.readFileSync("./input.txt", "utf-8");
console.log(txt);

const outputtxt = `All I read from another file is ${txt}`;
fs.writeFileSync("./output.txt", outputtxt);
console.log("File is written");
