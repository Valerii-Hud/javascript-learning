'use strict';

const user = {
  name: 'Alex',
  surname: 'Smith',
  birthday: '20/04/1993',
  showMyPublicData: () => {1 
    console.log(`${this.name} ${this.surname}`);
  },
};

console.log(Object.getOwnPropertyDescriptors(user));

Object.defineProperty(user, 'name', {
  writable: false,
});
user.name = 'qfwknfqw';
// writable
// enumerable
// configurable
