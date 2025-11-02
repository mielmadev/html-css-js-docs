// imagen-ampliar.js
(function () {
  const gallery = document.querySelector(".portfolio-galeria");
  if (!gallery) return;
  let images = Array.from(gallery.querySelectorAll("img"));
  let current = 0;
  // Crear overlay
  const overlay = document.createElement("div");
  overlay.className = "imagen-ampliar-overlay";
  overlay.innerHTML = `
    <span class="imagen-ampliar-cerrar">&times;</span>
    <img class="imagen-ampliar-img" src="" alt="" />
    <span class="imagen-ampliar-prev">&#10094;</span>
    <span class="imagen-ampliar-next">&#10095;</span>
  `;
  document.body.appendChild(overlay);
  const imgEl = overlay.querySelector(".imagen-ampliar-img");
  function show(idx) {
    current = idx;
    imgEl.src = images[current].src;
    imgEl.alt = images[current].alt;
    overlay.classList.add("active");
  }
  images.forEach((img, i) => {
    img.addEventListener("click", (e) => {
      e.preventDefault();
      show(i);
    });
  });
  overlay.querySelector(".imagen-ampliar-cerrar").onclick = () => overlay.classList.remove("active");
  overlay.querySelector(".imagen-ampliar-prev").onclick = (e) => {
    e.stopPropagation();
    show((current - 1 + images.length) % images.length);
  };
  overlay.querySelector(".imagen-ampliar-next").onclick = (e) => {
    e.stopPropagation();
    show((current + 1) % images.length);
  };
  overlay.onclick = (e) => {
    if (e.target === overlay) overlay.classList.remove("active");
  };
})();
