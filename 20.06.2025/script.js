// T: Утечка памяти

// пример 01
const someRes = getDate();
const node = document.querySelector('.class');

setInterval(() => {
  if (node) {
    node.innerHTML = someRes;
  }
}, 1000);

const data = {
  id: '01',
  name: true,
  accept: true,
};

// пример 02
function outer() {
  const potentiallyHugeArray = [];
  return function inner() {
    potentiallyHugeArray.push(data.accept);
  };
}

const getData = outer();

// пример 03 (С утечкой памяти)

// function createElement() {
//   const div = document.createElement('div');
//   div.classList.add('generator');
//   return div;
// }

// const newDiv = createElement();
// document.body.append(newDiv);

// function deleteElement(elem) {
//   document.body.removeChild(document.querySelector(elem));
// }

// deleteElement('.generator');

function createElement(elem, elemClass) {
  const div = document.createElement(elem);
  div.classList.add(elemClass);
  document.body.append(newDiv);
}

createElement('div', 'generator');

function deleteElement(elem) {
  document.body.removeChild(document.querySelector(elem));
}

deleteElement('.generator');
