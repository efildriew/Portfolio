function fadeIn(character) {
  // var characterOpacity = 0.1;

  // while (characterOpacity < 1.1) {
  //   setTimeout(() => {
  //     character.style.opacity = characterOpacity;
  //     characterOpacity += characterOpacity * 0.1;
  //   }, 200);
  // }
  // setTimeout(() => {
  character.style.transition = "opacity 10s";
  character.style.opacity = 1;
  // }, 2000);
}

function randomCharacter() {
  // setTimeout(() => {
  var characters = document.getElementsByTagName("span");
  var charactersArray = [...characters];

  for (let i = 0; i < characters.length; i++) {
    let randomNumber = Math.floor(Math.random() * charactersArray.length);

    fadeIn(charactersArray[randomNumber]);

    charactersArray.splice(randomNumber, 1);
  }
  if (charactersArray.length === 0) {
    startMain();
  }
  // }, 2000);
}

function startMain() {
  var separationBar = document.getElementById("separation-bar");
  var divLinks = document.getElementById("wrapper-2");
  var background = document.getElementById("container");
  var charactersName = document.getElementById("wrapper-1");

  setTimeout(() => {
    separationBar.style.opacity = 1;
    divLinks.style.opacity = 1;
    background.style.backgroundColor = "black";
    charactersName.style.color = "white";
  }, 5000);
}

window.onload = function() {
  randomCharacter();
  startMain();
};
