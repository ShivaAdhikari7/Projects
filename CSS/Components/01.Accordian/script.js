let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let item = document.getElementsByClassName("item");
item[1].classList.add("open");
first.addEventListener("click", () => {
  item[0].classList.toggle("open");
});
second.addEventListener("click", () => {
  item[1].classList.toggle("open");
});
third.addEventListener("click", () => {
  item[2].classList.toggle("open");
});
