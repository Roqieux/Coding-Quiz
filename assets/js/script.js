//HTML radio watchers
var aRadio = document.querySelector("#a");
var bRadio = document.querySelector("#b");
var cRadio = document.querySelector("#c");
var dRadio = document.querySelector("#d");

//HTML Button watchers
var startBtn = document.querySelector("#startButt");
var submitBtn = document.querySelector("#quesButt");

//Event listeners
//startBtn.addEventListener("click", __);
submitBtn.addEventListener("click", userAnswer);
submitBtn.addEventListener("click", userAnswerCheck);

//Find user choice
var selectedAnswer = "";
var userInputs = document.querySelectorAll('input[name="answer"]');

//define question bank - questions as objects? 

// var question1 = {
//     answers: ["test1","test2","test3","test4"],
//     correctAnswer: "test1",
//     questionText: "Which test?"
// };

// var question2 = {
//     answers: ["test1","test2","test3","test4"],
//     correctAnswer: "test2",
//     questionText: "Which test?"
// };

function userAnswer() {
    for (var userInput of userInputs) {
        if (userInput.checked) {
            selectedAnswer = userInput.value;
            console.log(selectedAnswer);
            return;
        }
    }
};

var correctAnswer = "b";

function userAnswerCheck() {
    if (selectedAnswer == correctAnswer) {
        console.log("correct");
    }
    else {
        return;
    }
};



//on start button click 
//start timer 
//hide header element 
//choose a random question from the question bank
//change quiz element to visible 


//on submit button click
//check for not null() 
//check for correctness
//add score or subtract time
//check num answered questions, end quiz if 10 questions. 
//if done, display score and reset display for quiz and header to restart quiz. 
//else:
//choose a random question from the remaining quetion bank
//display new quesion
//reset the radio buttons to all clear 
//

