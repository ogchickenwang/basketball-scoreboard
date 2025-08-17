let homeScoreEl = document.getElementById("home-score-el")
let awayScoreEl = document.getElementById("away-score-el")
let homeScore = 0
let awayScore = 0

function add1Home() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function add2Home() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function add3Home() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function add1Away() {
    awayScore += 1
    awayScoreEl.textContent = awayScore
}

function add2Away() {
    awayScore += 2
    awayScoreEl.textContent = awayScore
}

function add3Away() {
    awayScore += 3
    awayScoreEl.textContent = awayScore
}