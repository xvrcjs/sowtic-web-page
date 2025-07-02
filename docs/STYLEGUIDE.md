---
section_id: "STYLEGUIDE-01"
title: "Guía de Estilo"
version: "1.2"
date: "2025-07-01"
related_sections:
  - "src-styles.md"
  - "files-and-folders.md"
use_all_sections: false

enforce:
  - styleguide: "STYLEGUIDE.md"
  - summary_index: "summary-index.json"
agents:
  - Code Agent
  - Doc Agent

tech_stack:
  - React 18
  - TypeScript
  - Vite
  - Sass
  - Bootstrap
---

# Guía de Estilo de Sowtic Web Page

Este documento resume las convenciones reales observadas en el repositorio.

## Nomenclatura

- **Carpetas**: las rutas y recursos usan `kebab-case` (ej. `public/img/background01.png`). Los componentes se agrupan en `src/components/` y las páginas en `src/pages/`.
- **Componentes**: archivos en `PascalCase` con extensión `.tsx`. Ejemplo:
  ```tsx
  import Header from "./Header";
  import Footer from "./Footer";
  import ContentStripe from "./ContentStripe";
  ```
  — `src/components/index.ts` líneas 2-4.
- **Hooks**: comienzan con `use` y se escriben en `camelCase`, por ejemplo `usePageTracking.ts`.
- **Servicios**: nombre en `camelCase` terminado en `Service`, como `bannerService.ts`.

## SCSS

- `src/index.scss` es el punto de entrada global e importa:
  - `@forward "./styles/bootstrap-theme"` para las variables de Bootstrap.
  - `@use "./styles/index" as *;` para las reglas y parciales de componentes.
- Los estilos de cada componente residen en `src/styles/components/` con el prefijo `_` y siguen una nomenclatura tipo BEM:
  ```scss
  .header {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      &:not(.solid-nav) {
          .navbar-toggler {
              border-color: #fff;
          }
      }
  }
  ```
  — `src/styles/components/_header.scss` líneas 3-10.
- No existe un archivo de variables o mixins independientes (`_variables.scss` o `_mixins.scss`). Las personalizaciones globales se realizan dentro de `bootstrap-theme.scss` y los parciales de componentes.

## Importaciones

1. **Módulos externos** (React, librerías).
2. **Servicios y utilidades propias**.
3. **Componentes locales**.
4. **Estilos** al final.

Ejemplo de `src/pages/Home.tsx`:
```tsx
import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Modal, Card } from "react-bootstrap";
import BannerService from '../services/bannerService';
import { ContentStripe, MainBanner } from '../components';
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
```
— líneas 2-10.

El proyecto no define alias de Vite; todas las rutas se importan de forma relativa.

## Linting y Formato

- **ESLint**: configurado según `.eslintrc.cjs` para TypeScript y React Hooks.
  ```js
  module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
  ```
  — `.eslintrc.cjs` líneas 1-18.
- **Prettier**: no se ha establecido configuración explícita.
- **PostCSS**: `postcss.config.js` contiene un objeto `plugins` vacío.
  ```js
  export default {
      plugins: {

      },
    }
  ```
- Para ejecutar el linting se usa `npm run lint` según `package.json`.

## Validación de Codificación Unicode

Todas las secuencias de escape Unicode (`\u00XX`) deben reemplazarse por su carácter UTF-8 correspondiente. Cualquier archivo Markdown que contenga `\u00XX` debe fallar la validación de estilo.

