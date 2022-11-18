//Welcome to the game
// the question array put at the top so smart cookies can cheat easier.
let questions = [
    {title: "Do you really think you can beat this test?",
    choices: ["no", "heck no guy", "just pick this one.", "define beat?"], //this is the no that gives you unhappy lose time.
    answer: "just pick this one."},//this is the yay that gives you 20 nice
    {title: "What is JavaScript",
    choices: ["Love?", "Baby...", "Don't hurt me...", "A way to cause pain in the creator of this quizes brain."], //this is the no that gives you unhappy lose time.
    answer: "A way to cause pain in the creator of this quizes brain."},//this is the yay that gives you 20 nice    
    {title: "Do you want to start the quiz for real?",
    choices: ["You don't get a choice", "You can tank your score", "Yes I would love to thank you so much for making this quiz.", "Don't make this choice."], //this is the no that gives you unhappy lose time.
    answer: "Yes I would love to thank you so much for making this quiz."},//this is the yay that gives you 20 nice    
    {title: "What can JavaScript do fo you?",
    choices: ["Drive you to work", "Modify your <style>", "Cook Breakfast", ], //this is the no that gives you unhappy lose time.
    answer: "Modify your <style>"},//this is the yay that gives you 20 nice
    {title: "In HTML, the JavaScript you definitely didn't copy/paste goes where?",
    choices: ["<script>", "document.getElementById('IT'S-A-TRAP')", "</script>", "Or is it?"], //this is the no that gives you unhappy lose time.
    answer: "document.getElementById('IT'S-A-TRAP')"},
    {title: "If we were to use document.write(4 + 2) what would happen?",
    choices: ["You'd get the answer to life, the universe, and everything.", "42", "6", ], //this is the no that gives you unhappy lose time.
    answer: "6"},
];

//these will come in handy later!
let questionIndex = 0;
let timer = document.querySelector('#timer-count')
let timeEL = document.getElementById('time');
let timeLeft = 120;
let timerID; //a weird one, apparently I just needed to create it so later I can assign it things to store.
let questionsEl = document.getElementById('questions');
let choicesEl = document.getElementById('choices');
let submit = document.getElementById('submit-button');
let startButton = document.getElementById('start-button');
let initialsEl = document.getElementById('initials');
let endEl = document.getElementById('score-area');
let scoreTextEl = document.getElementById('final-score')

//When button clicked prepare to answer questions.
function startGame() {
    let startScreenEl = document.getElementById('start-screen');

    //this hides the startscreen when you start the game. Currently works which is neat.
    startScreenEl.setAttribute('class', 'hide');
    //this is supposed to unhide the actual questions area. And eventually, it did. Turns out you can't specify the class you want to remove.
    questionsEl.removeAttribute('class');
    //this finally has things! it starts the timer function at an interval of 1000ms
    timerID = setInterval(startTimer, 1000);
    //lets the user see their score get lower and lower. Hopefully they don't have bad anxiety.
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
    
    //this do hickee is the fun part that actually displays  the game shizz
    //the counter guy. thank him for his service. As long as index is less than the length of the current questions choice array this for loop will do it's thang.
    for (var i = 0; i<currentQuestion.choices.length; i++) {
        let choice = currentQuestion.choices [i];
        let choiceNode = document.createElement("button");
        //sets the attributes for the newly created choice button
        choiceNode.setAttribute('class', 'choice');
        choiceNode.setAttribute('value', choice);
        //inputs the text content from the current postion in the answers
        choiceNode.textContent = i +1 +'. ' + choice
        //busts through the html's page like the koolaid man with a brand new button for us.
        choicesEl.appendChild(choiceNode)
        
    }
    // checkAnswer();
    
}
//ensuring that we answer this shizz  correctly ideally. If not you're gonna have a bad time.

//WHY WONT YOU WORK WHY DO YOU HATE ME COMPUTER MAN
function checkAnswer (event) {
    let buttonEl = event.target; 
    //if the you click somewhere that is not have the choice class just no. no stuff for you.
    if (!buttonEl.matches('.choice')) {
        console.log('ahhhh') // I debated making it an alert just to make the users life even harder.
        return
    }//If the button you press isn't equal to the answer you're going to have a really unfortunate time. Good thing the questions are really dumb. 
    if (buttonEl.value !== questions[questionIndex].answer) {
        //Not quite the oculus developer making a vr headset with explosive charges, but if you want to see the end game where you actually score something
        timeLeft -= 80;

        //if time less than 0 then time can only be 0. Except when you really mess up. THis is definitely not a bug as a feature.
        if (timeLeft<=0) {
            //set time to zero
            timeLeft=0;
            
        }
        //let player know time left and how their score is constly getting smaller. Kind of like my bank account.
        timeEL.textContent = timeLeft;
        return
    } 
    //lets put it this way, like an over confident old man in an interview, next question
    questionIndex++
    
    //so this is the guy that determines if you ran out of time on this question or if you answered all of them correctly before the timer ran out.
    if (timeLeft <= 0 || questionIndex === questions.length) {
        
        //if you're smart the game ends, if you're not smart the game ends. There's probably something philosophical I could put here but like I really want to go to bed. DAMN YOU ADHD! A POX UPON YOU!
        endGame()

    } else {
        // or I guess you have more questions to answer. Good luck!
        showQuestion()
    } 
}
//this was going to be something but it doesn't do anything so maybe I come back to this later if my pride is injured too badly.
let scoreKeeper = document.getElementById('score');
function score()  {

}
//the function that ends the game.
function endGame () {   

        //this here stops the timer from running another cycle.
        clearInterval(timerID)
        //We hide the questions dude
        questionsEl.setAttribute('class', 'hide');
        //and we unhide the End Element. 
        endEl.removeAttribute('class'); 
        //I did not set aside enough time to create a score mechanic so you get time left. Is it a lazy out? Yes. Is it functional? yes. 
        scoreTextEl.textContent = timeLeft;
        

}


//here's where the high scores also were going to be but eh I'll leave this here for posterity. Call it modern art.
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
//addEventListener for answer button we decided to go with onclick instead cause like why not.

startButton.addEventListener('click', function() {
    startGame();
});
choicesEl.onclick = checkAnswer;

