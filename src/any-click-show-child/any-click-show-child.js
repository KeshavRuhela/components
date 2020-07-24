function AoAnyClickShowChild() {

  let classOpen = 'ao-any-click-show-child__open';
  let classChild = 'ao-any-click-show-child__child';
  let classModifierOpen = 'ao-any-click-show-child_open';

  let opens = document.querySelectorAll(`.${classOpen}`);

  opens.forEach(open => {
    open.addEventListener('click', () => {
      let child = open.parentElement.querySelector(`.${classChild}`);
      child.classList.toggle(classModifierOpen);
    })
  })

}

export default AoAnyClickShowChild;