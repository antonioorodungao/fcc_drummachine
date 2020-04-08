let drum_tweet = document.querySelector("#drum_tweet");
let drum_bell = document.querySelector("#drum_bell");
let drum_dog = document.querySelector("#drum_dog");
let drum_car = document.querySelector("#drum_car");
let drum_motor = document.querySelector("#drum_motor");
let drum_toilet = document.querySelector("#drum_toilet");
let drum_lightbulb = document.querySelector("#drum_lightbulb");
let drum_dice = document.querySelector("#drum_dice");
let drum_cat = document.querySelector("#drum_cat");
let display = document.querySelector("#display");

let Q = document.querySelector("#Q");
let W = document.querySelector("#W");
let E = document.querySelector("#E");
let A = document.querySelector("#A");
let S = document.querySelector("#S");
let D = document.querySelector("#D");
let Z = document.querySelector("#Z");
let X = document.querySelector("#X");
let C = document.querySelector("#C");

(function () {
  document.addEventListener("keyup", handleKeyEvents);
  drum_tweet.addEventListener("click", handleKeyPressQ);
  drum_bell.addEventListener("click", handleKeyPressW);
  drum_dog.addEventListener("click", handleKeyPressE);
  drum_car.addEventListener("click", handleKeyPressA);
  drum_motor.addEventListener("click", handleKeyPressS);
  drum_toilet.addEventListener("click", handleKeyPressD);
  drum_lightbulb.addEventListener("click", handleKeyPressZ);
  drum_dice.addEventListener("click", handleKeyPressX);
  drum_cat.addEventListener("click", handleKeyPressC);
})();

function handleKeyEvents(e) {
  switch (e.key.toUpperCase()) {
    case "Q":
      handleKeyPressQ();
      break;
    case "W":
      handleKeyPressW();
      break;
    case "E":
      handleKeyPressE();
      break;
    case "A":
      handleKeyPressA();
      break;
    case "S":
      handleKeyPressS();
      break;
    case "D":
      handleKeyPressD();
      break;
    case "Z":
      handleKeyPressZ();
      break;
    case "X":
      handleKeyPressX();
      break;
    case "C":
      handleKeyPressC();
      break;
  }
}

function handleKeyPressQ(e) {
  display.innerHTML = "Q";
  setTimeout(clearDisplay, 2000);
  Q.play();
}

function handleKeyPressW(e) {
  display.innerHTML = "W";
  W.play();
  setTimeout(clearDisplay, 2000);
}

function handleKeyPressE(e) {
  display.innerHTML = "E";
  E.play();
  setTimeout(clearDisplay, 2000);
}

function handleKeyPressA(e) {
  display.innerHTML = "A";
  A.play();
  setTimeout(clearDisplay, 2000);
}

function handleKeyPressS(e) {
  display.innerHTML = "S";
  S.play();
  setTimeout(clearDisplay, 2000);
}

function handleKeyPressD(e) {
  display.innerHTML = "D";
  D.play();
  setTimeout(clearDisplay, 2000);
}

function handleKeyPressZ(e) {
  display.innerHTML = "Z";
  Z.play();
  setTimeout(clearDisplay, 2000);
}

function handleKeyPressX(e) {
  display.innerHTML = "X";
  X.play();
  setTimeout(clearDisplay, 2000);
}

function handleKeyPressC(e) {
  display.innerHTML = "C";
  C.play();
  setTimeout(clearDisplay, 2000);
}

function clearDisplay() {
  display.innerHTML = "";
}
