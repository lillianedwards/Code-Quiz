//VARIABLE DECLARAIONS
var startButton = document.querySelector("#start");
var displayTime = document.getElementById("remaining");
var duration = 75;
var startContain = document.getElementById("start-container");

var currentIndex = 0;
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["1. strings", "2. alerts", "3. booleans", "4.numbers"],
    answer: "2. alerts",
  },
  {
    title: "The condition in an if /else statement is enclosed within ______.",
    choices: [
      "1. quotes",
      "2. curly brackets",
      "3. parentheses",
      "4.square brackets",
    ],
    answer: "3. parentheses",
  },
  {
    title: "Arrays in JavaScript can be used to store _______.",
    choices: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    title:
      "String values must be enclosed within _______ when being assigned to variables.",
    choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
];

var quizContain = document.getElementById("quiz-container");
var questionContain = document.querySelector("#question-container");
var choicesContain = document.querySelector("#choices-container");
var wrongOrCorrect = document.querySelector("#wrong-or-right");
var userInput;

var resultsContain = document.getElementById("results-container");
var finalScore = document.querySelector("#final");
var initials = document.querySelector("user-initials");
var sumbitFinal = document.querySelector("#score-submit");

//FUNCTIONS

function startTimer() {

var timerInterval = setInterval(function () {
    duration--;

    displayTime.textContent = "Time:" + duration;
    if (duration === 0) {
    clearInterval(timerInterval);
    displayTime.textContent = " ";
    endQuiz();
    }
}, 1000);
}

// function endQuiz () {
// var allDone = document.createElement("done");
// document.textContent = "All Done!";
// var finalScore = document.createElement("final");
// }

function displayQuestions() {
  var qTitle = document.createElement("h2");
  qTitle.textContent = questions[currentIndex].title;
  questionContain.appendChild(qTitle);

  for (var i = 0; i < questions[currentIndex].choices.length; i++) {
    console.log(questions[currentIndex].title);
    console.log(questions[currentIndex].choices[i]);

    var choiceButton = document.createElement("button");
    choiceButton.textContent = questions[currentIndex].choices[i];
    choicesContain.appendChild(choiceButton);
}
}


//EVENT LISTENERS;

startButton.addEventListener("click", function (event) {
    startContain.textContent = " ";
    startTimer();
    displayQuestions();
}
);


// choicesContain.addEventListener ("click", function (event) {
// userInput = event.target.innerHTML; // what could i use besides innterHTML

// if (userInput === questions.answer) {
//     wrongOrCorrect.textContent = "Correct! ✅";
//     currentIndex++;
// } else if (userInput !== questions.answer) {
//     wrongOrCorrect.textContent = "Wrong! ❌"
//     duration -10;
//     currentIndex++
// } else if (userInput === questions.answer[i])

// );