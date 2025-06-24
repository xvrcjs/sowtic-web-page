# Sowtic Web Page

## Índice
- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso de Docker](#uso-de-docker)
- [Comandos](#comandos)
- [Estructura](#estructura)
- [Estructura del DOM](#estructura-del-dom)
- [Ejemplos de uso](#ejemplos-de-uso)
- [Documentación por carpetas](#documentación-por-carpetas)
- [Documentación detallada](#documentación-detallada-de-archivos-y-carpetas)
- [Contribución](#contribución)
- [Licencia](#licencia)
- [Notas de credenciales](#notas-de-credenciales)

## Descripción
Sitio web corporativo construido como SPA con **React** y **TypeScript**. Muestra los servicios y productos de Sowtic e incorpora formularios de contacto.

## Tecnologías
- React 18 + TypeScript
- Vite y @vitejs/plugin-react
- React Router DOM
- Bootstrap 5 + React-Bootstrap
- Sass (SCSS)
- Swiper, react-awesome-reveal
- EmailJS y reCAPTCHA
- ESLint

## Instalación
1. Clonar el repositorio.
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Entorno de desarrollo:
   ```bash
   npm run dev
   ```
   El servidor se inicia en `http://localhost:8080`.
4. Build de producción:
   ```bash
   npm run build
   ```
5. Previsualizar el build:
   ```bash
   npm run preview
   ```

## Uso de Docker
1. Construir la imagen:
   ```bash
   docker build -t sowtic-web-page .
   ```
2. Ejecutar el contenedor:
   ```bash
   docker run --rm -p 8080:8080 sowtic-web-page
   ```
   Acceder a `http://localhost:8080`.

## Comandos
- `npm run dev` – servidor de desarrollo (Vite).
- `npm run build` – genera `dist/` para producción.
- `npm run preview` – sirve la versión de producción.
- `npm run lint` – ejecuta ESLint.
- `npm run bootstrap:migrate` – actualiza los SCSS de Bootstrap.

## Estructura
```text
├── Dockerfile
├── index.html
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── shared/
│   ├── pages/
│   │   └── layouts/
│   ├── services/
│   │   ├── databaseInMemory/
│   │   └── interface/
│   ├── styles/
│   ├── hooks/
│   ├── router.tsx
│   ├── main.tsx
│   └── index.scss
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Ejemplos de uso
```bash
# Levantar en modo desarrollo
npm run dev

# Generar build
npm run build

# Ejecutar preview
npm run preview
```
En el navegador navega entre rutas como `/remote-assistant` o `/smart-rutines`. El formulario de contacto en `Footer` envía correos mediante EmailJS (IDs definidos en el código).

## Estructura del DOM
Resumen de los elementos principales renderizados:

- `head` – metadatos, hojas de estilo globales y fuentes.
- `div#root` – contenedor donde React monta la SPA.
  - `<nav class="header navbar">` – barra de navegación implementada en `Header.tsx`.
  - `<main class="home">` – slider y secciones de contenido que provienen de `Home.tsx`.
  - `<footer>` – formulario de contacto y enlaces, definido en `Footer.tsx`.
- Los scripts al final del cuerpo inicializan Swiper, animaciones y reCAPTCHA.

## Documentación por carpetas
Se puede consultar la explicación detallada de cada archivo y directorio en las secciones siguientes de este documento.

## Contribución
1. Realiza un fork y crea una rama para tus cambios.
2. Sigue la guía de estilo TypeScript/React existente.
3. Envía un pull request describiendo tus aportes.

## Licencia
No se declara una licencia explícita.

## Documentación detallada de archivos y carpetas

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
- `ScrollToHasElement.ts`: cuando la URL tiene un hash, hace scroll suave al elemento correspondiente.
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
- `ga.ts`: funciones auxiliares para medir pageviews y eventos con Google Analytics.

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

## Notas de credenciales
Actualmente las claves de EmailJS y reCAPTCHA están definidas directamente en el código del formulario `ContatUs.tsx`. No se utilizan variables de entorno.
