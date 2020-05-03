const API_BASE = '/api/v1'
const products = document.getElementById('products')

fetch(`${API_BASE}/products`)
    .then((stream) => stream.json())
    .then((res) => render(res))
    .catch((err) => console.log(err))