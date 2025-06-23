'use strict';

function createElement(elemClass) {
  const elem = document.createElement('div');
  elem.classList.add(elemClass);
  document.body.append(elem);
}

createElement('box');

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);
