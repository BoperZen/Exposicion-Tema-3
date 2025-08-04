document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#contenido");

  fetch("js/publicaciones.json")
    .then(res => res.json())
    .then(data => {
      const cards = data.map((pub, index) => `
        <div class="col">
          <div class="card h-100 shadow-sm">
            <img src="${pub.imagen}" class="card-img-top" alt="${pub.titulo}">
            <div class="card-body">
              <h5 class="card-title">${pub.titulo}</h5>
              <p class="card-text">${pub.descripcion}</p>
            </div>
            <div class="card-footer text-end bg-transparent border-top-0">
              <button class="btn btn-outline-info btn-sm" data-index="${index}" data-bs-toggle="modal" data-bs-target="#modalPublicacion">Leer más</button>
            </div>
          </div>
        </div>
      `).join("");

      container.innerHTML = `
        <section class="container">
          <h2 class="mb-4 text-primary-emphasis">Últimas Publicaciones</h2>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            ${cards}
          </div>
        </section>

        <!-- Modal -->
        <div class="modal fade" id="modalPublicacion" tabindex="-1" aria-labelledby="modalTitulo" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalTitulo">Título</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
              </div>
              <div class="modal-body" id="modalContenido">
                Cargando contenido...
              </div>
            </div>
          </div>
        </div>
      `;

   
      const botones = container.querySelectorAll("button[data-index]");
      botones.forEach(btn => {
        btn.addEventListener("click", () => {
          const i = parseInt(btn.getAttribute("data-index"));
          document.getElementById("modalTitulo").textContent = data[i].titulo;
          document.getElementById("modalContenido").innerHTML = `
            <p>${data[i].contenido}</p>
            <img src="${data[i].imagen}" alt="${data[i].titulo}" class="img-fluid rounded mt-3">
          `;
        });
      });
    })
    .catch(err => {
      container.innerHTML = `<div class="alert alert-danger">No se pudieron cargar las publicaciones.</div>`;
      console.error("Error al cargar publicaciones:", err);
    });
});
