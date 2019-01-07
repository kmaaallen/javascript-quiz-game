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

var score = 0

var questions = [
    new Questions("Which bird is a Korimako?", ["New Zealand Falcon", "Bellbird", "Rock wren", "Pigeon"], "B"),
    new Questions("Which bird is a Pīwakawaka?", ["Saddleback", "Sparrow", "Fantail", "Stitchbird"], "C"),
    new Questions("Which bird is a Ruru?", ["Morepork", "Whitehead", "Wax-eye", "New Zealand Parakeet"], "A"),
    ]   

//start function to begin the quiz


    



