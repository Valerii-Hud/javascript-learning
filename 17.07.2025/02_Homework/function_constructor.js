'use strict';

function User(name, age) {
  let userName = name;
  let userAge = age;
  this.say = () => `User name: ${userName}, Age: ${userAge}`;
  this.getAge = () => userAge;
  this.setAge = (age) => {
    if (typeof age === 'number' && age > 0 && age < 120) {
      userAge = age;
    } else {
      console.error('Something went wrong.');
    }
  };
}

const ivan = new User('Ivan', 27);

console.log(ivan.getAge());
ivan.setAge(30);
ivan.setAge(300);
console.log(ivan.getAge());
