//Variables
//Buttons

let button0=document.getElementById("button0");
let Evaluation=document.getElementById("Evaluation");
let playerScoreText=document.getElementById("playerScoreText");
let AiScoreText=document.getElementById("AiScoreText");
let playerRollText=document.getElementById("playerRollText");
let AiRollText=document.getElementById("AiRollText");
// text


let playerRoll=0;
let AiRoll=0;
let playerScore=0;
let AiScore=0;

// processes
button0.addEventListener("click",()=>{
  getRandomNumberOneToSixForPlayer();
  showPlayerRollResult();
  getRandomNumberOneToSixForAi();
  showAiRollResult();
  evaluateRoll();
  updateScores();
});

// controllers
function getRandomNumberOneToSixForPlayer(){
  playerRoll =Math.floor(Math.random()* 6) + 1;
}
function getRandomNumberOneToSixForAi(){
  AiRoll =Math.floor(Math.random() * 6) + 1;
}

function evaluateRoll(){
  if(playerRoll > AiRoll){
    Evaluation.innerHTML= "you Win!";
    playerScore++;
  } else if(playerRoll < AiRoll){
    Evaluation.innerHTML= "Ai Win!";
    AiScore++;
  } else{
    Evaluation.innerHTML= "It´s a Draw!!";
  }

}


// Views
function showPlayerRollResult(){
  playerRollText.innerHTML= " Du rullade" +" " +playerRoll;
}

function showAiRollResult(){
  AiRollText.innerHTML= " Ai Rullade " + " "+ AiRoll;
}
function updateScores(){
  playerScoreText.innerHTML= " Du har "+" "+playerScore + " " +"poäng";
  AiScoreText.innerHTML=  " Ai har "+" "+ AiScore + " "+ " poäng";
}

