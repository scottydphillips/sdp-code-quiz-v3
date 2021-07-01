var question = $("#question");
console.log(question);
var timerText = $("#timer");
var scoreText = $("#score");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let timeLeft = 60;
 
var questions = [
    {
      question: "What does HTML stand for?",
      answer: 1,
      choice1: "HyperText Markup Language",
      choice2: "Hey! Too much layout!",
      choice3: "Hit the mother load",
      choice4: "Bro, I dunno",
    },
    {
      question: "What does CSS stand for?",
      answer: 3,
      choice1: "Cars Starting Slowly",
      choice2: "Counter-Strike: Source",
      choice3: "Cascading Style Sheets",
      choice4: "Bro, I dunno",
    },
    {
      question: "What is the actual name of Javascript?",
      answer: 3,
      choice1: "A coffee-flavored cursive font",
      choice2: "The official handwriting of an Indonesian island",
      choice3: "ECMAscript",
      choice4: "Bro, I dunno",
    },
    {
      question: "What does API stand for?",
      answer: 2,
      choice1: "Awesome Pull-down Interface",
      choice2: "Application Programming Interface",
      choice3: "Always Peak Intervalically",
      choice4: "Bro, I dunno",
    },
    {
      question: "What is the air-speed velocity of a laden swallow?",
      answer: 4,
      choice1: "Something about coconuts",
      choice2: "African?",
      choice3: "European?",
      choice4: "Bro, I dunno",
    },
  ];
var choiceOne = $("#choice1");
var choiceTwo = $("#choice2");
var choiceThree = $("#choice3");
var choiceFour = $("#choice4");
const MAX_QUESTIONS = 5;

var getNewQuestion = function () {
 
  if ((questions.length = 0 || questionCounter === MAX_QUESTIONS)) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("/end.html");
  }
  // for (i=0; i<questions.length; i++) {
  // questions[i].textContent = questions[i];
  // };
  // question.html = questions[questionCounter].question
  // console.log("apple", questions[questionCounter].question)
  choiceOne.text(questions[0].choice1);
  console.log(questions[0].choice1);
  choiceTwo.text(questions[0].choice2);
  choiceThree.text(questions[0].choice3);
  choiceFour.text(questions[0].choice4);

  // questions.splice(questions, 1);

  questionCounter++;

  acceptingAnswers = true;
};

var startGame = function () {
  questionCounter = 0;
  score = 0;
  getNewQuestion();
};

// choices.forEach(choice => {
// 	choice.addEventListener("click", e => {
// 		if(!acceptingAnswers) return;
// 	acceptingAnswers = false
// 	const selectedChoice = e.target;
// 	const selectedAnswer = selectedChoice["number"];

// 	let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"

// 	if(classToApply === "incorrect") {
// 		(timeLeft -= 10);
// 	}

// 	selectedChoice.parentElement.classList.add(classToApply)

// 	setTimeout(() => {
// 		selectedChoice.parentElement.classList.remove(classToApply);
// 		getNewQuestion();
// 	}, 1000);
// 	})
// })

incrementScore = (num) => {
  score += num;
  scoreText.innerText = timeLeft;
};

var timeInterval = setInterval(function () {
  timeLeft--;
  if (timeLeft > 1) {
    timerText.textContent = timeLeft + " seconds remaining";
  } else {
  }
}, 1000);

timerText.innerText = timeLeft + " seconds remaining";
console.log(typeof questions);

startGame();
