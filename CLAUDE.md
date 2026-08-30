# CLAUDE.md · blancaestran.com

## Contexto del proyecto

Web de **Blanca Estrán**, psicóloga (Col. M-42822), consulta en Majadahonda.
Repositorio de sitio **estático plano**: `index.html`, `estilo.css`, una carpeta por
página, `.nojekyll` y `CNAME`. Se publica en **GitHub Pages desde `main`**: el push
*es* el despliegue, así que nunca se sube trabajo a medias en páginas visibles.
No hay framework ni motor de plantillas, y migrar a uno es una decisión futura aparte.

**Fer** coordina el trabajo y aprueba cada entrega. Reglas de proceso:

- Las decisiones marcadas **CONGELADO** no se reabren.
- Los **stop points** del encargo son obligatorios: al llegar a uno se para y se espera
  la revisión de Fer.
- **Nunca se inventan datos**: ni teléfono, ni dirección, ni precios, ni testimonios,
  ni cifras. Lo que falte se marca visible con `class="pendiente"`.
- Nada que no esté en la maqueta se implementa sin proponerlo antes.
- Validar cada entrega a **380px de ancho** (mobile-first real).

## Alcance del sitio — lo que NO lleva

Para no tratar datos de salud bajo el RGPD, la web **no** incluye: cuentas de usuario,
reservas online, pasarela de pago, historia clínica, chat, testimonios ni analítica
con cookies.

- **Cero peticiones a terceros en tiempo de ejecución**: fuentes, imágenes, scripts y
  estilos se sirven desde el propio repo.
- Avisos de urgencia **024** y **112** en «En qué puedo ayudarte» y en «Contacto».
- Tono: **tuteo y frases cortas**.

---

# Sistema de diseño v16 (CONGELADO)

La maqueta de referencia es `maquetas/home-v16.html` (autocontenida: fuentes e
imágenes en base64). **Ante cualquier duda visual, la maqueta manda.**

## Paleta B1 "Ámbar" — CONGELADO (sustituye a A1 Tinta·Oro)

