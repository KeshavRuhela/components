let classFullpageToggle = "ao-menuicon";
let fullpageToggle = document.querySelector(`.${classFullpageToggle}`);

function menuToggle() {
  let nav = document.querySelector('.ao-fullpage');
  let toggle = document.querySelector('.toggle');
  nav.classList.toggle("active");
  toggle.classList.toggle("active");
};

fullpageToggle.addEventListener('click', (e) => {
  menuToggle();
})