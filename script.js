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
        message = "GAME TIED!"
      } else {
        message = "YOU WINS!"
        document.getElementById("score").innerText = 10;
      }
    } else if (obj.name === 'scissors' && ramdomObj.name !== 'rock') {
      if (obj.name === ramdomObj.name) {
        message = "GAME TIED!"
      } else {
        message = "YOU WINS!"
        document.getElementById("score").innerText = 10;
      }
    } else if (obj.name === 'rock' && ramdomObj.name !== 'papper') {
      if (obj.name === ramdomObj.name) {
        message = "GAME TIED!"
      } else {
        message = "YOU WINS!"
        document.getElementById("score").innerText = 10;
      }
    } else {
      message = 'YOU LOSE!';
      document.getElementById("score").innerText = -10;
    }

    showViewContentSecondary(false, obj, ramdomObj, message);
  }, 1000);
}

function showViewContentSecondary(hidden, obj, ramdomObj, message) {
  if (!hidden) {
    const HTML =
      `
  <section class="content-secondary">
  <div>
    <h2>YOU PICKED</h2>
    <button class="btn-content-secondary border-btn-${obj.name}">
      <img src="${obj.image}" alt="${obj.name}" />
    </button> 
  </div>
  <div class="play-again">
    <h2>${message}</h2>
    <button onclick="showViewOptions(false)">PLAY AGAIN</button>
  </div>
  <div>
    <h2>THE HOUSE PICKED</h2>
    <button class="btn-content-secondary border-btn-${ramdomObj.name}">
      <img src="${ramdomObj.image}" alt="${ramdomObj.name}" />
    </button>
  </div>
</section>
  `;
    document.getElementById('content-secondary').innerHTML = HTML;
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
  if (!hidden) {
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

showViewOptions(false);

