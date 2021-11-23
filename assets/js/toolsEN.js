var counter = document.getElementById("actualEnergy");
counter = 3;
var round = document.getElementById("roundNumber");
roundNumber = 1;

var currentCardsCounter = document.getElementById("currentCards");
currentCardsCounter = 6;

/**
 * Energy-round functions
 */
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

function nextRound(){
  roundNumber += 1;
  counter += 2;
  currentCardsCounter += 3;
  
  if (counter >= 10) {
    counter = 10;
  }
  
  if (roundNumber >= 10) {
    document.body.style.backgroundColor = "#b52930ad";
  } else {
    document.body.style.backgroundColor = "#c07f5aad";
  }
  
  if (currentCardsCounter >= 12) {
    currentCardsCounter = 12;
  }
  if (currentCardsCounter <= 0) {
    currentCardsCounter = 3;
  }
  
  document.getElementById("roundNumber").innerHTML = roundNumber;
  document.getElementById("actualEnergy").innerHTML = counter;
  document.getElementById("currentCards").innerHTML = currentCardsCounter;
}

function reset(){
  document.body.style.backgroundColor = "#c07f5aad";
  counter = 3;
  roundNumber = 1;
  currentCardsCounter = 6;
  
  document.getElementById("actualEnergy").innerHTML = counter;
  document.getElementById("roundNumber").innerHTML = roundNumber;
  document.getElementById("currentCards").innerHTML = currentCardsCounter;
  
  resetA1Parts();
  resetA2Parts();
  resetA3Parts(); 
}

/**
 * Cards functions
 */
function addCard() {
  currentCardsCounter += 1;
  
  if (currentCardsCounter >= 12) {
    currentCardsCounter = 12;
  }
  
  document.getElementById("currentCards").innerHTML = currentCardsCounter;
}

function minusCard() {
  currentCardsCounter -= 1;
  
  if (currentCardsCounter <= 0) {
    currentCardsCounter = 0;
  }
  
  document.getElementById("currentCards").innerHTML = currentCardsCounter;
}

/**
 * Axie parts functions
 */

// Changes axie grid background color
function changeAxieGridColor() {
  axie1ColorAndParts();
  axie2ColorAndParts();
  axie3ColorAndParts();
}

function axie1ColorAndParts() {
  let axie1Selection = document.getElementById("axie1Select").value;
  
  switch (axie1Selection) {
    case "plant":
      document.getElementById("axie1Grid").style.backgroundColor = "#58c02d";
      document.getElementById("a1m").src = "../../img/parts/plant/horn.svg";
      document.getElementById("a1h").src = "../../img/parts/plant/horn.svg";
      document.getElementById("a1b").src = "../../img/parts/plant/back.svg";
      document.getElementById("a1t").src = "../../img/parts/plant/tail.svg";
      break;
    case "aqua":
      document.getElementById("axie1Grid").style.backgroundColor = "#00b7cc";
      document.getElementById("a1m").src = "../../img/parts/aqua/mouth.svg";
      document.getElementById("a1h").src = "../../img/parts/aqua/horn.svg";
      document.getElementById("a1b").src = "../../img/parts/aqua/back.svg";
      document.getElementById("a1t").src = "../../img/parts/aqua/tail.svg";
      break;
    case "beast":
      document.getElementById("axie1Grid").style.backgroundColor = "#ffb838";
      document.getElementById("a1m").src = "../../img/parts/beast/mouth.svg";
      document.getElementById("a1h").src = "../../img/parts/beast/horn.svg";
      document.getElementById("a1b").src = "../../img/parts/beast/back.svg";
      document.getElementById("a1t").src = "../../img/parts/beast/tail.svg";
      break;
    case "bird":
      document.getElementById("axie1Grid").style.backgroundColor = "#ff8cbc";
      document.getElementById("a1m").src = "../../img/parts/bird/mouth.svg";
      document.getElementById("a1h").src = "../../img/parts/bird/horn.svg";
      document.getElementById("a1b").src = "../../img/parts/bird/back.svg";
      document.getElementById("a1t").src = "../../img/parts/bird/tail.svg";
      break;
    case "bug":
      document.getElementById("axie1Grid").style.backgroundColor = "#ff5549";
      document.getElementById("a1m").src = "../../img/parts/bug/mouth.svg";
      document.getElementById("a1h").src = "../../img/parts/bug/horn.svg";
      document.getElementById("a1b").src = "../../img/parts/bug/back.svg";
      document.getElementById("a1t").src = "../../img/parts/bug/tail.svg";
      break;
    case "dawn":
      document.getElementById("axie1Grid").style.backgroundColor = "#b9cefc";
      document.getElementById("a1m").src = "../../img/parts/aqua/mouth.svg";
      document.getElementById("a1h").src = "../../img/parts/aqua/horn.svg";
      document.getElementById("a1b").src = "../../img/parts/aqua/back.svg";
      document.getElementById("a1t").src = "../../img/parts/aqua/tail.svg";
      break;
    case "dusk":
      document.getElementById("axie1Grid").style.backgroundColor = "#009091";
      document.getElementById("a1m").src = "../../img/parts/reptile/mouth.svg";
      document.getElementById("a1h").src = "../../img/parts/reptile/horn.svg";
      document.getElementById("a1b").src = "../../img/parts/reptile/back.svg";
      document.getElementById("a1t").src = "../../img/parts/reptile/tail.svg";
      break;
    case "mech":
      document.getElementById("axie1Grid").style.backgroundColor = "#c7bdd3";
      document.getElementById("a1m").src = "../../img/parts/beast/mouth.svg";
      document.getElementById("a1h").src = "../../img/parts/beast/horn.svg";
      document.getElementById("a1b").src = "../../img/parts/beast/back.svg";
      document.getElementById("a1t").src = "../../img/parts/beast/tail.svg";
      break;
    case "reptile":
      document.getElementById("axie1Grid").style.backgroundColor = "#e58be1";
      document.getElementById("a1m").src = "../../img/parts/reptile/mouth.svg";
      document.getElementById("a1h").src = "../../img/parts/reptile/horn.svg";
      document.getElementById("a1b").src = "../../img/parts/reptile/back.svg";
      document.getElementById("a1t").src = "../../img/parts/reptile/tail.svg";
      break;
    default:
      document.getElementById("axie1Grid").style.backgroundColor = "#ffffff";
      break;
  }
}

