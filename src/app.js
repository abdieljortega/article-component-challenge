const mobile = matchMedia('screen and (max-width: 426px)');

const validation = event => {
  console.log(event)
}

mobile.addListener(validation)

const toggleActive = e => {
  const $tooltiptext = document.querySelector('.tooltiptext');
  if(e.target.classList[0] === 'share') {
    e.target.srcset = './images/icon-share-white.svg';
    e.target.nextElementSibling.style.visibility = 'visible'
    e.target.classList.add('share-active');
  } else {
    e.stopPropagation()
  }
};

const $shareButton = document.querySelector('.shareContainer');

$shareButton.addEventListener('click', toggleActive);