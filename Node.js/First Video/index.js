// FIle System:
// const fs = require("fs");
// // const txt = fs.readFileSync("./input.txt", "utf-8");
// // console.log(txt);

// // const outputtxt = `All I read from another file is ${txt}`;
// // fs.writeFileSync("./output.txt", outputtxt);
// // console.log("File is written");

// fs.readFile("./start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("Here is some error");
//   fs.readFile(`./${data1}.txt`, "utf-8", (err, data2) => {
//     if (err) return console.log("Some error occured");
//     fs.readFile("input.txt", "utf-8", (err, data) => {
//       fs.writeFile("final.txt", `${data1}\n ${data2} \n ${data}`, (err) => {
//         if (err) return console.log("File is not written");
//         console.log("File is ready to read");
//       });
//     });
//   });
// });
// console.log("Reading the file...");

////////////////////////////////////
// Server:
///////////////////////////////////
const http = require("http");
const url = require("url");
const fs = require("fs");

const data = fs.readFileSync("./data.json", "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const path = req.url;

  if (path === "/" || path === "/overview") {
    res.end("This is overview");
  } else if (path === "/product") {
    res.end("Hello from the server");
  } else if (path === "/api") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "Hello World",
    });
    res.end("<h1>Page Not found</h1>");
  }
});

server.listen("8000", "127.0.0.1", () => {
  console.log("Listening in the port 8000");
});
