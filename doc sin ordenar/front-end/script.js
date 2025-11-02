/**
 * ==========================================
 * ACORDEÓN SIMPLE - VERSIÓN PARA APRENDER
 * ==========================================
 * Código súper simple para principiantes
 */

// Lista simple de emojis (fácil de entender y cambiar)
var emojis = [
  "📖", // Introducción
  "⚙️", // Uso
  "📦", // Variables
  "📝", // Textos
  "🔢", // Números
  "📋", // Arrays
  "✅", // Booleanos
  "🔀", // Control de flujo
  "⚡", // Funciones
  "💪", // Ejercicios básicos
  "🔧", // Otros objetos
  "🏗️", // DOM
  "👨‍👩‍👧‍👦", // DOM parentesco
  "👂", // Eventos
  "🎯", // Event Listener
  "🗓️", // Fechas
  "📅", // Fechas
  "🎨", // Canvas
];

// Lista de IDs para cada artículo
var idsArticulos = ["js-intro", "js-uso", "js-variables", "js-textos", "js-numeros", "js-arrays", "js-booleanos", "js-control-flujo", "js-funciones", "js-ejercicios-basicos", "js-otros-objetos", "js-dom", "js-dom-parentesco", "js-eventos", "js-event-listener", "js-this", "js-fechas"];

// Cuando la página cargue, crear el acordeón
document.addEventListener("DOMContentLoaded", function () {
  crearAcordeonSimple();
  restaurarEstado();
  configurarScrollPegajoso(); // Nueva función para el scroll
});

/**
 * FUNCIÓN PRINCIPAL: Crear acordeón de manera simple
 */
function crearAcordeonSimple() {
  // Buscar todos los artículos
  var articulos = document.querySelectorAll("article");

  // Crear acordeón para cada artículo
  for (var i = 0; i < articulos.length; i++) {
    var articulo = articulos[i];
    var titulo = articulo.querySelector("h2");

    // Si no hay título, saltar este artículo
    if (!titulo) continue;

    // Crear el header clickeable
    var header = document.createElement("div");
    header.className = "article-header";
    header.id = idsArticulos[i] || "article-" + i;

    // Crear el contenido del header por partes (más fácil de leer)
    var emoji = emojis[i] || "📚";
    var textoTitulo = titulo.textContent;

    // prettier-ignore
    header.innerHTML = 
      '<h2 class="article-title">' +
        '<span class="article-number">' + emoji + '</span>' +
        textoTitulo +
      '</h2>' +
      '<span class="toggle-icon">▼</span>';

    // Crear contenedor para el contenido
    var contenedor = document.createElement("div");
    contenedor.className = "article-content";

    // Mover todo el contenido al contenedor
    while (articulo.firstChild) {
      contenedor.appendChild(articulo.firstChild);
    }

    // Ocultar el título original
    titulo.style.display = "none";

    // Añadir header y contenedor al artículo
    articulo.appendChild(header);
    articulo.appendChild(contenedor);

    // Añadir evento de click
    header.addEventListener("click", function () {
      toggleAcordeon(this.parentElement);
    });
  }
}

/**
 * Abrir o cerrar un acordeón
 */
function toggleAcordeon(articulo) {
  var contenido = articulo.querySelector(".article-content");
  var header = articulo.querySelector(".article-header");
  var icono = articulo.querySelector(".toggle-icon");

  // Si está abierto, cerrarlo
  if (contenido.classList.contains("expanded")) {
    contenido.classList.remove("expanded");
    header.classList.remove("pegajoso"); // Quitar pegajoso al cerrar
    icono.innerHTML = "▼";
  }
  // Si está cerrado, abrirlo
  else {
    contenido.classList.add("expanded");
    header.classList.add("pegajoso"); // Añadir pegajoso al abrir
    icono.innerHTML = "▲";

    // Hacer scroll suave
    setTimeout(function () {
      articulo.scrollIntoView({ behavior: "smooth" });
    }, 200);
  }

  // Guardar estado
  guardarEstado();
}

/**
 * Guardar estado en navegador
 */
function guardarEstado() {
  var estado = [];
  var articulos = document.querySelectorAll("article");

  for (var i = 0; i < articulos.length; i++) {
    var contenido = articulos[i].querySelector(".article-content");
    estado[i] = contenido && contenido.classList.contains("expanded");
  }

  localStorage.setItem("acordeon-estado", JSON.stringify(estado));
}

/**
 * Restaurar estado guardado
 */
function restaurarEstado() {
  try {
    var estado = JSON.parse(localStorage.getItem("acordeon-estado") || "[]");
    var articulos = document.querySelectorAll("article");

    for (var i = 0; i < articulos.length; i++) {
      if (estado[i]) {
        toggleAcordeon(articulos[i]);
      }
    }
  } catch (error) {
    console.log("No se pudo restaurar el estado");
  }
}

/**
 * NUEVA FUNCIÓN: Configurar scroll pegajoso SÚPER SIMPLE
 */
function configurarScrollPegajoso() {
  // Escuchar cuando se haga scroll
  window.addEventListener("scroll", function () {
    // Buscar todos los acordeones que están abiertos
    var articulos = document.querySelectorAll("article");

    // Revisar cada artículo uno por uno
    for (var i = 0; i < articulos.length; i++) {
      var articulo = articulos[i];
      var header = articulo.querySelector(".article-header");
      var contenido = articulo.querySelector(".article-content");

      // Solo revisar si este acordeón está abierto
      if (header.classList.contains("pegajoso")) {
        // Obtener posiciones (simple y claro)
        var inicioArticulo = articulo.offsetTop;
        var altoHeader = header.offsetHeight;
        var altoContenido = contenido.offsetHeight;
        var finArticulo = inicioArticulo + altoHeader + altoContenido - 100;
        var scrollActual = window.pageYOffset;

        // Decidir si pegar o despegar
        if (scrollActual >= inicioArticulo && scrollActual < finArticulo) {
          // Estoy dentro del artículo → pegar arriba
          header.classList.add("pegado-arriba");
        } else {
          // Estoy fuera del artículo → despegar
          header.classList.remove("pegado-arriba");
        }
      }
    }
  });
}
