'use strict';

document.head.innerHTML += `
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Test</title>
    <link rel="stylesheet" href="style.css" />
`;
function createElement(tagName, elemClass) {
  const elem = document.createElement(tagName);
  elem.classList.add(elemClass);
  document.body.append(elem);
}

const boxesElements = 2;
for (let i = 1; i <= boxesElements; i++) {
  createElement('div', 'box');
}

setTimeout(() => {
  const boxes = document.querySelectorAll('.box');
  createElement('div', 'box');
  createElement('div', 'box');
  boxes.forEach((box) => {
    box.style.cssText = ` width: 150px;
    height: 150px;
    margin-bottom: 10px;
    background-color: black;`;
  });
  console.log('Ok');
}, 2000);

const boxesQuery = document.querySelectorAll('.box'),
  boxesGet = document.getElementsByClassName('box');

console.log(boxesQuery);
console.log(boxesGet);
