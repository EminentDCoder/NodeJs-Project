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
  if (stage > 10) break;
}
while (userGuess == num && stage <= 10);
if (stage > 10) {
  console.log("Wao! You Have Reached The Maximum Stage");
}
else {
  console.log("Wrong Guesss, Game Over");
}

