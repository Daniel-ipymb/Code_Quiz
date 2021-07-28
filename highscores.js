var allScores = document.querySelector("#scores")
var highestScore = JSON.parse(localStorage.getItem("highestScore"))  || [];

//Function to display the scores
function displayScores() {
    
    for (let index = 0; index < highestScore.length; index++) {
        
        console.log(highestScore[index]);
        
        var initials = highestScore[index].initials;
        var score = highestScore[index].score;
        var nameScore = document.createElement('li');

        nameScore.textContent = initials + " - " + score;

        allScores.append(nameScore);


    }
}

displayScores();