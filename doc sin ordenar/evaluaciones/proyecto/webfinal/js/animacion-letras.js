// animacion-letras.js
function scrambleText(el, text, speed = 60) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let iterations = 0;
  let interval = setInterval(() => {
    el.textContent = text
      .split("")
      .map((c, i) => {
        if (i < iterations) return text[i];
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");
    if (iterations >= text.length) clearInterval(interval);
    iterations += 0.5; // Más rápido
  }, speed); // Intervalo más corto
}
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-scramble]").forEach((el) => {
    const original = el.getAttribute("data-scramble");
    scrambleText(el, original);
    el.addEventListener("mouseenter", () => scrambleText(el, original));
  });
});
