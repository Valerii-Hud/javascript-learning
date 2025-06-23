'use strict';

// // Задача No 1
// let user = { name: 'Valerii' };
// const arr = [user];

// user = null;

// console.log(user);
// console.log(arr[0]);

// Задача No 2
let user = { name: 'Valerii' };
let map = new Map();
map.set(user, 'data');
user = null;
console.log(map.keys());
