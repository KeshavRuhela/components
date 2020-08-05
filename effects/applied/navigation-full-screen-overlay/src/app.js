let classNav = 'ao-fullpage';
let classFullpageToggle = "ao-menuicon";

let nav = document.querySelector(`.${classNav}`);
let fullpageToggle = document.querySelector(`.${classFullpageToggle}`);

function clickFullpageToggle() {
  nav.classList.toggle("active");
  fullpageToggle.classList.toggle("active");
};

fullpageToggle.addEventListener('click', (e) => {
  clickFullpageToggle();
})