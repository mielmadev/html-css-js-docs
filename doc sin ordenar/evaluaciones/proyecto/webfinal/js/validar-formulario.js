// Validación personalizada del formulario de contacto.
// Muestra mensajes de error y éxito de forma visual y moderna usando solo JavaScript.
// Usa el evento DOMContentLoaded para asegurar que el DOM está cargado antes de ejecutar el código.

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formcont');
  if (!form) return;

  // Crear elementos para mensajes de error y éxito
  const nombreError = document.createElement('div');
  const emailError = document.createElement('div');
  const mensajeError = document.createElement('div');
  const exitoMsg = document.createElement('div');

  nombreError.className = 'form-error';
  emailError.className = 'form-error';
  mensajeError.className = 'form-error';
  exitoMsg.className = 'form-success';

  // Insertar los mensajes de error justo después del label de cada campo
  const nombreLabel = form.querySelector('label[for="nombre"]');
  const emailLabel = form.querySelector('label[for="email"]');
  const mensajeLabel = form.querySelector('label[for="mensaje"]');

  nombreLabel.parentNode.insertBefore(nombreError, nombreLabel.nextSibling);
  emailLabel.parentNode.insertBefore(emailError, emailLabel.nextSibling);
  mensajeLabel.parentNode.insertBefore(mensajeError, mensajeLabel.nextSibling);

  // Obtener los inputs
  const nombreInput = form.nombre;
  const emailInput = form.email;
  const mensajeInput = form.mensaje;

  // Selecciona el botón de envío
  const boton = form.querySelector('button[type="submit"]');
  // Inserta el mensaje de éxito justo antes del botón
  form.insertBefore(exitoMsg, boton);

  // Evitar el mensaje nativo del navegador para email
  emailInput.addEventListener('invalid', function (e) {
    e.preventDefault();
  });

  // Función para limpiar error si el campo es válido
  // Usamos .trim() para eliminar espacios en blanco al principio y final del texto
  function limpiarError(input, errorDiv, esValido) {
    input.addEventListener('input', function () {
      if (esValido(input.value.trim())) {
        errorDiv.textContent = '';
        errorDiv.classList.remove('visible');
      }
      exitoMsg.textContent = '';
      exitoMsg.classList.remove('visible');
      if (boton) boton.classList.remove('boton-exito', 'boton-error');
    });
  }

  limpiarError(nombreInput, nombreError, function (valor) {
    return valor.length >= 3;
  });
  limpiarError(emailInput, emailError, function (valor) {
    // Validación básica de email
    return /^[^@]+@[^@]+\.[a-z]{2,}$/i.test(valor);
  });
  limpiarError(mensajeInput, mensajeError, function (valor) {
    return valor.length >= 10;
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Limpiar mensajes anteriores
    nombreError.textContent = '';
    emailError.textContent = '';
    mensajeError.textContent = '';
    nombreError.classList.remove('visible');
    emailError.classList.remove('visible');
    mensajeError.classList.remove('visible');
    exitoMsg.textContent = '';
    exitoMsg.classList.remove('visible');
    if (boton) boton.classList.remove('boton-exito', 'boton-error');

    let valido = true;

    // Guardamos los valores ya recortados para no repetir .trim()
    const nombreValor = nombreInput.value.trim();
    const emailValor = emailInput.value.trim();
    const mensajeValor = mensajeInput.value.trim();

    // Validación del nombre
    if (nombreValor.length < 3) {
      nombreError.textContent = 'El nombre debe tener al menos 3 caracteres.';
      nombreError.classList.add('visible');
      valido = false;
    }

    // Validación del email
    if (!/^[^@]+@[^@]+\.[a-z]{2,}$/i.test(emailValor)) {
      emailError.textContent = 'El email no es válido.';
      emailError.classList.add('visible');
      valido = false;
    }

    // Validación del mensaje
    if (mensajeValor.length < 10) {
      mensajeError.textContent = 'El mensaje debe tener al menos 10 caracteres.';
      mensajeError.classList.add('visible');
      valido = false;
    }

    // Si todo es válido, mostrar mensaje de éxito y limpiar errores
    if (valido) {
      nombreError.textContent = '';
      emailError.textContent = '';
      mensajeError.textContent = '';
      nombreError.classList.remove('visible');
      emailError.classList.remove('visible');
      mensajeError.classList.remove('visible');
      exitoMsg.textContent = '¡Formulario enviado correctamente!';
      exitoMsg.classList.add('visible');
      if (boton) boton.classList.add('boton-exito');
      form.reset();
    } else {
      if (boton) boton.classList.add('boton-error');
    }
  });
});
