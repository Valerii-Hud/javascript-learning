const btn = document.querySelector('.btn');

let timerId;
btn.addEventListener('click', () => {
  timerId = setTimeout(logger, 2000, 'Hello');
});
function logger(textToSay) {
  console.log(textToSay);
}
