// Variables
var numberOfMoves = 0;
var score = 0;
var showModal = false;

// *Elements DOM*

// Header - score
const headerElement = document.getElementById('header');
const scoreElement = document.getElementById("score");

scoreElement.innerText = 0;

// Number of moves
const qtdMovesElement = document.getElementById("qtd-moves");

// Start menu
const menuOptionsElement = document.getElementById("menu-options");

// Choice options
const choiceOptionsElement = document.getElementById('choice-options');

// Play result
const matchResultElement = document.getElementById('match-result');
const playAgainElement = document.getElementById('play-again');
const messageResultElement = document.getElementById("play-result");
const myChoiceElement = document.getElementById('you-picked');
const myChoiceImgElement = document.getElementById('you-picked-img');
const chooseMachineElement = document.getElementById('the-house-picked');
const chooseMachineImgElement = document.getElementById('the-house-picked-img');

// Modal rules
const modalRulesElement = document.getElementById('modal-rules');

// Functions
function getNumberOfMoves(qtd) {
  numberOfMoves = Number(qtd);
  menuOptionsElement.className = "menu-options hiddenContent";
  setTimeout(() => {
    menuOptionsElement.style.display = "none";
    headerElement.style.display = "flex";
    choiceOptionsElement.style.display = "flex";
    qtdMovesElement.innerText = `Remaining moves: ${numberOfMoves}`;
  }, 1500);
}

function showOrHiddenModal() {
  showModal = !showModal;
  showModal ? modalRulesElement.style.display = 'block' : modalRulesElement.style.display = 'none';
}

function selectOption(myOption) {
  switch (myOption) {
    case 'rock': setElementPicked('rock'); break;
    case 'paper': setElementPicked('paper'); break;
    case 'scissors': setElementPicked('scissors'); break;
    default: break;
  }

  const ramdomOption = setElementRamdom();
  compareChosenValues(myOption, ramdomOption);

  choiceOptionsElement.className = "choice-options hiddenContent";
  setTimeout(() => {
    choiceOptionsElement.style.display = "none";
    matchResultElement.style.display = "flex";
  }, 1500);

  numberOfMoves -= 1;
  qtdMovesElement.innerText = `Remaining moves: ${numberOfMoves}`;

  if (numberOfMoves > 0) {
    setTimeout(() => {
      matchResultElement.style.display = "none";
      choiceOptionsElement.style.display = "flex";
      choiceOptionsElement.className = "choice-options";
      resetBorder();
    }, 3000);
  } else {
    playAgainElement.style.display = "block";
  }
}

function setElementPicked(option) {
  myChoiceElement.className = `btn-options ${option}-border`;
  myChoiceImgElement.setAttribute('src', `./images/icon-${option}.svg`);
}

function setElementRamdom() {
  let ramdomOption = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

  switch (ramdomOption) {
    case 1: ramdomOption = 'rock'; break;
    case 2: ramdomOption = 'paper'; break;
    case 3: ramdomOption = 'scissors'; break;
    default: break;
  }

  chooseMachineElement.className = `btn-options ${ramdomOption}-border`;
  chooseMachineImgElement.setAttribute('src', `./images/icon-${ramdomOption}.svg`);
  return ramdomOption;
}

function compareChosenValues(myOption, ramdomOption) {
  setTimeout(() => {
    if (myOption === 'rock' && ramdomOption !== 'paper') {
      if (myOption !== ramdomOption) {
        scoreElement.innerText = (score += 10);
        myChoiceElement.style.borderBottomStyle = "double";
      }
    } else if (myOption === 'paper' && ramdomOption !== 'scissors') {
      if (myOption !== ramdomOption) {
        scoreElement.innerText = (score += 10);
        myChoiceElement.style.borderBottomStyle = "double";
      }
    } else if (myOption === 'scissors' && ramdomOption !== 'rock') {
      if (myOption !== ramdomOption) {
        scoreElement.innerText = (score += 10);
        myChoiceElement.style.borderBottomStyle = "double";
      }
    } else {
      scoreElement.innerText = (score -= 10);
      chooseMachineElement.style.borderBottomStyle = "double";
    }

    if (numberOfMoves === 0) {
      if (score < 0) {
        messageResultElement.innerText = "YOU LOSE";
      } else if (score > 0) {
        messageResultElement.innerText = "YOU WINS";
      } else {
        messageResultElement.innerText = 'GAME TIED';
      }
    }
  }, 1500);
}

function resetBorder() {
  chooseMachineElement.style.borderBottomStyle = ''
  myChoiceElement.style.borderBottomStyle = '';
}

function playAgain() {
  scoreElement.innerText = (score = 0);
  qtdMovesElement.innerText = null;
  matchResultElement.style.display = "none";
  headerElement.style.display = "none";
  menuOptionsElement.style.display = "flex";
  playAgainElement.style.display = "none";
  choiceOptionsElement.className = "choice-options";
  menuOptionsElement.className = "menu-options";
  resetBorder();
}

const startAudio = () => {
  setTimeout(() => {
    document.getElementById('audio').play();
  }, 3000);
};
