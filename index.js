const homeScoreEl = document.getElementById("home-score");
const awayScoreEl = document.getElementById("away-score");
let homeScore = 0;
let awayScore = 0;

function updateDisplay() {
  homeScoreEl.textContent = homeScore;
  awayScoreEl.textContent = awayScore;
}

function changeScore(team, points) {
  if (team === "home") {
    homeScore += points;
  } else if (team === "away") {
    awayScore += points;
  }
  updateDisplay();
}

function changeScore(team, points) {
  if (team === "home") {
    homeScore += points;
  } else if (team === "away") {
    awayScore += points;
  }
  updateDisplay();
}
function resetAll() {
  homeScore = 0;
  awayScore = 0;
  updateDisplay();
}
