
  // Selecciona el enlace y el modal
  const modalLink = document.querySelector('#modal-link');
  const modal = document.querySelector('#modal');
  
  // Agrega un evento de clic al enlace
  modalLink.addEventListener('click', function(event) {
    // Previene la acción predeterminada del enlace
    event.preventDefault();
    // Abre el modal
    modal.classList.add('show');
    modal.style.display = 'block';
  });