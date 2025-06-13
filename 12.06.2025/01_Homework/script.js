const btns = document.querySelectorAll('button'),
  counter = document.querySelector('h1 > span'),
  overlay = document.querySelector('.overlay');
let i = 1;

const nextNumberOnCounter = (e) => {
  console.log(e.currentTarget);
  console.log(e.type);
  counter.textContent = `${i + 1}`;
  i++;
  // if (i == 10) {
  //   btn.removeEventListener('click', nextNumberOnCounter);
  //   btn.textContent = 'Finish';
  // }
};

btns.forEach((btn) => {
  btn.textContent = 'Click me and see on counter';
  btn.addEventListener('click', nextNumberOnCounter);
});

overlay.addEventListener('click', nextNumberOnCounter);

const link = document.querySelector('a');
link.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target);
});
