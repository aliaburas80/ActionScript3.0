/*
 Guess my number game!
*/

let guessedNumber = Math.trunc(Math.random() * 20) + 1;
console.log('ALI - Debuge-> guessedNumber', guessedNumber);
const gameContainer = document.querySelector('body');
const guessButton = document.querySelector('.button');
const guessInput = document.querySelector('.inputNumberFeild');
const livesContainer = document.querySelector('.lives');
const livesNumber = document.querySelector('.livesNumber');
const guesseNumber = document.querySelector('.guesseNumber');
const liveEmoji = document.querySelector('.LiveEmoji')
const resetButton = document.querySelector('.reset')
let lives = 3;
//
const removeEvents = () => {
    guessInput.removeEventListener('click', inputSelectTextHandler)
    guessButton.removeEventListener('click', checkHandler)
}
//
const disapleText = () => {
    guessInput.disabled = true;
}
//
const finishGameHandler = () => {
    removeEvents();
    disapleText();
    guessButton.classList.add('disabeld');
    resetButton.classList.toggle('activeReset')
}
//
const inputSelectTextHandler = (evt) => {
    evt.target.select() // to select the text value one click on it
}
//
const inputCheckTextHandler = (evt) => {
    // only accept number 
    const charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
//
const checkHandler = (evt) => {
    if (guessInput.value != 0) { // check if the value it's not 0, the input number should be between 1 - 20
        if (guessInput.value == guessedNumber) { // if user inter correct guess
            guesseNumber.textContent = guessedNumber; // replace ? with correct guess
            gameContainer.classList.add('finishTheGame') // change the body background color
            guesseNumber.classList.add('correct')  // add correct style
            liveEmoji.textContent = "🥰🎉🎊";
            finishGameHandler() // finsh the game 
        } else {
            lives--; // wrong answer = lose one of your life
            livesNumber.textContent = lives; // update lives with new live counter
            switch (lives) {
                case 3:
                    liveEmoji.textContent = "😍";
                    break;
                case 2:
                    liveEmoji.textContent = "😀";
                    break;
                case 1:
                    liveEmoji.textContent = "😅";
                    break;
                default:
                    liveEmoji.textContent = "🤯";
                    livesContainer.classList.toggle('lost') // add lost style
                    gameContainer.classList.add('lostTheGame') // add lost color for the body
                    finishGameHandler()
                    break;
            }
        }
    }
}
//
const resetHandler = (evt) => {
    guesseNumber.classList.remove('correct')
    livesContainer.classList.remove('lost')
    gameContainer.classList.remove('finishTheGame')
    gameContainer.classList.remove('lostTheGame')
    guessButton.classList.remove('disabeld')
    guesseNumber.textContent = "?";
    liveEmoji.textContent = "😍";
    guessInput.disabled = false;
    guessInput.value = 0;
    guessedNumber = Math.trunc(Math.random() * 20) + 1;
    lives = 3;
    livesNumber.textContent = lives;
    resetButton.classList.toggle('activeReset')
    console.log('ALI - Debuge-> guessedNumber', guessedNumber);
    addGameEvent();
}
//
const addGameEvent = () => {
    resetButton.addEventListener('click', resetHandler)
    guessInput.addEventListener('click', inputSelectTextHandler)
    guessButton.addEventListener('click', checkHandler)
}
//
addGameEvent();