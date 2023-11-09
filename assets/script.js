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

    timer - setInterval(function() {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
    next();
}