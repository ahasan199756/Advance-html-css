const openButton = document.getElementById('trigger-popup');
const closeButton = document.getElementById('close');

function toggleModal() {
  const modalDiv = document.querySelector('.popup');
  const backdrop = document.querySelector('.backdrop')
  modalDiv.classList.toggle('show');
  backdrop.classList.toggle('show');
}

openButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);