const toggleCartBtn = document.getElementById('toggle-cart');
const cartSidebar = document.getElementById('cart');
const cartItemsList = document.getElementById('cart-items');
const cartTotalDisplay = document.getElementById('cart-total');
const clearCartButton = document.getElementById('clear-cart');
const cartCountDisplay = document.getElementById('cart-count');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

toggleCartBtn.addEventListener('click', () => {
  cartSidebar.classList.toggle('open');
});

function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  renderCart();
  saveCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
  saveCart();
}

function updateQuantity(index, amount) {
  cart[index].quantity += amount;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  renderCart();
  saveCart();
}

function renderCart() {
  cartItemsList.innerHTML = '';
  let total = 0;
  let itemCount = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    const itemTotal = parseFloat(item.price.replace('$', '')) * item.quantity;
    total += itemTotal;
    itemCount += item.quantity;

    li.innerHTML = `
      ${item.name} - $${item.price} x ${item.quantity}
      <button onclick="updateQuantity(${index}, 1)">+</button>
      <button onclick="updateQuantity(${index}, -1)">-</button>
      <button onclick="removeFromCart(${index})">x</button>
    `;
    cartItemsList.appendChild(li);
  });

  cartTotalDisplay.textContent = total.toFixed(2);
  cartCountDisplay.textContent = itemCount;
}

function clearCart() {
  cart = [];
  renderCart();
  saveCart();
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Download cart as JSON file
function downloadCart() {
  const blob = new Blob([JSON.stringify(cart, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'cart.json';
  a.click();
  URL.revokeObjectURL(url);
}

clearCartButton.addEventListener('click', clearCart);

// Optional: add download button
const downloadBtn = document.createElement('button');
downloadBtn.textContent = "Download Cart";
downloadBtn.addEventListener('click', downloadCart);
cartSidebar.appendChild(downloadBtn);

// Initial load
renderCart();
