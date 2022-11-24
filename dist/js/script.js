window.addEventListener('DOMContentLoaded', () => {
     /* Modal */
     const closeBtns = document.querySelectorAll('.close__btn'),
           navLoginBtn = document.querySelector('#login'),
           loginModal = document.querySelector('#login__modal'),
           loginOpen = document.querySelector('#login__open'),
           registerModal = document.querySelector('#register__modal'),
           registerOpen = document.querySelector('#register__open');
     const openModal = (modal) => {
          modal.style.display = 'flex';
          document.body.style.overflowY = 'hidden';
     };
     const closeModal = () => {
          document.body.style.overflowY = 'auto';
          registerModal.style.display = 'none';
          loginModal.style.display = 'none';
     };
     closeBtns.forEach(btn => {
          btn.addEventListener('click', closeModal);
     });
     navLoginBtn.addEventListener('click', () => {
          openModal(loginModal);
     });
     loginOpen.addEventListener('click', () => {
          closeModal();
          openModal(loginModal);
     });
     registerOpen.addEventListener('click', () => {
          closeModal();
          openModal(registerModal);
     });
});