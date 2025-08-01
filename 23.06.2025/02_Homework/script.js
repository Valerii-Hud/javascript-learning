'use strict';

const createBox = document.createElement('div');
createBox.style.cssText = `
    width: 300px;
    height: 250px;
    background-color: olive;
`;
createBox.classList.add('box');
document.body.append(createBox);

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
  elem.style.height = `${h ?? 200}px`;
  elem.style.width = `${w ?? 200}px`;
  elem.innerHTML = h ?? 200 * w ?? 200;
}

changeParams(box, newHeight, newWidth);
console.log((100 ?? 200) * (400 ?? 200));
// let userName;
// let userKey;
// console.log(userName ?? userKey ?? `User:${userKey}`);
