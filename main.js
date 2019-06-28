function fadeIn(character) {
  var characterOpacity = 0;

  setTimeout(() => {
    character.style.opacity = characterOpacity;
    characterOpacity = characterOpacity + 0.1;
  }, 200);
}

function randomCharacter() {
  var characters = [];
  var counter = 1;

  return;
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
  }, 2000);
}

window.onload = function() {
  startMain();
  // randomCharacter();
};
