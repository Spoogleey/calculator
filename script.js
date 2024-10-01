const display = document.querySelector(".text-content");
let number1 = 0;
let number2 = 0;
let operator = "";
let resetDisplay = false;

// Take the two numbers and perform the operation
function operate(num1, num2, oper) {
    let answer = 0;
    switch(oper) {
        case "+":
            answer = num1 + num2;
            break;
        case "-":
            answer = num1 - num2;
            break;
        case "*":
            answer = num1 * num2;
            break;
        case "/":
            answer = num1 / num2;
            break;
        case "":
            answer = num2;
            break;
    }
    return answer;
}
// Display the numbers on the calculator when they are clicked
let numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.onclick = () => {
        displayNumbers(number.innerHTML);
        resetDisplay = false;
    }
});
// Display the number that is clicked onto the calculator display
function displayNumbers(number) {
    if(resetDisplay) {
        display.textContent = "";
    }
    if(display.innerHTML.length === 10) {
        return;
    } else {
        display.textContent += number;
    }
}
// When an operator button is clicked
let maths = document.querySelectorAll(".operator");
maths.forEach((op) => {
    op.onclick = () => {
        if(operator !== "") {
            if(display.innerHTML === "0" && operator === "/") {
                display.textContent = "Really?";
            } else {
                number2 = Number(display.innerHTML);
                let result = operate(number1, number2, operator);
                display.textContent = formatNumber(result);
                operator = op.innerHTML;
            }
        }
        operator = op.innerHTML;
        number1 = Number(display.innerHTML);
        resetDisplay = true;
    };
});
// When the equals button is clicked
const equals = document.querySelector(".equals");
equals.onclick = () => {
    if(display.innerHTML === "0" && operator === "/") {
        display.innerHTML = "Really?";
    } else {
        number2 = Number(display.innerHTML);
        let result = operate(number1, number2, operator);
        display.textContent = formatNumber(result);
        operator = "";
        resetDisplay = true;
    }
}
//When the decimal button is clicked
const decimal = document.querySelector(".decimal");
decimal.onclick = () => {
    if(display.innerHTML.includes(".")) {
        return;
    } else if(display.innerHTML === "") {
        display.textContent = "0.";
    } else {
        display.textContent += ".";
    }
}
// When the clear button is clicked
const clear = document.querySelector(".clear");
clear.onclick = () => {
    number1 = 0;
    number2 = 0;
    operator = "";
    display.textContent = "";
}
// When the back button is clicked
const back = document.querySelector(".back");
back.onclick = () => {
    display.textContent = display.innerHTML.slice(0, -1);
}

function formatNumber(number) {
    const maxLength = 10;
    let negative = number < 0;
    let absNumber = Math.abs(number);
    let integerPart = Math.floor(absNumber).toString();
    let digitsBeforeDecimal = integerPart.length;
    let decimalDigitsAllowed = maxLength - digitsBeforeDecimal - (negative ? 1 : 0);

    if (decimalDigitsAllowed <= 0) {
        // No room for decimal point or decimal digits
        if (digitsBeforeDecimal > maxLength - (negative ? 1 : 0)) {
            return "Too big";
        } else {
            return (negative ? "-" : "") + integerPart;
        }
    } else {
        // Subtract 1 for decimal point
        decimalDigitsAllowed -= 1;
        let roundedNumber;
        let finalNumber;
        while (decimalDigitsAllowed >= 0) {
            roundedNumber = absNumber.toFixed(decimalDigitsAllowed);
            integerPart = Math.floor(roundedNumber).toString();
            digitsBeforeDecimal = integerPart.length;
            finalNumber = (negative ? "-" : "") + roundedNumber;
            if (finalNumber.length <= maxLength) {
                return finalNumber;
            }
            decimalDigitsAllowed -= 1;
        }
        // If unable to format appropriately
        return "Too big";
    }
}
