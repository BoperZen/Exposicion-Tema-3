
async function initSuperheroes() {
  const container = document.getElementById("superheroes");
  if (!container) return;

  const token = "9706f6586c55139596c4e963b5fda815"; 
  const heroesId = [70, 644, 346, 659, 720, 100, 150, 80, 690]; 

  const coloresPorId = {
    70:  "#212121",
    644: "#387293",
    346: "#b6232f",
    659: "#05333d",
    720: "#c6b7ca",
    100: "#3d3d43",
    150: "#785fa6",
    80: "#c37f3c",
    690: "#2f3567",
  };

  // Aplicamos AJAX usando fetch para cada ID de superhéroe
  for (const id of heroesId) {
    try {
      const res = await fetch(`https://superheroapi.com/api.php/${token}/${id}`); // Petición AJAX
      const hero = await res.json(); // Esperamos la respuesta

      const colorFondo = coloresPorId[id] || '#2c2c2c';

      const card = document.createElement("div");
      card.className = "col";
      card.style.backgroundColor = colorFondo;
      card.style.border = "none";
      card.innerHTML = `
        <div class="card h-100 text-white" style="background-color:${colorFondo};">
          <img src="${hero.image.url}" class="card-img-top" alt="${hero.name}">
          <div class="card-body">
            <h5 class="card-title">${hero.name}</h5>
            <p class="card-text"><strong>Fuerza:</strong> ${hero.powerstats.strength}</p>
            <p class="card-text"><strong>Inteligencia:</strong> ${hero.powerstats.intelligence}</p>
          </div>
        </div>
      `;
      container.appendChild(card);

    } catch (error) {
      // Si ocurre un error en la petición AJAX, lo mostramos en la consola
      console.error(`Error cargando héroe con ID ${id}:`, error);
    }
  }
}
