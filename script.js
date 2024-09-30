let number1;
let number2;
let operator;
// Adding
function add(a, b) {
    return a + b;
}
// Subtracting
function subtract(a, b) {
    return a - b;
}
// Multiplying
function multiply(a, b) {
    return a * b;
}
// Dividing
function divide(a, b) {
    return a / b;
}
// Take the two numbers and perform the operation
function operate(num1, num2, oper) {
    let answer = 0;
    switch(oper) {
        case "+":
            answer = add(num1, num2);
            break;
        case "-":
            answer = subtract(num1, num2);
            break;
        case "*":
            answer = multiply(num1, num2);
            break;
        case "/":
            answer = divide(num1, num2);
            break;
    }
    return answer;
}

console.log(operate(4, 5, "/"));