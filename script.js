//the computer's choice
function chooseNumber() { //generate a random number
    num = Math.floor(Math.random()*3);
    return num;
}
function convertToChoice() { //assign number to rock, paper, or scissors
    theNumber = chooseNumber();
    let computerChoice;
    if (theNumber===0) {
        computerChoice = 'rock';
    } else if (theNumber===1) {
        computerChoice = 'paper';
    } else if (theNumber===2) {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

function firstLetterCapital(stringy) {
    let firstLetter = stringy.slice(0,1).toUpperCase()
    let restOfStringy = stringy.slice(1).toLowerCase()
    let completeStringy = firstLetter + restOfStringy
    return completeStringy
}

let container = document.querySelector('div');
let result = container.querySelector('.result');
let score = container.querySelector('.score');
let rounds = container.querySelector('.rounds');


//the player's choice

let playerSelection;
let buttons = document.querySelectorAll('button');
let counter = 5;
let playerScore = 0;
let computerScore = 0;
buttons.forEach(button => button.addEventListener('click', function playRound() {
    counter--;
    if (counter<0) return;
    //player chooses below
    if (button.classList.contains('rock')) {
        playerSelection = 'rock';
    } else if (button.classList.contains('paper')) {
        playerSelection = 'paper';
    } else {
        playerSelection = 'scissors';
    }

    computerSelection = convertToChoice();

    //evaluate if the round was won
    let winner
    if (playerSelection==='rock'&&computerSelection==='scissors' || playerSelection==='paper'&&computerSelection==='rock'||
    playerSelection==='scissors'&&computerSelection==='paper') {
        winner = true;
        playerScore++;
    } else if (playerSelection==='rock'&&computerSelection==='paper' || playerSelection==='paper'&&
    computerSelection==='scissors' || playerSelection==='scissors'&&computerSelection==='rock') {
        winner = false;
        computerScore++;
    } else {
        winner = 'tie';
    }


    if (winner===true&&typeof(winner)==='boolean') {
        result.textContent = `You won! ${firstLetterCapital(playerSelection)} beats ${computerSelection}.`;
    } else if (winner===false) {
        result.textContent = `You lost. ${firstLetterCapital(computerSelection)} beats ${playerSelection}. This is so sad.`;
    } else if (winner==='tie') {
        result.textContent = "It's a tie.";
    }
    score.textContent = `You: ${playerScore} — Computer: ${computerScore}`;
    rounds.textContent = `Rounds remaining: ${counter}`;
}));
container.appendChild(score);
container.appendChild(rounds);
container.appendChild(result);