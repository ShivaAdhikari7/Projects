const http = require("http");
const url = require("url");
const fs = require("fs");

const slugify = require("slugify");
const changePreview = require("./modules/changePreview");

const overview = fs.readFileSync("./templates/overview.html", "utf-8");
const card = fs.readFileSync("./templates/card.html", "utf-8");
const productTemplate = fs.readFileSync("./templates/product.html", "utf-8");

const data = fs.readFileSync("./dev-data/data.json", "utf-8");
const dataObj = JSON.parse(data);

const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));
console.log(slugs);
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, {
      "content-type": "text/html",
    });

    const cardHtml = dataObj.map((el) => changePreview(card, el)).join("");
    const output = overview.replace(/{%PRODUCTCARDS%}/g, cardHtml);

    res.end(output);
  } else if (pathname === "/product") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    const product = dataObj[query.id];
    const output = changePreview(productTemplate, product);
    res.end(output);
  } else if (pathname === "/api") {
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
