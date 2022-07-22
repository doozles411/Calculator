const displayTop = document.querySelector('.display-top');
const displayBottom = document.querySelector('.display-bottom');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const addBtn = document.querySelector('.add');
const substractBtn = document.querySelector('.subtract');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');
const decimalBtn = document.querySelector('.decimal');
const equalBtn = document.querySelector('.equal');
const oneBtn = document.querySelector('.one');
const twoBtn = document.querySelector('.two');
const threeBtn = document.querySelector('.three');
const fourBtn = document.querySelector('.four');
const fiveBtn = document.querySelector('.five');
const sixBtn = document.querySelector('.six');
const sevenBtn = document.querySelector('.seven');
const eightBtn = document.querySelector('.eight');
const nineBtn = document.querySelector('.nine');
const zeroBtn = document.querySelector('.zero');

clearBtn.onclick = () => clearDisplay();
deleteBtn.onclick = () => updateDisplay('delete');
addBtn.onmousedown = () => updateDisplay(addBtn.innerHTML);

function clearDisplay() {
    displayTop.innerHTML = '';
    displayBottom.innerHTML = '';
}

function updateDisplay(character) {
    if (character === 'delete') {
        let textInput = displayBottom.innerHTML;
        textInput = textInput.slice(0, -1);
        displayBottom.innerHTML = `${textInput}`;
    } else {
        displayBottom.innerHTML = `${character}`;
    }
}