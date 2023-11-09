var questions = [
    {
        title: "Where does the script tag go in the HTML page",
        choices: ["top of head","bottom of head", "top of body", "bottom of body"],
        answer: "bottom of body",
    },
    {
        title: "The condition in an if / else statement is enclosed within _____",
        choices: ["arrow keys","paranthesis","curly brackets","brackets"],
        answer: "paranthesis",
    },
    {
        title: "Which of the following keywords is used to define a variable in Javascript",
        choices: ["var","let", "both A and b", "None of the above"],
        answer: "both A and B",
    },
    {
        title: "Which of the following methods can be used to display data in some form using Javascript?",
        choices: ["document.write()","console.log()","window.alert()","All of the above"],
        answer: "All of above",
    },
]


var score = 0;
var currentQuestion = -1
var timeLeft = 0;
var timer;

function start() {
    timeLeft = 60;

    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer);
            endGame();
        }

    }, 1000);

    next();
}

function endGame() {
    clearInterval(timer);

    var quizContent = `
    <h2>Game over!</h2>
    <h3>You got a ` + score + `% </h3>
    <input type="text" id="name" placeholder="Please enter your initals">
    <button onclick="setScore()">Set score!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}

function setScore() {
    localStorage.setItem("highscore", score);
    getScore();
}

function getScore() {
    var quizContent = localStorage.getItem("highscore") + `%`;

    document.getElementById("quizBody").innerHTML = quizContent;
}

function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0
    timer = null;

    document.getElementById(timeLeft).innerHTML = timeLeft;

    var quizContent = `
    <h1>
        Coding Quiz!
    </h1>
    <button onclick="start()">Start!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}

function incorrect() {
    timeLeft -=15;
    next();
}

function correct() {
    score += 20;
    next();
}

function next() {
    currentQuestion++;

    if (currentQuestion > questions.length - 1) {
        endGame();
        return;
    }

    var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>"

    for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {        
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>";         
        buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);        
        
        if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {           
             buttonCode = buttonCode.replace("[ANS]", "correct()");        
        }   else { 
               buttonCode = buttonCode.replace("[ANS]", "incorrect()");       
             }        
             quizContent += buttonCode   
    }
    
    document.getElementById("quizBody").innerHTML = quizContent;
}