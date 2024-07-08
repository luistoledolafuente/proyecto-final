document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir que el formulario se envíe automáticamente

    // Obtener los valores de los campos
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const dni = document.getElementById("dni").value;
    const email = document.getElementById("email").value;

    // Variables para mensajes de error
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const dniError = document.getElementById("dniError");
    const emailError = document.getElementById("emailError");

    // Inicializar los mensajes de error
    usernameError.textContent = "";
    passwordError.textContent = "";
    dniError.textContent = "";
    emailError.textContent = "";

    let isValid = true;
    let errorMessage = "";

    // Validar los campos
    if (!username) {
      usernameError.textContent = "Por favor, ingresa tu nombre.";
      usernameError.style.display = "block";
      isValid = false;
      errorMessage += "Nombre incorrecto. ";
    }

    if (!password) {
      passwordError.textContent = "Por favor, ingresa tu apellido.";
      passwordError.style.display = "block";
      isValid = false;
      errorMessage += "Apellido incorrecto. ";
    }

    if (!validateDNI(dni)) {
      dniError.textContent =
        "Por favor, ingresa un DNI válido de 8 caracteres numéricos.";
      dniError.style.display = "block";
      isValid = false;
      errorMessage += "DNI incorrecto. ";
    }

    if (!validateEmail(email)) {
      emailError.textContent =
        "Por favor, ingresa un correo electrónico válido.";
      emailError.style.display = "block";
      isValid = false;
      errorMessage += "Correo electrónico incorrecto. ";
    }

    // Si algún campo no es válido, mostrar un alert con el mensaje de error
    if (!isValid) {
      alert(`Hay errores en el formulario: ${errorMessage}`);
    } else {
      alert("Datos correctos. Iniciando sesión...");
      window.location.href = 'index.html';
      // Aquí puedes agregar el código para enviar los datos al servidor
    }
  });

// Función para validar el DNI
function validateDNI(dni) {
  const re = /^\d{8}$/;
  return re.test(dni);
}

// Función para validar el correo electrónico
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}