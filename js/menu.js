// Carga el menú lateral desde js-menu.html y lo inserta en el elemento con id 'sidebar-menu'
document.addEventListener("DOMContentLoaded", function () {
  fetch("menu/menu-js.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("sidebar-menu").innerHTML = html;
    });
});
