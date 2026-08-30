# Mapa de palabras clave · blancaestran.com

> Nota (ago 2026): el sitio es estático en GitHub Pages. El punto "@astrojs/sitemap"
> de la sección 3 queda sustituido por un sitemap.xml manual, y la redirección 301 se
> implementa como meta-refresh + canonical. Ver ENCARGO-fase1-diseno-v2.md.

Documento de referencia para Claude Code. Cada URL tiene una única intención de búsqueda.
Reglas: title < 60 caracteres · meta description 140–155 · un solo H1 por página con la
keyword principal de forma natural · sin "los mejores", sin cifras inventadas, sin repetir
la keyword de forma artificial.

Criterio de género: los slugs usan la forma masculina genérica ("psicologo-") porque es
la que más se busca; title y H1 dicen "psicóloga" porque es la verdad; en el cuerpo
aparecen ambas formas de manera natural ("si buscas un psicólogo… soy psicóloga…").

Decisión pendiente de Fer: uso de "especializada" en titles. Este mapa NO la usa.
Si se aprueba, solo tiene sentido en trauma (/psicologo-trauma-majadahonda/) y en
abuso espiritual; en el resto no aporta.

---

## 1. Páginas existentes (optimizar, no reescribir)

### / (portada)
- Keyword principal: psicóloga Majadahonda
- Secundarias: psicóloga online, psicoterapia integradora, psicóloga general sanitaria
- Title: `Blanca Estrán · Psicóloga en Majadahonda y online` (49)
- Meta: `Psicóloga general sanitaria en Majadahonda y online. Psicoterapia integradora para adultos, parejas y adolescentes: trauma, apego, ansiedad y vida de fe.` (152)
- H1: se mantiene el titular fijo ("Aprender a ser persona…"). La keyword va en el
  subtítulo/kicker "Psicóloga General Sanitaria · Col. M-42822" y en el primer párrafo.
- Cambios de contenido:
  - En la sección "Cuando lo que duele toca también la vida de fe", añadir una frase
    con "psicóloga católica" enlazando a /psicologa-catolica/. Ejemplo: "Si buscas una
    psicóloga católica que trabaje con rigor clínico, aquí te explico cómo lo entiendo."
  - Las cuatro tarjetas de motivos deben enlazar a su landing: Trauma y apego →
    /psicologo-trauma-majadahonda/, Ansiedad → /psicologo-ansiedad-majadahonda/.
  - Dirección postal completa en el pie (idéntica a Google Business).

### /sobre-mi/
- Keyword principal: Blanca Estrán psicóloga
- Secundarias: psicóloga colegiada M-42822, psicóloga UCM, formación EMDR
- Title: `Sobre mí · Blanca Estrán, psicóloga colegiada M-42822` (54)
- Meta: `Psicóloga general sanitaria formada en la UCM y la UFV, con formación en trauma y EMDR e investigación sobre abuso espiritual con la Cátedra Pro+Tejer.` (150)
- H1: `Sobre mí` → cambiar a `Blanca Estrán, psicóloga general sanitaria`
- Contenido: sin cambios de fondo. Asegurar que Cátedra Pro+Tejer, Proyecto Repara y
  NB Psicología Integral aparecen con su nombre exacto (son entidades que Google reconoce).

### /como-trabajo/
- Keyword principal: cómo es una terapia psicológica
- Secundarias: psicoterapia integradora, primera sesión psicólogo, terapia online
- Title: `Cómo trabajo: psicoterapia integradora en Majadahonda` (53)
- Meta: `Cómo es un proceso de terapia conmigo: primeras sesiones, formulación compartida del caso, objetivos acordados y supervisión clínica. Presencial y online.` (152)
- H1: `Cómo trabajo`
- Contenido: es la página a la que enlazan todas las landings desde "Cómo trabajo esto
  en consulta". Añadir un H2 "Terapia online: cómo funciona" (captura "psicóloga online").
- NOTA ago-2026: la mención a "supervisión clínica" de esta meta debe revisarse:
  Fer ha decidido no mencionar la supervisión en la web. Reescribir la meta sin ella.

### /en-que-puedo-ayudarte/
- Keyword principal: (página hub, sin keyword propia; reparte autoridad a las landings)
- Title: `Terapia para trauma, ansiedad, duelo y pareja · Majadahonda` (59)
- Meta: `Motivos habituales para empezar terapia: trauma y apego, ansiedad, duelo, conflictos de pareja y familia. Consulta en Majadahonda y sesiones online.` (148)
- H1: `En qué puedo ayudarte`
- Contenido: cada bloque temático termina con enlace a su landing. Esta página pasa a
  ser el desplegable de navegación que pide el plan SEO.

