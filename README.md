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
- [Documentación](#documentación)
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
├── docs/
│   ├── files-and-folders.md
│   └── ui-selectors.md
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

## Documentación
El directorio `docs/` contiene archivos de referencia adicional:
- [files-and-folders.md](docs/files-and-folders.md) - guía de carpetas y archivos.
- [ui-selectors.md](docs/ui-selectors.md) - selectores de UI.

## Contribución
1. Realiza un fork y crea una rama para tus cambios.
2. Sigue la guía de estilo TypeScript/React existente.
3. Envía un pull request describiendo tus aportes.

## Licencia
No se declara una licencia explícita.

## Notas de credenciales
Actualmente las claves de EmailJS y reCAPTCHA están definidas directamente en el código del formulario `ContatUs.tsx`. No se utilizan variables de entorno.