function axie2ColorAndParts() {
  let axie2Selection = document.getElementById("axie2Select").value;
  
  switch (axie2Selection) {
    case "plant":
      document.getElementById("axie2Grid").style.backgroundColor = "#58c02d";
      document.getElementById("a2m").src = "../../img/parts/plant/mouth.svg";
      document.getElementById("a2h").src = "../../img/parts/plant/horn.svg";
      document.getElementById("a2b").src = "../../img/parts/plant/back.svg";
      document.getElementById("a2t").src = "../../img/parts/plant/tail.svg";
      break;
    case "aqua":
      document.getElementById("axie2Grid").style.backgroundColor = "#00b7cc";
      document.getElementById("a2m").src = "../../img/parts/aqua/mouth.svg";
      document.getElementById("a2h").src = "../../img/parts/aqua/horn.svg";
      document.getElementById("a2b").src = "../../img/parts/aqua/back.svg";
      document.getElementById("a2t").src = "../../img/parts/aqua/tail.svg";
      break;
    case "beast":
      document.getElementById("axie2Grid").style.backgroundColor = "#ffb838";
      document.getElementById("a2m").src = "../../img/parts/beast/mouth.svg";
      document.getElementById("a2h").src = "../../img/parts/beast/horn.svg";
      document.getElementById("a2b").src = "../../img/parts/beast/back.svg";
      document.getElementById("a2t").src = "../../img/parts/beast/tail.svg";
      break;
    case "bird":
      document.getElementById("axie2Grid").style.backgroundColor = "#ff8cbc";
      document.getElementById("a2m").src = "../../img/parts/bird/mouth.svg";
      document.getElementById("a2h").src = "../../img/parts/bird/horn.svg";
      document.getElementById("a2b").src = "../../img/parts/bird/back.svg";
      document.getElementById("a2t").src = "../../img/parts/bird/tail.svg";
      break;
    case "bug":
      document.getElementById("axie2Grid").style.backgroundColor = "#ff5549";
      document.getElementById("a2m").src = "../../img/parts/bug/mouth.svg";
      document.getElementById("a2h").src = "../../img/parts/bug/horn.svg";
      document.getElementById("a2b").src = "../../img/parts/bug/back.svg";
      document.getElementById("a2t").src = "../../img/parts/bug/tail.svg";
      break;
    case "dawn":
      document.getElementById("axie2Grid").style.backgroundColor = "#b9cefc";
      document.getElementById("a2m").src = "../../img/parts/aqua/mouth.svg";
      document.getElementById("a2h").src = "../../img/parts/aqua/horn.svg";
      document.getElementById("a2b").src = "../../img/parts/aqua/back.svg";
      document.getElementById("a2t").src = "../../img/parts/aqua/tail.svg";
      break;
    case "dusk":
      document.getElementById("axie2Grid").style.backgroundColor = "#009091";
      document.getElementById("a2m").src = "../../img/parts/reptile/mouth.svg";
      document.getElementById("a2h").src = "../../img/parts/reptile/horn.svg";
      document.getElementById("a2b").src = "../../img/parts/reptile/back.svg";
      document.getElementById("a2t").src = "../../img/parts/reptile/tail.svg";
      break;
    case "mech":
      document.getElementById("axie2Grid").style.backgroundColor = "#c7bdd3";
      document.getElementById("a2m").src = "../../img/parts/beast/mouth.svg";
      document.getElementById("a2h").src = "../../img/parts/beast/horn.svg";
      document.getElementById("a2b").src = "../../img/parts/beast/back.svg";
      document.getElementById("a2t").src = "../../img/parts/beast/tail.svg";
      break;
    case "reptile":
      document.getElementById("axie2Grid").style.backgroundColor = "#e58be1";
      document.getElementById("a2m").src = "../../img/parts/reptile/mouth.svg";
      document.getElementById("a2h").src = "../../img/parts/reptile/horn.svg";
      document.getElementById("a2b").src = "../../img/parts/reptile/back.svg";
      document.getElementById("a2t").src = "../../img/parts/reptile/tail.svg";
      break;
    default:
      document.getElementById("axie2Grid").style.backgroundColor = "#ffffff";
      break;
  }
}

