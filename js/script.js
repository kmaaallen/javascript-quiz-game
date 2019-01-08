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
    question: "Which bird is this?",
    imgSrc: "assets/birds/bellbird.jpg",
    choiceA: "New Zealand Falcon/Kārearea",
    choiceB: "Bellbird/Korimako",
    choiceC: "Rock wren/Tuke",
    choiceD: "Fernbird/Mātātā",
    correctAnswer: "B"
}, {
    question: "Which bird is this?",
    imgSrc: "assets/birds/fantail.jpg",
    choiceA: "Grey warbler/Riroriro",
    choiceB: "Marsh crake/Koitareke",
    choiceC: "Fantail/Pīwakawaka",
    choiceD: "Saddleback/Tīeke",
    correctAnswer: "C"
}, {
    question: "Which bird is a Ruru?",
    imgSrc: "assets/birds/morepork.jpg",
    choiceA: "Morepork/Ruru",
    choiceB: "Takahē",
    choiceC: "Wax-eye",
    choiceD: "New Zealand Parakeet/Kākāriki",
    correctAnswer: "A"
}, {
    question: "Which bird is this?",
    imgSrc: "assets/birds/tui.jpg",
    choiceA: "Tūī",
    choiceB: "Whitehead/Pōpokotea",
    choiceC: "Wrybill/Ngutu pare",
    choiceD: "Weka",
    correctAnswer: "A"
}, {
    question: "Which bird is this?",
    imgSrc: "assets/birds/dotterel.jpg",
    choiceA: "Westland petrel/Tāiko",
    choiceB: "Variable oystercatcher/Tōrea",
    choiceC: "Subantarctic teal",
    choiceD: "New Zealand dotterel/Tūturiwhatu",
    correctAnswer: "D"
}, {
    question: "Which bird is this?",
    imgSrc: "/assets/birds/kakapo.jpg",
    choiceA: "Kākā",
    choiceB: "Kea",
    choiceC: "Kākāpō",
    choiceD: "Kōkako",
    correctAnswer: "C"
}, {
    question: "Which bird is this?",
    imgSrc: "assets/birds/kotuku.jpg",
    choiceA: "New Zealand fairy tern/Tara iti",
    choiceB: "White heron/Kōtuku",
    choiceC: "Shore plover/Tūturuatu",
    choiceD: "Spotted shag/Parekareka",
    correctAnswer: "B"
}, {
    question: "Which bird is this?",
    imgSrc: "assets/birds/kea.jpg",
    choiceA: "New Zealand robin/Toutouwai",
    choiceB: "Paradise duck / Pūtakitaki",
    choiceC: "Pūkeko",
    choiceD: "Kea",
    correctAnswer: "D"
}, {
    question: "Which bird is this?",
    imgSrc: "assets/birds/kaka.jpg",
    choiceA: "Kākā",
    choiceB: "Tomtit/Miromiro",
    choiceC: "Yellowhead/Mohua",
    choiceD: "Fiordland crested penguin/Tawaki",
    correctAnswer: "A"
}, {
    question: "Which bird is this?",
    imgSrc: "assets/birds/kereru.jpg",
    choiceA: "Kiwi",
    choiceB: "New Zealand pigeon/Kererū",
    choiceC: "Kingfisher/Kōtare",
    choiceD: "Eastern bar-tailed godwit/Kuaka",
    correctAnswer: "B"
}, ];


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
