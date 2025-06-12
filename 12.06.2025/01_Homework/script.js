const btn = document.querySelector('button'),
  counter = document.querySelector('h1 > span');
let i = 1;

const nextNumberOnCounter = (e) => {
  counter.textContent = `${i + 1}`;
  i++;
  if (i == 10) {
    btn.removeEventListener('click', nextNumberOnCounter);
    btn.textContent = 'Finish';
  }
};

btn.textContent = 'Click me and see on counter';
btn.addEventListener('click', nextNumberOnCounter);
