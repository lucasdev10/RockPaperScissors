var score = document.getElementById("score").innerText = 0;
var papperObj = {
  name: 'papper',
  image: './images/icon-paper.svg',
};
var scissorsObj = {
  name: 'scissors',
  image: './images/icon-scissors.svg',
};
var rockObj = {
  name: 'rock',
  image: './images/icon-rock.svg',
};

var qtsNumberOfAattempts;


function selectOption(option) {
  showViewOptions(true);
  if (option === 'paper') {
    handlerViewContentSecondary(papperObj);
  }

  if (option === 'scissors') {
    handlerViewContentSecondary(scissorsObj);
  }

  if (option === 'rock') {
    handlerViewContentSecondary(rockObj);
  }

}

function handlerViewContentSecondary(obj) {
  setTimeout(() => {
    var ramdomObj;
    const random = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    random === 1 ? ramdomObj = papperObj : '';
    random === 2 ? ramdomObj = scissorsObj : '';
    random === 3 ? ramdomObj = rockObj : '';

    var message;
    if (obj.name === 'papper' && ramdomObj.name !== 'scissors') {
      if (obj.name === ramdomObj.name) {
      } else {
        score = +10;
        document.getElementById("score").innerText = score;
      }
    } else if (obj.name === 'scissors' && ramdomObj.name !== 'rock') {
      if (obj.name === ramdomObj.name) {
      } else {
        score += 10;
        document.getElementById("score").innerText = score;
      }
    } else if (obj.name === 'rock' && ramdomObj.name !== 'papper') {
      if (obj.name === ramdomObj.name) {
      } else {
        score += 10;
        document.getElementById("score").innerText = score;
      }
    } else {
      score -= 10;
      document.getElementById("score").innerText = score;
    }


    if (score === 0) {
      message = "GAME TIED!"
    } else if (score > 0) {
      message = "YOU WINS!"
    } else {
      message = 'YOU LOSE!';
    }

    showViewContentSecondary(false, obj, ramdomObj, message);
  }, 1000);
}

function showViewContentSecondary(hidden, obj, ramdomObj, message) {
  var PLAYAGAIN;

  if (qtsNumberOfAattempts == 1) {
    PLAYAGAIN =
      `
    <div class="play-again">
    <h2>${message}</h2>
    <button onclick="showMenuPlay(false)">PLAY AGAIN</button>
  </div>
    `;
  } else {
    PLAYAGAIN = '';
  }

  if (!hidden) {
    document.getElementById("remaining-moves").innerText = '';
    const HTML =
      `
  <section class="content-secondary">
  <div>
    <h2>YOU PICKED</h2>
    <button class="btn-content-secondary border-btn-${obj.name}">
      <img src="${obj.image}" alt="${obj.name}" />
    </button> 
  </div>
  ${PLAYAGAIN}
  <div>
    <h2>THE HOUSE PICKED</h2>
    <button class="btn-content-secondary border-btn-${ramdomObj.name}">
      <img src="${ramdomObj.image}" alt="${ramdomObj.name}" />
    </button>
  </div>
</section>
  `;
    document.getElementById('content-secondary').innerHTML = HTML;

    if (qtsNumberOfAattempts != 1) {
      // setTimeout(() => {
      //   showViewContentSecondary(true);
      //   showViewOptions(false);
      // }, 2000);
    }

    qtsNumberOfAattempts--;


  } else {
    document.getElementById('content-secondary').innerHTML = null;
  }
}

function openModal() {
  const modal =
    `
  <section class="modal-rules">
  <div>
    <h1>RULES</h1>
    <img onclick="closeModal()" src="./images/icon-close.svg" alt="icon-close" />
  </div>
  <img class="rules" src="./images/image-rules.svg" alt="image-rules" />
</section>
  `
  document.getElementById('modal').innerHTML = modal;
}

function closeModal() {
  document.getElementById('modal').innerHTML = null;
}

function showViewOptions(hidden) {
  if (!hidden && qtsNumberOfAattempts > 0) {
    const remainingMoves =
      `
    <p>Remaining moves: ${qtsNumberOfAattempts}</p>
    `;
    document.getElementById('remaining-moves').innerHTML = remainingMoves;

    const HTML =
      `
    <section class="content-primary">
    <img src="./images/bg-triangle.svg" alt="bg-triangle" />
    <button onclick="selectOption('paper')" class="btn-paper">
      <img src="./images/icon-paper.svg" alt="papper" />
    </button>
    <button onclick="selectOption('scissors')" class="btn-scissors">
      <img src="./images/icon-scissors.svg" alt="scissors" />
    </button>
    <button onclick="selectOption('rock')" class="btn-rock">
      <img src="./images/icon-rock.svg" alt="rock" />
    </button>
  </section>
    `;

    document.getElementById('content-primary').innerHTML = HTML;
    showViewContentSecondary(true);
  } else {
    document.getElementById('content-primary').innerHTML = null;
  }
}


function play() {
  const numberOfAattempts = document.getElementById("number-of-attempts").value;
  if (numberOfAattempts <= 0) {
    const HTML =
      `
    <h3>Please select a quantity...</h3>
    `
    document.getElementById('msg-error').innerHTML = HTML;
    setTimeout(() => {
      document.getElementById('msg-error').innerHTML = null;
    }, 2000);
  } else {
    qtsNumberOfAattempts = numberOfAattempts;
    showViewOptions(false);
    showMenuPlay(true);
  }
}

function showMenuPlay(hidden) {
  if (!hidden) {
    const HTML =
      `
    <div>
<h2>Throw rock, paper and scissors at the machine and test your luck! :) Good game!</h2>
    <h3>Select the number of times you want to play:</h3>
    <input
      type="number"
      name="number-of-attempts"
      id="number-of-attempts"
    />
    <button onclick="play()">PLAY</button>
  </div>
`;
    document.getElementById("remaining-moves").innerText = null;
    document.getElementById("score").innerText = (score = 0);
    document.getElementById('content-secondary').innerHTML = null;
    document.getElementById('play-menu').innerHTML = HTML;
  } else {
    document.getElementById('play-menu').innerHTML = null;
  }
}

showMenuPlay(false);

