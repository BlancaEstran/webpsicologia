/* revelar.js · Reveal al scroll para los elementos .rev
   Sistema de diseño v16: opacity + 12px, .55s ease-out, una sola vez.
   Respeta prefers-reduced-motion tanto en CSS (tokens.css) como aquí. */

(function () {
  'use strict';

  var elementos = document.querySelectorAll('.rev');
  if (!elementos.length) return;

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Sin animación: se muestra todo de golpe y no se observa nada.
  // Lo mismo si el navegador no soporta IntersectionObserver: nunca contenido invisible.
  if (reduce || !('IntersectionObserver' in window)) {
    for (var i = 0; i < elementos.length; i++) elementos[i].classList.add('vis');
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('vis');
        io.unobserve(e.target);
      }
    });
  }, { threshold: .12 });

  for (var j = 0; j < elementos.length; j++) io.observe(elementos[j]);
})();
