//HTML radio watchers
var aRadio = document.querySelector("#a");
var bRadio = document.querySelector("#b");
var cRadio = document.querySelector("#c");
var dRadio = document.querySelector("#d");

//HTML Button watchers
var startBtn = document.querySelector("#startButt");
var submitBtn = document.querySelector("#quesButt");

//HTML elements define for inserts
var disQText = document.querySelector("#qText");
var disA = document.querySelector("#aTxt");
var disB = document.querySelector("#bTxt");
var disC = document.querySelector("#cTxt");
var disD = document.querySelector("#dTxt");
var countEl = document.querySelector("#quesID");
var scoreEl = document.querySelector("#scoreID");
var headEl = document.querySelector(".quiz-head");
var quizEl = document.querySelector(".quiz-body");
var timeHeadEl = document.querySelector("#time-body");
var timeEl = document.querySelector("#time")

//Event listeners
//startBtn.addEventListener("click", reset);
startBtn.addEventListener("click", quesNum);
startBtn.addEventListener("click", shuffleQuestions);
startBtn.addEventListener("click", htmlInsert);
startBtn.addEventListener("click", hideStartHTML);
startBtn.addEventListener("click", showQuizHTML);
startBtn.addEventListener("click",showTimeHTML);
startBtn.addEventListener("click",setTime);
submitBtn.addEventListener("click", gameProgEnd);
// submitBtn.addEventListener("click", userAnswer);
// submitBtn.addEventListener("click", userAnswerTxt);submitBtn.addEventListener("click", userAnswerCheck);
// submitBtn.addEventListener("click",quesNum);
// submitBtn.addEventListener("click", htmlInsert);

var time = 10;
var count = 0;
var highScore = [];
setQuestText();
hideQuizHTML();
hideTimeHTML();

//Find user choice
var user = "";
var selectedAnswer = "";
var correctAnswer = "";
var score = 0;
var displayScore = "";
var userInputs = document.querySelectorAll('input[name="answer"]');

//define question bank - questions as objects? 

var questionBank =
    [
        {
            ident: "Q1",
            answers: ["BECAUSE Dennis is a bastard man!", "pass", "I don't think I wrote that", "pass!"],
            correctAnswer: "BECAUSE Dennis is a bastard man!",
            questionText: "Dennis is asshole. Why Charlie hate?"
        },
        {
            ident: "Q2",
            answers: ["For bodyguards, by bodyguards", "Made from crow's eggs", "Alcoholic", "All of the above"],
            correctAnswer: "All of the above",
            questionText: "Fight milk is .."
        },
        {
            ident: "Q3",
            answers: ["Frank", "Mac", "Dennis", "Charlie"],
            correctAnswer: "Charlie",
            questionText: "Which member of the gang is the WILDCARD?"
        },
        {
            ident: "Q4",
            answers: ["Egg", "Paddy's Hat", "Dick Towel Dicktowel.com", "Kitten Mittens"],
            correctAnswer: "Paddy's Hat",
            questionText: "Which of these is not Paddy's Pub merchandise?"
        },
        {
            ident: "Q5",
            answers: ["Canned cat food", "Milk Steak", "Pears", "Chaulk"],
            correctAnswer: "Milk Steak",
            questionText: "Charlie's favorite food is"
        },
        {
            ident: "Q6",
            answers: ["Urchin", "Street Mouse", "Cricket", "Bell"],
            correctAnswer: "Cricket",
            questionText: "Father Mora also goes by which street name?"
        },
        {
            ident: "Q7",
            answers: ["Doyle", "Ryan", "Liam", "Boil"],
            correctAnswer: "Boil",
            questionText: "Name the fake McPoyle?"
        },
        {
            ident: "Q8",
            answers: ["Deandra", "Charlie", "Frank", "Dennis"],
            correctAnswer: "Frank",
            questionText: "Who has a certificate stating they do not have donkey brains?"
        },
        {
            ident: "Q9",
            answers: ["Dr. Mantis Tobaggan MD", "Frankenstein", "Ongo Gablogian", "Thundergun"],
            correctAnswer: "Thundergun",
            questionText: "Which of these is not one of Frank's aliases."
        },
        {
            ident: "Q10",
            answers: ["Frank", "Uncle Jack", "Bruce Mathis", "Ben the Soldier"],
            correctAnswer: "Frank",
            questionText: "Who is the man in the coil?"
        }
    ];

