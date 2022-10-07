// Función cambiar logo navbar
let navbarLogo = document.getElementById("#navbarLogo");

navbarLogo.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('../assets/Images/mask/angus-face-2.png')";
})

// Función play audio
var audio = document.getElementById("audio");
audio.volume = 0.8;
var playPauseBtn = document.getElementById('playPauseBtn');
var count = 0;

function playPause() {
  if(count == 0) {
    count = 1;
    audio.play();
  } else {
    count = 0;
    audio.pause();
  }
};