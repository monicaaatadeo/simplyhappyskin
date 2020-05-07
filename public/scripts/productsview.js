console.log('Products View');
const API_BASE = '/api/v1';
const productsView = document.getElementById('productsview');
const productId = window.location.pathname.split('/')[2];

function getOneProduct() {
    fetch(`${API_BASE}/products/${productId}`)
    .then((stream) => stream.json())
    .then((res) => render(res))
    .catch((err) => console.log(err))
}

getOneProduct();

function render(productObject) {
    console.log('Rendering products', productObject);
    const productTemplate = getItemCards(productObject);
    productsView.innerHTML = '';
    productsView.insertAdjacentElement('beforeend', productTemplate)
}

function getItemCards(product) {
    return `
    <div class="container-fluid">
    <div class="row">
        <div class="col-12 mt-3">
            <div class="card">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img class="" src="${product.image}" alt="Card image cap">
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