let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
var generateTarget = () => {
  return Math.floor(Math.random() * Math.floor(10));
};

var getAbsoluteDistance = (guess, target) => {
  return Math.abs(guess - target);
}

var compareGuesses = (humanGuess, compGuess, secretTargetNum) => {
  if (humanGuess > 9 || humanGuess < 0) {
    return alert("Your guess number is out of range. Please try again")
    
  }

  var humanDifference = getAbsoluteDistance(humanGuess, secretTargetNum);
  var compDifference = getAbsoluteDistance(compGuess, secretTargetNum);

  if (humanDifference <= compDifference) {
    return true;
  } else {
    return false;
  }
};

// console.log(compareGuesses(4, 8))

var updateScore = (str1) => {
  if (str1 === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
};


var advanceRound = () => {
  currentRoundNumber += 1;
};
