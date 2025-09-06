




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

