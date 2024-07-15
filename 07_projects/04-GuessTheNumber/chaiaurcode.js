let randomNumber = parseInt(Math.floor(Math.random() * 100) + 1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const startOver = document.querySelector(".resultParas")
const lowOrHi = document.querySelector(".lowOrHi")

const p = document.createElement("button")

let prevGuesses = []
let numGuesses = 1

let playGame = true

if(playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()

        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)

    })
}

validateGuess = (guess) => {
    if(isNaN(guess)) {
        alert("Please enter a valid number")
    } else if(guess < 1) {
        alert("Please enter a number greater than 1")
    } else if(guess > 100) {
        alert("Please enter a number less than 100")
    } else {
        prevGuesses.push(guess)
        if(numGuesses === 11) {
            displayGuess(guess)
            displayMessage(`Game Over! Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if( guess === randomNumber) {
        displayMessage("Congratulations! You got it right!")
        endGame()
    } else if(guess < randomNumber) {
        displayMessage("Too Low! Try again!")
    } else if(guess > randomNumber) {
        displayMessage("Too High! Try again!")
    }
}

displayGuess = (guess) => {
    userInput.value = ""
    guessSlot.innerHTML += `${guess}  `
    numGuesses++
    remaining.innerHTML = `${12 - numGuesses}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

endGame = () => {
    userInput.value = ""
    userInput.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame"> Start new Game </h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

newGame = () => {
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click", () => {
        randomNumber = parseInt(Math.floor(Math.random() * 100) + 1)
        prevGuesses = []
        numGuesses = 1
        guessSlot.innerHTML = ""
        lowOrHi.innerHTML = ""
        remaining.innerHTML = `${12 - numGuesses}`
        userInput.removeAttribute("disabled")
        startOver.removeChild(p)
        playGame = true
    })
}