var questionEl = document.querySelector("#questions");
var btnEl = document.querySelector("#startBtn");
var startContainer = document.querySelector("#start-container");
var gameContainer = document.querySelector("#game");
var inputbox = document.querySelector(".hide");
var scoreEl = document.querySelector("#finalScore");
var formEl = document.querySelector(".form-submit");
var timerEl = document.querySelector("#timeLeft")
var initialsInput = document.getElementById('initialInput');
let score = 0;

let highestScore = JSON.parse(localStorage.getItem("highestScore")) || [];
var questions = [
	{
		question: "Which of these is an html element",
		answers: [
			{ text: "<h0>", correct: false },
			{ text: "<class>", correct: false },
			{ text: "<b>", correct: false },
			{ text: "<body>", correct: true },
		],
	},
	{
		question: "Which of this can you use to grab an element in javascript",
		answers: [
			{ text: "querySelector", correct: true },
			{ text: "EventListener", correct: false },
			{ text: "getAttribute", correct: false },
			{ text: "textContent", correct: false },
		],
	},
	{
		question: "Which of this can you use to edit the DOM in javascript",
		answers: [
			{ text: "event", correct: false },
			{ text: "textContent", correct: true },
			{ text: "push", correct: false },
			{ text: "JSON", correct: false },
		],
	},
	{
		question: "Which of this can be used to remove an element in an array",
		answers: [
			{ text: "push()", correct: false },
			{ text: "setItem()", correct: false },
			{ text: "pop()", correct: true },
			{ text: "map()", correct: false },
		],
	},
	{
		question: "Which of this can you use to add an element to an existing array",
		answers: [
			{ text: "array.push()", correct: true },
			{ text: "array.splice()", correct: false},
			{ text: "array.map()", correct: false },
			{ text: "array.filter()", correct: false },
		],
	},
];

let currentIndex = 0;

function displayQandA() {
	startContainer.setAttribute("style", "visibility:hidden; display:none;");
	gameContainer.setAttribute("style", "visibility:visible; display:inline;");
	console.log("hello");
	var question = questions[currentIndex].question;
	questionEl.textContent = question;
	var answers = questions[currentIndex].answers;
	answers.forEach(function (answer, index) {
		document.getElementById(index.toString()).textContent = answer.text;
		document.getElementById(index.toString()).onclick = checkAnswer;
	});
}

function checkAnswer(e) {
	console.log(this.textContent);
	questions[currentIndex].answers.forEach((answer) => {
		if (answer.correct) {
			if (answer.text === this.textContent) {
				console.log("Correct");
				score += 10;
        const answer = document.createElement("p")
        answer.append("Correct")
			} else {
				console.log("wrong");
				score -= 5;
			}
		}
	});
	if (currentIndex === questions.length - 1) {
		console.log("End of quiz");
		gameContainer.setAttribute("style", "visibility:hidden; display:none;");
		inputbox.setAttribute("style", "visibility:visible; display:inline");
		gameOver();
	} else {
		currentIndex++;
		displayQandA();
	}
}

function gameOver() {
	scoreEl.textContent = `Final score is ${score}`;

  formEl.addEventListener("submit", highScore)
}

let timeLeft = 60;

function setTimer() {
	let quizTimer = setInterval(() => {
		if (timeLeft > 0) {
			timeLeft--;
			timerEl.textContent = `Time: ${timeLeft}`;
		} else {
			clearInterval(quizTimer);
			timerEl.textContent = ``;
      gameOver()
		}
	}, 1000);
}

function highScore(event) {
	event.preventDefault();

	var newRecord = {
		initials: initialsInput.value,
		score: score,
	};

	highestScore.push(newRecord);

	localStorage.setItem("highestScore", JSON.stringify(highestScore));

	location.replace("highscores.html");
}

btnEl.addEventListener("click", function () {
	setTimer();
	displayQandA();
});
