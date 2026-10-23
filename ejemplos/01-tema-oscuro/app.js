const btn = document.getElementById("btnTema");

// 1. Al cargar la pagina, revisar si habia tema guardado
const temaGuardado = localStorage.getItem("tema");
if (temaGuardado === "dark") {
  document.body.classList.add("dark");
}

// 2. Al hacer clic, alternar y guardar el nuevo estado
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("tema", "dark");
  } else {
    localStorage.setItem("tema", "light");
  }
});