### /psicologia-y-fe/ → /psicologa-catolica/ (misma página, nueva URL)
- Redirección de /psicologia-y-fe/ a /psicologa-catolica/ (meta-refresh + canonical
  en GitHub Pages). La etiqueta del menú sigue siendo "Psicología y fe".
- Keyword principal: psicóloga católica Madrid
- Secundarias: psicólogo católico Madrid, psicóloga católica online, psicólogo cristiano
  Madrid, psicología y fe
- Title: `Psicóloga católica en Madrid y online · Blanca Estrán` (53)
- Meta: `Psicoterapia con rigor clínico que respeta tu fe. Psicóloga católica colegiada, presencial en Madrid (Majadahonda) y online. También abuso espiritual.` (150)
- H1: `Psicóloga católica en Madrid y online`
- Estructura (600–900 palabras):
  1. Apertura empática: qué busca quien escribe "psicóloga católica" (que no le juzguen
     por su fe, que no se la conviertan en el problema, que tampoco sea catequesis).
  2. "Qué significa aquí psicóloga católica": las tres delimitaciones como argumento de
     confianza (psicoterapia, no dirección espiritual · no es autoridad canónica ·
     independiente de instituciones).
  3. "Cómo trabajo esto en consulta" → enlace a /como-trabajo/.
  4. "Quién te acompaña": colegiación, UCM, UFV, Pro+Tejer, Repara.
  5. Bloque breve "Abuso espiritual y de conciencia" → enlace a /psicologo-abuso-espiritual/.
  6. FAQ (marcado FAQPage): ¿Hace falta ser creyente? · ¿Es psicología o acompañamiento
     espiritual? · ¿Trabajas online fuera de Madrid? · ¿Qué diferencia hay con un
     psicólogo sin más? · ¿Cómo es la primera cita?
  7. CTA "Pedir primera cita" → /contacto/.
- Recursos de emergencia 024 y 112 (ya obligatorio en esta página).

### /contacto/
- Keyword principal: pedir cita psicóloga Majadahonda
- Title: `Pedir cita con Blanca Estrán · Majadahonda y online` (51)
- Meta: `Escríbeme contándome qué necesitas y te respondo personalmente. Consulta en Majadahonda, zona noroeste de Madrid, y sesiones online en toda España.` (148)
- H1: `Pedir primera cita`
- Contenido: dirección postal completa, mapa embebido (sin cookies de terceros: enlace
  a Google Maps mejor que iframe), horario coherente con Google Business.

### Legales (/aviso-legal/, /privacidad/, /cookies/)
- `<meta name="robots" content="noindex, follow">`. No compiten por nada.

---

## 2. Landings nuevas

### /psicologo-abuso-espiritual/ (prioridad 1 · alcance nacional)
- Keyword principal: psicólogo abuso espiritual
- Secundarias: abuso de conciencia, abuso de poder en la Iglesia, abuso espiritual
  terapia, psicólogo abuso religioso
- Title: `Psicóloga abuso espiritual y de conciencia · Online` (52)
- Meta: `Psicoterapia para quien ha vivido abuso espiritual, de conciencia o de poder en la Iglesia. Trabajo clínico e investigación con la UCM y el Proyecto Repara.` (150)
- H1: `Psicóloga para el abuso espiritual y de conciencia`
- Sin mención geográfica en el H1: la búsqueda es temática. Majadahonda solo en
  "Quién te acompaña".
- FAQ: ¿Qué es el abuso de conciencia? · ¿Cómo sé si lo que viví fue abuso espiritual? ·
  ¿Necesito haber denunciado? · ¿Sigues siendo católica, esto es neutral? · ¿Se puede
  hacer online?
- Delimitación explícita: no se reciben denuncias, no es instancia canónica.

### /terapia-emdr-majadahonda/ (prioridad 3)
- Keyword principal: EMDR Majadahonda
- Secundarias: terapia EMDR Las Rozas, psicólogo EMDR Pozuelo, qué es EMDR
- Title: `Terapia EMDR en Majadahonda y zona noroeste de Madrid` (52)
- Meta: `Qué es EMDR, para qué sirve y cómo lo integro en terapia. Consulta en Majadahonda, cerca de Las Rozas, Pozuelo y Boadilla, y sesiones online.` (141)
- H1: `Terapia EMDR en Majadahonda`
- AVISO DE CONTENIDO: la formación EMDR está en curso (NB Psicología Integral / UTAMED,
  nunca EMDR Europe). La landing debe decirlo en "Quién te acompaña" y presentar EMDR
  como herramienta dentro de un enfoque integrador, no como servicio principal. Si
  Blanca no se siente cómoda, esta landing se pospone hasta terminar la formación.

