function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

function openTab(tabId) {
  // Oculta todas las pestañas
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach((tab) => tab.classList.remove("active"));

  // Muestra la pestaña seleccionada
  const selected = document.getElementById(tabId);
  if (selected) {
    selected.classList.add("active");
  }

  // Cierra el menú (modo móvil)
  document.getElementById("menu").classList.remove("show");
}

// Muestra una pestaña por defecto al cargar la página
window.onload = () => {
  openTab("webprecios"); // Puedes cambiar a la pestaña que desees por defecto
};

// Cierra el menú si se hace clic fuera
window.addEventListener("click", function (e) {
  const menu = document.getElementById("menu");
  const hamburger = document.querySelector(".hamburger");

  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove("show");
  }
});
