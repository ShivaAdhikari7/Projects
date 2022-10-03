let showModal = document.querySelectorAll(".show-modal");
let closeBtn = document.querySelector(".close-modal");
let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");

const showModalBox = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModalBox = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", showModalBox);
}

closeBtn.addEventListener("click", closeModalBox);

overlay.addEventListener("click", closeModalBox);

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape" && !modal.classList.contains("hidden")) {
    closeModalBox();
  }
});
