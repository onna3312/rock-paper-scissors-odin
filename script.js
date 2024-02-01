const container = document.querySelector(".buttons-container");
const buttonRock = document.querySelector(".button-rock");
const buttonPaper = document.querySelector(".button-paper");
const buttonScissors = document.querySelector(".button-scissors");
const resultsContainer = document.querySelector(".results-container");
let gameResult = document.querySelector(".result");
let scorePlayer = 0;
let scoreComputer = 0;

function addScoreToHTML() {
  resultsContainer.innerHTML += ` Your score: ${scorePlayer} Computer score: ${scoreComputer}`;
}

function capitalize(inputString) {
  let capitalized = inputString.charAt(0).toUpperCase();
  let lowercased = inputString.slice(1, inputString.length).toLowerCase();
  result = capitalized + lowercased;
  return result;
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      computerChoice = "Rock";
      break;
    case 1:
      computerChoice = "Paper";
      break;
    case 2:
      computerChoice = "Scissors";
      break;
  }
  return computerChoice;
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice !== null) {
    playerChoice = capitalize(playerChoice);
  } else {
    return "incorrect figure";
  }

  console.log(playerChoice);
  console.log(computerChoice);
  if (playerChoice === computerChoice) {
    resultsContainer.innerHTML += " Tie!";
    return "tie";
  } else if (
    (playerChoice == "Rock" && computerChoice == "Scissors") ||
    (playerChoice == "Paper" && computerChoice == "Rock") ||
    (playerChoice == "Scissors" && computerChoice == "Paper")
  ) {
    resultsContainer.innerHTML += ` You win! ${playerChoice} beats ${computerChoice}!`;
    scorePlayer += 1;
    return "win";
  } else if (
    (computerChoice == "Rock" && playerChoice == "Scissors") ||
    (computerChoice == "Paper" && playerChoice == "Rock") ||
    (computerChoice == "Scissors" && playerChoice == "Paper")
  ) {
    resultsContainer.innerHTML += ` You lose! ${computerChoice} beats ${playerChoice}!`;
    scoreComputer += 1;
    return "lose";
  } else {
    console.log(`Incorrect figure.`);
    return "incorrect figure";
  }
}

function startOver() {
  resultsContainer.textContent = "";
  gameResult.textContent = "";
  scoreComputer = 0;
  scorePlayer = 0;
  buttonRock.disabled = false;
  buttonPaper.disabled = false;
  buttonScissors.disabled = false;
}

function showResult() {
  const button = document.createElement('button')
  button.textContent = 'Start again';
  button.onclick = startOver;

  if (scorePlayer === 5) {
    gameResult.textContent = `You won!`;
    gameResult.appendChild(button);
    buttonRock.disabled = true;
    buttonPaper.disabled = true;
    buttonScissors.disabled = true;
  } else if (scoreComputer === 5) {
    gameResult.textContent = `You lost!`;
    gameResult.appendChild(button);
    buttonRock.disabled = true;
    buttonPaper.disabled = true;
    buttonScissors.disabled = true;
  }
}

function checkIfGameOver() {
  if (scorePlayer === 5 || scoreComputer === 5) {
    showResult();
  }
}

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;
//   let currentRound;
//   while ((playerScore < 3 && computerScore < 3)) {
//     currentRound = playRound(prompt("Input Your Choice"), getComputerChoice());
//     switch (currentRound) {
//         case "win":
//           playerScore += 1;
//           break;
//         case "lose":
//           computerScore += 1;
//           break;
//         case "tie":
//           break;
//         case "incorrect figure":
//           break;
//       }
//       console.log(`Player Score = ${playerScore}, Computer Score = ${computerScore}`);
//     if (playerScore === 3) {
//         return `Player won with the score of ${playerScore} - ${computerScore}`;
//     }
//     else if (computerScore === 3) {
//         return `Computer won with the score of ${computerScore} - ${playerScore}`;
//     }
//   }
// }

container.addEventListener("click", function (event) {
  let target = event.target;

  switch (target.className) {
    case "button-rock":
      resultsContainer.textContent = "";
      resultsContainer.textContent = "You pick Rock!";
      playRound("rock", getComputerChoice());
      addScoreToHTML();
      checkIfGameOver();
      break;
    case "button-paper":
      resultsContainer.textContent = "";
      resultsContainer.textContent = "You pick Paper!";
      playRound("paper", getComputerChoice());
      addScoreToHTML();
      checkIfGameOver();
      break;
    case "button-scissors":
      resultsContainer.textContent = "";
      resultsContainer.textContent = "You pick Scissors!";
      playRound("scissors", getComputerChoice());
      addScoreToHTML();
      checkIfGameOver();
      break;
  }
});
