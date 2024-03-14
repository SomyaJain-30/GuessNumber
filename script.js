let random = parseInt(Math.random()*100 + 1)
let submit = document.querySelector('#subt')
let userInput = document.querySelector('#guessField')
let previousGuess = document.querySelector('.guesses')
let remaining = document.querySelector('.remaining')
const loworhi = document.querySelector('.lowOrHi')
const startover = document.querySelector('.guessparas')

const p = document.createElement('p')

let prevg = []
let numguess = 1
let playGame = true

if(playGame == true){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        let guess = parseInt(userInput.value);
        console.log(guess);
        validate(guess);

    });
}

function validate(guess){
    if(isNaN(guess) || guess<1 || guess>100){
        alert(`Enter a valid number`);
    }else{
        prevg.push(guess);
        if(numguess == 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${random}`);
            endGame();
        }else{
            displayGuess(guess)
            check(guess)
        }
    }
}

function check(guess){
    if(guess === random){
        displayMessage(`you guessed it right`);
        endGame();
    }else if(guess < random){
        displayMessage(`Number is lower than the random number`);
    }else{
        displayMessage(`Number is higher than the random number`)
    }
}

function displayMessage(message){
    loworhi.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess){
    userInput.value = ''
    previousGuess.innerHTML += `${guess},  `
    numguess++;
    remaining.innerHTML = `${11 - numguess}`;

}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('Disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newgame"> Start New Game</h2>`
    startover.appendChild(p)
    playGame = false
    newGame();

}

function newGame(){
   const newbutton = document.querySelector('#newgame')
   newbutton.addEventListener('click', function(e){
        random = parseInt(Math.random()*100 + 1)
        prevg = []
        numguess = 1
        previousGuess.innerHTML = ''
        remaining.innerHTML = `${11 - numguess}`;
        userInput.removeAttribute('Disabled')
        startover.removeChild(p)
        loworhi.innerHTML = ''
        playGame = true;
   })
}