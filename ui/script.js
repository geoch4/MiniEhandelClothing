// ===== Storage key =====
const STORAGE_CART = "miniehandel_cart_count";

// ===== Cart helpers =====
function setCartCount(count) {
  localStorage.setItem(STORAGE_CART, String(count));

  const cartCounter = document.querySelector("[data-cart-count]");
  if (cartCounter) {
    cartCounter.textContent = String(count);
  }
}

function getCartCount() {
  const savedValue = localStorage.getItem(STORAGE_CART);
  const cartCount = Number(savedValue);

  return Number.isFinite(cartCount) ? cartCount : 0;
}

// ===== Feature: add-to-cart (page2.html) =====
function initAddToCart() {
  const form = document.querySelector("[data-add-to-cart-form]");
  if (!form) return;

  const status = document.querySelector("[data-status]");
  const addButton = document.querySelector("[data-add-btn]");

  if (!addButton || !status) return;

  function getSelectedSize() {
    const checkedSize = form.querySelector('input[name="size"]:checked');
    return checkedSize ? checkedSize.value : null;
  }

  // Button is disabled until a size is selected
  addButton.disabled = true;
  status.textContent = "Välj en storlek för att kunna lägga i varukorg.";

  form.addEventListener("change", () => {
    const selectedSize = getSelectedSize();

    if (selectedSize) {
      status.textContent = `Vald storlek: ${selectedSize}. Klicka för att lägga i varukorg.`;
      addButton.disabled = false;
    } else {
      status.textContent = "Välj en storlek för att kunna lägga i varukorg.";
      addButton.disabled = true;
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedSize = getSelectedSize();

    if (!selectedSize) {
      status.textContent = "Du måste välja en storlek först.";
      addButton.disabled = true;
      return;
    }

    const newCount = getCartCount() + 1;
    setCartCount(newCount);

    status.textContent = `Lagt i varukorg. Storlek: ${selectedSize}. Cart är nu ${newCount}.`;
  });
}

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  setCartCount(getCartCount());
  initAddToCart();
});