- `--papel: #FBF5EC` — fondo general (siempre con textura, nunca liso)
- `--arena: #F5E9D7` — superficies y bandas de sección
- `--rosa: #F7DFC4` — marquesina
- `--texto: #3A3A3A` · `--texto-suave: #6B6461` · `--negro: #221F1E`
- `--primario: #A9662B` (naranja tostado, solo dosis pequeñas: viñetas, puntos, acentos)
- `--primario-osc: #82491A` (capítulo oscuro de psicología y fe)
- `--boton: #46331B` · `--boton-osc: #332409` (espresso; todos los CTA, texto #FBF5EC)
- `--borde: rgba(120,73,26,.16)`
- Prohibido: degradados en fondos, sombras difusas decorativas, blanco puro de fondo.

## Textura de papel — CONGELADO

Todas las superficies (body, header, hero-texto, marquesina, vínculo, capítulo fe,
footer) llevan grano SVG feTurbulence en mosaico sobre su color:
`baseFrequency 0.82, numOctaves 3, stitchTiles stitch`, feColorMatrix cálida con
alpha 0.055. Copiar el data URI exacto de la maqueta (variable `--textura`).

## Sistema tipográfico "tres papeles" — CONGELADO

El logotipo es el sistema. Solo existen tres papeles:

1. **Papel 1 · Títulos ("BLANCA ESTRÁN")**: Playfair Display 500, MAYÚSCULAS,
   letter-spacing .12–.14em. Usos: h1 del hero, h2 de secciones grandes (Hola/banda),
   números 01/02/03, "Colaboro con", nombres de instituciones, centro del footer.
2. **Papel 2 · Etiquetas ("PSICÓLOGA")**: Montserrat 500, MAYÚSCULAS pequeñas,
   letter-spacing .26em uniforme. Usos: navegación, kicker, titulines de sección,
   marquesina, títulos de pasos, notas y micro-etiquetas.
3. **Papel 3 · Cuerpo**: Montserrat 400 (15px base, line-height 1.8). La itálica de
   Montserrat es la ÚNICA voz de énfasis: destacados en línea (600 italic), frases
   grandes (300 italic), cita central, delimitación del capítulo fe.

Fuentes autoalojadas (extraer los woff2 de los data URI de la maqueta a
`/fuentes/`): Playfair var normal · Montserrat var normal · Montserrat var italic.
Subconjunto `U+0020-007E,U+00A0-00FF,U+2013-2014,U+2018-201E,U+2022,U+2026`.
Prohibido: cualquier otra familia, cursivas serif, negritas masivas en titulares.

## Gramática de la home (orden de secciones) — CONGELADO

Nav (logo centrado, pastilla espresso "Pedir cita") → Hero partido (pintura a sangre
izquierda / kicker + h1 en versalitas + 2 párrafos + CTA a la derecha, alineado a la
derecha en escritorio) → Marquesina de frases → "La terapia" → "Puedo ayudarte si…"
(listas con filete, láminas laterales solo en escritorio) → Presentación + ¿Empezamos?
→ Pasos 01/02/03 → Bloque vínculo (frase grande + detalle + foto de sesión) → Cita
centrada → Banda CTA (fondo haz dorado con velo claro) → Capítulo fe (fondo haz
dorado con velo ámbar oscuro, instituciones Pro+Tejer/Repara, frase-enlace
"psicóloga católica") → Hola soy Blanca (2 fotos reales + bio) → Colaboro con →
Footer claro con "Blanca Estrán" en versalitas.

## Imágenes

La pintura del hero y las tres láminas son **imágenes generadas con IA por nosotros**:
no hay ninguna licencia pendiente. Sus resoluciones actuales son las definitivas; si
algún día se generan versiones mayores, se sustituye el archivo manteniendo el nombre.

- Hero: pintura "flores y pájaro" (`imagenes/hero-flores-pajaro.jpg`, 1400×1050).
  Recorte object-position 34% center.
- Laterales "ayuda": `imagenes/lamina-sol.jpg` (866×611) y
  `imagenes/lamina-textura-dorada.jpg` (644×881).
- Fondos de banda CTA y capítulo fe: `imagenes/lamina-haz-luz.jpg` (515×694), la misma
  imagen en ambas secciones.
- Fotos reales de Blanca (estas sí son fotografías): exterior banco + mesa (sección
  Hola), sesión (bloque vínculo).
- Prohibido: fotos de stock con rostros ajenos como si fueran Blanca; iconografía
  religiosa; cruces en la home.

## Motion — CONGELADO

Solo tres: reveal al scroll (opacity + 12px, .55s ease-out, una vez, IntersectionObserver),
marquesina (40s/ciclo, lineal), hover de enlaces/botones. `prefers-reduced-motion`
desactiva reveal y marquesina. Prohibido: parallax, animación por letra, cursores custom.

## SEO de layout (aplicar según mapa-keywords-blancaestran.md)

- Title/meta/canonical/OG por página según el mapa. JSON-LD Psychologist en layout
  (areaServed: Majadahonda, Las Rozas, Pozuelo de Alarcón, Boadilla del Monte,
  Villanueva de la Cañada, Madrid, España). Teléfono y dirección: PENDIENTES,
  idénticos a Google Business cuando Fer los facilite.
- Nav "Psicología y fe" → `/psicologa-catolica/`. GitHub Pages no permite 301 real:
  `/psicologia-y-fe/index.html` queda como página puente con `meta http-equiv="refresh"`,
  canonical a la URL nueva y enlace manual.
- Enlaces internos de la home a landings: ver maqueta (bullets y frase "psicóloga
  católica"). Los slugs usan masculino genérico; titles/H1 dicen "psicóloga".
- `sitemap.xml` escrito a mano con todas las URLs finales + `robots.txt` apuntándolo
  (el original decía «@astrojs/sitemap»; adaptado al sitio estático).
  "especializada" en titles: decisión abierta — preguntar a Fer antes de usarla.

## Contenido — reglas vivas

- H1 de portada fijo: "Aprender a ser persona, a vivir tu propia vida: esa es la gran aventura."
- Genérico masculino ("otro profesional"). Excepción literal de Fer: "poder trabajar
  juntas" en el párrafo de primeras sesiones (confirmar si pasa a "juntos").
- Sin supervisión clínica mencionada. Sin precios. Sin testimonios ni datos inventados.
- EMDR siempre citado como NB Psicología Integral / titulación UTAMED.
- Delimitaciones de psicología y fe intactas (psicoterapia, no acompañamiento
  espiritual; sin autoridad canónica; independiente de instituciones eclesiásticas).
