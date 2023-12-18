'use strict';

const body = document.querySelector('body');
const input = document.createElement('input');
const p = document.createElement('p');
body.append(input, p);

const myTime = (callback, delay) => {
    let timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(callback, delay);
    }
  };

const myInput = document.querySelector("input");

const newValue = () => {
    p.textContent = input.value;
  }
myInput.addEventListener("input",myTime(newValue, 300)
);