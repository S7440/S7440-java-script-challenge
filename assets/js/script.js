//Welcome to the game

//clicking start button starts game
const startButton = document.getElementById('#start-button');
let questions = [
    {title: "the question place holder",
    bad: ["the choices placeholder", "anotha one"], //this is the no that gives you unhappy lose time.
    answer: "anser placeholder"},//this is the yay that gives you 20 nice
    {title: "the question place holder",
    bad: ["the choices placeholder", "anotha one"], //this is the no that gives you unhappy lose time.
    answer: "anser placeholder"},//this is the yay that gives you 20 nice
    {title: "the question place holder",
    bad: ["the choices placeholder", "anotha one"], //this is the no that gives you unhappy lose time.
    answer: "anser placeholder"},//this is the yay that gives you 20 nice
    {title: "the question place holder",
    bad: ["the choices placeholder", "anotha one"], //this is the no that gives you unhappy lose time.
    answer: "anser placeholder"},//this is the yay that gives you 20 nice 
    {title: "the question place holder",
    bad: ["the choices placeholder", "anotha one"], //this is the no that gives you unhappy lose time.
    answer: "anser placeholder"},  //this is the yay that gives you 20 nice
    {title: "the question place holder",
    bad: ["the choices placeholder", "anotha one"], //this is the no that gives you unhappy lose time.
    answer: "anser placeholder"},//this is the yay that gives you 20 nice 
    {title: "the question place holder",
    bad: ["the choices placeholder", "anotha one"], //this is the no that gives you unhappy lose time.
    answer: "anser placeholder"},//this is the yay that gives you 20 nice
    {title: "the question place holder",
    bad: ["the choices placeholder", "anotha one"], //this is the no that gives you unhappy lose time.
    answer: "anser placeholder"},//this is the yay that gives you 20 nice
];
const finalQuestion = questions.length -1;
let currentQuestion = 0;




//Button has been clicked. Begin pain sequence.
function startGame(event) {
    event.preventDefault();

    startTimer();
    showQuestion();
};
let timerEl = document.getElementById('#timer-count');
let timeLeft = 120
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timeLeft--;
      timerElement.textContent = timeLeft;
      if (timeLeft >= 0) {
        // Tests if win condition is met
        if (noQuestion && timeLeft > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          endGame();
        }
      }
    //if timer is 0 "like, totally, game over man" ~shaggy
    if (timeLeft === 0) {
        // Clears interval
        clearInterval(timer);
        endGame();
      }
    }, 1000);
  }
  //question, not to be confused with questions. the decision was questionable.
let question  = document.getElementById('#question');
let answer1 = document.getElementById('#answer1');
let answer2 = document.getElementById('#answer2');
let answer3 = document.getElementById('#answer3');
let answer4 = document.getElementById('#answer4');

function showQuestion() {
 
    let q = questions[currentQuestion];
    //display  question with multiple choice answer
    question.innerHTML = "<p>" + q.title
    //if answered incorrectly, "he chose... poorly" take 20 secondddddddd 
    //if answered correctly,  "you chose... wisely" give 20  nice
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

