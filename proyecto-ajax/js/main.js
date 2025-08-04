document.addEventListener("DOMContentLoaded", () => {
  const enlaces = document.querySelectorAll("a[data-page]");
  const contenedor = document.getElementById("contenido");

  function cargarSeccion(pagina) {
    fetch(`secciones/${pagina}.html`)
      .then(res => res.text())
      .then(html => {
        contenedor.innerHTML = html;

 
        const script = document.createElement("script");
        script.src = `js/${pagina}.js`;
        script.defer = true;

        fetch(script.src)
          .then(response => {
            if (response.ok) {
              document.body.appendChild(script);
              script.onload = () => {
                if (pagina === "formulario" && typeof initFormulario === "function") {
                  console.log("Script cargado y llamando a initFormulario()");
                  initFormulario();
                }

                if (pagina === "superheroes" && typeof initSuperheroes === "function") {
                  initSuperheroes();
                }

                if(pagina === "clima" && typeof initClima === "function") 
                  {
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

  enlaces.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

     
      enlaces.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      const pagina = link.getAttribute("data-page");
      cargarSeccion(pagina);
    });
  });

  
  cargarSeccion("inicio");
});
