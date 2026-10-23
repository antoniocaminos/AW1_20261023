// --- Utilidades ---
function obtenerCarrito() {
  const data = sessionStorage.getItem("carrito");
  return data ? JSON.parse(data) : [];
}

function guardarCarrito(carrito) {
  sessionStorage.setItem("carrito", JSON.stringify(carrito));
}

function renderCarrito() {
  const carrito = obtenerCarrito();
  const ul = document.getElementById("carrito");
  ul.innerHTML = "";

  let total = 0;
  carrito.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.nombre + " - $" + item.precio;
    ul.appendChild(li);
    total += item.precio;
  });

  document.getElementById("total").textContent = total;
}

// --- Agregar productos ---
document.querySelectorAll(".agregar").forEach((btn) => {
  btn.addEventListener("click", () => {
    const carrito = obtenerCarrito();
    carrito.push({
      nombre: btn.dataset.nombre,
      precio: Number(btn.dataset.precio)
    });
    guardarCarrito(carrito);
    renderCarrito();
  });
});

// --- Vaciar ---
document.getElementById("vaciar").addEventListener("click", () => {
  sessionStorage.removeItem("carrito");
  renderCarrito();
});

// --- Al cargar ---
renderCarrito();