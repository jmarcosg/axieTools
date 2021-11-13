var counter = document.getElementById("actualEnergy");
counter = 3;
var round = document.getElementById("roundNumber");
roundNumber = 1;

function subtract(){
  counter -= 1;
  if (counter <= 0) {
    counter = 0;
  }
  
  document.getElementById("actualEnergy").innerHTML = counter;
}

function add(){
  counter += 1;
  if (counter >= 10) {
    counter = 10;
  }
  document.getElementById("actualEnergy").innerHTML = counter;
}

function reset(){
  counter = 3;
  roundNumber = 1;
  document.getElementById("actualEnergy").innerHTML = counter;
  document.getElementById("roundNumber").innerHTML = roundNumber;
}

function nextRound(){
  roundNumber += 1;
  counter += 2;
  if (counter >= 10) {
    counter = 10;
  }
  
  document.getElementById("roundNumber").innerHTML = roundNumber;
  document.getElementById("actualEnergy").innerHTML = counter;
}