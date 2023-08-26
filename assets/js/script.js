//VARIABLE DECLARAIONS
var startButton = document.querySelector("start");
var duration = 75;
var displayTime = document.getElementById("remaining");

//FUNCTIONS


function setTime() {
    var timerInterval = setInterval(function(){
        duration --;
        displayTime.textContent = "Time:" + duration;
        if (duration === 0) {
            clearInterval(timerInterval);
            displayTime.textContent = " ";
            endQuiz();
        }
    },1000);
}






//EVENT LISTENERS

// startButton.addEventListener(click, setTime()) {

// }




//start timer
//go to next question
// - create text elements / add text content / append
// - duration -- 
// - logic for timer duration change based on answer choice 
//create 


var questions = [{
    aQuestion: "Commonly used data types DO NOT include:",
    choice1: "1. strings",
    choice2: "2. alerts",
    choice3: "3. booleans",
    choice4: "4. numbers"
},
{
  aQuestion: "The condition in an if /else statement is enclosed within ______.",
  choice1: "1. quotes",
  choice2: "2. curly brackets",
  choice3: "3. parentheses",
  choice4: "4. square brackets"
},
{
    aQuestion: "Arrays in JavaScript can be used to store _______.",
    choice1: "1. numbers and strings",
    choice2: "2. other arrays",
    choice3: "3. booleans",
    choice4: "4. all of the above",
},
{
    aQuestion: "String values must be enclosed within _______ when being assigned to variables.",
    choice1: "1. commas",
    choice2: "2. curly brackets",
    choice3: "3. quotes",
    choice4: "4. parentheses"
},
{
    aQuestion: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: "1. JavaScript",
    choice2: "2. terminal/bash",
    choice3: "3. for loops",
    choice4: "4. console.log"
}
];
console.log(questions)


// questions[0] === choice2
//questions [1] === choice3
/// questions[2] === choice4
//questions[3] === choice3
// questions[4] === choice4