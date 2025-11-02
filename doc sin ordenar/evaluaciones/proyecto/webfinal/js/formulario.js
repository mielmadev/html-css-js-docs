document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formcont');
  const mensaje = document.getElementById('mensaje-enviado');
  mensaje.style.display = 'none'; // Ocultar mensaje al cargar

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // No enviar nada
    mensaje.textContent = '¡Mensaje enviado!';
    mensaje.style.color = 'green';
    mensaje.style.display = 'block';
    form.reset();
  });

  // Ocultar mensaje y limpiar texto/color si se modifica cualquier campo
  ['nombre', 'email', 'mensaje'].forEach(function (id) {
    document.getElementById(id).addEventListener('input', function () {
      mensaje.style.display = 'none';
      mensaje.textContent = '';
      mensaje.style.color = '';
    });
  });
});
