let classSidebarToggle = 'ao-sidebar-toggle';

let sidebarToggle = document.querySelector(`.${classSidebarToggle}`);

function openMenu() {
  let element = document.querySelector('.ao-sidebar');
  element.classList.toggle('active');
};

sidebarToggle.addEventListener('click', (e) => {
  openMenu();
})