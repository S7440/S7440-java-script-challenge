//Welcome to the game

//clicking start button starts game
let questions = [
    {title: "the question place holder",
    choices: ["the choices placeholder", "anotha one", "the correct one", "wrongagain"], //this is the no that gives you unhappy lose time.
    answer: "the correct one"},//this is the yay that gives you 20 nice
    {title: "the question place holder",
    choices: ["the choices placeholder", "anotha one", "the correct two", "wrongagain"], //this is the no that gives you unhappy lose time.
    answer: "the correct two"},//this is the yay that gives you 20 nice    
    {title: "the question place holder",
    choices: ["the choices placeholder", "anotha one", "the correct three", "wrongagain"], //this is the no that gives you unhappy lose time.
    answer: "the correct three"},//this is the yay that gives you 20 nice    
    {title: "the question place holder",
    choices: ["the choices placeholder", "anotha one", "the correct four", "wrongagain"], //this is the no that gives you unhappy lose time.
    answer: "the correct four"},//this is the yay that gives you 20 nice    
    {title: "the question place holder",
    choices: ["the choices placeholder", "anotha one", "the correct five", "wrongagain"], //this is the no that gives you unhappy lose time.
    answer: "the correct five"},//this is the yay that gives you 20 nice
];


let questionIndex = 0;
let timer = document.querySelector('#timer-count')
let timeEL = document.getElementById('time');
let timeLeft = 3;
let timerID;
let questionsEl = document.getElementById('questions');
let choicesEl = document.getElementById('choices');
let submit = document.getElementById('submit-button');
let startButton = document.getElementById('start-button');
let initialsEl = document.getElementById('initials');
let endEl = document.getElementById('score-area');

//Button has been clicked. Begin pain sequence.
function startGame() {
    let startScreenEl = document.getElementById('start-screen');

    //this hides the startscreen when you start the game. Currently works which is neat.
    startScreenEl.setAttribute('class', 'hide');
    //this is supposed to unhide the actual questions area.
    questionsEl.removeAttribute('class');
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
        console.log('ahhhh')
        return
    }//this if is for if the button you click is not listed as answer you give me 20 seconds. theyre mine now thank you. I shall achieve immortality.
    if (buttonEl.value !== questions[questionIndex].answer) {
        //the mine time
        timeLeft -= 20;

        //if time less than 0 then time can only be 0.
        if (timeLeft<0) {
            //set time to zero
            timeLeft=0;
            clearInterval(timerID);
            
        }
        //let player know time left. AND NO LYING THIS TIME.
        timeEL.textContent = timeLeft;
        return
    } 
    //move to next question
    questionIndex++
    console.log('next please')
    //if time more less than or equal 0 or questions are at an end then end game. IDK what to tell you know more questions?
    if (timeLeft <= 0 || questionIndex === questions.length) {
        
        endGame()
        //return
        //or i guess show next question.
    } else {
        showQuestion()
    }
}

let scoreKeeper = document.getElementById('score');
function score()  {

}

function endGame () {   

    //if timer = 0 bad time you lose

        questionsEl.setAttribute('class', 'hide');
        endEl.removeAttribute('class'); 

        
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
choicesEl.onclick = checkAnswer;

