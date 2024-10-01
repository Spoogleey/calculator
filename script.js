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
                display.textContent = operate(number1, number2, operator);
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
        display.textContent = operate(number1, number2, operator);
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