var questionEl = document.querySelector("#questions")

var questions = [
  {
    question: "What is Javascript",
    answers: [
      {text: "1", correct:false},
      {text: "2", correct:false},
      {text: "3", correct:false},
      {text: "4", correct:true}
    ]
  
}]

questions[0].question
questions[0].answers
for (i=0; i<questions[0].answers.length; i++) {
questions[0].answers[i]
}

function displayQandA() {
  console.log("hello")
  var question = questions[0].question;
  questionEl.textContent=question;
  var answers = questions[0].answers
  answers.forEach(function(answer, index) {
    document.getElementById(index.toString()).textContent = answer.text
  }) 
}

displayQandA()