const question = $("#question");
const choices = Array.from(document.querySelectorAll(".choiceText"));
const timerText = $("#timer");
const scoreText = $("#score");
 
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let timeLeft = 60

var questions = [
	{
		question: "What does HTML stand for?",
		answer: 1,
		choice1: "HyperText Markup Language",
		choice2: "Hey! Too much layout!",
		choice3: "Hit the mother load",
		choice4: "Bro, I dunno"
	},
	{
		question: "What does CSS stand for?",
		answer: 3,
		choice1: "Cars Starting Slowly",
		choice2: "Counter-Strike: Source",
		choice3: "Cascading Style Sheets",
		choice4: "Bro, I dunno"
	},
	{
		question: "What is the actual name of Javascript?",
		answer: 3,
		choice1: "A coffee-flavored cursive font",
		choice2: "The official handwriting of an Indonesian island",
		choice3: "ECMAscript",
		choice4: "Bro, I dunno"
	},
	{
		question: "What does API stand for?",
		answer: 2,
		choice1: "Awesome Pull-down Interface",
		choice2: "Application Programming Interface",
		choice3: "Always Peak Intervalically",
		choice4: "Bro, I dunno"
	},
	{
		question: "What is the air-speed velocity of a laden swallow?",
		answer: 4,
		choice1: "Something about coconuts",
		choice2: "African?",
		choice3: "European?",
		choice4: "Bro, I dunno"
	},
];

const MAX_QUESTIONS = 5;

var startGame = function() {
	questionCounter = 0;
	score = 0;
	availableQuestions = [...questions]
	getNewQuestion()
}

var getNewQuestion = function () {
	if(availableQuestions.length = 0 || questionCounter > MAX_QUESTIONS) {
		localStorage.setItem("mostRecentScore", score)
		return window.location.assign("/end.html")
	}
	questionCounter++;
	timerText.innerText = timeLeft + " seconds remaining"

	const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
	currentQuestion = availableQuestions[questionsIndex];
	question.innerHTML = currentQuestion.question;

	choices.forEach(choice => {
		const number = choice.dataset["number"];
		choice.innerText = currentQuestion["choice" + number];
	})

	availableQuestions.splice(questionsIndex, 1);

	acceptingAnswers = true;
}

choices.forEach(choice => {
	choice.addEventListener("click", e => {
		if(!acceptingAnswers) return;
	acceptingAnswers = false
	const selectedChoice = e.target;
	const selectedAnswer = selectedChoice["number"];

	let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"
	
	if(classToApply === "incorrect") {
		(timeLeft -= 10);
	}

	selectedChoice.parentElement.classList.add(classToApply)
	
	setTimeout(() => {
		selectedChoice.parentElement.classList.remove(classToApply);
		getNewQuestion();
	}, 1000);
	})
})

incrementScore = num => {
	score += num;
	scoreText.innerText = timeLeft;
}

startGame();