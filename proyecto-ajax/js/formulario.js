window.initFormulario = function() {
  const form = document.getElementById("formContacto");
  if (!form) return;
  const respuesta = document.getElementById("respuesta");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Submit detectado");

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    const datos = {
      nombre: document.getElementById("nombre").value.trim(),
      correo: document.getElementById("correo").value.trim(),
      mensaje: document.getElementById("mensaje").value.trim()
    };

    // Mostrar mensaje mientras se envía
    respuesta.innerHTML = `<div class="alert alert-info">Enviando mensaje...</div>`;

    // Crear objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    // Evento cuando se complete
    xhr.onload = function () {
      if (xhr.status === 201 || xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log("Respuesta recibida:", data);

        respuesta.innerHTML = `
          <div class="alert alert-success">Mensaje enviado correctamente. Gracias, ${datos.nombre}.</div>
        `;
        form.reset();
        form.classList.remove("was-validated");
      } else {
        respuesta.innerHTML = `
          <div class="alert alert-danger">Ocurrió un error al enviar el mensaje.</div>
        `;
      }
    };

    xhr.onerror = function () {
      respuesta.innerHTML = `
        <div class="alert alert-danger">Error de conexión. Inténtalo más tarde.</div>
      `;
    };

    // Enviar los datos
    xhr.send(JSON.stringify(datos));
  });
}
