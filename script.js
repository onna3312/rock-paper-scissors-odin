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

let computerChoice = getComputerChoice();

function playRound(playerChoice, computerChoice) {
  if (playerChoice !== null) {
    playerChoice = capitalize(playerChoice);
  } else {
    return "incorrect figure";
  }

  console.log(playerChoice);
  console.log(computerChoice);
  if (playerChoice === computerChoice) {
    console.log("Tie!");
    return "tie";
  } else if (
    (playerChoice == "Rock" && computerChoice == "Scissors") ||
    (playerChoice == "Paper" && computerChoice == "Rock") ||
    (playerChoice == "Scissors" && computerChoice == "Paper")
  ) {
    console.log(`You win! ${playerChoice} beats ${computerChoice}!`);
    return "win";
  } else if (
    (computerChoice == "Rock" && playerChoice == "Scissors") ||
    (computerChoice == "Paper" && playerChoice == "Rock") ||
    (computerChoice == "Scissors" && playerChoice == "Paper")
  ) {
    console.log(`You lose! ${computerChoice} beats ${playerChoice}!`);
    return "lose";
  } else {
    console.log(`Incorrect figure.`);
    return "incorrect figure";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let currentRound;
  while ((playerScore || computerScore) < 3) {
    currentRound = playRound(prompt("Input Your Choice"), getComputerChoice());
    switch (currentRound) {
        case "win":
          playerScore += 1;
          break;
        case "lose":
          computerScore += 1;
          break;
        case "tie":
          break;
        case "incorrect figure":
          break;
      }
      console.log(`Player Score = ${playerScore}, Computer Score = ${computerScore}`);
  }
}

game();
