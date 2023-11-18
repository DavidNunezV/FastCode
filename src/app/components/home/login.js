// Ejemplo de archivo login.js

// Función para validar el formulario
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Obtener los formularios que queremos mejorar con estilos de validación de Bootstrap
    var forms = document.getElementsByClassName('needs-validation');
    // Bucle sobre ellos y evitar el envío
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (!this.checkValidity()) {
        event.stopPropagation();
    } else {
        // Aquí va la lógica para enviar los datos al servidor si el formulario es válido
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Implementar la lógica de envío aquí...
    }
    this.classList.add('was-validated');
});
