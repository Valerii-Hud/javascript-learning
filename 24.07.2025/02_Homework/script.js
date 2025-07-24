'use strict';

// Example No 1
// function* generator() {
//   yield 'S';
//   yield 'c';
//   yield 'r';
//   yield 'i';
//   yield 'p';
//   yield 't';
// }

// const char = generator();

// console.log(char.next().value);
// console.log(char.next().value);
// console.log(char.next().value);
// console.log(char.next().value);
// console.log(char.next().value);
// console.log(char.next().value);
// console.log(char.next().value);
// console.log(char.next().value);

function* count(n) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

const counter = count(100);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
