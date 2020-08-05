let classCurtainToggle = 'ao-menu-curtain__toggle';
let curtainToggle = document.querySelector(`.${classCurtainToggle}`);

function clickCurtainToggle() {
  let curtain = document.querySelector('.ao-menu-curtain');
  curtain.classList.toggle('active')
};

curtainToggle.addEventListener('click', () => {
  clickCurtainToggle();
})