const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");
let score0 = document.getElementById("score-0");
let score1 = document.getElementById("score-1");
const dice = document.querySelector(".dice");
let current0 = document.getElementById("current-0");
let current1 = document.getElementById("current-1");
const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");
let currentscores = 0;
let totalScores = [0, 0];
let activePlayer = 0;
let isPlaying = true;

btnNew.addEventListener("click", function () {
  totalScores = [0, 0];
  activePlayer = 0;
  currentscores = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  isPlaying = true;
  player0.classList.add("player-active");
  player1.classList.remove("player-active");
  player1.classList.remove("player-winner");
  player1.classList.remove("player-winner");
  dice.classList.add("hidden");
});
btnRoll.addEventListener("click", function () {
  if (isPlaying) {
    if (totalScores[activePlayer] < 100) {
      dice.classList.remove("hidden");
      let ranNum = Math.trunc(Math.random() * 6) + 1;
      dice.src = `dice${ranNum}.png`;
      if (ranNum !== 1) {
        currentscores += ranNum;
        document.getElementById(`current-${activePlayer}`).textContent =
          currentscores;
      } else {
        document.getElementById(`current-${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentscores = 0;
        player0.classList.toggle("player-active");
        player1.classList.toggle("player-active");
      }
    }
  }
});
btnHold.addEventListener("click", function () {
  if (isPlaying) {
    totalScores[activePlayer] += currentscores;
    document.getElementById(`score-${activePlayer}`).textContent =
      totalScores[activePlayer];
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    if (totalScores[activePlayer] >= 100) {
      isPlaying = false;
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove("player-active");
    } else {
      activePlayer = activePlayer === 0 ? 1 : 0;
      currentscores = 0;
      player0.classList.toggle("player-active");
      player1.classList.toggle("player-active");
    }
  }
});
document.querySelector(".rule").addEventListener("click", function () {
  document.querySelector(".module").classList.remove("hidden");
});
document.querySelector(".times").addEventListener("click", function () {
  document.querySelector(".module").classList.add("hidden");
});
