console.log('JS script its easy!');
console.log('Welcome to the JS review');
//
var text1 = 'Text 1';
let text2 = 'Text 2';
const text3 = 'Text 3';
//
console.log('text1', text1);
console.log('text2', text2)
console.log('text3', text3);
//
text2 = 'Change text 2 with new text'
//
console.log('text2', text2)
console.log('This will make an error when you try to change const value, const value declear only once its initilaized, text3="Error"')
//
const fun = () => {
    text1 = 'text1'
    text2 = 'text2'
    console.log(text1, text2)
    let text4 = 'text4'
    console.log(text4)
}
//
fun()
//
console.log('text4 out of scope then any call and change will make an error  text4="Error"')
//
// Objects
const obj = {
    name:'Ali Abu Ras',
    work:'Frontend engineer',
    location:'Jordan',
    job:{
        location:'Amman',
        position:'Frontend Engineer',
        department:'Web'
    }
}
console.table(obj)
console.log(obj['name'])
console.log(obj.job.department)
console.log(obj[location])
console.log(obj['undefined'])
console.log(obj.undefined)
console.log(typeof obj)
console.log( typeof null)
console.log(typeof 'ali')
console.log(typeof 100)
console.log(typeof [1,2,3])
const arry = [1,2,3,4]
console.log(typeof arry)
const array = new Array(1,2,3,4)
console.log(typeof array)

const names = ['Ali', 'Awad', 'Khalid', 'Abu Ras'];
console.log(names)

console.log(`Loop for 
                    using for var in array
                    for ... in will print the index of the array item, and will not print the values!`)
for( let name in names){
    console.log(name)
    console.log(` to print the each value of the each array inedx,
you need to do the following names[${name}]= ${names[name]}`)
}
console.log(`Loop for 
                    using for var in array
                    for ... of will print the value of the array item!`)
for( let name of names){
    console.log(name)
}

console.log(`Loop for 
                    using for var in array
                    foreach, using callback function to pring or add your logic`)
names.forEach( name => {
    console.log(name)
})

console.log(`Loop for 
                    using for var in array
                    array.map, to create new array values`)
const newNames = names.map(name=>{
    return `____ ${name}`
})

console.log(newNames)

console.log('Print object')
for(let item in obj){
    console.log(`item = ${item}, obj[item] = ${obj[item]}`)
}






// Calculater 1
let value1 = '1';
let value2 = '2';
let result = null;
const calc1 = (operation) => {
    switch (operation) {
        case '+':
            result = value1 + value2
            break;
        case '-':
            result = value1 - value2
            break;
        case '/':
            result = value1 / value2
            break;
        case 'x':
            result = value1 * value2
            break;
        default:
            result = '0'
            break;
    }
    return result
}
console.log('calc1(+)', calc1('+'));
console.log('calc1(-)', calc1('-'));
console.log('calc1(/)', calc1('/'));
console.log('calc1(x)', calc1('x'));
console.log('calc1(x)', calc1('0'));






// Calculater 2
// let value2_1 = prompt(`Calculater
// Please enter first number`) || 0;
// let value2_2 = prompt(`Calculater
// Please enter second number`) || 0;
let result2_2 = null;
const calc2 = (operation) => {
    console.log(`calc2 = ${value2_1} ${operation} ${value2_2}`)
    switch (operation) {
        case '+':
            result2_2 = value2_1 + value2_2
            break;
        case '-':
            result2_2 = value2_1 - value2_2
            break;
        case '/':
            result2_2 = value2_1 / value2_2
            break;
        case 'x':
            result2_2 = value2_1 * value2_2
            break;
        default:
            result2_2 = '0'
            break;
    }
    return result2_2
}
// calc2(prompt(`Calculater
// Please enter operation! +,-,/,x`) || '+')







// Calculater 3

const calc3 = document.getElementById('form')
// to stop send the form and do calc operations 
calc3 && calc3.addEventListener("submit", (evt) => {
    evt.preventDefault();
}, true);
//get all calc buttons to add events 
const allCalcButtons = document.querySelectorAll('[data-calc]');
const calcInput = document.getElementById('calcInput')
let calc3Value1 = 0;
let calc3Value2 = 0;
let operationCalc3 = null;
let resultCalc3 = 0


const resetCalculater = () => {
    calcInput.value = ''
    operationCalc3 = null;
    calc3Value1 = 0;
    calc3Value2 = 0;
    resultCalc3 = 0;
}

const calculateTheResult = () => {
    calc3Value2 = calcInput.value;
    switch (operationCalc3) {
        case '+':
            calcInput.value = parseInt(calc3Value1) + parseInt(calc3Value2);
            break;
        case '-':
            calcInput.value = parseInt(calc3Value1) - parseInt(calc3Value2);
            break;
        case '/':
            calcInput.value = parseInt(calc3Value1) / parseInt(calc3Value2);
            break;
        case 'x':
            calcInput.value = parseInt(calc3Value1) * parseInt(calc3Value2);
            break;
        default:
            break;
    }
}

allCalcButtons.forEach(btn => {
    btn.addEventListener('click', (evt) => {
        if (evt.target.name === '+' ||
            evt.target.name === '-' ||
            evt.target.name === '/' ||
            evt.target.name === 'x') {
            calc3Value1 = calcInput.value;
            operationCalc3 = evt.target.name;
            calcInput.value = ''
        } else if (evt.target.name === 'c') {
            resetCalculater();
        } else if (evt.target.name === '=') {
            calculateTheResult();
        } else {
            calcInput.value = calcInput.value == 0 ? '' : calcInput.value;
            calcInput.value = calcInput.value + evt.target.name;
        }
    })
})


const allButtons = document.querySelectorAll('.sectionButton')

const closeAllWindows = (sectionSelected) => {
    allButtons.forEach(btn => {
        const sectionId = btn.dataset;
        const section = document.getElementById(sectionId.section);

        if ((sectionSelected != sectionId) && _hasClassName('sectionContentShow', section)) {
            _removeClassName('sectionContentShow', section)
            _addClassName('sectionContentHide', section)
        }
        _removeClassName('selected', btn)
    });
}

const btnClickHandler = (event) => {
    const sectionId = event.target.dataset;
    const btn = event.target;
    const section = document.getElementById(sectionId.section)

    closeAllWindows(sectionId);

    if (_hasClassName('sectionContentShow', section)) {
        _removeClassName('sectionContentShow', section)
        _addClassName('sectionContentHide', section)
        _removeClassName('selected', btn)
    } else {
        _addClassName('selected', btn)
        _addClassName('sectionContentShow', section)
        _removeClassName('sectionContentHide', section)
    }
}


const setEventsToButtons = () => {
    allButtons.forEach(button => {
        button.addEventListener('click', btnClickHandler);
    })
}

setEventsToButtons()
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

const _addClassName = (className, element) => element.classList.add(className);
const _removeClassName = (className, element) => element.classList.remove(className);
const _hasClassName = (className, element) => element.classList.value.indexOf(className) > -1;