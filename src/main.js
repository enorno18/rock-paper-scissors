const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput ==='bomb') {
    return userInput;
  }else {
    console.log('ERROR');
  }
}

const getComputerChoice = (randomNumber) => {
  return Math.floor(Math.random()*3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'The Game Is A Tie!';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer Won!';
    } else {
      return 'User Won!';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'User Won!';
    } else {
      return 'Computer Won!';
    }
  } else if (userChoice === 'bomb') {
    return 'User Won!'
  } else {
    if (computerChoice === 'paper') {
      return 'User Won!';
    } else {
      return 'Computer Won!';
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw a ' + userChoice);
  console.log('The computer threw a ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice)); 
}

playGame();