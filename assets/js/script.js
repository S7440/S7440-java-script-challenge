//Welcome to the game

//clicking start button starts game
let questions = [
    {title: "the question place holder",
    choices: ["the choices placeholder", "anotha one", "the correct one", "wrongagain"], //this is the no that gives you unhappy lose time.
    answer: "anser placeholder"},//this is the yay that gives you 20 nice
    {title: "the question place holder",
    choices: ["the choices placeholder", "anotha one", "the correct one", "wrongagain"], //this is the no that gives you unhappy lose time.
    answer: "anser placeholder"},//this is the yay that gives you 20 nice
    {title: "the question place holder",
    choices: ["the choices placeholder", "anotha one", "the correct one", "wrongagain"], //this is the no that gives you unhappy lose time.
    answer: "anser placeholder"},//this is the yay that gives you 20 nice
    {title: "the question place holder",
    choices: ["the choices placeholder", "anotha one", "the correct one", "wrongagain"], //this is the no that gives you unhappy lose time.
    answer: "anser placeholder"},//this is the yay that gives you 20 nice
    {title: "the question place holder",
    choices: ["the choices placeholder", "anotha one", "the correct one", "wrongagain"], //this is the no that gives you unhappy lose time.
    answer: "anser placeholder"},//this is the yay that gives you 20 nice
    {title: "the question place holder",
    choices: ["the choices placeholder", "anotha one", "the correct one", "wrongagain"], //this is the no that gives you unhappy lose time.
    answer: "anser placeholder"},//this is the yay that gives you 20 nice
];


let questionIndex = 0;
let timer = document.querySelector('#timer-count')
let timeEL = document.getElementById('time');
let timeLeft = 60;
let timerID;
let questionsEl = document.getElementById('questions');
let choicesEl = document.getElementById('choices');
let submit = document.getElementById('submit-button');
let startButton = document.getElementById('start-button');
let initialsEl = document.getElementById('initials');

//Button has been clicked. Begin pain sequence.
function startGame() {
    let startScreenEl = document.getElementById('start-screen');

    //this hides the startscreen when you start the game. Currently works which is neat.
    startScreenEl.setAttribute('class', 'hide');
    //this is supposed to unhide the actual questions area.
    questionsEl.removeAttribute('class', 'hide');
    //this sets the timer interval to 1000ms on startTimer
    timerID = setInterval(startTimer, 1000);
    //print out your time left for the user to see how much pain is left.
    timeEL.textContent = timeLeft;
    
    // this is what actually loads in the questions and stuff.
   showQuestion();
};

//le timer *french noises... you know the one*
function startTimer() {
    //increments down every cycle
   timeLeft--;
   //gotta let em know they have one less time
   timeEL.textContent = timeLeft;
   //this ends the game if they are in too much pain.
   if (timeLeft <= 0) {
    endGame()
   }
  }


//questionable questions function. displays questions
function showQuestion() {
    //the current question variable equals the questions[the selected question.]     might figure out how to randomly choose one if I have time to polish.
    let currentQuestion = questions [questionIndex];
    //this will come in handy with displaying the question in html
    let titleEl = document.getElementById('question')
    //the actual thing that prints the question in question to the question user sees
    titleEl.textContent = currentQuestion.title;
    //sets empty string for choices
    choicesEl.innerHTML = "";

    //this do hickee is the fun part that actually displays the choices  on the page
    for (var i = 0; i<currentQuestion.choices.length; i++) {
        let choice = currentQuestion.choices [i];
        let choiceNode = document.createElement("button");

        choiceNode.setAttribute('class', 'choice');
        choiceNode.setAttribute('value', choice);
        choiceNode.textContent = i +1 +'. ' + choice
        choicesEl.appendChild(choiceNode)
    }
    
}

function checkAnswer (event) {
    let buttonEl = event.target;
    if (!buttonEl.matches('.choice')) {
        return
    }
    if (buttonEl.value !== questions[questionIndex].answer) {
        timeLeft -= 20;
        if (timeLeft<0) {
            timeLeft=0;
        }
        timeEL.textContent = timeLeft;

    } 
    questionIndex++
    if (timeLeft <= 0 || questionIndex === questions.length) {
        endGame()
    } else {
        showQuestion()
    }
}

let scoreKeeper = document.getElementById('score');
function score()  {

}

function endGame () {
    //if timer = 0 bad time you lose
    //if questionsLeft === 0 you also maybe lose. Mostly your pride if your initials aren't A.S.S.
    //ends game
}
let initial = document.querySelector('#initials');
//nice is points or somethin like that. 
let nice = document.querySelector('#nice');

function highScore() {
    //if score in top 10  good job
    //save score in local if nice >  last stored in high scorecause we own software not rent it in this house.
    //if nice gets stored also store initials in local cause obviously we can't afford to spend any more quarters at the arcade... damn you hydrothunder
    //else touch grass.
    
}

//addEventListener for start game
//addEventListener for answer button

startButton.addEventListener('click', function() {
    startGame();
});

