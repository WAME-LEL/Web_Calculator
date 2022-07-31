const face = document.querySelector('div.face>span');
const result = document.querySelector('div.face>span.result');

const one = document.querySelector('div.one');
const two = document.querySelector('div.two');
const three = document.querySelector('div.three');
const four = document.querySelector('div.four');
const five = document.querySelector('div.five');
const six = document.querySelector('div.six');
const seven = document.querySelector('div.seven');
const eight = document.querySelector('div.eight');
const nine = document.querySelector('div.nine');
const zero = document.querySelector('div.zero');
const enter = document.querySelector('div.enter');
const plus = document.querySelector('div.plus');
const minus = document.querySelector('div.minus');
const division = document.querySelector('div.division');
const multiply = document.querySelector('div.multiply');
const dot = document.querySelector('div.dot');
const init = document.querySelector('div.init');


let result_value = result.lastChild;
let expression = face.firstChild;
let other = 0;

function val(){
    if(expression.nodeValue.length===1 && expression.nodeValue==='0'){
        if((this === plus || this === minus || this === division || this === multiply) && result_value.nodeValue !== ' '){
            other = result_value.nodeValue;
        }
        expression.nodeValue = this.firstChild.nodeValue;
    }
    else{
        expression.nodeValue += this.firstChild.nodeValue;
    }
}

function calc(){
    if(result_value.nodeValue !== ' '){
        result_value.nodeValue = eval(`${other}${expression.nodeValue}`);
    }
    else{
        result_value.nodeValue = eval(expression.nodeValue);
    }
    expression.nodeValue=0;
}

function reset(){
    result_value.nodeValue = ' ';
    expression.nodeValue = '0';
}

one.addEventListener('click', val);
two.addEventListener('click', val);
three.addEventListener('click', val);
four.addEventListener('click', val);
five.addEventListener('click', val);
six.addEventListener('click', val);
seven.addEventListener('click', val);
eight.addEventListener('click', val);
nine.addEventListener('click', val);
zero.addEventListener('click', val);
enter.addEventListener('click', calc);
plus.addEventListener('click', val);
minus.addEventListener('click', val);
division.addEventListener('click', val);
multiply.addEventListener('click', val);
dot.addEventListener('click', val);
init.addEventListener('click', reset);



