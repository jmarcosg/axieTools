var counter = document.getElementById("energyQuantity");
counter = 3;
var round = document.getElementById("roundNumber");
round = 1;

function subtract(){
  counter -= 1;
  if (counter <= 0) {
    counter = 0;
  }
  
  document.getElementById("energyQuantity").innerHTML = counter;
}

function add(){
  counter += 1;
  if (counter >= 10) {
    counter = 10;
  }
  document.getElementById("energyQuantity").innerHTML = counter;
}

function reset(){
  counter = 3;
  round = 1;
  document.getElementById("energyQuantity").innerHTML = counter;
  document.getElementById("roundNumber").innerHTML = round;
}

function nextRound(){
  round += 1;
  counter += 2;
  if (counter >= 10) {
    counter = 10;
  }
  
  document.getElementById("roundNumber").innerHTML = round;
  document.getElementById("energyQuantity").innerHTML = counter;
}