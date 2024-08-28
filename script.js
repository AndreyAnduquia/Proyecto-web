const mejoresHamburguesas = document.querySelector(".container-products");

function getProducts() {
  fetch("http://localhost:8000/api/v1/products")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      mejoresHamburguesas.innerHTML = data.results
        .map((item) => {

          const fullStars = '<i class="fa-solid fa-star"></i>'.repeat(item.stars);
          const emptyStars = '<i class="fa-regular fa-star"></i>'.repeat(5 - item.stars);

          return `
            <div class="card-product" id="${item.id}">
              <div class="container-img">
                <img src="${item.img_url}" alt="Prueba" />
  
                <div class="button-group">
                  <span>
                    <i class="fa-regular fa-eye"></i>
                  </span>
                  <span>
                    <i class="fa-regular fa-heart"></i>
                  </span>
                  <span>
                    <i class="fa-solid fa-code-compare"></i>
                  </span>
                </div>
              </div>
              <div class="content-card-product">
                <div class="stars">
                  ${fullStars + emptyStars}
                </div>
                <h3>${item.name}</h3>
                <span class="add-card">
                  <i class="fa-solid fa-basket-shopping"></i>
                </span>
                <p class="price">$${item.price}</p>
              </div>
            </div>
        `;
        })
        .join("");
    })
    .catch((e) => {
      console.log(e);
    });
}

getProducts();
