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
