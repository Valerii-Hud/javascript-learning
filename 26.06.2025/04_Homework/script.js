const btn = document.querySelector('.btn');

let i = 0;

function translateAnimation() {
  const elem = document.querySelector('.box');
  let pos = 0;

  // const timerId = setInterval(frame, 10);

  let timerId = setTimeout(function frameRequest() {
    frame();
    timerId = setTimeout(frameRequest, 10);
  }, 10);
  function frame() {
    if (pos == 300) clearInterval(timerId);
    else {
      pos++;
      elem.style.top = `${pos}px`;
      elem.style.left = `${pos}px`;
    }
  }
}

btn.addEventListener('click', translateAnimation);
// function logger(textToSay) {
//   console.log(textToSay);
// }

// let id = setTimeout(function log() {
//   console.log('Hello');
//   id = setTimeout(log, 500);
// }, 500);
