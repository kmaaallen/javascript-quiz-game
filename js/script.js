//declare all variables
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var quizQuestion = document.getElementById("quizQuestion");
var quizImg = document.getElementById("quizImg");
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");
var scoreBlock = document.getElementById("scoreBlock");

var score = 0;

//questions function so our getQuestion function later can get the right value from array

let questions = [{
    question: "Which bird is a Korimako?",
    imgSrc: "",
    choiceA: "New Zealand Falcon",
    choiceB: "Bellbird",
    choiceC: "Rock wren",
    choiceD: "Pigeon",
    correctAnswer: "B"
}, {
    question: "Which bird is a Pīwakawaka?",
    imgSrc: "",
    choiceA: "Saddleback",
    choiceB: "Sparrow",
    choiceC: "Fantail",
    choiceD: "Stitchbird",
    correctAnswer: "C"
}, {
    question: "Which bird is a Ruru?",
    imgSrc: "",
    choiceA: "Morepork",
    choiceB: "Whitehead",
    choiceC: "Wax-eye",
    choiceD: "New Zealand Parakeet",
    correctAnswer: "A"
}];


var questionIndex = 0;


// getQuestion function

function getQuestion() {
    let q = questions[questionIndex];
    quizQuestion.innerHTML = "<p>" + q.question + "</p>";
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;

}


// start quiz

function beginQuiz() {
    start.style.display = "none";
    getQuestion();
    quiz.style.display = "block";
}

// show score function

function showScore() {
    quiz.style.display = "none";
    scoreBlock.style.display = "block";
    scoreBlock.innerHTML += "<p> You scored " + score + " out of 3!</p>";
}


//function to check if answer is correct

function check(answer) {
    if (questionIndex < questions.length - 1) {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            questionIndex++;
            getQuestion();
        }
        else {
            questionIndex++;
            getQuestion();
        }
    }
    else {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            showScore();
        }
        else {
            showScore();
        }
    }
}
