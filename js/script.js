$(document).ready(function(){
 
//declare all variables
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var qImg = document.getElementById("qImg");
var options = document.getElementById("options");
var optionA = document.getElementById("A");
var optionB = document.getElementById("B");
var optionC = document.getElementById("C");
var optionD = document.getElementById("D");

var score = 0;

//questions function so our getQuestion function later can get the right value from array

function Questions (question,options,answer){
    this.question = question;
    this.options=options;
    this.answer=answer;
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
    optionA.innerHTML = "<p>"+ q.options[0] + "</p>";
    optionB.innerHTML = "<p>"+ q.options[1] + "</p>";
    optionC.innerHTML = "<p>"+ q.options[2] + "</p>";
    optionD.innerHTML = "<p>"+ q.options[3] + "</p>";
    
}

    



