'use strict';

let currentEl0 = document.getElementById('current--0');
let currentEl1 = document.getElementById('current--1');
let scoreEl0 = document.getElementById('score--0');
let scoreEl1 = document.getElementById('score--1');
let playerEl1 = document.querySelector('.player--0');
let playerEl2 = document.querySelector('.player--1');

let diceEl = document.querySelector('.dice');
let btnHold = document.querySelector('.btn--hold');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');

let activePlayer;
let currentScore;
let score;
let playing;
const init = () => {
  activePlayer = 0;
  currentScore = 0;
  score = [0, 0];
  playing = true;
  diceEl.classList.add('hidden');
  scoreEl0.textContent = '0';
  scoreEl1.textContent = '0';

  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector(`#current--0`).textContent = 0;
  document.querySelector(`#current--1`).textContent = 0;
  document.querySelector('.player--0').classList.add('player--active');
};
init();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = '0';
  currentScore = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;
  playerEl1.classList.toggle('player--active');
  playerEl2.classList.toggle('player--active');
};

btnRoll.addEventListener('click', () => {
  if (playing) {
    //   Generate Random Number:
    let randomNumber = Math.trunc(Math.random() * 6) + 1;

    // Display Random Number:
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${randomNumber}.png`;

    // Dice is not 1: Add random number to current score:
    if (randomNumber !== 1) {
      currentScore = randomNumber + currentScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch the player and make current score 0:
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    // Add current score to the total score and make current score to 0:

    score[activePlayer] = score[activePlayer] + currentScore;
    console.log(score);
    document.getElementById(`current--${activePlayer}`).textContent = '0';

    document.getElementById(`score--${activePlayer}`).textContent =
      score[`${activePlayer}`];

    if (score[activePlayer] >= 5) {
      console.log(`player--${activePlayer}`);
      playing = false;

      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }

    // Switch the player:
  }
});

btnNew.addEventListener('click', init);
