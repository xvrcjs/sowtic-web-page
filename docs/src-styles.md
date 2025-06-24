---
layout: default
---

# Estilos en `src/styles/`

Esta carpeta contiene los archivos SCSS de la aplicación. Se divide en un archivo principal, un tema para Bootstrap y varios parciales de componentes.

## `src/index.scss`
- **Propósito:** punto de entrada global importado en `src/main.tsx`.
- **Importaciones:**
  - `@forward "./styles/bootstrap-theme";` expone el tema personalizado de Bootstrap.
  - `@use "./styles/index" as *;` carga reglas comunes y parciales.
- **Contenido:** define fuentes Montserrat mediante `@font-face`, estilos base para elementos (`html`, `body`, `h1`-`h5`, `.btn`, `.subtitle`, etc.) y clases utilitarias (`.mb-6`, `main { overflow: clip; }`).

## `src/styles/bootstrap-theme.scss`
- **Propósito:** personalizar variables de Bootstrap antes de compilar.
- **Variables:** establece `$primary` y `$secondary` con los colores de marca.
- **Estructura:**
  1. Importa `sass:map` para trabajar con mapas.
  2. Usa `./vendor/bootstrap/bootstrap` con la configuración anterior (se crea al ejecutar `npm run bootstrap:migrate`).
  3. Reexporta la librería con `@forward` para que otros módulos puedan usar sus mixins y funciones.
- **Importación:** se incluye indirectamente desde `src/index.scss` mediante `@forward`.

## `src/styles/_index.scss`
- **Propósito:** agrupar y distribuir las reglas de estilo de cada sección.
- **Importa:**
  - `./components/footer`
  - `./components/header`
  - `./components/content__stripe`
  - `./components/main__banner`
  - `./components/card__tansparent`
  - `./components/carusel__collapse`
  - `./components/button__top`
- **Contenido:** define clases para páginas y bloques como `.four__industry`, `.our__team`, `.software__services`, `.devices` e `.inner-page`. Incluye media queries para distintos breakpoints.
- **Uso:** se carga en `src/index.scss` con `@use "./styles/index" as *;` de modo que todas sus clases estén disponibles de forma global.

## Parciales en `src/styles/components/`
Estos archivos contienen estilos específicos reutilizados por componentes React.

### `_footer.scss`
- **Ruta:** `src/styles/components/_footer.scss`.
- **Descripción:** estilos del componente `<Footer>`: fondo con `footer-bg.png`, padding general y ajuste responsivo del formulario.
- **Importación:** incluido desde `_index.scss` y aplicado automáticamente cuando `src/index.scss` se compila.

### `_header.scss`
- **Ruta:** `src/styles/components/_header.scss`.
- **Descripción:** reglas para la barra de navegación (`<Header>`), adaptando colores y comportamiento en móviles cuando el menú colapsa.

### `_content__stripe.scss`
- **Ruta:** `src/styles/components/_content__stripe.scss`.
- **Descripción:** corrige el orden de la columna de imagen en pantallas pequeñas.

### `_main__banner.scss`
- **Ruta:** `src/styles/components/_main__banner.scss`.
- **Descripción:** estilos del carrusel principal con múltiples media queries que ajustan las imágenes de portada y elementos decorativos.

### `_card__tansparent.scss`
- **Ruta:** `src/styles/components/_card__tansparent.scss`.
- **Descripción:** apariencia translúcida de las tarjetas con sombras y estilos de botón.

### `_carusel__collapse.scss`
- **Ruta:** `src/styles/components/_carusel__collapse.scss`.
- **Descripción:** fondo y formato del carrusel de pasos (`.what__solve`), definiendo tamaños de texto e imagen.

### `_button__top.scss`
- **Ruta:** `src/styles/components/_button__top.scss`.
- **Descripción:** clase `.back-to-top` para el botón que vuelve al inicio de la página, ajustando dimensiones del ícono en móviles.

## Organización general
- `bootstrap-theme.scss` y `components/*` se importan a través de `_index.scss`.
- `src/index.scss` es el único archivo que se importa explícitamente en la aplicación (`main.tsx`).
- Al ejecutar `npm run bootstrap:migrate` se genera `src/styles/vendor/bootstrap/` con los SCSS oficiales; este directorio no está versionado pero es requerido para compilar el tema.

