
document.addEventListener("DOMContentLoaded", () => {
  const enlaces = document.querySelectorAll("a[data-page]");
  const contenedor = document.getElementById("contenido");

  
  function cargarSeccion(pagina) {
    // Aplicamos AJAX usando fetch para obtener el HTML de la sección
    fetch(`secciones/${pagina}.html`)
      .then(res => res.text()) // Callback para procesar la respuesta
      .then(html => {
        contenedor.innerHTML = html;

        // Preparamos el script JS asociado a la sección
        const script = document.createElement("script");
        script.src = `js/${pagina}.js`;
        script.defer = true;

        // Verificamos si el script existe usando AJAX (fetch)
        fetch(script.src)
          .then(response => {
            if (response.ok) {
              document.body.appendChild(script);
              // Cuando el script termina de cargar, llamamos a la función de inicialización si existe
              script.onload = () => {
                if (pagina === "formulario" && typeof initFormulario === "function") {
                  console.log("Script cargado y llamando a initFormulario()");
                  initFormulario();
                }
                if (pagina === "superheroes" && typeof initSuperheroes === "function") {
                  initSuperheroes();
                }
                if (pagina === "clima" && typeof initClima === "function") {
                  initClima();
                }
              };
            } else {
              console.warn(`El script ${script.src} no existe.`);
            }
          })
          .catch(error => {
            console.warn(`Error al verificar script para ${pagina}:`, error);
          });
      })
      .catch(() => {
        contenedor.innerHTML = `
          <div class="alert alert-danger">No se pudo cargar la sección <strong>${pagina}</strong>.</div>
        `;
      });
  }

  // Asignamos eventos a los enlaces de navegación para cargar secciones usando AJAX
  enlaces.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      enlaces.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      const pagina = link.getAttribute("data-page");
      cargarSeccion(pagina);
    });
  });

  // Se carga la sección de inicio por defecto al cargar la página
  cargarSeccion("inicio");
});
