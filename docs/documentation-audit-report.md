---
section_id: "DOC-AUDIT-01"
title: "Estado de la Documentación"
version: "1.2"
date: "2025-07-05"
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
| `src/App.tsx`, `src/App.css` | `files-and-folders.md`, `entrypoint-and-router.md` |
| `src/main.tsx`, `src/router.tsx`, `src/index.scss` | `entrypoint-and-router.md` |
| Componentes en `src/components/` | `src-components.md`, `components-selectors-mapping.md`, `ui-selectors.md` |
| Componentes compartidos en `src/components/shared/` | `src-components-shared.md` |
| Hook `usePageTracking` | `src-hooks.md` |
| Páginas en `src/pages/` | `src-pages.md` |
| Layout `Layout.tsx` | `src-pages-layouts.md` |
| Servicios (`bannerService.ts`, `cardService.ts`, `stripeService.ts`) | `src-services.md` |
| Datos en `src/services/databaseInMemory/` | `src-services-databaseInMemory.md` |
| Interfaces en `src/services/interface/` | `src-services-interface.md` |
| Estilos SCSS y parciales | `src-styles.md`, `STYLEGUIDE.md` |
| Asset `src/assets/react.svg` | `src-assets.md` |
| Recursos `public/` | `public.md` |
| Configuración raíz (Dockerfile, Vite, tsconfig, etc.) | `root-and-global-configuration.md`, `files-and-folders.md` |
| Utilidades (`src/utils/ga.ts`) | `src-utils-ga.md`, `files-and-folders.md` |

## 2. Grietas o faltantes

- El JSON de `src-components-shared.md` y `src-pages-layouts.md` utilizan **ScrollToHashElement** pero el archivo real se llama `ScrollToHasElement.ts`【F:docs/src-components-shared.md†L42-L46】【F:docs/src-pages-layouts.md†L25-L32】.
- `docs/summary-index.json` no incluye `STYLEGUIDE.md` ni este reporte de auditoría.

## 3. Consistencia de metadatos

Todos los documentos poseen `section_id`, `title`, `version`, `date`, `related_sections`, `enforce`, `agents` y el campo `use_all_sections`. Las fechas están comprendidas entre 2025‑07‑01 y 2025‑07‑05.

## 4. Concordancia JSON ↔ Código

- `entrypoint-and-router.md` contiene un bloque JSON que documenta `App.tsx`【F:docs/entrypoint-and-router.md†L19-L27】.
- El listado de parciales SCSS en `src-styles.md` coincide con los archivos reales【F:docs/src-styles.md†L56-L63】.
- El mapeo de `public/` incluye rutas existentes en disco【F:docs/public.md†L21-L29】.
- `src-components-shared.md` mantiene la ruta errónea para `ScrollToHashElement`【F:docs/src-components-shared.md†L42-L46】.

## 5. Estado de índices y mapeos

`docs/summary-index.json` referencia los 17 documentos principales del proyecto y sus títulos coinciden con el front matter【F:docs/summary-index.json†L1-L20】.
`components-selectors-mapping.md` enlaza correctamente a secciones de `ui-selectors.md` y `src-components.md`.

## 6. Plan de acción

1. Corregir en `src-components-shared.md` y `src-pages-layouts.md` la referencia a `ScrollToHashElement`.
2. Incluir `STYLEGUIDE.md` y `documentation-audit-report.md` en `summary-index.json`.
3. Verificar que las rutas listadas en los bloques JSON coincidan con los archivos reales tras cada refactor.
4. Mantener sincronizados `summary-index.json` y `files-and-folders.md` ante cualquier cambio de estructura.
