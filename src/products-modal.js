(() => {
    const refs = {
        openModalBtn1: document.querySelector('[products-ice-cream]'),
        openModalBtn2: document.querySelector('[products-coffee]'),
        openModalBtn3: document.querySelector('[products-milkshake]'),
        text1: document.querySelector('[products-modal-one]'),
        text2: document.querySelector('[products-modal-two]'),
        text3: document.querySelector('[products-modal-third]'),
        closeModalBtn: document.querySelector('[products-modal-close]'),
        modal: document.querySelector('[products-modal]'),
    };

    refs.openModalBtn1.addEventListener('click', openModal1);
    refs.openModalBtn2.addEventListener('click', openModal2);
    refs.openModalBtn3.addEventListener('click', openModal3);
    refs.closeModalBtn.addEventListener('click', closeModal);

    function openModal1() {
        refs.modal.classList.remove('hidden');
        refs.text1.classList.remove('hidden');
    }

    function openModal2() {
        refs.modal.classList.remove('hidden');
        refs.text2.classList.remove('hidden');
    }

    function openModal3() {
        refs.modal.classList.remove('hidden');
        refs.text3.classList.remove('hidden');
    }

    function closeModal() {
        refs.modal.classList.add('hidden');
        refs.text1.classList.add('hidden');
        refs.text2.classList.add('hidden');
        refs.text3.classList.add('hidden');
    }

})();