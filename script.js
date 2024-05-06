/*

add
subtract
multiply
divide

*/

const btn_nums = document.querySelectorAll(".btn.num");
const display = document.querySelector(".output");
const btn_operations = document.querySelectorAll(".btn.operate");
const btn_equals = document.querySelector(".btn.equals");
const btn_clear = document.querySelector(".btn.clear");
const btn_negation = document.querySelector(".btn.negate");
const btn_percent = document.querySelector(".btn.percent");

let num1;
let num2;
let operator;

for(let i = 0; i < btn_nums.length; i++){
    btn_nums[i].addEventListener('click', numClicked);
}

for(let i = 0; i < btn_operations.length; i++){
    btn_operations[i].addEventListener('click', operationClicked);
}

btn_equals.addEventListener("click", equals);

btn_clear.addEventListener("click", clear);

btn_negation.addEventListener("click", negate);

btn_percent.addEventListener("click", percent);

function numClicked(e){
    num = e.target.textContent;
    display.textContent = display.textContent + num;
}

function operationClicked(e){
    num1 = display.textContent;
    operator = e.target.textContent;
    display.textContent = "\xa0";
}

function equals(e){
    num2 = display.textContent;
    let result = operate(num1, num2, operator);
    display.textContent = result;
    num1 = result;
    num2 = "";
    operator = "";
}

function clear(e){
    display.textContent = "\xa0";
    num1 = "";
    num2 = "";
    operator = "";
}

function negate(e){
    display.textContent = - parseFloat(display.textContent);
}

function percent(e){
    display.textContent = parseFloat(display.textContent) * 0.01;
}


function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b == 0){
        throw "Cannot divide by 0"
    }

    return a / b;
}

function operate(a, b, operator){
    try{
        a = parseFloat(a);
        b = parseFloat(b);

        switch(operator){
            case '+':
                return add(a, b);
                break;
            case '-':
                return subtract(a, b);
                break;
            case '×':
                return multiply(a, b);
                break;
            case '÷':
                return divide(a, b);
                break;
            default:
                return 'error';
        }
    } catch(e){
        return 'error';
    }
}
