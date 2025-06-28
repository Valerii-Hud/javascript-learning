// Т: Утечки памяти

// Пример No 1

function funct() {
  smth = 'String'; // smth => window.smth
}

// Пример No 2
const someRes = getData();
const node = document.querySelector('.class');

setInterval(() => {
  if (node) {
    node.innerHTML = someRes;
  }
}, 1000);

// Пример No 3

function outer() {
  const potentiallyHugeArray = [];
  return function inner() {
    potentiallyHugeArray.push('data');
    console.log('data');
  };
}

const sayHello = outer();

// Пример No 4

function createElement() {
  const div = document.createElement('div');
  div.id = 'test';
  return div;
}

const testDiv = createElement();

document.body.append(testDiv);

function deleteElement() {
  document.body.removeChild(document.getElementById('test'));
}

deleteElement();