### /psicologo-trauma-majadahonda/ (prioridad 4)
- Keyword principal: psicólogo trauma Majadahonda
- Secundarias: terapia trauma y apego, psicóloga apego Las Rozas, trauma complejo
- Title: `Psicóloga trauma y apego en Majadahonda · Blanca Estrán` (55)
- Meta: `Terapia para trauma y heridas de apego desde un enfoque integrador. Consulta en Majadahonda, zona noroeste de Madrid, y sesiones online. Primera cita para conocernos.` (155)
- H1: `Psicóloga para trauma y apego en Majadahonda`

### /psicologo-ansiedad-majadahonda/ (prioridad 5)
- Keyword principal: psicólogo ansiedad Majadahonda
- Secundarias: tratamiento ansiedad Las Rozas, psicóloga ansiedad Pozuelo, regulación
  emocional (como H2, no como landing)
- Title: `Psicóloga para la ansiedad en Majadahonda y Las Rozas` (53)
- Meta: `Tratamiento psicológico de la ansiedad y la regulación emocional. Consulta presencial en Majadahonda, zona noroeste de Madrid, y terapia online.` (145)
- H1: `Psicóloga para la ansiedad en Majadahonda`
- Incluir recursos 024 y 112 (segunda página obligatoria).

### /afectividad-y-sexualidad/ (prioridad 6)
- Keyword principal: terapia afectividad y sexualidad
- Secundarias: psicóloga sexualidad y fe, afectividad y fe, sexualidad enfoque integrador
- Title: `Terapia de afectividad y sexualidad · Enfoque integrador` (56)
- Meta: `Acompañamiento psicológico en afectividad y sexualidad desde una mirada integradora que respeta tus valores y tu vida de fe, si la tienes. Majadahonda y online.` (153)
- H1: `Terapia sobre afectividad y sexualidad`
- No presentarse como sexóloga. Enfocar a la intersección con el enfoque integrador.

---

## 3. Elementos comunes (una vez, en el layout)

- Canonical absoluto en cada página.
- og:title = title · og:description = meta · og:image = retrato · og:url = canonical.
- JSON-LD `Psychologist` con: name, url, telephone, address (idéntica a Google
  Business), areaServed (Majadahonda, Las Rozas, Pozuelo de Alarcón, Boadilla del
  Monte, Villanueva de la Cañada, Madrid, España), availableService, sameAs (Doctoralia,
  COP Madrid, Psychology Today cuando existan).
- En las landings con FAQ: JSON-LD `FAQPage`.
- Navegación: "En qué puedo ayudarte" pasa a desplegable con las seis landings.
- Sitemap: sitemap.xml manual (ver nota de cabecera); robots.txt con la URL del sitemap.
- Enlazado interno mínimo: portada → 6 landings · cada landing → /como-trabajo/,
  /contacto/ y una landing hermana · /psicologa-catolica/ ↔ /psicologo-abuso-espiritual/.

---

## 4. Fuera de la web (tareas de Blanca)

- Google Business: descripción con "psicóloga católica" y "Majadahonda"; entrada
  mensual enlazando a una landing.
- Perfiles con enlace a la web: Doctoralia, buscador del COP Madrid, Psychology Today
  (categoría cristiano). Nombre, dirección y teléfono idénticos.
- Pedir enlace en páginas de equipo: Cátedra Pro+Tejer, Proyecto Repara, NB Psicología.
- Search Console: verificar, enviar sitemap, pedir indexación de cada landing al publicar.

## 5. Blog CorAdCor (fase posterior, 1–2 al mes)

Artículos que respondan búsquedas literales y enlacen a su landing:
- "¿Puede un católico ir al psicólogo?" → /psicologa-catolica/
- "Psicólogo católico o psicólogo sin más: qué cambia" → /psicologa-catolica/
- "Qué es el abuso de conciencia" → /psicologo-abuso-espiritual/
- "Cómo saber si lo que viví fue abuso espiritual" → /psicologo-abuso-espiritual/
- "Qué es el apego y por qué importa en terapia" → /psicologo-trauma-majadahonda/
