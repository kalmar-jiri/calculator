'use strict';

let display;

const appendToDisplay = (str) => {
  document.getElementById('display').value += str;
};

const clearDisplay = () => {
  document.querySelector('#display').value = '';
};

const calculate = () => {
  try {
    document.querySelector('#display').value = eval(
      document.querySelector('#display').value
    );
  } catch (error) {
    document.querySelector('#display').value = '⛔ ERROR';
  }
};
