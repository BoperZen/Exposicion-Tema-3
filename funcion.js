// API Rest

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
