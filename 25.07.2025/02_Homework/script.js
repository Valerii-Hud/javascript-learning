'use strict';

const btnPhone = document.querySelector('#iphone'),
  btnMacbook = document.querySelector('#macbook'),
  images = document.querySelectorAll('img');

let phoneAnimation;

btnPhone.addEventListener('click', () => {
  if (!phoneAnimation) {
    phoneAnimation = images[0].animate(
      [
        {
          transform: 'translateY(0) rotate(0deg)',
          filter: 'opacity(0%)',
        },
        {
          transform: 'translateY(100px) rotate(-20deg)',
          filter: 'opacity(50%)',
        },
        {
          transform: 'translateY(-100px) rotate(20deg)',
          filter: 'opacity(60%)',
        },
        {
          transform: 'translateY(0) rotate(0deg)',
          filter: 'opacity(0%)',
        },
      ],
      {
        duration: 3000,
        iterations: Infinity,
      }
    );
  } else if (phoneAnimation.playState === 'paused') {
    phoneAnimation.play();
  } else {
    phoneAnimation.pause();
  }
});
