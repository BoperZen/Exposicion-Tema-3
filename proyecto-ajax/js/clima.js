
function obtenerClima(ciudad, callback) {
    const apiKey = "c5dbec54f1e97fdacf3db2e71c7ff01f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(ciudad)}&appid=${apiKey}&units=metric&lang=es`;

    // Aplicamos AJAX usando XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            callback(null, data); // Llamo al callback con los datos para saber que todo salió bien
        } else {
            callback(`Error: ${xhr.status} ${xhr.statusText}`); // Llamamos al callback con el error si saber que hubo un problema
        }
    };
    xhr.onerror = function () {
        callback("Error de red al intentar conectar con la API."); // Llamamos al Callback en caso de error de red
    };
    xhr.send();
}

function initClima() {
    const form = document.getElementById("formClima");
    const resultado = document.getElementById("resultadoClima");

    // Usamos un callback en el evento submit del formulario
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const ciudad = document.getElementById("ciudad").value.trim();
        console.log("Ciudad ingresada:", ciudad);

        // Llamamos a obtenerClima y le pasamos un callback para manejar la respuesta
        obtenerClima(ciudad, function (error, datos) {
            if (error) {
                resultado.innerHTML = `<p class="text-danger">${error}</p>`;
                resultado.classList.remove("d-none");
                return;
            }

            const clima = datos.weather[0].description;
            const temp = datos.main.temp;
            const nombre = datos.name;

            let fondo = "";
            let colorTexto = '#fff';
            switch (clima) {
                case "llovizna ligera":
                    fondo = "url('imgs/Ra.gif')";
                    break;
                case "lluvia ligera":
                    fondo = "url('imgs/lluvia.gif')";
                    break
                case "nubes":
                    fondo = "url('imgs/nubes.gif')";
                    break;
                case "cielo claro":
                    fondo = "url('imgs/cielo.gif')";
                    colorTexto = '#222';
                    break;
                case "snow":
                    fondo = "url('imgs/nieve.gif')";
                    break;
                case "thunderstorm":
                    fondo = "url('imgs/tormenta.gif')";
                    break;
                default:
                    fondo = "url('imgs/default.gif')";
                    break;
            }

            resultado.innerHTML = `
        <h4>${nombre}</h4>
        <p><strong>Clima:</strong> ${clima}</p>
        <p><strong>Temperatura:</strong> ${temp} °C</p>
      `;
            resultado.classList.remove("d-none");

            resultado.style.backgroundImage = fondo;
            resultado.style.backgroundSize = "cover";
            resultado.style.backgroundPosition = "center";
            resultado.style.color = colorTexto;
            resultado.style.padding = "2rem";
            resultado.style.borderRadius = "10px";
            resultado.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
        });
    });
}