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
   <span class="close">&times;</span>
    <img src="${product.image}" class="card-img-top" alt="${product.name}" />
      <div class="card-body">
        <h5 class="card-title">
          ${product.name}
        </h5>
        <p class="card-text">Type: ${product.type}</p>
        <p class="card-text">Skin Type: ${product.skin_type}</p>
        <a href="${product.link}" target = "_blank" class="btn  btn-outline-info float-right">Buy Here</a>
      </div>
    </div>
  </div>
    `
}

//  

products.addEventListener('click', (event) => {
  if (event.target.classList.contains('close')) {
    deleteProduct(event);
  }
})

function deleteProduct(event) {
  const prodId = event.target.parentNode.id
  console.log('Deleting product ID = ', prodId) //works

  fetch(`${API_BASE}/products/add/${productId}/${prodId}`, {
    method: "DELETE",
  })
  .then((stream) => stream.json())
  .then((res) => {
    getOneProduct();
  })
  .catch((err) => console.log(err))
}