async function getData(req, res, next) {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;

  const result = products
    .map(function (product) {
      return `
      <div class="product-items">
      <img src=${product.thumbnail} alt="thumbnail"/>
      <div class="row">
      <h4>${product.title}</h2>
      <p>Price: ${product.price}</p>
      </div>
      </div>`;
    })
    .join("");

  document.querySelector(".products").innerHTML = result;
}

getData();
