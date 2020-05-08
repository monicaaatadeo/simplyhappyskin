console.log('Profile');
const API_BASE = '/api/v1';
const products = document.getElementById('products');
const productId = window.location.pathname.split('/')[2];
console.log('Product ID = ', productId);

function getOneProduct() {
    fetch(`${API_BASE}/products/${productId}/add`)
    .then((stream) => stream.json())
    .then((res) => render(res))
    .catch((err) => console.log(err));
}
getOneProduct();

function render(prodObj) {
    console.log('Rendering products', prodObj);
    const productTemplate = getProductTemplate(prodObj);
    products.innerHTML = '';
    products.insertAdjacentElement('beforeend', productTemplate)
}

function getProductTemplate(product) {
    return `
    <div class="container-fluid">
    <div class="row">
        <div class="col-12 mt-3">
            <div class="card">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img src="${product.image}" class = "img-fluid mb-3" alt="Card image cap">
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">${product.name}</h4>
                        <p class="card-text">${product.type}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `
}


