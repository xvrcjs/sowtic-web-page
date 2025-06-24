---
layout: default
---

# Archivos estáticos en `public/`

La carpeta `public/` contiene todos los recursos estáticos que Vite copia de forma literal a la carpeta `dist/`. Se incluyen el icono de la aplicación, fuentes y una colección de imágenes usadas por los componentes de React y las hojas de estilo.

## `vite.svg`
- **Ruta**: `public/vite.svg`
- **Uso**: icono referenciado en `index.html` mediante la etiqueta `<link rel="icon" ...>`.
- **Formato y nombre**: SVG con nombre descriptivo heredado del proyecto de arranque de Vite.
- **Buenas prácticas**: mantener su tamaño reducido para agilizar la descarga y aprovechar el cacheo del navegador.

## Fuentes (`public/fonts/`)
Este directorio almacena la familia *Montserrat* en formato variable y estático junto con la licencia (OFL) y un breve README.

- **Archivos principales**:
  - `public/fonts/Montserrat-VariableFont_wght.ttf`
  - `public/fonts/Montserrat-Italic-VariableFont_wght.ttf`
  - `public/fonts/OFL.txt` (licencia)
  - `public/fonts/README.txt`
  - `public/fonts/static/*.ttf` (18 variantes estáticas: Regular, Bold, Italic, etc.)
- **Uso**: las fuentes se importan en `src/index.scss` a través de la regla `@font-face` para definir la tipografía global de la aplicación.
- **Formato y convenciones**: todos los archivos son TTF con nombres en `PascalCase` y guiones para separar estilos (`Montserrat-BoldItalic.ttf`).
- **Buenas prácticas**: considerar ofrecer también versiones WOFF2 para mejor compresión y aprovechar el almacenamiento en caché mediante encabezados HTTP.

## Imágenes (`public/img/`)
Las imágenes están distribuidas en este directorio y son utilizadas por distintos componentes y datos de prueba. Se listan a continuación por nombre indicando su principal referencia en el código:

- `Bell_Notification.png` – services/databaseInMemory/card.ts
- `Checkbox_Check.png` – services/databaseInMemory/card.ts
- `Ellipse-615.svg` – styles/components/_main__banner.scss
- `Ellipse-650.svg` – styles/components/_footer.scss
- `File_Document.png` – services/databaseInMemory/card.ts
- `List_Ordered.png` – services/databaseInMemory/card.ts
- `Remote-01.jpg` – services/databaseInMemory/stripe.ts
- `Smart-001.jpg` – services/databaseInMemory/stripe.ts
- `agus-2.png` – services/databaseInMemory/stripe.ts
- `apps-icons.png` – styles/_index.scss
- `arrowup.png` – services/databaseInMemory/card.ts
- `background01.png` – styles/_index.scss
- `blue-band.png` – components/MainBanner.tsx
- `bubble.png` – services/databaseInMemory/card.ts
- `chart.png` – services/databaseInMemory/card.ts
- `chat.png` – services/databaseInMemory/card.ts
- `chip-01.png` – pages/Home.tsx
- `chip-02.png` – pages/Home.tsx
- `circle-arrows.png` – pages/Home.tsx
- `circulo-layer-1.svg` – pages/Home.tsx
- `circulo-layer-2.svg` – pages/Home.tsx
- `circulo-layer-3.svg` – pages/Home.tsx
- `contrato 68-7 G.COBO 2022.docx` – no usado
- `display.png` – pages/Home.tsx
- `eficiencia.jpg` – services/databaseInMemory/stripe.ts
- `fileplus.png` – services/databaseInMemory/card.ts
- `footer-bg.png` – styles/components/_footer.scss,styles/_index.scss
- `glasses.png` – services/databaseInMemory/card.ts
- `home-img-01.png` – no usado
- `img-computing.png` – services/databaseInMemory/stripe.ts
- `impresora.png` – pages/Home.tsx
- `inventario.png` – services/databaseInMemory/main.ts
- `invetary-control.png` – services/databaseInMemory/stripe.ts
- `lock.png` – services/databaseInMemory/card.ts
- `logo-white.svg` – components/Footer.tsx,components/Header.tsx
- `manos-libres.jpg` – services/databaseInMemory/stripe.ts
- `multi.png` – services/databaseInMemory/card.ts
- `person.png` – services/databaseInMemory/card.ts
- `postnet.png` – pages/Home.tsx
- `principal.png` – services/databaseInMemory/main.ts
- `qr-img.png` – services/databaseInMemory/card.ts
- `que-resuelve-bg.png` – styles/components/_carusel__collapse.scss
- `question.png` – services/databaseInMemory/card.ts
- `ra-img01.png` – services/databaseInMemory/stripe.ts
- `refresh.png` – services/databaseInMemory/card.ts
- `remote-asistense-01.png` – services/databaseInMemory/main.ts
- `service01.png` – no usado
- `smart-routines-01.png` – services/databaseInMemory/main.ts
- `visibilidad-2.jpg` – services/databaseInMemory/stripe.ts
- `warrning.png` – services/databaseInMemory/card.ts

### Buenas prácticas generales
- Optimizar las imágenes (comprimir y escalar) antes de incorporarlas al repositorio para reducir el peso del sitio.
- Utilizar encabezados HTTP de cacheo prolongado en producción, ya que los nombres de archivo no incluyen hashes.
- Mantener una convención de nombres descriptiva en inglés y sin espacios para facilitar las referencias en el código (actualmente hay un documento con espacios en su nombre).
- Considerar mover a `assets/` aquellas imágenes que se importen desde el código para aprovechar el procesamiento de Vite (hashing y optimización automática).
