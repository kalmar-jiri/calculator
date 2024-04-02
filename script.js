'use strict';

const display = document.querySelector('#display');
const numberBtns = document.querySelectorAll('.btn-number');
const operatorBtns = document.querySelectorAll('.btn-operator');
const clearBtn = document.querySelector('.btn-clear');
const equalsBtn = document.querySelector('.btn-equals');

const appendToDisplay = (str) => {
  display.value += str;
};

const clearDisplay = () => {
  display.value = '';
};

const calculate = () => {
  try {
    if (eval(display.value) === Infinity) {
      display.value = '∞';
    } else {
      display.value = eval(display.value);
    }
  } catch (error) {
    display.value = '⛔ ERROR';
  }
};

numberBtns.forEach((button) => {
  button.addEventListener('click', () => {
    appendToDisplay(button.textContent);
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener('click', () => {
    appendToDisplay(button.textContent);
  });
});

equalsBtn.addEventListener('click', calculate);

clearBtn.addEventListener('click', clearDisplay);
