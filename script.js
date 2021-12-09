//create a function to generate a random number from 0-2//



function randomNum() {
    let theNum = Math.floor(Math.random()*3)
    return theNum
}

//create a function that returns "rock", "paper", or "scissors" depending on randomNum()//
function computerPlay(theNumber) {
    theNumber = randomNum()
    //create a conditional that returns rock, paper, or scissors for 0, 1, and 2 respectively//
    let choice
    if (theNumber===0) {
        choice = "Rock"
    } else if (theNumber===1) {
        choice = "Paper"
    } else {
        choice = "Scissors"
    }
    return choice
}

console.log(computerPlay())