// Función cambiar logo navbar
function navbarLogoChange() {
  document.getElementById("navbarLogo").style.backgroundImage = "url('../assets/Images/mask/angus-face-2.png')";
}

// Función play audio
var audio = document.getElementById("audio");
audio.volume = 0.8;
var playPauseBtn = document.getElementById('playPauseBtn');
var count = 0;
var changeTextBtn = document.querySelector('input[value="LISTEN"]');

function playPause() {
  if(count == 0) {
    count = 1;
    changeTextBtn = "PAUSE";
    audio.play();
  } else {
    count = 0;
    changeTextBtn = "LISTEN";
    audio.pause();
  }
};