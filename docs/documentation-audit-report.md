---
section_id: "DOC-AUDIT-01"
title: "Estado de la Documentación"
version: "1.3"
date: "2025-07-06"
related_sections:
  - "summary-index.json"
  - "files-and-folders.md"
use_all_sections: false
enforce:
  - styleguide: "STYLEGUIDE.md"
  - summary_index: "summary-index.json"
agents:
  - Doc Agent
  - Test Agent
tech_stack:
  - React 18
  - TypeScript
  - Vite
  - Sass
  - Bootstrap
---

# Informe de Auditoría de Documentación

Este reporte contrasta los archivos presentes en el repositorio con la cobertura documental dentro de `docs/`.

## 1. Cobertura actual

| Elemento | Documento(s) |
| --- | --- |
| `src/App.tsx`, `src/App.css`, `src/main.tsx`, `src/router.tsx`, `src/index.scss` | `entrypoint-and-router.md`, `files-and-folders.md` |
| Componentes en `src/components/` | `src-components.md`, `components-selectors-mapping.md`, `ui-selectors.md` |
| Componentes compartidos en `src/components/shared/` | `src-components-shared.md`, `ui-selectors.md` |
| Páginas en `src/pages/` y layout `Layout.tsx` | `src-pages.md`, `src-pages-layouts.md` |
| Hook `usePageTracking` | `src-hooks.md` |
| Servicios (`bannerService.ts`, `cardService.ts`, `stripeService.ts`) | `src-services.md` |
| Base de datos InMemory | `src-services-databaseInMemory.md` |
| Interfaces de servicios | `src-services-interface.md` |
| Estilos SCSS y parciales | `src-styles.md`, `STYLEGUIDE.md` |
| Selectores UI | `ui-selectors.md`, `components-selectors-mapping.md` |
| Asset en `src/assets/` | `src-assets.md` |
| Recursos en `public/` | `public.md` |
| Utilidades (`src/utils/ga.ts`) | `src-utils-ga.md` |
| Configuración raíz (Dockerfile, Vite, tsconfig, etc.) y scripts | `root-and-global-configuration.md`, `files-and-folders.md` |

## 2. Grietas o faltantes

- El parcial `_card__tansparent.scss` aparece listado sólo por nombre en `src-styles.md`; convendría indicar su ruta completa `src/styles/components/_card__tansparent.scss`.
- En `src-assets.md` el campo `path` usa `react.svg` en lugar de `src/assets/react.svg`.
- La carpeta `src/styles/vendor/bootstrap` se documenta pero no existe en el repositorio (se genera durante `bootstrap:migrate`).
- Los archivos de fuentes en `public/fonts/static/` se agrupan con comodines y no se documentan de forma individual.

## 3. Consistencia de metadatos

Todos los documentos de `docs/` contienen Front Matter YAML con `section_id`, `title`, `version`, `date`, `related_sections`, `enforce`, `agents` y `use_all_sections`. Las versiones van de 1.0 a 1.3 y las fechas están en julio de 2025.

## 4. Concordancia JSON ↔ Código

- El bloque JSON que describe `App` y las rutas en `entrypoint-and-router.md` coincide con los archivos reales【F:docs/entrypoint-and-router.md†L19-L34】.
- Los parciales SCSS listados en `src-styles.md` se corresponden con los existentes en `src/styles/components/`【F:docs/src-styles.md†L52-L66】.
- En `src-services-databaseInMemory.md` cada `path` existe bajo `src/services/databaseInMemory/`【F:docs/src-services-databaseInMemory.md†L21-L37】.
- El mapeo de componentes y selectores refleja correctamente las rutas de React y SCSS【F:docs/components-selectors-mapping.md†L19-L37】.
- Se detectó que `src-assets.md` usa una ruta relativa (`react.svg`) que no coincide exactamente con `src/assets/react.svg`.

## 5. Estado de índices y mapeos

`docs/summary-index.json` enumera 19 documentos y enlaza correctamente sus títulos y rutas【F:docs/summary-index.json†L1-L39】. `components-selectors-mapping.md` y `ui-selectors.md` mantienen coherencia entre componentes y selectores.

## 6. Plan de acción

1. Actualizar `src-styles.md` para incluir las rutas completas de cada parcial SCSS.
2. Corregir en `src-assets.md` el campo `path` de `react.svg` a `src/assets/react.svg`.
3. Aclarar en `src-styles.md` que `src/styles/vendor/bootstrap` se genera con el script `bootstrap:migrate`.
4. Mantener `summary-index.json` y `files-and-folders.md` sincronizados ante nuevas carpetas o archivos.
5. Revisar los comodines en `public.md` para documentar explícitamente las fuentes más relevantes.
