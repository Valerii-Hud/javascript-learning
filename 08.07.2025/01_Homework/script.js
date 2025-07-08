'use strict';

// Example No 1
// console.log('Data request...');

// setTimeout(() => {
//   console.log('Created card...');
//   const product = {
//     name: 'TV',
//     price: 2000,
//   };
//   setTimeout(() => {
//     product.status = 'order';
//     console.log(product);
//   }, 2000);
// }, 2000);

// Example No 2

// const req = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log('Get data...');
//   });
//   const order = {
//     isComplete: false,
//     isFavorite: undefined,
//     price: 200,
//   };
//   resolve(order);
// });

// req.then((order) => {
//   return new Promise((resolve, reject) => {
//     order.title = 'TV';
//     setTimeout(() => {
//       order.descr = 'Awesome TV';
//       resolve(order);
//     }, 100);
//   })
//     .then((data) => {
//       data.isComplete = true;
//       return data;
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .finally(() => {
//       console.log('Finally');
//     });
// });

// Example No 3

const test = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
};

test(1000).then(() => console.log('1000ms'));
test(2000).then(() => console.log('2000ms'));

Promise.all([test(1000), test(2000)]).then(() => {
  console.log('All');
});

Promise.race([test(1000), test(2000)]).then(() => {
  console.log('All');
});
