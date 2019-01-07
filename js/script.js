
//declare all variables
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var optionA = document.getElementById("A");
var optionB = document.getElementById("B");
var optionC = document.getElementById("C");
var optionD = document.getElementById("D");
var scoreBlock = document.getElementById("score-container");

var score = 0;

//questions function so our getQuestion function later can get the right value from array

function Questions (question,options,correctAnswer){
    this.question = question;
    this.options = options;
    this.correctAnswer = correctAnswer;
}

var questions = [
    new Questions("Which bird is a Korimako?", ["New Zealand Falcon", "Bellbird", "Rock wren", "Pigeon"], "B"),
    new Questions("Which bird is a Pīwakawaka?", ["Saddleback", "Sparrow", "Fantail", "Stitchbird"], "C"),
    new Questions("Which bird is a Ruru?", ["Morepork", "Whitehead", "Wax-eye", "New Zealand Parakeet"], "A"),
    ]   ;
    
var questionIndex = 0;
var finalQuestion = questions.length - 1;

// getQuestion function

function getQuestion(){
    let q = questions[questionIndex];
    question.innerHTML = "<p>"+ q.question + "</p>";
    optionA.innerHTML = q.options[0];
    optionB.innerHTML = q.options[1];
    optionC.innerHTML = q.options[2];
    optionD.innerHTML = q.options[3];
}


// start quiz
function beginQuiz(){
    start.style.display = "none";
    getQuestion();
    quiz.style.display = "block";
}

// show score function

function showScore(){
    scoreBlock.style.display = "block";
}


//function to check if answer is correct

function checkCorrect(answer){
    if(answer == questions[questionIndex].correctAnswer){
        score ++; // score goes up by one if answer correct
    }else{
        score = score;
    }
    if(questions[questionIndex]<questions.length){
        questionIndex++;
        getQuestion();
    }else{
        showScore();
    }
    
}


    


