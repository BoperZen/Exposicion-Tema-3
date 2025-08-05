// API Rest
function LlamadoFetch() {
    fetch('https://jsonplaceholder.typicode.com/posts/5')
        .then(response => response.json())
        .then(data => {
            document.getElementById('result-fetch').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('result-fetch').textContent = 'Error: ' + error;
        });
}

function LlamadoXHR() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/3');
    xhr.onload = function () {
        if (xhr.status === 200) {
            document.getElementById('result-xhr').textContent = JSON.stringify(JSON.parse(xhr.responseText), null, 2);
        } else {
            document.getElementById('result-xhr').textContent = 'Error: ' + xhr.status;
        }
    };
    xhr.onerror = function () {
        document.getElementById('result-xhr').textContent = 'Error de red';
    };
    xhr.send();
}

function LlamadoJquery() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/comments/7',
        method: 'GET',
        success: function(data) {
            $('#result-jquery').text(JSON.stringify(data, null, 2));
        },
        error: function(xhr, status, error) {
            $('#result-jquery').text('Error: ' + error);
        }
    });
}

// Web RESTful (CRUD)
function Get() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(data => document.getElementById('result-get').textContent = JSON.stringify(data, null, 2));
}
function Post() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 })
    })
    .then(res => res.json())
    .then(data => document.getElementById('result-post').textContent = JSON.stringify(data, null, 2));
}
function Put() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: 1, title: 'foo', body: 'bar', userId: 1 })
    })
    .then(res => res.json())
    .then(data => document.getElementById('result-put').textContent = JSON.stringify(data, null, 2));
}
function Delete() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'DELETE' })
    .then(res => document.getElementById('result-delete').textContent = 'Recurso eliminado, código: ' + res.status);
}

// Asynchronous JavaScript (AJAX)

// Estructura de Mensaje JSON
