const rpsButtons = document.querySelector("#rpsButtons");
const buttons = document.querySelectorAll("button");
// const rock = document.querySelector("#rock");
// const paper = document.querySelector("#paper");
// const scissors = document.querySelector("#scissors");

const results = document.querySelector("#results");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const battle = document.querySelector("#battle");
const score = document.querySelector("#score");
const winner = document.querySelector("#winner");


let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
  let choice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

  if(choice === 1){
    return "rock";
  }
  if(choice === 2){
    return "paper";
  }
  if(choice === 3){
    return "scissors";
  } 
}

function getHumanChoice(choice){
  //let choice = prompt("Rock, Paper, Scissors!!!").toLowerCase();
  
  if(choice === "rock"){
    return "rock";
  }
  if(choice === "paper"){
    return "paper";
  }
  if(choice === "scissors"){
    return "scissors";
  }

  return "Invalid choice";
}

function playRound(humanChoice){
  let computerChoice = getComputerChoice();

  console.log("Player: ",humanChoice);
  player.textContent = "Player: " + humanChoice;
  console.log("Computer: ",computerChoice);
  computer.textContent = "Computer: " + computerChoice;

  if(humanChoice === computerChoice){
    console.log("It's a tie!!!");
    battle.textContent =  "It's a tie!!!";
  } else if(humanChoice === "rock"){
    if(computerChoice === "scissors"){
      humanScore++;
      console.log("Rock beats Scissors");
      battle.textContent =  "Rock beats Scissors";
    }else{
      computerScore++;
      console.log("Paper beats rock");
      battle.textContent = "Paper beats rock";
    }
  } else if(humanChoice === "paper"){
    if(computerChoice === "rock"){
      humanScore++;
      console.log("Paper beats rock");
      battle.textContent = "Paper beats rock";
    }else{
      computerScore++;
      console.log("Scissors beats paper");
      battle.textContent = "Scissors beats paper";
    }
  } else if(humanChoice === "scissors"){
    if(computerChoice === "paper"){
      humanScore++;
      console.log("Scissors beats paper");
      battle.textContent = "Scissors beats paper";
    }else{
      computerScore++;
      console.log("Rock beats Scissors");
      battle.textContent = "Rock beats Scissors";
    }
  }
  
  console.log("Score: ", humanScore, "-", computerScore);
  score.textContent = "Player: " + humanScore + "   Computer: " + computerScore;
}

// function playGame(){

//     for(let i = 1; i <= 5; i++){
//         let play = playRound();

//         if (humanScore > computerScore){
//             console.log("You win!!!" + " Player Score: " + humanScore + " Computer Score: " + computerScore);
//         } else if(humanScore === computerScore){
//             console.log("It's a tie!!!" + " Player Score: " + humanScore + " Computer Score: " + computerScore);
//         } else {
//             console.log("You lose!!!" + " Player Score: " + humanScore + " Computer Score: " + computerScore);
//         }
//     }

//     if(humanScore > computerScore){
//       console.log("Winner: PLAYER");
//     } else {
//       console.log("Winner: COMPUTER");
//     }

//     return "Player Score: " + humanScore + " Computer Score: " + computerScore;
// }

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    const humanChoice = getHumanChoice(e.target.id);
    playRound(humanChoice);

    if(humanScore >= 5){
      console.log("Winner: PLAYER");
      winner.textContent = "Winner: PLAYER"
    } else if (computerScore >= 5) {
      console.log("Winner: COMPUTER");
      winner.textContent = "Winner: COMPUTER";
    }
  });
});

// console.log(playGame());