---
section_id: "DOC-AUDIT-01"
title: "Estado de la Documentación"
version: "1.1"
date: "2025-07-03"
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
| Utilidades y scripts (`scripts/*`, `src/utils/ga.ts`) | `files-and-folders.md` |

## 2. Grietas o faltantes

- El JSON de `src-components-shared.md` lista **ScrollToHashElement** pero el archivo real es `ScrollToHasElement.ts`【F:docs/src-components-shared.md†L42-L46】【F:src/components/shared/ScrollToHasElement.ts†L1-L5】.
- Algunos documentos no incluyen el campo `use_all_sections` en el front matter, a diferencia de la plantilla de `AGENTS.md`.
- `public.md` solo contiene el listado JSON sin descripción adicional de buenas prácticas.
- No existe documentación específica para `src/utils/ga.ts` fuera de una mención breve en `files-and-folders.md`.

## 3. Consistencia de metadatos

Todos los documentos poseen `section_id`, `title`, `version`, `date`, `related_sections`, `enforce` y `agents`. Sin embargo, solo algunos utilizan `use_all_sections`. Las fechas están alineadas entre 2025‑07‑01 y 2025‑07‑03.

## 4. Concordancia JSON ↔ Código

- `entrypoint-and-router.md` contiene un bloque JSON que documenta `App.tsx`【F:docs/entrypoint-and-router.md†L19-L27】.
- El listado de parciales SCSS en `src-styles.md` coincide con los archivos reales【F:docs/src-styles.md†L56-L63】.
- El mapeo de `public/` incluye rutas existentes en disco【F:docs/public.md†L21-L29】.
- `src-components-shared.md` mantiene la ruta errónea para `ScrollToHashElement`【F:docs/src-components-shared.md†L42-L46】.

## 5. Estado de índices y mapeos

`docs/summary-index.json` referencia los 16 documentos principales del proyecto y sus títulos coinciden con el front matter【F:docs/summary-index.json†L1-L20】.
`components-selectors-mapping.md` enlaza correctamente a secciones de `ui-selectors.md` y `src-components.md`.

## 6. Plan de acción

1. Corregir en `src-components-shared.md` la referencia a `ScrollToHasElement.ts`.
2. Añadir `use_all_sections` en los documentos que carecen de este campo.
3. Extender `public.md` con una explicación de buenas prácticas de uso de la carpeta `public/`.
4. Crear o ampliar documentación sobre `src/utils/ga.ts` (funciones de Analytics).
5. Mantener sincronizados `summary-index.json` y `files-and-folders.md` al modificar documentos.
