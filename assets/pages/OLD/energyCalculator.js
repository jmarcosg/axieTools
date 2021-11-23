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
  
  // Axie1 parts clear
  document.getElementById('a1m1').style.visibility = "hidden";
  document.getElementById('a1m2').style.visibility = "hidden";
  document.getElementById('a1h1').style.visibility = "hidden";
  document.getElementById('a1h2').style.visibility = "hidden";
  document.getElementById('a1b1').style.visibility = "hidden";
  document.getElementById('a1b2').style.visibility = "hidden";
  document.getElementById('a1t1').style.visibility = "hidden";
  document.getElementById('a1t2').style.visibility = "hidden";
  
  // Axie2 parts clear
  document.getElementById('a2m1').style.visibility = "hidden";
  document.getElementById('a2m2').style.visibility = "hidden";
  document.getElementById('a2h1').style.visibility = "hidden";
  document.getElementById('a2h2').style.visibility = "hidden";
  document.getElementById('a2b1').style.visibility = "hidden";
  document.getElementById('a2b2').style.visibility = "hidden";
  document.getElementById('a2t1').style.visibility = "hidden";
  document.getElementById('a2t2').style.visibility = "hidden";
  
  // Axie3 parts clear
  document.getElementById('a3m1').style.visibility = "hidden";
  document.getElementById('a3m2').style.visibility = "hidden";
  document.getElementById('a3h1').style.visibility = "hidden";
  document.getElementById('a3h2').style.visibility = "hidden";
  document.getElementById('a3b1').style.visibility = "hidden";
  document.getElementById('a3b2').style.visibility = "hidden";
  document.getElementById('a3t1').style.visibility = "hidden";
  document.getElementById('a3t2').style.visibility = "hidden";
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