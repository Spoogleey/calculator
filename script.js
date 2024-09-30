const display = document.querySelector(".text-content");
let number1;
let number2;
let operator;

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
    }
    return answer;
}

let numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.onclick = () => displayNumbers(number.innerHTML);
});
// Display the number that is clicked onto the calculator display
function displayNumbers(number) {
    display.textContent += number;
}

let maths = document.querySelectorAll(".operator");
maths.forEach((op) => {
    op.onclick = () => {
        operator = op.innerHTML;
        number1 = Number(display.innerHTML);
        display.textContent = "";
    };
});

const equals = document.querySelector(".equals");
equals.onclick = () => {
    number2 = Number(display.innerHTML);
    display.textContent = operate(number1, number2, operator);
}