var question = $("#question");
var timerText = $("#timer");
var scoreText = $("#score");

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
var choiceOne = $("#1");
var choiceTwo = $("#2");
var choiceThree = $("#3");
var choiceFour = $("#4");
const MAX_QUESTIONS = 5;

var choice = $(".choices");

timerText.css("font-size", "2rem");

var getNewQuestion = function () {
  if (questionCounter === MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("/end.html");
  }
  question.text(questions[questionCounter].question);
  choiceOne.text(questions[questionCounter].choice1);
  choiceTwo.text(questions[questionCounter].choice2);
  choiceThree.text(questions[questionCounter].choice3);
  choiceFour.text(questions[questionCounter].choice4);

  questionCounter++;

  acceptingAnswers = true;
};

var startGame = function () {
  questionCounter = 0;
  score = 0;
  getNewQuestion();
};

choice.on("click", function (event) {
  console.log("Click accepted");
  var choiceSelector = function () {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    var selectedChoice = event.target.id;
    console.log(event.target.id);
    var selectedAnswer = questions[questionCounter - 1].answer;
    console.log(selectedAnswer);
    var classToApply =
      selectedChoice == questions[questionCounter - 1].answer
        ? "correct"
        : "incorrect";
    event.target.parentElement.classList.add(classToApply);
    setTimeout(function () {
      event.target.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  if (selectedChoice != selectedAnswer) {
    timeLeft -= 10;
  }
  };  
  choiceSelector();
  incrementScore = function() {
  if(questionCounter === MAX_QUESTIONS) {
  scoreText.text(timeLeft);
  localStorage.setItem("mostRecentScore", JSON.stringify(timeLeft));
  window.location.replace('end.html')
    }
  };
  incrementScore();
});



var timeInterval = setInterval(function () {
  timeLeft--;
  if (timeLeft > 1) {
    timerText.text(timeLeft + " seconds remaining");
  } else if (timeLeft === 1) {
    timerText.text((timeLeft = " second remaining"));
  } else {
    window.location.assign("/end.html");
  }
}, 1000);

startGame();
incrementScore();
