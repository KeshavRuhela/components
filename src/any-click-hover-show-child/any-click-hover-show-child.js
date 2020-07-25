function AoMenuShow() {

  let classItem = 'ao-any-click-hover-show-child';
  let classItemOpen = 'ao-any-click-hover-show-child__open';
  let classItemChild = 'ao-any-click-hover-show-child__child';
  let classItemModifierOpen = 'ao-any-click-hover-show-child_open';

  let opens = document.querySelectorAll(`.${classItemOpen}`);

  opens.forEach(open => {
    open.addEventListener('click', () => {
      let itemParent = open.closest(`.${classItem}`).parentElement;
      let itemChildren = itemParent.querySelectorAll(`.${classItemChild}`);
      let thisChild = open.parentElement.querySelector(`.${classItemChild}`);

      itemChildren.forEach(itemChild => {
        if (itemChild === thisChild) {
          thisChild.classList.toggle(classItemModifierOpen);
        } else {
          itemChild.classList.remove(classItemModifierOpen)
        }
      });
    })
  })

}

export default AoMenuShow;