function axie3ColorAndParts() {
  let axie3Selection = document.getElementById("axie3Select").value;
  
  switch (axie3Selection) {
    case "plant":
      document.getElementById("axie3Grid").style.backgroundColor = "#58c02d";
      document.getElementById("a3m").src = "../../img/parts/plant/mouth.svg";
      document.getElementById("a3h").src = "../../img/parts/plant/horn.svg";
      document.getElementById("a3b").src = "../../img/parts/plant/back.svg";
      document.getElementById("a3t").src = "../../img/parts/plant/tail.svg";
      break;
    case "aqua":
      document.getElementById("axie3Grid").style.backgroundColor = "#00b7cc";
      document.getElementById("a3m").src = "../../img/parts/aqua/mouth.svg";
      document.getElementById("a3h").src = "../../img/parts/aqua/horn.svg";
      document.getElementById("a3b").src = "../../img/parts/aqua/back.svg";
      document.getElementById("a3t").src = "../../img/parts/aqua/tail.svg";
      break;
    case "beast":
      document.getElementById("axie3Grid").style.backgroundColor = "#ffb838";
      document.getElementById("a3m").src = "../../img/parts/beast/mouth.svg";
      document.getElementById("a3h").src = "../../img/parts/beast/horn.svg";
      document.getElementById("a3b").src = "../../img/parts/beast/back.svg";
      document.getElementById("a3t").src = "../../img/parts/beast/tail.svg";
      break;
    case "bird":
      document.getElementById("axie3Grid").style.backgroundColor = "#ff8cbc";
      document.getElementById("a3m").src = "../../img/parts/bird/mouth.svg";
      document.getElementById("a3h").src = "../../img/parts/bird/horn.svg";
      document.getElementById("a3b").src = "../../img/parts/bird/back.svg";
      document.getElementById("a3t").src = "../../img/parts/bird/tail.svg";
      break;
    case "bug":
      document.getElementById("axie3Grid").style.backgroundColor = "#ff5549";
      document.getElementById("a3m").src = "../../img/parts/bug/mouth.svg";
      document.getElementById("a3h").src = "../../img/parts/bug/horn.svg";
      document.getElementById("a3b").src = "../../img/parts/bug/back.svg";
      document.getElementById("a3t").src = "../../img/parts/bug/tail.svg";
      break;
    case "dawn":
      document.getElementById("axie3Grid").style.backgroundColor = "#b9cefc";
      document.getElementById("a3m").src = "../../img/parts/aqua/mouth.svg";
      document.getElementById("a3h").src = "../../img/parts/aqua/horn.svg";
      document.getElementById("a3b").src = "../../img/parts/aqua/back.svg";
      document.getElementById("a3t").src = "../../img/parts/aqua/tail.svg";
      break;
    case "dusk":
      document.getElementById("axie3Grid").style.backgroundColor = "#009091";
      document.getElementById("a3m").src = "../../img/parts/reptile/mouth.svg";
      document.getElementById("a3h").src = "../../img/parts/reptile/horn.svg";
      document.getElementById("a3b").src = "../../img/parts/reptile/back.svg";
      document.getElementById("a3t").src = "../../img/parts/reptile/tail.svg";
      break;
    case "mech":
      document.getElementById("axie3Grid").style.backgroundColor = "#c7bdd3";
      document.getElementById("a3m").src = "../../img/parts/beast/mouth.svg";
      document.getElementById("a3h").src = "../../img/parts/beast/horn.svg";
      document.getElementById("a3b").src = "../../img/parts/beast/back.svg";
      document.getElementById("a3t").src = "../../img/parts/beast/tail.svg";
      break;
    case "reptile":
      document.getElementById("axie3Grid").style.backgroundColor = "#e58be1";
      document.getElementById("a3m").src = "../../img/parts/reptile/mouth.svg";
      document.getElementById("a3h").src = "../../img/parts/reptile/horn.svg";
      document.getElementById("a3b").src = "../../img/parts/reptile/back.svg";
      document.getElementById("a3t").src = "../../img/parts/reptile/tail.svg";
      break;
    default:
      document.getElementById("axie3Grid").style.backgroundColor = "#ffffff";
      break;
  }
}

