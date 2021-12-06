// bundle question and choices in an object?
let current = 0;
let correct = 0;
let score = 0;
let scoreDisplay = document.querySelector("#result")
let timeLeft = 100;
let scoreTable= document.querySelector(".score-list");
let playerName = document.querySelector("#player-name").value;

let questions = [
    {
        question: 'What does "DOM" stand for?',
        choiceA: "Document Object Model",
        choiceB: "Develop On Main",
        choiceC: "Do Often More",
        choiceD: "My cousin, Dominic.",
        right: "A"
    },
    {
        question: "Which of the following is a non-semantic element in HTML?",
        choiceA: "header",
        choiceB: "section",
        choiceC: "footer",
        choiceD: "div",
        right: "D"
    },
    {
        question: "Which CSS property would you change to add space around an element?",
        choiceA: "padding",
        choiceB: "margin",
        choiceC: "border",
        choiceD: "width",
        right: "B"
    },
    {
        question: "Which CSS property would you change to specify the space around an element's contents?",
        choiceA: "padding",
        choiceB: "margin",
        choiceC: "border",
        choiceD: "width",
        right: "A"
    },
    {
        question: "Which of these HTML DOM events can you register to an event handler using JavaScript?",
        choiceA: "click",
        choiceB: "focus",
        choiceC: "submit",
        choiceD: "All of the above",
        right: "D"
    },
];

let highScores = [
    {
        name: "",
        value: "0"
    },
    {
        name: "",
        value: "0"
    },
    {
        name: "",
        value: "0"
    },
    {
        name: "",
        value: "0"
    },
    {
        name: "",
        value: "0"
    },
    

]


function callQuestion() {
    if (current < questions.length){
        console.log(current);
    document.querySelector(".answer").textContent=""

    // //create and append questions and choices each time player moves to next question
    question.innerHTML = "<p>" + questions[current].question + "</p>";
    document.querySelector("#A").innerHTML= questions[current].choiceA;
    document.querySelector("#B").innerHTML= questions[current].choiceB;
    document.querySelector("#C").innerHTML= questions[current].choiceC;
    document.querySelector("#D").innerHTML= questions[current].choiceD;

    current=current+1;
    }

    else if (current === questions.length){
        score = (timeLeft + correct * 10);
        scoreDisplay.textContent = "Your score is " + score + ". Enter your name:"; 
        document.querySelector("#question-container").setAttribute("style", "display: none");
        document.querySelector("#result-container").setAttribute("style", "display: block");

       
    }
}
//function should show whether choice is correct or incorrect

function showAnswer(event) {
    if (questions[current]){
        rightAnswer();
    }
    else {
        wrongAnswer()
    }
}

function rightAnswer(){
    correct=correct+1;
    document.querySelector(".answer").textContent= "Correct!";
    setTimeout(callQuestion, 1000); 
}

function wrongAnswer(){
    timeLeft = timeLeft - 10;
    document.querySelector(".answer").textContent= "Incorrect";
    setTimeout(callQuestion, 1000)
}

//function starts the timer
const startTimer = function(){
timerEl = document.querySelector("#timer");
let timeLeft = 99;

setInterval(function(){
    if (timeLeft>0) {
        timerEl.textContent = timeLeft + ' seconds';
        timeLeft--;
    } else {
        timerEl.textContent = timeLeft + 'seconds';


    }
    

    }, 1000);
}



function startQuiz() {
    document.querySelector("#start-btn").setAttribute("style", "display: none");
    document.querySelector("#question-container").setAttribute("style", "display: block");
    startTimer();
}
// Need to submit/output high scores
function highScore() {
    let scoreListEl= document.createElement("li");
    scoreListEl.textContent = playerName + score;
    document.querySelector(".score-list").appendChild(scoreListEl);
}

function getHighScore() {
    scoreTable.innerHTML = oldScoresObj.map((row))
}

//
document.querySelector("#start-btn").addEventListener("click", startQuiz);
document.querySelector(".choice").addEventListener("click", showAnswer);
document.querySelector("#player-name").addEventListener("submit", highScore);