'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScroll = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');
const section3 = document.querySelector('#section--3');

const navLink = document.querySelectorAll('.nav__link');
const nav = document.querySelector('nav');

let tabsContainer = document.querySelector('.operations__tab-container');
let tabsContent = document.querySelectorAll('.operations__content');
let tabBtn = document.querySelectorAll('.operations__tab');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Scroll to the first section:
const secCords = section1.getBoundingClientRect();
btnScroll.addEventListener('click', () => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Scroll into the perfect id:
// console.log(navLink);
// navLink.forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// By using another function:
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();
//   if (e.target.classList.contains('nav__link')) {
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   }
// });

// Making all the attributes to small but not element itself:
// let h1 = document.querySelector('h1');
// [...h1.parentElement.children].forEach(el => {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

// Operations section:

// tabsContainer.addEventListener('click', function (e) {
//   let clicked = e.target.closest('.operations__tab');

//   if (!clicked) return;

//   // Remove active classes from both button and the content
//   tabBtn.forEach(b => {
//     b.classList.remove('operations__tab--active');
//   });
//   // Remove active class from content:
//   tabsContent.forEach(t => {
//     t.classList.remove('operations__content--active');
//   });
//   // Add active to the button:
//   clicked.classList.add('operations__tab--active');

//   document
//     .querySelector(`.operations__content--${clicked.dataset.tab}`)
//     .classList.add('operations__content--active');
// });

// console.log(secCords.top);
// window.addEventListener('scroll', () => {
//   if (window.scrollY > secCords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// Passing arguments to the eventHandler:

const setOpacity = function (e) {
  if (e.target.classList.contains('nav__link')) {
    let link = e.target;
    let siblings = link.closest('nav').querySelectorAll('.nav__link');
    let logo = link.closest('nav').querySelector('#logo');

    [...siblings].forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', setOpacity.bind('0.5'));

nav.addEventListener('mouseout', setOpacity.bind('1'));
