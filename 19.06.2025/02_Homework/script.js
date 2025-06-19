window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn');
  // let timerId,
  //   i = 0;
  btn.addEventListener('click', myAnimation);
  // const timerId = setTimeout(logger, 2000);
  // timerId = setInterval(logger, 100);

  // function logger() {
  //   if (i === 3) {
  //     clearInterval(timerId);
  //   }
  //   console.log('text');
  //   i++;
  // }

  // let id = setTimeout(function log() {
  //   console.log('Hello');
  //   id = setTimeout(log, 500);
  // }, 500);

  // function myAnimation() {
  //   const box = document.querySelector('.box');
  //   let pos = 0;
  //   const id = setInterval(frame, 10);
  //   function frame() {
  //     if (pos == 300) {
  //       clearInterval(id);
  //     } else {
  //       pos++;
  //       box.style.cssText = `
  //       top: ${pos}px;
  //       left: ${pos}px;
  //       `;
  //     }
  //   }
  // }

  function myAnimation() {
    const box = document.querySelector('.box');
    let pos = 0;
    let id = setTimeout(function frame() {
      if (pos == 300) {
        clearInterval(id);
      } else {
        pos++;
        box.style.cssText = `
        top: ${pos}px;
        left: ${pos}px;
        `;
      }
      id = setTimeout(frame, 10);
    }, 10);
  }
});
