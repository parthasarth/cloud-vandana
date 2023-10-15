let displayValue = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(op) {
    if (operator !== '' || displayValue === '') {
        return;
    }
    operator = op;
    firstOperand = parseFloat(displayValue);
    displayValue = '';
}

function calculateResult() {
    if (operator === '' || displayValue === '') {
        return;
    }
    const secondOperand = parseFloat(displayValue);
    let result = 0;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand !== 0) {
                result = firstOperand / secondOperand;
            } else {
                result = 'Error';
            }
            break;
        default:
            break;
    }
    displayValue = result.toString();
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}
