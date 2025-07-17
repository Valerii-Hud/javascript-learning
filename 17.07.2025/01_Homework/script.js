'use strict';

const person = {
  name: 'Alex',
  age: 25,
  get userAge() {
    return this.age;
  },
  set userAge(age) {
    this.age = age;
  },
};

console.log((person.userAge = 23));
console.log(person.userAge);
