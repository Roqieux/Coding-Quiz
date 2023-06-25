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
var countEl = document.querySelector("#quesID")

//Event listeners
startBtn.addEventListener("click",quesNum);
startBtn.addEventListener("click", shuffleQuestions);
startBtn.addEventListener("click", htmlInsert);
submitBtn.addEventListener("click",gameProgEnd);
// submitBtn.addEventListener("click", userAnswer);
// submitBtn.addEventListener("click", userAnswerTxt);submitBtn.addEventListener("click", userAnswerCheck);
// submitBtn.addEventListener("click",quesNum);
// submitBtn.addEventListener("click", htmlInsert);

var count = 0;
setQuestText();

//Find user choice
var selectedAnswer = "";
var correctAnswer = "";
var score = 0;
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
        answers: ["test1", "test2", "test3", "test4"],
        correctAnswer: "test1",
        questionText: "Which test?"
},
//     {
//         ident: "Q6",
//         answers: ["test1", "test2", "test3", "test4"],
//         correctAnswer: "test2",
//         questionText: "Which test?"
// },
//     {
//         ident: "Q7",
//         answers: ["test1", "test2", "test3", "test4"],
//         correctAnswer: "test1",
//         questionText: "Which test?"
// },
//     {
//         ident: "Q8",
//         answers: ["test1", "test2", "test3", "test4"],
//         correctAnswer: "test2",
//         questionText: "Which test?"
// },
//     {
//         ident: "Q9",
//         answers: ["test1", "test2", "test3", "test4"],
//         correctAnswer: "test1",
//         questionText: "Which test?"
// },
//     {
//         ident: "Q10",
//         answers: ["test1", "test2", "test3", "test4"],
//         correctAnswer: "test2",
//         questionText: "Which test?"
// }
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
    if (selectedAnswer == correctAnswer) {
        score++;
        return true;
    }
    else {
        return false;
    }
};

// function to change user answer into text for correct check
function userAnswerTxt() {
    if (selectedAnswer === "a") {
        selectedAnswer = questionBank[count-1].answers[0];
        console.log(questionBank[0].answers[0]);
    }
    else if (selectedAnswer === "b") {
        selectedAnswer = questionBank[count-1].answers[1];
        console.log(questionBank[0].answers[1]);
    }
    else if (selectedAnswer === "c") {
        selectedAnswer = questionBank[count-1].answers[2];
        console.log(questionBank[0].answers[2]);
    }
    else {
        selectedAnswer = questionBank[count-1].answers[3];
        console.log(questionBank[0].answers[3]);
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
}

// function to update HTML elements to match selected question
function htmlInsert() {
    disA.textContent = questionBank[count-1].answers[0];
    disB.textContent = questionBank[count-1].answers[1];
    disC.textContent = questionBank[count-1].answers[2];
    disD.textContent = questionBank[count-1].answers[3];
    disQText.textContent = questionBank[count-1].questionText;
    correctAnswer = questionBank[count-1].correctAnswer;
    console.log(correctAnswer);
    return;
}

function quesNum() {
    count++;
    setQuestText ();
    console.log(count);
};

function setQuestText() {
    countEl.textContent = count;
};

function gameProgEnd () {
    if (count < questionBank.length) {
        userAnswer();
        userAnswerTxt();
        userAnswerCheck();
        quesNum();
        setQuestText();
        htmlInsert();
    }
    else {
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

