---
section_id: "FILES-FOLDERS-01"
title: "Estructura de Archivos y Carpetas"
version: "1.1"
date: "2025-07-02"
related_sections:
  - "root-and-global-configuration.md"
  - "entrypoint-and-router.md"
enforce:
  - styleguide: "STYLEGUIDE.md"
  - summary_index: "summary-index.json"
agents:
  - Code Agent
  - Doc Agent
  - Test Agent
use_all_sections: false
---

# Tabla JSON embebida
```json
[
  { "path": "AGENTS.md", "type": "file", "purpose": "Guía de los agentes", "notes": [] },
  { "path": "Dockerfile", "type": "file", "purpose": "Construir imagen Node 18 para desarrollo", "notes": ["npm run bootstrap:migrate", "puerto 8080"] },
  { "path": "README.md", "type": "file", "purpose": "Documentación introductoria", "notes": [] },
  { "path": "docs/", "type": "folder", "purpose": "Documentación del proyecto", "notes": ["tests/"] },
  { "path": "index.html", "type": "file", "purpose": "Documento principal donde Vite inyecta scripts", "notes": ["Google Fonts", "Google Analytics", "#root"] },
  { "path": "package-lock.json", "type": "file", "purpose": "Versiones exactas de dependencias", "notes": [] },
  { "path": "package.json", "type": "file", "purpose": "Scripts y dependencias de la aplicación", "notes": ["npm run dev", "npm run build"] },
  { "path": "postcss.config.js", "type": "file", "purpose": "Configuración de PostCSS", "notes": [] },
  { "path": "public/", "type": "folder", "purpose": "Archivos estáticos copiados a dist/", "notes": ["fonts/", "img/"] },
  { "path": "scripts/", "type": "folder", "purpose": "Utilidades para el preprocesamiento de Sass", "notes": ["sassLogger.ts", "sassSilencer.js"] },
  { "path": "src/", "type": "folder", "purpose": "Código fuente de la SPA", "notes": ["components/", "pages/"] },
  { "path": "tsconfig.json", "type": "file", "purpose": "Configuración de TypeScript", "notes": [] },
  { "path": "tsconfig.node.json", "type": "file", "purpose": "TS para herramientas Node", "notes": [] },
  { "path": "vite.config.ts", "type": "file", "purpose": "Configuración de Vite", "notes": ["puerto 8080"] }
]
```

Este JSON define la estructura de alto nivel del proyecto. El Code Agent usará los campos `path` y `type` para validar que los ficheros y carpetas existen, y podrá generar un scaffold inicial si falta alguno.
La verificación automática se orquesta desde `docs/tests/structure-check.yml`, que ejecuta un script generado por el Code Agent.

Toda modificación en la estructura debe reflejarse aquí y en `docs/summary-index.json` para mantener la documentación alineada con el repositorio.
Cuando se agregue, elimine o mueva un documento Markdown en `docs/`, recuerda también actualizar este listado, añadir su Front Matter y registrarlo en `docs/summary-index.json`.

# Documentación detallada de archivos y carpetas

### Dockerfile
- **Ruta relativa**: `Dockerfile`
- **Propósito**: Imagen para ejecutar la aplicación en un contenedor Node 18.
- **Funcionamiento interno**: Copia `package.json`, instala dependencias, copia el código, ejecuta `npm run bootstrap:migrate` y arranca `npm run dev` en el puerto 8080.
- **Notas**: Útil para desarrollo sin instalar Node localmente.

### index.html
- **Ruta relativa**: `index.html`
- **Propósito**: Documento HTML principal donde Vite inyecta los scripts.
- **Funcionamiento interno**: Carga Google Fonts y la etiqueta de Google Analytics, define el contenedor `#root` y referencia a `src/main.tsx`.

### public/
- **Ruta relativa**: `public/`
- **Propósito**: Archivos estáticos (imágenes y fuentes) servidos sin pasar por el bundler.
- **Notas**: Todo el contenido se copia tal cual a la carpeta `dist/` al realizar el build.

