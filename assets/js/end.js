var username = $("#username")
var saveScoreBtn = $("#saveScoreBtn")
var finalScore = $("#finalScore")
var mostRecentScore = localStorage.getItem("mostRecentScore")

var highScores = JSON.parse(localStorage.getItem("highScores")) || []

var MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.on("keydown", () => {
	saveScoreBtn.disabled = !username.value
})

saveHighScore = event => {
	event.preventDefault()
	localStorage.getItem("mostRecentScore")
	var score = {
		score: mostRecentScore,
		name: username.value
	};
	highScores.push(score);

	highScores.sort((a,b) => {
		return b.score - a. score
	})
	
	highScores.splice(5);

	localStorage.setItem("highScores", JSON.stringify(highScores));
	window.location.assign("/");
}