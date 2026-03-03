// ===== Storage keys =====
const STORAGE_CART = "miniehandel_cart_count";
const STORAGE_THEME = "miniehandel_theme";

// ===== Cart helpers =====
function setCartCount(n) {
  localStorage.setItem(STORAGE_CART, String(n));
  const el = document.querySelector("[data-cart-count]");
  if (el) el.textContent = String(n);
}

function getCartCount() {
  const raw = localStorage.getItem(STORAGE_CART);
  const n = Number(raw);
  return Number.isFinite(n) ? n : 0;
}

// ===== Theme helpers =====
function applyTheme(mode) {
  // mode: "dark" | "light"
  document.body.dataset.theme = mode;
  localStorage.setItem(STORAGE_THEME, mode);
}

function getSavedTheme() {
  const mode = localStorage.getItem(STORAGE_THEME);
  return mode === "light" ? "light" : "dark";
}

// ===== Feature: live filter (index.html) =====
function initLiveFilter() {
  const filter = document.querySelector("[data-filter]");
  if (!filter) return;

  filter.addEventListener("input", () => {
    const q = filter.value.toLowerCase().trim();

    document.querySelectorAll("[data-product]").forEach((card) => {
      const text = (card.getAttribute("data-product") || "").toLowerCase();
      card.style.display = text.includes(q) ? "" : "none";
    });
  });
}

// ===== Feature: theme toggle (all pages) =====
function initThemeToggle() {
  const btn = document.querySelector("[data-theme-toggle]");
  if (!btn) return;

  // Apply saved theme at startup
  applyTheme(getSavedTheme());

  btn.addEventListener("click", () => {
    const current = document.body.dataset.theme === "light" ? "light" : "dark";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
  });
}

// ===== Feature: add-to-cart (page2.html) =====
function initAddToCart() {
  const form = document.querySelector("[data-add-to-cart-form]");
  if (!form) return;

  const status = document.querySelector("[data-status]");
  const addBtn = document.querySelector("[data-add-btn]");

  function getSelectedSize() {
    const checked = form.querySelector('input[name="size"]:checked');
    return checked ? checked.value : null;
  }

  // Start: disabled until size chosen
  if (addBtn) addBtn.disabled = true;

  form.addEventListener("change", () => {
    const size = getSelectedSize();

    if (!status || !addBtn) return;

    if (size) {
      status.textContent = `Vald storlek: ${size}. Klicka för att lägga i varukorg.`;
      addBtn.disabled = false;
    } else {
      status.textContent = "Välj en storlek för att kunna lägga i varukorg.";
      addBtn.disabled = true;
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const size = getSelectedSize();
    if (!status || !addBtn) return;

    if (!size) {
      status.textContent = "Du måste välja en storlek först.";
      return;
    }

    const next = getCartCount() + 1;
    setCartCount(next);

    status.textContent = `✅ Lagt i varukorg (storlek: ${size}). Cart är nu ${next}.`;
  });
}

// ===== Init =====
function init() {
  // Always render cart count on load
  setCartCount(getCartCount());

  initThemeToggle();
  initLiveFilter();
  initAddToCart();
}

init();

document.addEventListener("DOMContentLoaded", () => {

  const sizeInputs = document.querySelectorAll("input[name='size']");
  const addBtn = document.getElementById("addToCartBtn");

  // Säkerställ att knappen är disabled från start
  addBtn.disabled = true;

  sizeInputs.forEach(input => {
    input.addEventListener("change", () => {
      addBtn.disabled = false;
    });
  });

});

