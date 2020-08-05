function AoNavbar() {

  let classMenu = 'ao-navbar__menu';
  let classMenuHamburger = 'ao-navbar__menu-hamburger';
  let classMenuList = 'ao-navbar__menu-list';
  let classMenuListModifierOpen = 'ao-navbar__menu-list_open';

  let menuHamburgers = document.querySelectorAll(`.${classMenuHamburger}`);

  menuHamburgers.forEach(menuHamburger => {
    menuHamburger.addEventListener('click', () => {
      let menu = menuHamburger.closest(`.${classMenu}`);
      let menuList = menu.querySelector(`.${classMenuList}`);
      menuList.classList.toggle(classMenuListModifierOpen);
    })
  })
}

export default AoNavbar;