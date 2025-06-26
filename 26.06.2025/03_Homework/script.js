const btns = document.querySelectorAll('button'),
  wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[0].classList.add('red'));
// console.log(btns[0].classList.remove('red'));
// console.log(btns[0].classList.toggle('red'));
// if (btns[1].classList.contains('this')) console.log(true);

// btns[0].addEventListener('click', () => {
// if (!btns[1].classList.contains('red')) {
//   btns[1].classList.add('red');
// } else {
//   btns[1].classList.remove('red');
// }
// btns[1].classList.toggle('red');
// });

wrapper.addEventListener('click', (event) => {
  if (event.target && event.target.tagName == 'BUTTON') {
    console.log('HELLO');
  }
});
