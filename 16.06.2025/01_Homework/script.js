'use strict';

// writable
// enumerable
// configurable

const user = {
  name: 'Alex',
  surname: 'Smith',
  birthday: '20/04/1993',
  showMyPublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};

Object.defineProperty(user, 'name', {
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// user.name = 'Something else...'; // TypeError: Cannot assign to read only property

Object.defineProperty(user, 'gender', { value: 'male' });
console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

const wrapper = document.querySelector('.wrapper'),
  open = wrapper.querySelector('.btn'),
  menu = document.querySelector('.menu');

wrapper.style.cssText = `
  display: flex;
  width: 100%;
  justify-content: right;
  `;
open.style.cssText = `
  background-color: red;
  position: absolute;
  rigth: 0;
  width: 50px;
  height: 50px;
  font-size: 45px;
  cursor: pointer;
`;

open.addEventListener('click', () => {
  menu.classList.toggle('menu');
});

const close = document.querySelector('.close');

close.addEventListener('click', () => {
  menu.classList.remove('menu');
});
