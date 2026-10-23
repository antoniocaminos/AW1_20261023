const input = document.getElementById("nombre");
const saludo = document.getElementById("saludo");

// 1. Al cargar, si hay nombre guardado, mostrarlo
function mostrarSaludo() {
  const nombre = localStorage.getItem("nombre");
  if (nombre) {
    saludo.textContent = "Hola, " + nombre;
  } else {
    saludo.textContent = "";
  }
}
mostrarSaludo();

// 2. Guardar
document.getElementById("guardar").addEventListener("click", () => {
  const valor = input.value.trim();
  if (valor === "") return;
  localStorage.setItem("nombre", valor);
  mostrarSaludo();
});

// 3. Olvidar
document.getElementById("olvidar").addEventListener("click", () => {
  localStorage.removeItem("nombre");
  input.value = "";
  mostrarSaludo();
});