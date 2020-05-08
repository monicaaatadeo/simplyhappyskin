const API_BASE = '/api/v1';
const products = document.getElementById('products');

fetch(`${API_BASE}/products`)
    .then((stream) => stream.json())
    .then((res) => render(res))
    .catch((err) => console.log(err))

    function render(productsArray) {
        const productTemplate = productsArray
          .map((product) => getProductTemplate(product))
          .join("")
        products.insertAdjacentHTML("beforeend", productTemplate)
      }

      
      function getProductTemplate(product) {
        console.log('Displaying Cards..')
        return ` <div class="col-md-4 mb-4">
              <div id="${product._id}" class="card  shadow-lg p-3 mb-5 bg-white rounded ">
                <img src="${product.image}" class="card-img-top" alt="${product.name}" />
                <div class="card-body">
                  <h5 class="card-title">
                    ${product.name}
                  </h5>
                  <p class="card-text">Type: ${product.type}</p>
                  <p class="card-text">Skin Type: ${product.skin_type}</p>
                  <a href="/profile/add/${product._id}" class="btn  btn-outline-info float-right">Add to Routine</a>
                </div>
              </div>
            </div>
        `

      }

