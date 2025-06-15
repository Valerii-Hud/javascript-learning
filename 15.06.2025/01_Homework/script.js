'use strict';

const box = document.querySelector('.box');

const boxParams = {
  height: 100,
  width: 400,
};

function changeParams(elem, h, w) {
  elem.style.height = `${h ?? 200}px`;
  elem.style.width = `${w ?? 200}px`;
  elem.innerHTML = (h ?? 200) * (w ?? 200);
}

changeParams(box, boxParams.height, boxParams.width);

let user = {
  name: undefined,
  key: undefined,
};

console.log(user.name ?? user.key ?? 'User None');
