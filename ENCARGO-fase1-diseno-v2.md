# ENCARGO · Fase 1 (v2): sistema de diseño v16 — SITIO ESTÁTICO / GitHub Pages

Sustituye al encargo anterior, que asumía Astro+Vercel por error. El repo real es
HTML estático plano (index.html, estilo.css, carpetas por página, .nojekyll, CNAME).
Trabaja sobre esa realidad. NO migres a ningún framework: es decisión futura aparte.
Referencia visual que manda: `maquetas/home-v16.html`. Detente en cada STOP.

## Paso 0 — Documentación
- CLAUDE.md no existe: CRÉALO. Contenido: (a) contexto breve del proyecto (web de
  Blanca Estrán, psicóloga Col. M-42822, Majadahonda; repo estático en GitHub Pages;
  Fer coordina y aprueba; decisiones "CONGELADO" no se reabren; stop points
  obligatorios; nunca inventar datos, precios ni testimonios), y (b) el contenido
  íntegro de `CLAUDE-actualizacion-diseno-v16.md` como sección de diseño. Después
  borra el archivo temporal.
- `mapa-keywords-blancaestran.md`: Fer lo añadirá al repo (viene de otra sesión).
  Los pasos 1 y 2 no lo necesitan; el paso 3 sí. Si al llegar ahí no está, PARA y pídelo.

## Paso 1 — Assets
- Extrae de los data URI de `maquetas/home-v16.html`:
  - 3 woff2 → `/fuentes/` (playfair.woff2, montserrat.woff2, montserrat-italic.woff2)
  - imágenes → `/imagenes/` con nombres descriptivos: hero-flores-pajaro.jpg,
    lamina-sol.jpg, lamina-textura-dorada.jpg, lamina-haz-luz.jpg,
    blanca-exterior.jpg, blanca-mesa.jpg, blanca-sesion.jpg
- No borres todavía las imágenes antiguas del repo.
**STOP 1: lista de assets con pesos.**

## Paso 2 — Tokens y base CSS/JS
- Crea `/css/tokens.css` con: paleta B1, `--textura` (data URI del SVG de grano),
  @font-face de las tres fuentes, y las clases del sistema (papeles tipográficos,
  .btn espresso, .rev, marquesina). Enlázalo antes que estilo.css.
- `/js/revelar.js`: IntersectionObserver para .rev, respetando prefers-reduced-motion.
- No toques aún las páginas existentes.
- Crea `/estilo/index.html` (con <meta name="robots" content="noindex">): muestrario
  de los tres papeles, colores, botones, textura y marquesina.
**STOP 2: Fer revisa /estilo/ en local (`python -m http.server 8000` en la raíz del
repo → http://localhost:8000/estilo/).**

## Paso 3 — Layout común en todas las páginas
Sin motor de plantillas: edita cabecera y pie en todas las páginas del repo de forma
idéntica (hazlo con cuidado y verifica una a una).
- Header nuevo (logo centrado dos líneas, pastilla espresso "Pedir cita") y footer
  nuevo (claro, tres columnas, "Blanca Estrán" en versalitas). Fondo papel+textura.
- Navegación móvil: propón ANTES de implementar (problema conocido: hoy desaparece
  bajo 980px sin sustituto).
- SEO por página según `mapa-keywords-blancaestran.md`: title, meta, canonical, OG.
  JSON-LD Psychologist en todas (teléfono/dirección: comentario PENDIENTE hasta que
  Fer pase los datos de Google Business).
- Redirección: crea `/psicologia-y-fe/index.html` con
  `<meta http-equiv="refresh" content="0; url=/psicologa-catolica/">` + canonical a
  la nueva URL + enlace manual. Mueve el contenido actual de psicología y fe a
  `/psicologa-catolica/index.html` (contenido intacto; solo layout nuevo).
- `sitemap.xml` escrito a mano con todas las URLs finales y `robots.txt` apuntándolo.
**STOP 3: preview local completo; Fer valida en móvil (mismo http.server, accesible
desde el teléfono con la IP local del PC si se quiere).**

## Paso 4 — Portada
- Reconstruye `index.html` replicando la maqueta sección a sección: kicker, H1 fijo,
  marquesina, listas con enlaces a las landings (darán 404 hasta fase 2: correcto),
  bloque vínculo con foto de sesión, banda CTA, capítulo fe con frase "psicóloga
  católica" → /psicologa-catolica/, Hola con fotos reales, Colaboro con, footer.
- Móvil como en la maqueta: pintura arriba con marco, láminas laterales ocultas.
- Marca la dirección postal del pie con clase `pendiente`.
**STOP 4: preview local de la home. Solo tras el OK de Fer: commit y push a main
(GitHub Pages publica desde main: el push ES el deploy; por eso nada de pushes
intermedios de trabajo a medias en las páginas visibles).**

## Recordatorios duros
- Nada de degradados, sombras decorativas, otras fuentes ni cursivas serif.
- No inventes teléfono, dirección, precios, testimonios ni cifras.
- Valida cada stop a 380px de ancho.
- Los slugs usan masculino genérico; los textos visibles dicen "psicóloga".
