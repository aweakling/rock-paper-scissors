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

function getHumanChoice(){
  let choice = prompt("Rock, Paper, Scissors!!!").toLowerCase();

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

function playRound(){
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  console.log("Player: ",humanChoice);
  console.log("Computer: ",computerChoice);

  if(humanChoice === computerChoice){
    return "It's a tie!!!";
  }
  if(humanChoice === "rock"){
    if(computerChoice === "scissors"){
      humanScore++;
      return "You win!!! Rock beats Scissors";
    }else{
      computerScore++;
      return "You lose!!! Paper beats rock";
    }
  }
  if(humanChoice === "paper"){
    if(computerChoice === "rock"){
      humanScore++;
      return "You win!!! Paper beats rock";
    }else{
      computerScore++;
      return "You lose!!! Scissors beats paper";
    }
  }
  if(humanChoice === "scissors"){
    if(computerChoice === "paper"){
      humanScore++;
      return "You win!!! Scissors beats paper";
    }else{
      computerScore++;
      return "You lose!!! Rock beats Scissors";
    }
  }
  return "Invalid Choice";
}

console.log(playRound());