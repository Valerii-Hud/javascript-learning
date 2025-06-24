'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const createObj = document.createElement('div');
  createObj.style.cssText = `
  width: 100px;
  height: 100px;
  background-color: red;
  `;
  document.body.append(createObj);
});

const obj = {
  name: 'test',
};

let id = Symbol('id');

obj[id] = 1;

console.log(obj[id]);
