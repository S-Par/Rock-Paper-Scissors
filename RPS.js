function computerPlay() {
  let counter = Math.floor(Math.random() * 3);
  if (counter == 0){
    return 'rock';
  }
  else if (counter == 1) {
    return 'paper';
  }
  return 'scissors';
}

function playRound(playerSelection, computerSelection){
  if (playerSelection.toLowerCase() == 'rock'){
    if (computerSelection == 'rock'){
      return 'tie';
    }
    else if (computerSelection == 'paper'){
      return 'comp';
    }
    else{
      return 'player';
    }
  }
  else if (playerSelection.toLowerCase() == 'paper'){
    if (computerSelection == 'rock'){
      return 'player';
    }
    else if (computerSelection == 'paper'){
      return 'tie';
    }
    else{
      return 'comp';
    }
  }
  else if (playerSelection.toLowerCase() == 'scissors'){
    if (computerSelection == 'rock'){
      return 'comp';
    }
    else if (computerSelection == 'paper'){
      return 'player';
    }
    else{
      return 'tie';
    }
  }
}

function game() {
  let compScore = 0, playerScore = 0, ties = 0;
  for (var i = 0; i < 5; i++) {
    let playerSelection = prompt('Enter your move (Rock, Paper or Scissors)');
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    if (result == 'comp') {
      compScore++;
      console.log('The computer beats you in this round! Your move was: ' + playerSelection);
    }
    else if (result == 'player') {
      playerScore++;
      console.log('You won this round! Your move was: ' + playerSelection);
    }
    else{
      ties++;
      console.log('It was a tie in this round! Your move was: ' + playerSelection)
    }
  }
  console.log('No of player wins: ' + playerScore);
  console.log('No of computer wins: ' + compScore);
  console.log('No of ties: ' + ties);
}

game();
