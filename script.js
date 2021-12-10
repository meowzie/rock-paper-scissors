//create a function to generate a random number from 0-2//



function randomNum() {
    let theNum = Math.floor(Math.random()*3)
    return theNum
}

//create a function that returns "rock", "paper", or "scissors" depending on randomNum()//
function computerPlay(theNumber) {
    theNumber = randomNum()
    //create a conditional that returns rock, paper, or scissors for 0, 1, and 2 respectively//
    let computerChoice
    if (theNumber===0) {
        computerChoice = "rock"
    } else if (theNumber===1) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    return computerChoice
}

//create a function that asks the user for input, then converts their input to 0, 1, or 2 for rock, paper, or scissors respectively//
function playerPrompt(playerSelection) {
    //ask the user for input//
    playerSelection = prompt().toLowerCase()
    //conditional to make sure that the player is only choosing one of the three options and nothing else//
    if (playerSelection==="rock" || playerSelection==="paper" || playerSelection==="scissors" || playerSelection==="scissor") {
        return playerSelection
    } else {
        playerSelection = "Invalid input"
        return playerSelection
    }
}

//write a function that capitalizes the first letter of a string//
function firstLetterCapital(stringy) {
    let firstLetter = stringy.slice(0,1).toUpperCase()
    let restOfStringy = stringy.slice(1).toLowerCase()
    let completeStringy = firstLetter + restOfStringy
    return completeStringy
}

//create variables to count the score
let playerCounter=0
let computerCounter=0

//create a function that evaluates whether the player has won or not//
function winOrLose(playerSelection, computerChoice) {
    //Assign the computer and player's choices to variables//
    playerSelection = playerPrompt()
    computerChoice = computerPlay()
    


    //conditional to check which variable is bigger, and decide whether the player has won based on the options correlated with the variables//
    if (playerSelection===computerChoice) {
        return `It's a tie. The score is ${playerCounter}-${computerCounter}`
    } else if ((playerSelection==="paper" && computerChoice==="rock") || (playerSelection==="scissors" && computerChoice==="paper") || (playerSelection==="rock" && computerChoice==="scissors")) {
        ++playerCounter
        return `You win the round! ${firstLetterCapital(playerSelection)} beats ${computerChoice}. The score is ${playerCounter}-${computerCounter}`
    } else if (playerSelection==="Invalid input") {
        return playerSelection
    } else {
        ++computerCounter
        return `You lose the round! ${firstLetterCapital(computerChoice)} beats ${playerSelection}. The score is ${playerCounter}-${computerCounter}`
    }
}

console.log(winOrLose())
console.log(winOrLose())
console.log(winOrLose())
console.log(winOrLose())
console.log(winOrLose())

if (playerCounter > computerCounter) {
    console.log(`You won the game, ${playerCounter} to ${computerCounter}`)
} else if (playerCounter < computerCounter) {
    console.log(`You lost the game, ${playerCounter} to ${computerCounter}`)
} else if (playerCounter == computerCounter) {
    console.log(`It's a tie, ${playerCounter} to ${computerCounter}; this is so sad`)
}