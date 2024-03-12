const rockHand = document.getElementById('rock-hand');
const paperHand = document.getElementById('paper-hand');
const scissorHand = document.getElementById('scissor-hand');
const rockBtn = document.getElementById('rock-logo');
const paperBtn = document.getElementById('paper-logo');
const scissorBtn = document.getElementById('scissors-logo');
const compRock = document.getElementById('rock-computer');
const compPaper = document.getElementById('paper-computer');
const compScissor = document.getElementById('scissor-computer');
const yourScore = document.getElementById('player-score');
const compScore = document.getElementById('computer-score');
const win = document.getElementById('win');
const you = document.getElementById('result-header');
const theGame = document.getElementById('game');
const playAgain = document.getElementById('play-again');
const playAgainButton = document.getElementById('play-again-button');

let operator = Math.floor(Math.random() * 3);
let playerScore = 0;
let computerScore = 0;

function letsPlay() {
    rockBtn.onclick = () => {
        rockHand.style.visibility = 'visible';
        scissorHand.style.visibility = 'hidden';
        paperHand.style.visibility = 'hidden';
        randomise();
        if (operator === 1) {
            playerScore++;
        } else if (operator === 0) {
            computerScore++;
        }
        yourScore.innerHTML = playerScore;
        compScore.innerHTML = computerScore;
        checkScore();
    }
    //     paperHand.style.visibility = 'hidden';
    //     scissorHand.style.visibility = 'hidden';
    //     randomise();
    //     if (operator === 0) {
    //         computerScore++;
    //     } else if (operator === 1) {
    //         playerScore++;
    //     }
    //     yourScore.innerHTML = playerScore;
    //     compScore.innerHTML = computerScore;
    //     checkScore();
    // }

    paperBtn.onclick = () => {
        paperHand.style.visibility = 'visible';
        scissorHand.style.visibility = 'hidden';
        rockHand.style.visibility = 'hidden';
        randomise();
        if (operator === 1) {
            computerScore++;
        } else if (operator === 2) {
            playerScore++;
        }
        yourScore.innerHTML = playerScore;
        compScore.innerHTML = computerScore;
        checkScore();
    }

    scissorBtn.onclick = () => {
        scissorHand.style.visibility = 'visible';
        rockHand.style.visibility = 'hidden';
        paperHand.style.visibility = 'hidden';
        randomise();
        if (operator === 0) {
            playerScore++;
        } else if (operator === 2) {
            computerScore++;
        }
        yourScore.innerHTML = playerScore;
        compScore.innerHTML = computerScore;
        checkScore();
    }

    function randomise() {
        compRock.style.visibility = 'hidden';
        compScissor.style.visibility = 'hidden';
        compPaper.style.visibility = 'hidden';

        operator = Math.floor(Math.random() * 3);

        if (operator === 0) {
            compPaper.style.visibility = 'visible';
        } else if (operator === 1) {
            compScissor.style.visibility = 'visible';
        } else if (operator === 2) {
            compRock.style.visibility = 'visible';
        }
    }
}

letsPlay();

function checkScore() {
    if (playerScore === 5) {
        you.style.visibility = 'visible';
        theGame.style.visibility = 'visible';
        win.innerHTML = 'Won';
        playAgain.style.visibility = 'visible';
        paperBtn.style.visibility = 'hidden';
        scissorBtn.style.visibility = 'hidden';
        rockBtn.style.visibility = 'hidden';
    } else if (computerScore === 5) {
        you.style.visibility = 'visible';
        theGame.style.visibility = 'visible';
        win.innerHTML = 'Lose';
        playAgain.style.visibility = 'visible';
        paperBtn.style.visibility = 'hidden';
        scissorBtn.style.visibility = 'hidden';
        rockBtn.style.visibility = 'hidden';
    }
}


playAgainButton.onclick = () => {
  location.href = "index.html";
}