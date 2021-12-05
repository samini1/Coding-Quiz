// bundle question and choices in an object?
let current = 0;
let correct = 0;
let score = 0;
let scoreDisplay = document.querySelector("#result")
let timeLeft = 100;


const questions = [
    {
        question: 'What does "DOM" stand for?',
        choiceA: "Document Object Model",
        choiceB: "Develop On Main",
        choiceC: "Do Often More",
        choiceD: "My cousin, Dominic.",
    },
    {
        question: "Which of the following is a non-semantic element in HTML?",
        choiceA: "<header>",
        choiceB: "<section>",
        choiceC: "<footer>",
        choiceD: "<div>",
    },
    {
        question: "Which CSS property would you change to add space around an element?",
        choiceA: "padding",
        choiceB: "margin",
        choiceC: "border",
        choiceD: "width",
    },
    {
        question: "Which CSS property would you change to specify the space around an element's contents?",
        choiceA: "padding",
        choiceB: "margin",
        choiceC: "border",
        choiceD: "width",
    },
    {
        question: "Which of these HTML DOM events can you register to an event handler using JavaScript?",
        choiceA: "click",
        choiceB: "focus",
        choiceC: "submit",
        choiceD: "All of the above",
    },
];



function callQuestion() {
    if (current < questions.length){
        console.log(current);
    document.querySelector(".answer").textContent=""

    // //create and append questions and choices each time player moves to next question
    question.innerHTML = "<p>" + questions[current].question + "</p>";
    choiceA.textContent= questions[current].choiceA;
    choiceB.textContent= questions[current].choiceB;
    choiceC.textContent= questions[current].choiceC;
    choiceD.textContent= questions[current].choiceD;

    current=current+1;
    }

    else if (current = questions.length){
        score = (timeLeft * 100 * correct /questions.length);
        scoreDisplay.textContent = "Your score is " + score;
        document.querySelector("#question-container").setAttribute("style", "display: none");
        document.querySelector("#result-container").setAttribute("style", "display: block");
       
    }
}
//function should show whether choice is correct or incorrect
function showAnswer(){    
    correct=correct+1;
    document.querySelector(".answer").textContent= "Correct!";
    setTimeout(callQuestion, 1000);     

}
function wrongAnswer(){    
    document.querySelector(".answer").textContent= "Inorrect";
    setTimeout(callQuestion, 1000);     

}
//function starts the timer
const startTimer = function(){
timerEl = document.querySelector("#timer");
let timeLeft = 99;

var timeInterval = setInterval(function(){
    if (timeLeft>0) {
        timerEl.textContent = timeLeft + ' seconds';
        timeLeft--;
    } else if (timeLeft === 0) {
        let timeLeft =0;
    }
    

    }, 1000);
}

function startQuiz() {
    document.querySelector("#start-btn").setAttribute("style", "display: none");
    document.querySelector("#question-container").setAttribute("style", "display: block");
    startTimer();
}


//
document.querySelector("#start-btn").addEventListener("click", startQuiz)
document.querySelector(".correct").addEventListener("click", showAnswer);
document.querySelector(".incorrect").addEventListener("click", wrongAnswer);
