console.log('Profile');
const API_BASE = '/api/v1';
const products = document.getElementById('products');
const productId = window.location.pathname.split('/')[3];
console.log('Product ID = ', productId);

function getOneProduct() {
    fetch(`${API_BASE}/profile/add/${productId}`)
    .then((stream) => stream.json())
    .then((res) => render(res))
    .catch((err) => console.log(err));
};

getOneProduct();

function render(prodObj) {
    console.log('Rendering products', prodObj);
    const productTemplate = getProductTemplate(prodObj);
    products.innerHTML = '';
    products.insertAdjacentHTML('beforeend', productTemplate)
}

function getProductTemplate(product) {
    return `
    <div class="col-md-4 mb-4">
    <div id="${product._id}" class="card  shadow-lg p-3 mb-5 bg-white rounded ">
      <img src="${product.image}" class="card-img-top" alt="${product.name}" />
      <div class="card-body">
        <h5 class="card-title">
          ${product.name}
        </h5>
        <p class="card-text">Type: ${product.type}</p>
        <p class="card-text">Skin Type: ${product.skin_type}</p>
    
      </div>
    </div>
  </div>
    `
}