// function to read radio button input
function userAnswer() {
    for (var userInput of userInputs) {
        if (userInput.checked) {
            selectedAnswer = userInput.value;
            console.log(selectedAnswer);
            return;
        }

    }
};

// function to check user answer
function userAnswerCheck() {
    if (selectedAnswer === correctAnswer) {
        score++;
        time+=10;
        console.log("correct");
        displayScore = score * 100;
        return true;
    }
    else {
        console.log("incorrect");
        time-=10;
        return false;

    }
};

// function to change user answer into text for correct check
function userAnswerTxt() {
    if (selectedAnswer === "a") {
        selectedAnswer = questionBank[count - 1].answers[0];
    }
    else if (selectedAnswer === "b") {
        selectedAnswer = questionBank[count - 1].answers[1];
    }
    else if (selectedAnswer === "c") {
        selectedAnswer = questionBank[count - 1].answers[2];
    }
    else if (selectedAnswer === "d") {
        selectedAnswer = questionBank[count - 1].answers[3];
    }
    else {
        selectedAnswer = "incorrect";
    }
};

// function to shuffle questions into a random order
function shuffleQuestions() {
    let index = questionBank.length, randomIndex;
    while (index != 0) {
        randomIndex = Math.floor(Math.random() * index);
        index--;
        [questionBank[index], questionBank[randomIndex]] = [questionBank[randomIndex], questionBank[index]];
    }
    console.dir(questionBank);
    return questionBank;
};

// function to update HTML elements to match selected question
function htmlInsert() {
    disA.textContent = questionBank[count - 1].answers[0];
    disB.textContent = questionBank[count - 1].answers[1];
    disC.textContent = questionBank[count - 1].answers[2];
    disD.textContent = questionBank[count - 1].answers[3];
    disQText.textContent = questionBank[count - 1].questionText;
    correctAnswer = questionBank[count - 1].correctAnswer;
    //console.log(correctAnswer);
    return;
};

function quesNum() {
    count++;
    setQuestText();
    console.log(count);
};

function setQuestText() {
    countEl.textContent = count;
};

function keepScore() {
    scoreEl.textContent = displayScore;
};

function getFinalScore() {
    displayScore = displayScore+time;
}

function logHighScore() {
    localStorage.getItem("scores", highScore);
    highScore.push(displayScore);
    highScore.sort();
    highScore.reverse();
    localStorage.setItem("scores", highScore);

    // highScore.sort();
    // localStorage.setItem(highScore);
};

function hideStartHTML() {
    headEl.setAttribute("style", "display:none");
};

function showStartHTML() {
    headEl.setAttribute("style", "display:block");
};

function hideQuizHTML() {
    quizEl.setAttribute("style", "display:none");
};

function showQuizHTML() {
    quizEl.setAttribute("style", "display:block");
};

function hideTimeHTML() {
    timeHeadEl.setAttribute("style", "display:none");
};

function showTimeHTML() {
    timeHeadEl.setAttribute("style", "display:block");
};


function setTime() {
    var timeInterval = setInterval(function () {
        time--;
        timeEl.textContent = time;
        if (time === 0) {
        clearInterval(timeInterval);
        hideQuizHTML();
        getFinalScore();
        displaySaveScore();
        logHighScore();
        }
    }, 1000);
};

function displaySaveScore() {  
    var userName = window.prompt("enter you initials to save your highscore!");
    
    if (displayScore >= 500) {
        alert("Congrats! You're a true Sunny fan. Your final score was " + displayScore);
    }
    else {
        alert("Meeee-ouch! That was a Sunny hate crime. How Philly are youse?");
    };
};


function reset() {
    score = 0;
    count = 0;
    displayScore = 0;
    time = 100;
}

function gameProgEnd() {
    if (count < questionBank.length) {
        userAnswer();
        userAnswerTxt();
        userAnswerCheck();
        quesNum();
        keepScore();
        setQuestText();
        htmlInsert();
    }
    else {
        userAnswer();
        userAnswerTxt();
        userAnswerCheck();
        hideQuizHTML();
        keepScore();
        getFinalScore();
        displaySaveScore();
        logHighScore();
        reset();
        keepScore();
        showStartHTML();
        hideTimeHTML();

        console.log("game is over");
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

