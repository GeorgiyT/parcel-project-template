(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-maps-open]'),
    closeModalBtn: document.querySelector('[data-maps-close]'),
    modal: document.querySelector('[data-maps]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();