// fetch es una función de JavaScript que permite pedir archivos o datos a un servidor de forma sencilla y asíncrona.
// Por ejemplo, fetch('menu/menu-html.html') carga ese archivo y luego puedes usar su contenido en tu web.
// Es muy útil para cargar menús, datos o recursos externos sin recargar la página.
document.addEventListener("DOMContentLoaded", function () {
  // Carga el menú de HTML y lo inserta en el contenedor correspondiente
  fetch("menu/menu-html.html")
    .then(function (respuesta) {
      return respuesta.text();
    })
    .then(function (html) {
      document.getElementById("sidebar-menu-html").innerHTML = html;
    });

  // Carga el menú de CSS y lo inserta en el contenedor correspondiente
  fetch("menu/menu-css.html")
    .then(function (respuesta) {
      return respuesta.text();
    })
    .then(function (html) {
      document.getElementById("sidebar-menu-css").innerHTML = html;
    });

  // Carga el menú de JavaScript y lo inserta en el contenedor correspondiente
  fetch("menu/menu-js.html")
    .then(function (respuesta) {
      return respuesta.text();
    })
    .then(function (html) {
      document.getElementById("sidebar-menu-js").innerHTML = html;
    });
});
