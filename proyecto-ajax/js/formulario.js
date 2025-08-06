
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

    // Mostrar el mensaje mientras se envía
    respuesta.innerHTML = `<div class="alert alert-info">Enviando mensaje...</div>`;

    // Aquí aplicamos AJAX usando fetch para enviar los datos al servidor
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify(datos)
    })
    .then(res => {
      if (!res.ok) throw new Error("Error en la red");
      return res.json();
    })
    .then(data => {
      console.log("Respuesta recibida:", data);
      respuesta.innerHTML = `
        <div class="alert alert-success">Mensaje enviado correctamente. Gracias, ${datos.nombre}.</div>
      `;
      form.reset();
      form.classList.remove("was-validated");
    })
    .catch(err => {
      respuesta.innerHTML = `
        <div class="alert alert-danger">Error al enviar el formulario.</div>
      `;
      console.error("Error en el formulario:", err);
    });
  });
}
