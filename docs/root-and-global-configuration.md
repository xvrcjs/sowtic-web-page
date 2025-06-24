---
layout: default
---

# Configuración raíz del proyecto

Este documento detalla los archivos principales en la raíz de **sowtic-web-page**. Se explica su propósito, configuración y cómo influyen en las tareas de desarrollo, build y producción.

## Dockerfile
- **Ruta relativa**: `Dockerfile`
- **Propósito**: construir una imagen Docker con Node 18 y ejecutar el servidor de desarrollo de Vite.
- **Secciones**:
  1. `FROM node:18-alpine` – imagen base ligera con Node.js.
  2. `WORKDIR /app` – carpeta interna para copiar el código.
  3. `COPY package.json ./` y `RUN npm install` – instala dependencias.
  4. `COPY . .` – copia el resto del repositorio al contenedor.
  5. `RUN npm run bootstrap:migrate` – clona los SCSS de Bootstrap y los migra a la sintaxis moderna.
  6. `CMD ["npm", "run", "dev"]` – arranca Vite en modo desarrollo escuchando en `0.0.0.0:8080`.
- **Variables de entorno**: no se definen en este archivo.
- **Impacto**: permite ejecutar la aplicación en un contenedor sin tener Node instalado localmente.
- **Comandos de ejemplo**:
  ```bash
  docker build -t sowtic-web-page .
  docker run --rm -p 8080:8080 sowtic-web-page
  ```

## index.html
- **Ruta relativa**: `index.html`
- **Propósito**: documento HTML inicial que Vite usa para montar la SPA.
- **Secciones clave**:
  1. Definición básica de HTML (`<!doctype html>`, `<html lang="en">`).
  2. Carga las fuentes Montserrat y Roboto desde Google Fonts.
  3. Incluye Google Analytics mediante `gtag.js` con la clave pública incrustada.
  4. Contiene el `div` con id `root` donde React renderiza la aplicación.
  5. Importa `src/main.tsx` como módulo.
- **Variables de entorno**: ninguna.
- **Impacto**: Vite procesa este archivo para inyectar los scripts de desarrollo o producción.

## package.json
- **Ruta relativa**: `package.json`
- **Propósito**: definir scripts de npm, dependencias y metadatos del proyecto.
- **Secciones principales**:
  - Metadatos: nombre (`"sowtic"`), versión y `homepage`.
  - Scripts:
    - `dev`: inicia Vite en modo desarrollo (`vite --host --port 8080`).
    - `build`: ejecuta `tsc` para comprobar tipos y luego `vite build --base=./`.
    - `lint`: corre ESLint sobre `ts` y `tsx`.
    - `preview`: sirve la carpeta `dist` generada.
    - `bootstrap:migrate`: copia los SCSS de Bootstrap, los migra con `sass-migrator` y los guarda en `src/styles/vendor/bootstrap`.
  - Dependencias y devDependencies: bibliotecas React, Bootstrap, EmailJS, herramientas de linting y compilación, etc.
- **Variables de entorno**: no declara variables directamente.
- **Impacto**: centraliza los comandos habituales para desarrollo, construcción y linting.
- **Ejemplos**:
  ```bash
  npm install      # instalar dependencias
  npm run dev      # servidor de desarrollo
  npm run build    # generar dist/
  npm run preview  # revisar la build
  npm run lint     # ejecutar ESLint
  ```

## tsconfig.json
- **Ruta relativa**: `tsconfig.json`
- **Propósito**: opciones de compilación de TypeScript para la aplicación React.
- **Opciones destacadas**:
  - `target: "ES2020"` y `module: "ESNext"`.
  - `lib`: incluye `DOM` y `DOM.Iterable`.
  - `moduleResolution: "bundler"` para trabajar con Vite.
  - `allowImportingTsExtensions: true` y `resolveJsonModule: true`.
  - `isolatedModules: true` y `noEmit: true` (no se generan archivos JS al compilar).
  - `jsx: "react-jsx"`.
  - Modo `strict` con comprobaciones de variables sin uso.
  - Solo se incluyen archivos de `src/`.
- **Variables de entorno**: no se utilizan.
- **Impacto**: garantiza un chequeo estricto de tipos sin generar código adicional; Vite maneja el bundling.

## vite.config.ts
- **Ruta relativa**: `vite.config.ts`
- **Propósito**: configuración de Vite para el desarrollo y la build de la SPA.
- **Secciones**:
  - Importa `defineConfig`, el plugin React y un logger personalizado para Sass.
  - `plugins: [react()]` – habilita React con Fast Refresh.
  - `css.preprocessorOptions.scss` – silencia dependencias y usa el logger para los avisos de Sass.
  - `server` – escucha en `0.0.0.0` (por `host: true`) en el puerto `8080` y evita cambiar de puerto (`strictPort: true`).
  - `logLevel: "info"`.
- **Variables de entorno**: no hay variables específicas, pero Vite procesaría variables `VITE_*` si existieran.
- **Impacto**: determina cómo se compilan los estilos SCSS, cómo corre el servidor de desarrollo y cómo se realiza el build.

---

Estos archivos establecen la base del proyecto. Juntos permiten un flujo sencillo de desarrollo con `npm run dev`, construcción con `npm run build` y despliegue en Docker si se desea.