/**
 * "Kills" axie, adds and resets parts used
 */
var axie1mouth = document.getElementById("a1mCounter");
var axie1horn = document.getElementById("a1hCounter");
var axie1back = document.getElementById("a1bCounter");
var axie1tail = document.getElementById("a1tCounter");
axie1mouth = 0;
axie1horn = 0;
axie1back = 0;
axie1tail = 0;

var axie2mouth = document.getElementById("a2mCounter");
var axie2horn = document.getElementById("a2hCounter");
var axie2back = document.getElementById("a2bCounter");
var axie2tail = document.getElementById("a2tCounter");
axie2mouth = 0;
axie2horn = 0;
axie2back = 0;
axie2tail = 0;

var axie3mouth = document.getElementById("a3mCounter");
var axie3horn = document.getElementById("a3hCounter");
var axie3back = document.getElementById("a3bCounter");
var axie3tail = document.getElementById("a3tCounter");
axie3mouth = 0;
axie3horn = 0;
axie3back = 0;
axie3tail = 0;

function usePartA1M() {
  axie1mouth += 1;
  
  if (axie1mouth >= 2) {
    axie1mouth = 2;
  }
  
  document.getElementById("a1mCounter").innerHTML = axie1mouth;
}

function substractPartA1M() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a1mCounter").innerHTML = axie1mouth;
}

function usePartA1H() {
  axie1horn += 1;
  
  if (axie1horn >= 2) {
    axie1horn = 2;
  }
  
  document.getElementById("a1hCounter").innerHTML = axie1horn;
}

function substractPartA1H() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a1hCounter").innerHTML = axie1mouth;
}

function usePartA1B() {
  axie1back += 1;
  
  if (axie1back >= 2) {
    axie1back = 2;
  }
  
  document.getElementById("a1bCounter").innerHTML = axie1back;
}

function substractPartA1B() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a1bCounter").innerHTML = axie1mouth;
}

function usePartA1T() {
  axie1tail += 1;
  
  if (axie1tail >= 2) {
    axie1tail = 2;
  }
  
  document.getElementById("a1tCounter").innerHTML = axie1tail;
}

function substractPartA1T() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a1tCounter").innerHTML = axie1mouth;
}

