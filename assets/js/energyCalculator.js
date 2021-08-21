var counter = document.getElementById("energyQuantity");
counter = 3;
var round = document.getElementById("roundNumber");
round = 1;

function subtract(){
  counter = counter - 1;
  if (counter <= 0) {
    counter = 0;
  }
  
  document.getElementById("energyQuantity").innerHTML = counter;
}

function add(){
  counter = counter + 1;
  if (counter >= 10) {
    counter = 10;
  }
  document.getElementById("energyQuantity").innerHTML = counter;
}

function reset(){
  counter = 3;
  document.getElementById("energyQuantity").innerHTML = counter;
}