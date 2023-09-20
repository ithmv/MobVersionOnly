let time = "04:51:16";
let timeParts = time.split(":");
let seconds = parseInt(timeParts[0]) * 3600 + parseInt(timeParts[1]) * 60 + parseInt(timeParts[2]);
function updateTimer() {
let hours = Math.floor(seconds / 3600);
let minutes = Math.floor((seconds % 3600) / 60);
let remainingSeconds = seconds % 60;
hours = String(hours).padStart(2, "0");
minutes = String(minutes).padStart(2, "0");
remainingSeconds = String(remainingSeconds).padStart(2, "0");
document.getElementById("countdown").textContent = hours + ":" + minutes + ":" + remainingSeconds;
seconds--
    if (seconds < 0) {
      clearInterval(timer);
      document.getElementById("countdown").textContent = "Time's up!";
    }
  }
let timer = setInterval(updateTimer, 1000);

function changeImage(src) {
    let bigImage = document.querySelector('.photo img');
    bigImage.classList.add('hidden');
    setTimeout(function() {
      bigImage.src = src;
      bigImage.classList.remove('hidden');
    }, 500);
  }
