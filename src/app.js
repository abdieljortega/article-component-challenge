const toggleActive = e => {
  e.target
  if(e.target.classList[0] === 'share') {
    e.target.srcset = './images/icon-share-white.svg';
    e.target.nextElementSibling.style.visibility = 'visible'
    e.target.parentNode.classList.add('shareButton-active');
  } else {
    e.target.children[0].srcset = './images/icon-share-white.svg';
    e.target.children[0].nextElementSibling.style.visibility = 'visible';
    e.target.classList.add('shareButton-active');
  }
};

const $shareButton = document.querySelector('.shareButton');

$shareButton.addEventListener('click', toggleActive);