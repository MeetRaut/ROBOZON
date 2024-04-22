let dropdownBtnText = document.getElementById("drop-text");
let span = document.getElementById("span");
let icon = document.getElementById("icon");
let list = document.getElementById("list");
let input = document.getElementById("search-input");
let listItems = document.querySelectorAll(".dropdown-list-item");

dropdownBtnText.onclick = function () {
  list.classList.toggle("show");
  icon.style.rotate = "-180deg";
};

window.onclick = function (e) {
  if (
    e.target.id !== "drop-text" &&
    e.target.id !== "icon" &&
    e.target.id !== "span"
  ) {
    list.classList.remove("show");
    icon.style.rotate = "0deg";
  }
};

for (item of listItems) {
  item.onclick = function (e) {
    span.innerText = e.target.innerText;
  };
}






document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const dropdownText = document.getElementById('drop-text');
  const productList = document.querySelector('.products-container');

  // Search input event listener
  searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = dropdownText.textContent.toLowerCase();

    const filteredProducts = products.filter(product => {
      // Check if the product name or category matches the search term and selected category
      return (product.name.toLowerCase().includes(searchTerm) || 
              product.category.toLowerCase().includes(searchTerm)) &&
             (selectedCategory === 'everything' || product.category.toLowerCase() === selectedCategory);
    });

    displayFilteredProducts(filteredProducts);
  });

  // Dropdown list item click event listener
  document.querySelectorAll('.dropdown-list-item').forEach(item => {
    item.addEventListener('click', function() {
      dropdownText.textContent = item.textContent;
      const searchTerm = searchInput.value.toLowerCase();

      const filteredProducts = products.filter(product => {
        // Check if the product name or category matches the search term and selected category
        return (product.name.toLowerCase().includes(searchTerm) || 
                product.category.toLowerCase().includes(searchTerm)) &&
               (item.textContent.toLowerCase() === 'everything' || product.category.toLowerCase() === item.textContent.toLowerCase());
      });

      displayFilteredProducts(filteredProducts);
    });
  });
});

// Function to display filtered products
function displayFilteredProducts(filteredProducts) {
  const productContainer = document.querySelector('.products-container');
  if (!productContainer) {
    console.error("Product container not found!");
    return;
  }
  
  let productHTML = '';
  filteredProducts.forEach(product => {
      productHTML += generateProductHTML(product);
  });
  productContainer.innerHTML = productHTML;
}
