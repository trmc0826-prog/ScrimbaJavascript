const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0;

function updateDisplay() {
  homeScoreEl.textContent = homeScore;
  guestScoreEl.textContent = guestScore;
}

function changeScore(team, points) {
  if (team === "home") {
    homeScore += points;
  } else if (team === "guest") {
    guestScore += points;
  }
  updateDisplay();
}

function changeScore(team, points) {
  if (team === "home") {
    homeScore += points;
  } else if (team === "guest") {
    guestScore += points;
  }
  updateDisplay();
}
function resetAll() {
  homeScore = 0;
  guestScore = 0;
  updateDisplay();
}
