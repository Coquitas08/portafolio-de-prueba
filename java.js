

function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(seccion => {
      seccion.classList.remove('mostrar');
  });
  const seccionMostrada = document.getElementById(id);
  if (seccionMostrada) {
      seccionMostrada.classList.add('mostrar');
  }
  // Opcional: También podrías cerrar el menú al seleccionar una sección desde el sidebar
  const sidebar = document.querySelector('.sidebar');
  if (sidebar.classList.contains('abierto')) {
      sidebar.classList.remove('abierto');s
      document.removeEventListener('click', cerrarMenuFuera);
  }
}

// La función toggleMenu, cerrarMenuFuera y mostrarSeccion deben seguir aquí.
// No las elimines si las necesitas para otras partes de tu menú responsive.

// --- NUEVA FUNCIONALIDAD PARA EL FORMULARIO DE CONTACTO ---

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const mensajeAgradecimiento = document.getElementById('mensajeAgradecimiento');

  // Si el formulario existe, añadir el 'event listener'
  if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
          event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional (recargar página)

          // Obtener el valor del campo "nombreCompleto"
          const nombreCompleto = document.getElementById('nombreCompleto').value; // CAMBIO AQUÍ
          const email = document.getElementById('email').value; // El email sigue igual

          // Aquí podrías añadir lógica para enviar los datos a un servidor
          // Por ahora, solo mostraremos el mensaje de agradecimiento

          // Limpiar los campos del formulario
          contactForm.reset(); // Resetea todos los campos del formulario a su estado inicial

          // Mostrar el mensaje de agradecimiento
          mensajeAgradecimiento.textContent = `¡Gracias por contactarte, ${nombreCompleto}!`; // Usa nombreCompleto
          mensajeAgradecimiento.style.display = 'block'; // Hace visible el div del mensaje

          // Opcional: Ocultar el mensaje después de unos segundos
          setTimeout(() => {
              mensajeAgradecimiento.style.display = 'none';
              mensajeAgradecimiento.textContent = ''; // Limpiar el texto
          }, 5000); // El mensaje desaparecerá después de 5 segundos (5000 milisegundos)
      });
  }
});

// Tus otras funciones (toggleMenu, cerrarMenuFuera, mostrarSeccion) deben seguir aquí.