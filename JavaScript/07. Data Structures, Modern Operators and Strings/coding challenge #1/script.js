"use strict";

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');


*/
const game = {
  team1: "Bayren Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Ganrby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witesel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandoski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
// const [player1, player2] = game.players;

// console.log(player1, player2);

// 2.
// const [gk, ...fieldPlayers] = player1;
// // console.log(gk, fieldPlayers);
// // 3.

// const allplayers = [...player1, ...player2];
// // console.log(allplayers);

// // 4.

// const player1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
// // console.log(player1Final);

// // 5.

// const { team1, x: draw, team2 } = game.odds;
// // console.log(team1, draw, team2);

// 6.

// let playersScored = ["Davies", "Muller", "Lewandowski", "Kimmich"];

// const printGoals = function (...playersScored) {
//   for (let i = 0; i < playersScored.length; i++) {
//     console.log(playersScored[i]);
//   }
//   console.log(`Score: ${game.score}`);
// };
// printGoals(...playersScored);

// // 7.
// const {
//   odds: { team1: team1Odds, x: y, team2: team2Odds },
// } = game;

// console.log(team1Odds < team2Odds && `Team 1 is more likely to win`);
// console.log(team1Odds > team2Odds && `Team 2 is more likely to win`);

// Coding Challenge 2:
// 1.

// let key = game.scored;
// console.log(key);

// let i = 0;
// for (const item of game.scored) {
//   i++;
//   console.log(`Goal ${i}: ${item}`);
// }

// 2.

// let sum = 0;

// for (let key of Object.values(game.odds)) {
//   sum += key;
// }
// console.log(`Average is ${sum / 3}`);

// // 3.

// for (const [team, point] of Object.entries(game.odds)) {
//   let teamStr = team === "x" ? "draw" : `victory ${game[team]}`;

//   console.log(`Odd of ${teamStr}: ${point}`);
// }

// // 4.
// let soccers = {};

// #Coding Challenge 2:

const gameEvents = new Map([
  [17, "Goal"],
  [36, "Substitution"],
  [47, "Goal"],
  [61, "Substitution"],
  [64, "Yellow Card"],
  [69, "Red Card"],
  [70, "Substitution"],
  [76, "Goal"],
  [80, "Goal"],
  [92, "Yellow Card"],
]);

// 1.
let events = new Set([...gameEvents.values()]);
console.log([...events]);

// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);

// 3.
let time = [...gameEvents.keys()].pop();
console.log(
  `At an average of every ${time / gameEvents.size} minutes the event occured.`
);

// 4.
// for (const [minute, event] of gameEvents) {
//   console.log(
//     minute <= 45
//       ? `[First Half] ${minute} : ${event}`
//       : `[Second Half]: ${minute}: ${event}`
//   );
// }