### src/
- **Ruta relativa**: `src/`
- **Propósito**: Código fuente de la SPA.

#### src/assets/
- **Propósito**: Recursos importados dentro del código, por ejemplo `react.svg` usado en componentes.

#### src/components/
- **Propósito**: Componentes reutilizables.
- **Funcionamiento interno**:
  - `CarouselCollapse.tsx`: carrusel con tarjetas colapsables usando Swiper y React-Bootstrap.
  - `ContentStripe.tsx`: sección con imagen, texto y botón opcional; acepta props como `image`, `title`, `buttonUrl`...
  - `Footer.tsx`: pie de página que incluye el formulario `ContactUs` y un botón flotante para volver arriba.
  - `Header.tsx`: barra de navegación con React-Bootstrap que cambia de estilo al hacer scroll.
  - `MainBanner.tsx`: banner principal de cada página. Puede mostrar un botón para volver atrás.
  - `index.ts`: exporta todos los componentes anteriores para importación sencilla.

##### src/components/shared/
- `ButtonToTop.tsx`: botón que aparece al hacer scroll y vuelve al inicio de la página.
- `CardTransparent.tsx`: tarjeta con estilo transparente; recibe clases para alineación y contenido como children.
- `ContatUs.tsx`: formulario de contacto que usa EmailJS (`sendForm` con IDs definidos) y un captcha reCAPTCHA.
- `ScrollToHashElement.ts`: cuando la URL tiene un hash, hace scroll suave al elemento correspondiente.
- `ScrollToTop.tsx`: envuelve a la aplicación para llevar el scroll al inicio en cada cambio de ruta.

#### src/pages/
- Componentes de página que consumen los servicios de banners y tarjetas para mostrar contenido.
  - `Home.tsx`: página principal, incluye carruseles y secciones dinámicas.
  - `RemoteAssistant.tsx`, `SmartRutines.tsx`, `ImageComputing.tsx`, `InventaryControl.tsx`: páginas de servicios con estructura similar.
  - `layouts/Layout.tsx`: plantilla general con `Header`, `Footer`, `ScrollToTop` y `Outlet` de React Router.
  - `index.ts`: facilita la importación agrupada de todas las páginas.

#### src/services/
- **Propósito**: Capa de datos simulada.
- **Funcionamiento interno**:
  - `bannerService.ts`, `cardService.ts`, `stripeService.ts`: devuelven arreglos precargados desde `databaseInMemory`.
  - Carpeta `databaseInMemory/`: define datos de ejemplo para banners, tarjetas y secciones (`banner.ts`, `card.ts`, `main.ts`, `stripe.ts`).
  - Carpeta `interface/`: define interfaces TypeScript para las entidades (BannerInterface, MainInterface, etc.).

#### src/styles/
- **Propósito**: Estilos SCSS globales y de componentes.
- **Funcionamiento interno**: `_index.scss` importa los módulos de `components/`; `bootstrap-theme.scss` carga Bootstrap con variables personalizadas. Los archivos en `components/` corresponden a cada componente React.

#### src/hooks/
- `usePageTracking.ts`: hook que envía la ruta actual a Google Analytics mediante `ReactGA` y `gtag` en cada cambio de navegación.

#### src/utils/
- `ga.ts`: funciones auxiliares para medir pageviews y eventos con Google Analytics. Documentado en `docs/src-utils-ga.md`.

#### router.tsx
- Define las rutas con `createBrowserRouter` y exporta el componente `<Router>` que envuelve a `RouterProvider`.

#### main.tsx
- Punto de entrada de React. Renderiza el componente `Router` dentro de `React.StrictMode` y carga los estilos globales y Bootstrap.

#### index.scss
- Archivo de estilos globales. Importa el tema de Bootstrap y las reglas de `src/styles` además de definir las fuentes Montserrat.

#### vite.config.ts
- Configuración de Vite. Activa el plugin React, define opciones para Sass y el servidor de desarrollo en el puerto 8080.

