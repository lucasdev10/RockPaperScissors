// Variables
var showModal = false;
var score = document.getElementById("score").innerText = 0;
var numberOfMoves = 0;

// Show modal
function showOrHiddenModal() {
  showModal = !showModal;
  showModal
    ? document.getElementById('modal-rules').style.display = 'block'
    : document.getElementById('modal-rules').style.display = 'none';
}

// Handler option chosen by the player
function selectOption(option) {
  const ramdomOption = setElementRamdom();

  if (option === 'paper') {
    setElementPicked('paper');
  } else if (option === 'scissors') {
    setElementPicked('scissors');
  } else {
    setElementPicked('rock');
  }

  compareChosenValues(option, ramdomOption);

  document.getElementById('choice-options').className = "choice-options hiddenContent";
  setTimeout(() => {
    document.getElementById('choice-options').style.display = "none";
    document.getElementById('match-result').style.display = "flex";
  }, 1500);
}

// Set player option
function setElementPicked(event) {
  document.getElementById('you-picked').className = `btn-options ${event}-border`;
  document.getElementById('you-picked-img').setAttribute('src', `./images/icon-${event}.svg`);
}

// Set machine option
function setElementRamdom() {
  let ramdomOption;
  const random = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  random === 1 ? ramdomOption = 'paper' : '';
  random === 2 ? ramdomOption = 'scissors' : '';
  random === 3 ? ramdomOption = 'rock' : '';

  document.getElementById('the-house-picked').className = `btn-options ${ramdomOption}-border`;
  document.getElementById('the-house-picked-img').setAttribute('src', `./images/icon-${ramdomOption}.svg`);
  return ramdomOption;
}

// Compare chosen values
function compareChosenValues(option, ramdomOption) {
  setTimeout(() => {
    if (option === 'paper' && ramdomOption !== 'scissors') {
      if (option === ramdomOption) {
      } else {
        score = +10;
        document.getElementById("score").innerText = score;
      }
    } else if (option === 'scissors' && ramdomOption !== 'rock') {
      if (option === ramdomOption) {
      } else {
        score += 10;
        document.getElementById("score").innerText = score;
      }
    } else if (option === 'rock' && ramdomOption !== 'paper') {
      if (option === ramdomOption) {
      } else {
        score += 10;
        document.getElementById("score").innerText = score;
      }
    } else {
      score -= 10;
      document.getElementById("score").innerText = score;
    }

    if (score < 0) {
      document.getElementById("play-result").innerText = "YOU LOSE";
      document.getElementById("the-house-picked").style.borderBottomStyle = "double";
    } else if (score > 0) {
      document.getElementById("play-result").innerText = "YOU WINS";
      document.getElementById("you-picked").style.borderBottomStyle = "double";
    } else {
      document.getElementById("play-result").innerText = 'GAME TIED';
    }
  }, 1500);

}

// Play again
function playAgain() {
  document.getElementById("score").innerText = (score = 0);
  document.getElementById('match-result').style.display = "none";
  document.getElementById('choice-options').className = "choice-options";
  document.getElementById('choice-options').style.display = "flex";
  document.getElementById("the-house-picked").style.borderBottomStyle = ''
  document.getElementById("you-picked").style.borderBottomStyle = '';
}

// Select quantity
function selectQuantity(event) {
  numberOfMoves = Number(event);
  document.getElementById("menu-options").className = "menu-options hiddenContent";
  setTimeout(() => {
    document.getElementById('menu-options').style.display = "none";
    document.getElementById('choice-options').style.display = "flex";
    document.getElementById('header').style.display = "flex";
    document.getElementById("qtd-moves").innerText = `Remaining moves: ${numberOfMoves}`;
  }, 1500);
}