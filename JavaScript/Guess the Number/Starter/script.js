'use strict';

let inputbox = document.querySelector('.guess');
let checkbtn = document.querySelector('.check');
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let number = document.querySelector('.number');
let againbtn = document.querySelector('.again');

let scoredNum = 20;

const generateRandomNum = () => {
  return Math.trunc(Math.random() * 20) + 1;
};
let randomNum = generateRandomNum();

againbtn.addEventListener('click', () => {
  randomNum = generateRandomNum();
  inputbox.value = '';
  message.innerHTML = 'Start guessing.....';
  score.innerHTML = '20';
  highscore.innerHTML = '0';
  document.body.style.backgroundColor = '#222';
  number.innerHTML = '?';
  console.log(randomNum);
});
console.log(randomNum);
checkbtn.addEventListener('click', () => {
  let inputNum = inputbox.value;
  if (inputNum == '') {
    message.innerHTML = 'No number inserted';
  } else if (randomNum > inputNum) {
    inputbox.value = '';
    message.innerHTML = '📈 Too low';
    score.innerHTML = scoredNum - 1;
    scoredNum = score.innerHTML;
  } else if (randomNum < inputNum) {
    inputbox.value = '';
    message.innerHTML = '📈 Too high';
    score.innerHTML = scoredNum - 1;
    scoredNum = score.innerHTML;
  } else if (randomNum == inputNum) {
    number.innerHTML = inputNum;
    document.body.style.backgroundColor = '#008800';
    message.innerHTML = '🎇 Correct Answer';
    highscore.innerHTML = scoredNum;
  }
});
