//Variables
//Buttons

let button0 = document.getElementById("button0");
let Evaluation = document.getElementById("Evaluation");
let playerScoreText = document.getElementById("playerScoreText");
let AiScoreText = document.getElementById("AiScoreText");
let playerRollText = document.getElementById("playerRollText");
let AiRollText = document.getElementById("AiRollText");
// text


let playerRoll = 0;
let AiRoll = 0;
let playerScore = 0;
let AiScore = 0;



// processes
TrayLoadGame();
updateScores();

button0.addEventListener("click", function ()  {
  getRandomNumberOneToSixForPlayer();
  showPlayerRollResult();
  getRandomNumberOneToSixForAi();
  showAiRollResult();
  evaluateRoll();
  SaveCookie();
  updateScores();
});

// controllers
function getRandomNumberOneToSixForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}

function getRandomNumberOneToSixForAi() {
  AiRoll = Math.floor(Math.random() * 6) + 1;
}

function evaluateRoll() {
  if (playerRoll > AiRoll) {
    Evaluation.innerHTML = "you Win!";
    playerScore++;
  } else if (playerRoll < AiRoll) {
    Evaluation.innerHTML = "Ai Win!";
    AiScore++;
  } else {
    Evaluation.innerHTML = "It´s a Draw!!";
  }

}


// Views
function showPlayerRollResult() {
  playerRollText.innerHTML = " Du rullade" + " " + playerRoll;
}

function showAiRollResult() {
  AiRollText.innerHTML = " Ai Rullade " + " " + AiRoll;
}

function updateScores() {
  playerScoreText.innerHTML = " Du har " + " " + playerScore + " " + "poäng";
  AiScoreText.innerHTML = " Ai har " + " " + AiScore + " " + " poäng";
}

function SaveCookie() {
  document.cookie = "playerScore=" + playerScore + ";expires=Thu,29 Dec 2024 12:00:00 UTC";
  document.cookie = "AiScore=" + AiScore + ";expires=Thu,29 Dec 2024 12:00:00 UTC";
  console.log(" ");
}

function TrayLoadGame() {
  playerScore = getCookie("playerScore");
  AiScore = getCookie("AiScore");
}


function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return 0;
}

