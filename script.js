'use strict';

const display = document.querySelector('#display');

const appendToDisplay = (str) => {
  display.value += str;
};

const clearDisplay = () => {
  display.value = '';
};

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = '⛔ ERROR';
  }
};
