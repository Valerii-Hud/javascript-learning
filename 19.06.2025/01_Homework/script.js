const wrapper = document.querySelector('.btn-block'),
  btns = wrapper.querySelectorAll('button');

wrapper.addEventListener('click', (event) => {
  // if (event.target && event.target.tagName == 'BUTTON') {
  if (event.target && event.target.matches('button.red')) {
    console.log('Hello');
  }
});

const btn = document.createElement('button');
// btn.style.cssText = `background-color: red`;
btn.classList.add('red');
wrapper.append(btn);
