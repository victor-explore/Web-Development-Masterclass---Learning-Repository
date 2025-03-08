document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements
  const productList = document.querySelector(".product-list"); // Get the product list container element
  const cartItems = document.getElementById("cart-items"); // Get the cart items container element
  const totalElement = document.getElementById("total"); // Get the total price element
  const checkoutBtn = document.getElementById("checkout-btn"); // Get the checkout button element
  const emptyCartMessage = document.getElementById("empty-cart"); // Get the empty cart message element

  // Sample products data
  const products = [
    { id: 1, name: "Product 1", price: 10 }, // Product 1 with id, name and price
    { id: 2, name: "Product 2", price: 20 }, // Product 2 with id, name and price
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 40 },
    { id: 5, name: "Product 5", price: 50 },
  ];

  // Initialize empty shopping cart array
  let cart = [];

  // Function to render all products on the page
  function renderProducts() {
    productList.innerHTML = ""; // Clear the product list container
    products.forEach((product) => {
      // Loop through each product
      const productElement = document.createElement("div"); // Create a div for the product
      productElement.classList.add("product"); // Add product class for styling
      productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
      `; // Add product details and add to cart button
      productList.appendChild(productElement); // Add the product element to the list
    });

    // Add event listeners to all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart"); // Get all add to cart buttons
    addToCartButtons.forEach((button) => {
      // Loop through each button
      button.addEventListener("click", () => {
        // Add click event listener
        const productId = parseInt(button.getAttribute("data-id")); // Get product id from button
        addToCart(productId); // Add the product to cart
      });
    });
  }

  // Function to add product to cart
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId); // Find the product by id
    cart.push(product); // Add product to cart array
    updateCart(); // Update cart display
  }

  // Function to update cart display
  function updateCart() {
    cartItems.innerHTML = ""; // Clear cart items container
    emptyCartMessage.classList.toggle("hidden", cart.length > 0); // Show/hide empty cart message

    cart.forEach((item, index) => {
      // Loop through cart items
      const cartItem = document.createElement("div"); // Create div for cart item
      cartItem.classList.add("cart-item"); // Add cart-item class for styling
      cartItem.innerHTML = `
        <span>${item.name} - $${item.price.toFixed(2)}</span>
        <button class="remove-item" data-index="${index}">Remove</button>
      `; // Add item details and remove button
      cartItems.appendChild(cartItem); // Add item to cart display
    });

    // Add event listeners to remove buttons
    const removeButtons = document.querySelectorAll(".remove-item"); // Get all remove buttons
    removeButtons.forEach((button) => {
      // Loop through remove buttons
      button.addEventListener("click", () => {
        // Add click event listener
        const index = parseInt(button.getAttribute("data-index")); // Get item index
        removeFromCart(index); // Remove item from cart
      });
    });

    updateTotal(); // Update total price
  }

  // Function to remove item from cart
  function removeFromCart(index) {
    cart.splice(index, 1); // Remove item from cart array
    updateCart(); // Update cart display
  }

  // Function to update total price
  function updateTotal() {
    const total = cart.reduce((sum, item) => sum + item.price, 0); // Calculate total price
    totalElement.textContent = total.toFixed(2); // Update total display
  }

  // Add click event listener to checkout button
  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      // Check if cart is empty
      alert("Your cart is empty!"); // Show alert if cart is empty
      return;
    }
    alert("Thank you for your purchase!"); // Show success message
    cart = []; // Clear cart
    updateCart(); // Update cart display
  });

  // Initial render of products
  renderProducts(); // Render products when page loads
});
