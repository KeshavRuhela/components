function AoMenuShow() {

  let classOpen = 'ao-menu-show__list-item-open';
  let classChild = 'ao-menu-show__list-item-child';
  let classModifierOpen = 'ao-menu-show__list-item_open';

  let opens = document.querySelectorAll(`.${classOpen}`);

  opens.forEach(open => {
    open.addEventListener('click', () => {
      let child = open.parentElement.querySelector(`.${classChild}`);
      child.classList.toggle(classModifierOpen);
    })
  })

}

export default AoMenuShow;