function resetA1Parts() {
  document.getElementById("a1mButton").classList.remove("disabled");
  document.getElementById("a1mLabel").classList.remove("disabled");
  document.getElementById("a1hButton").classList.remove("disabled");
  document.getElementById("a1hLabel").classList.remove("disabled");
  document.getElementById("a1bButton").classList.remove("disabled");
  document.getElementById("a1bLabel").classList.remove("disabled");
  document.getElementById("a1tButton").classList.remove("disabled");
  document.getElementById("a1tLabel").classList.remove("disabled");
  document.getElementById("a1DeadButton").classList.remove("disabled");
  
  axie1mouth = 0;
  axie1horn = 0;
  axie1back = 0;
  axie1tail = 0;

  document.getElementById("a1mCounter").innerHTML = axie1mouth;
  document.getElementById("a1hCounter").innerHTML = axie1horn;
  document.getElementById("a1bCounter").innerHTML = axie1back;
  document.getElementById("a1tCounter").innerHTML = axie1tail;
}

function usePartA2M() {
  axie2mouth += 1;
  
  if (axie2mouth >= 2) {
    axie2mouth = 2;
  }
  
  document.getElementById("a2mCounter").innerHTML = axie2mouth;
}

function substractPartA2M() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a2mCounter").innerHTML = axie1mouth;
}

function usePartA2H() {
  axie2horn += 1;
  
  if (axie2horn >= 2) {
    axie2horn = 2;
  }
  
  document.getElementById("a2hCounter").innerHTML = axie2horn;
}

function substractPartA2H() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a2hCounter").innerHTML = axie1mouth;
}

function usePartA2B() {
  axie2back += 1;
  
  if (axie2back >= 2) {
    axie2back = 2;
  }
  
  document.getElementById("a2bCounter").innerHTML = axie2back;
}

function substractPartA2B() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a2bCounter").innerHTML = axie1mouth;
}

function usePartA2T() {
  axie2tail += 1;
  
  if (axie2tail >= 2) {
    axie2tail = 2;
  }
  
  document.getElementById("a2tCounter").innerHTML = axie2tail;
}

function substractPartA2T() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a2tCounter").innerHTML = axie1mouth;
}

function resetA2Parts() {
  document.getElementById("a2mButton").classList.remove("disabled");
  document.getElementById("a2mLabel").classList.remove("disabled");
  document.getElementById("a2hButton").classList.remove("disabled");
  document.getElementById("a2hLabel").classList.remove("disabled");
  document.getElementById("a2bButton").classList.remove("disabled");
  document.getElementById("a2bLabel").classList.remove("disabled");
  document.getElementById("a2tButton").classList.remove("disabled");
  document.getElementById("a2tLabel").classList.remove("disabled");
  document.getElementById("a2DeadButton").classList.remove("disabled");
  
  axie2mouth = 0;
  axie2horn = 0;
  axie2back = 0;
  axie2tail = 0;

  document.getElementById("a2mCounter").innerHTML = axie2mouth;
  document.getElementById("a2hCounter").innerHTML = axie2horn;
  document.getElementById("a2bCounter").innerHTML = axie2back;
  document.getElementById("a2tCounter").innerHTML = axie2tail;
}

function usePartA3M() {
  axie3mouth += 1;
  
  if (axie3mouth >= 2) {
    axie3mouth = 2;
  }
  
  document.getElementById("a3mCounter").innerHTML = axie3mouth;
}

function substractPartA3M() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a3mCounter").innerHTML = axie1mouth;
}

function usePartA3H() {
  axie3horn += 1;
  
  if (axie3horn >= 2) {
    axie3horn = 2;
  }
  
  document.getElementById("a3hCounter").innerHTML = axie3horn;
}

function substractPartA3H() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a3hCounter").innerHTML = axie1mouth;
}

function usePartA3B() {
  axie3back += 1;
  
  if (axie3back >= 2) {
    axie3back = 2;
  }
  
  document.getElementById("a3bCounter").innerHTML = axie3back;
}

function substractPartA3B() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a3bCounter").innerHTML = axie1mouth;
}

function usePartA3T() {
  axie3tail += 1;
  
  if (axie3tail >= 2) {
    axie3tail = 2;
  }
  
  document.getElementById("a3tCounter").innerHTML = axie3tail;
}

function substractPartA3T() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a3tCounter").innerHTML = axie1mouth;
}

