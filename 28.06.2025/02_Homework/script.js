'use strict';

// Пример No 1
let user = { name: 'Ivan' };
const arr = [user];
let map = new WeakMap();
map.set(user, 'data');

user = null;

// console.log(user);
// console.log(arr[0]);
// console.log(map.has(user));

// Пример No 2

let cache = new WeakMap();

function cacheUser(user) {
  if (!cache.has(user)) cache.set(user, Date.now());
  return user;
}

let lena = { name: 'Elena' };
let alex = { name: 'Alex' };

cacheUser(lena);
cacheUser(alex);

lena = null;

// console.log(`Has lena: ${cache.has(lena)}`);
// console.log(`Has alex: ${cache.has(alex)}`);

// WeakSet
// weakSet.add(), weakSet.has(), weakSet.delete()

// Пример No 3

let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'World', from: 'Alex' },
  { text: '!', from: 'Michail' },
];

let readMessages = new WeakSet();
readMessages.add(messages[0]);
// readMessages.add(messages[1]);
readMessages.add(messages[0]);

// console.log(readMessages.has(messages[0]));
messages.shift();
console.log(readMessages.has(messages[0]));
