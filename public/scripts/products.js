const API_BASE = '/api/v1'
const products = document.getElementById('products')

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
        return s
        `
              <div class="col-md-4 mb-4">
              <div id="${product._id}" class="card  shadow-lg p-3 mb-5 bg-white rounded ">
                <img src="${product.image}" class="card-img-top" alt="${product.name}" />
                <div class="card-body">
                  <h5 class="card-title">
                    ${product.name}
                  </h5>
                  <p class="card-text">${product.description}</p>
                  <a href="/products/${product._id}" class="btn  btn-outline-info float-right">View</a>
                </div>
              </div>
            </div>
        `

      }