function resetA3Parts() {
  document.getElementById("a3mButton").classList.remove("disabled");
  document.getElementById("a3mLabel").classList.remove("disabled");
  document.getElementById("a3hButton").classList.remove("disabled");
  document.getElementById("a3hLabel").classList.remove("disabled");
  document.getElementById("a3bButton").classList.remove("disabled");
  document.getElementById("a3bLabel").classList.remove("disabled");
  document.getElementById("a3tButton").classList.remove("disabled");
  document.getElementById("a3tLabel").classList.remove("disabled");
  document.getElementById("a3DeadButton").classList.remove("disabled");
  
  axie3mouth = 0;
  axie3horn = 0;
  axie3back = 0;
  axie3tail = 0;

  document.getElementById("a3mCounter").innerHTML = axie3mouth;
  document.getElementById("a3hCounter").innerHTML = axie3horn;
  document.getElementById("a3bCounter").innerHTML = axie3back;
  document.getElementById("a3tCounter").innerHTML = axie3tail;
}

function killAxie1 () {
  document.getElementById("a1mButton").classList.add("disabled");
  document.getElementById("a1mLabel").classList.add("disabled");
  document.getElementById("a1hButton").classList.add("disabled");
  document.getElementById("a1hLabel").classList.add("disabled");
  document.getElementById("a1bButton").classList.add("disabled");
  document.getElementById("a1bLabel").classList.add("disabled");
  document.getElementById("a1tButton").classList.add("disabled");
  document.getElementById("a1tLabel").classList.add("disabled");
  document.getElementById("a1DeadButton").classList.add("disabled");
  
  var axie1mouth = "-";
  var axie1horn = "-";
  var axie1back = "-";
  var axie1tail = "-";

  document.getElementById("a1mCounter").innerHTML = axie1mouth;
  document.getElementById("a1hCounter").innerHTML = axie1horn;
  document.getElementById("a1bCounter").innerHTML = axie1back;
  document.getElementById("a1tCounter").innerHTML = axie1tail;
}

function killAxie2 () {
  document.getElementById("a2mButton").classList.add("disabled");
  document.getElementById("a2mLabel").classList.add("disabled");
  document.getElementById("a2hButton").classList.add("disabled");
  document.getElementById("a2hLabel").classList.add("disabled");
  document.getElementById("a2bButton").classList.add("disabled");
  document.getElementById("a2bLabel").classList.add("disabled");
  document.getElementById("a2tButton").classList.add("disabled");
  document.getElementById("a2tLabel").classList.add("disabled");
  document.getElementById("a2DeadButton").classList.add("disabled");
  
  var axie2mouth = "-";
  var axie2horn = "-";
  var axie2back = "-";
  var axie2tail = "-";

  document.getElementById("a2mCounter").innerHTML = axie2mouth;
  document.getElementById("a2hCounter").innerHTML = axie2horn;
  document.getElementById("a2bCounter").innerHTML = axie2back;
  document.getElementById("a2tCounter").innerHTML = axie2tail;
}

function killAxie3 () {
  document.getElementById("a3mButton").classList.add("disabled");
  document.getElementById("a3mLabel").classList.add("disabled");
  document.getElementById("a3hButton").classList.add("disabled");
  document.getElementById("a3hLabel").classList.add("disabled");
  document.getElementById("a3bButton").classList.add("disabled");
  document.getElementById("a3bLabel").classList.add("disabled");
  document.getElementById("a3tButton").classList.add("disabled");
  document.getElementById("a3tLabel").classList.add("disabled");
  document.getElementById("a3DeadButton").classList.add("disabled");
  
  var axie3mouth = "-";
  var axie3horn = "-";
  var axie3back = "-";
  var axie3tail = "-";

  document.getElementById("a3mCounter").innerHTML = axie3mouth;
  document.getElementById("a3hCounter").innerHTML = axie3horn;
  document.getElementById("a3bCounter").innerHTML = axie3back;
  document.getElementById("a3tCounter").innerHTML = axie3tail;
}

// Calculator modal and functions
// Get the modal, btn and span
var modal = document.getElementById("calculatorModal");
var btn = document.getElementById("modalBtn");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Variables
let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');

// Calculator Display
let realTimeScreenValue = [];

// To Clear
clearbtn.addEventListener("click", () => {
    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput';
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = " rgba(150, 150, 150, 0.87)";
});

// Get value of any button clicked and display to the screen
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // when clicked button is not erased button 
        if (!btn.id.match('erase')) {
            // To display value on btn press
            realTimeScreenValue.push(btn.value);
            currentInput.innerHTML = realTimeScreenValue.join('');

            // To evaluate answer in real time
            if (btn.classList.contains('num_btn')) {
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
            }
        }

        // When erase button is clicked
        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        // When clicked button is evaluate button
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        }

        // To prevent undefined error in screen
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0;
        }
    });
});


