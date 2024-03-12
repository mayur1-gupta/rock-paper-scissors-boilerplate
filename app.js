let playerScore = 0;
let computerScore = 0;

function startGame() {
  document.getElementById('startPage').classList.add('hidden');
  document.getElementById('gamePage').classList.remove('hidden');
}

function play(playerChoice) {
  const computerChoice = generateComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  document.getElementById('result').innerText = result;
  updateScore(result);
}

function generateComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    return 'You win!';
  } else {
    computerScore++;
    return 'Computer wins!';
  }
}

function updateScore(result) {
  document.getElementById('playerScore').innerText = playerScore;
  document.getElementById('computerScore').innerText = computerScore;
}

function restart() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById('playerScore').innerText = playerScore;
  document.getElementById('computerScore').innerText = computerScore;
  document.getElementById('result').innerText = '';
}