#### tsconfig.json / tsconfig.node.json
- Configuración de TypeScript para el proyecto principal y para tareas de Node.

#### package.json
- Define scripts y dependencias. Destacan `dev`, `build`, `preview` y `bootstrap:migrate`.

#### .eslintrc.cjs
- Reglas de ESLint empleadas para el linting del código TypeScript/React.

### postcss.config.js
- **Ruta relativa**: `postcss.config.js`
- **Propósito**: Configuración de PostCSS utilizada por Vite.
- **Funcionamiento interno**: Actualmente no define plugins adicionales pero se mantiene para futuras personalizaciones.

### scripts/
- **Ruta relativa**: `scripts/`
- **Propósito**: Utilidades para el preprocesamiento de Sass.

#### scripts/sassLogger.ts
- Silencia advertencias de `node_modules` al compilar Sass.

#### scripts/sassSilencer.js
- Ignora avisos de Bootstrap migrado en `src/styles/vendor/bootstrap`.

### public/fonts/
- **Propósito**: Fuentes Montserrat en formato variable y estático para uso global.

### public/img/
- **Propósito**: Recursos gráficos mostrados en las páginas y banners.

### src/App.tsx
- **Propósito**: Componente de demostración con ejemplo de conteo y tracking de eventos.
- **Notas**: Carga el `Router` principal y muestra enlaces a React y Vite.

### src/App.css
- Estilos mínimos para el componente de demostración.

### src/components/index.ts
- Exporta todos los componentes React para facilitar importaciones agrupadas.

### src/pages/index.ts
- Reexporta todas las páginas para simplificar la configuración de rutas.

### src/styles/components/
- Conjunto de parciales SCSS para cada componente (`_header.scss`, `_footer.scss`, etc.).

### src/vite-env.d.ts
- Declara los tipos de Vite para TypeScript.

### .gitignore
- Lista carpetas y archivos que no deben versionarse, como `dist` o `node_modules`.

## Criterios de Aceptación
1. Cada `path` del JSON existe en el repositorio (ver script de validación).
2. La CI ejecuta `npm run check-structure` y falla si falta algo.
3. Los cambios en archivos o carpetas actualizan automáticamente este JSON.

Referencia a pruebas de estructura:

```yaml
script: "check-structure.sh"
entries:
  - "AGENTS.md"
  - "Dockerfile"
  - "README.md"
  - "docs/"
  - "index.html"
  - "package-lock.json"
  - "package.json"
  - "postcss.config.js"
  - "public/"
  - "scripts/"
  - "src/"
  - "tsconfig.json"
  - "tsconfig.node.json"
  - "vite.config.ts"
```

[Code Agent]
" 1. **Leer** la **Tabla JSON** embebida en `docs/files-and-folders.md` y genera un script de CI (check-structure.sh) que valide que todas las rutas existen, devolviendo error si falta algún archivo o carpeta.
2. **Recorrer** la estructura de ficheros y carpetas del repositorio (desde la raíz) para obtener el estado real de `docs/`,`scripts/`,`Dockerfile`, `index.html`, `public/`, `src/`, `package.json`, `tsconfig.json`, `vite.config.ts`, etc.  
3. **Comparar** ambas fuentes de verdad:  
   - Identificar entradas del JSON que **no existen** en disco.  
   - Detectar archivos o carpetas en el proyecto **no reflejados** en el JSON.  
4. Si hay discrepancias, **actualizar** automáticamente el bloque JSON de `docs/files-and-folders.md` para que coincida con la estructura real:  
   - Añadir nuevas entradas para archivos/carpetas detectados.  
   - Eliminar o marcar como obsoletas las entradas inexistentes.  
   - Mantener notas y metadata (purpose, notes) en la medida de lo posible, y solicitar intervención manual si no puede deducirse automáticamente."

Revisa la tabla JSON de `files-and-folders.md` y genera un script de CI (`check-structure.sh`) que valide que todas las rutas existen, devolviendo error si falta algún archivo o carpeta.

