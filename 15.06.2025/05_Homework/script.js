'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // let id = Symbol('id');
  // const obj = {
  //   name: 'Test',
  // [Symbol('id')]: 1,
  //   [id]: 1,
  //   getId: function () {
  //     return this[id];
  //   },
  // };
  // let id = Symbol('id');
  // obj[id] = 1;
  // console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);
  // for (let i in obj) {
  //   console.log(i);
  // }

  const myAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol('id')]: 125,
  };

  // Other code

  // myAwesomeDB.id = 32;
  console.log(myAwesomeDB);
  console.log(Object.getOwnPropertySymbols(myAwesomeDB));
});
