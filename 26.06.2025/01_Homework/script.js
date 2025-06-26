'use strict';

// пример No1
const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];
const set = new Set(arr);
set.add('Ivan').add('Oleg');
console.log(set);

// пример No2

function setArrPush(name) {
  if (arr.includes(name)) {
    console.log('This name is already on this array.');
  } else {
    return arr.push(name);
  }
}

console.log(arr);
setArrPush('Artem');
setArrPush('Ann');
setArrPush('Ann');
console.log(arr);

// пример No3

function unique(arr) {
  return Array.from(new Set(arr));
}

arr.push('New');
arr.push('New');
arr.push('New');

console.log(unique(arr));
