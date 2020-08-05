function AoModal() {
  let classModalOpen = 'ao-modal__open';
  let classModalClose = 'ao-modal__close';
  let classModalScope = 'ao-modal__scope';
  let classModalScopeModifierOpen = 'ao-modal__scope_open';

  let modalsOpen = document.querySelectorAll(`.${classModalOpen}`);
  let modalsScopeClose = document.querySelectorAll(`.${classModalClose}`);

  modalsOpen.forEach(modalOpen => {
    modalOpen.addEventListener('click', (e) => {
      let scope = document.querySelector(`.${classModalScope}[data-modal="${e.target.dataset.modal}"]`);
      scope.classList.add(classModalScopeModifierOpen);
      e.preventDefault();
    })
  });

  modalsScopeClose.forEach(modalScopeClose => {
    modalScopeClose.addEventListener('click', (e) => {

      let scope;

      // Scope is a parent
      if (
        e.target.classList.contains(classModalClose) &&
        !e.target.classList.contains(classModalScope)
      ) {
        scope = e.target.closest(`.${classModalScope}`);
        e.stopPropagation();
        e.preventDefault();

      // Scope is this
      } else {
        scope = e.target;
      }

      scope.classList.remove(classModalScopeModifierOpen);

    })
  });

}

export default AoModal;