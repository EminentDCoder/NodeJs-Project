var username = prompt("Enter Username");
console.log("Welcome  " + username);

function guessNumber(num) {
  var randomNum = Math.floor(Math.random(num) * num) + 1;
  return randomNum;
}
let stage = 2;

do {
  var num = (guessNumber(stage));
  var userGuess = prompt(`Guess a number betweeen 1 - ${stage}`);
  stage++;
}
while (userGuess == num);
console.log("Game Over");