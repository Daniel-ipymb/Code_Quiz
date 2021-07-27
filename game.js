var questionEl = document.querySelector("#questions");
var btnEl = document.querySelector("#startBtn");
var startContainer = document.querySelector("#start-container");
var gameContainer = document.querySelector("#game");
var questions = [
	{
		question: "What is Javascript",
		answers: [
			{ text: "1", correct: false },
			{ text: "2", correct: false },
			{ text: "3", correct: false },
			{ text: "4", correct: true },
		],
	},
  {
		question: "What is Javascript",
		answers: [
			{ text: "9", correct: false },
			{ text: "6", correct: true },
			{ text: "3", correct: false },
			{ text: "5", correct: false },
		],
	},
  {
		question: "What is Javascript",
		answers: [
			{ text: "9", correct: false },
			{ text: "6", correct: true },
			{ text: "3", correct: false },
			{ text: "5", correct: false },
		],
	},
  {
		question: "What is Javascript",
		answers: [
			{ text: "9", correct: false },
			{ text: "6", correct: true },
			{ text: "3", correct: false },
			{ text: "5", correct: false },
		],
	},
  {
		question: "What is Javascript",
		answers: [
			{ text: "9", correct: false },
			{ text: "6", correct: true },
			{ text: "3", correct: false },
			{ text: "5", correct: false },
		],
	},
];

// make a function to startgame then timer starts and questions show up on screen

// function timer()

// after displayQandA function run an addEventlistener to look for the user click

// when they start the quiz a timer should start and they should be presented with the first question
// If they get a question wrong they should be deducted time and it would be their quiz score
//game should end when all questions are answered or the timer reaches zero
// when they are done they should get their score  and should be able to save it by entering their initials
// a go back button should return them to the home page

let currentIndex = 0

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
			} else {
				console.log("wrong");
			}
		}
	});
  if (currentIndex === questions.length - 1) {
    console.log("End of quiz")
  }else {
    currentIndex ++
    displayQandA()
  }
}

function setTimer() {
  let quizTimer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      timerEl.textContent = `Time: ${timeLeft}`
    }else {
      clearInterval(quizTimer)
      timerEl.textContent = ``

    }
  }, 1000);
}

btnEl.addEventListener("click", function() {
  displayQandA()
  
})
// btnEl.addEventListener("click", function(event) {
//   event.preventDefault()
//   var correctChoice = event.target;

//   if (correctChoice.matches(answers.correct === true)) {

//     // if (answers.correct) {
//       questions.question++

//     var body = document.getElementsByClassName('question-Container')[0],
//     choiceReply = document.createElement('h2');
//     h2.textContent = "Correct!"
//     choiceReply.id = 'newid';
//     question-Container.appendChild(choiceReply);

//   var
//   var choiceReply = document.createElement('h3')
//   .body.appendChild(choiceReply)
//   choiceReply.textContent("Correct!")
//   console.log(choiceReply)
// }
//   }
// })
