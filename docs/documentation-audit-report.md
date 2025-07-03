---
section_id: "DOC-AUDIT-01"
title: "Estado de la Documentación"
version: "1.0"
date: "2025-07-02"
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
| `src/App.tsx`, `src/App.css` | `files-and-folders.md` |
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

- `src/App.tsx` carece de una sección JSON dedicada; solo se menciona brevemente en `files-and-folders.md`.
- En `src-components-shared.md` el bloque JSON usa el nombre **ScrollToHashElement** mientras que el archivo se llama `ScrollToHasElement.ts`.
- `src-styles.md` referencia parciales `_card__transparent.scss` y `_carousel__collapse.scss`, mientras que en el código existen `_card__tansparent.scss` y `_carusel__collapse.scss`【F:docs/src-styles.md†L52-L61】.
- `ui-selectors.md` antes refería `#toggle-menu` a `src/components/shared/Header.tsx`; ya se actualizó a `src/components/Header.tsx`.
- `docs/tests/structure-check.yml` espera un script `check-structure.sh` que no está en el repositorio.

## 3. Consistencia de metadatos

Todos los documentos en `docs/` incluyen `section_id`, `title`, `version`, `date`, `related_sections`, `enforce` y `agents`. Las fechas oscilan entre `2025-06-30` y `2025-07-02`. Sin embargo, los títulos en `summary-index.json` no siempre coinciden con el `title` real del documento (ejemplo: "Mapeo Componentes → Selectores CSS" vs. "Mapa de Componentes y Selectores").

## 4. Concordancia JSON ↔ Código

- El bloque JSON de `src-components.md` especifica la hoja de estilos `src/styles/components/_carusel__collapse.scss`, que concuerda con el archivo existente【F:docs/src-components.md†L20-L27】.
- En `src-styles.md` los nombres de parciales no reflejan la ortografía real del directorio (`_card__tansparent.scss`, `_carusel__collapse.scss`)【F:docs/src-styles.md†L52-L61】【F:src/styles/components/_card__tansparent.scss†L1-L10】.
- `src-components-shared.md` menciona `ScrollToHashElement`, aunque el código exporta `ScrollToHasElement`【F:docs/src-components-shared.md†L42-L46】【F:src/components/shared/ScrollToHasElement.ts†L1-L5】.
- En `ui-selectors.md` se corrigió la ruta del selector `#toggle-menu` para que apunte a `src/components/Header.tsx`.

## 5. Estado de índices y mapeos

- `summary-index.json` contiene 16 entradas y enlaza a cada archivo de `docs/`. Algunos títulos difieren de los declarados en el Front Matter (por ejemplo, "Estilos en src/styles" vs. "Estilos SCSS").
- `components-selectors-mapping.md` lista cinco componentes y coincide con los archivos reales.
- `components-selectors-mapping.md` y `ui-selectors.md` usan anclas que existen en los documentos destino.

## 6. Plan de acción

1. **Crear sección JSON para `App.tsx`** en un nuevo documento o dentro de `entrypoint-and-router.md`.
2. **Corregir nombres** en `src-components-shared.md` y `src-styles.md` para reflejar la ruta real de archivos (`ScrollToHasElement.ts`, `_card__tansparent.scss`, `_carusel__collapse.scss`).
3. **Actualizar `ui-selectors.md`** cambiando la referencia de `src/components/shared/Header.tsx` a `src/components/Header.tsx`.
4. **Homogeneizar títulos** en `summary-index.json` para que coincidan con el Front Matter de cada documento.
5. **Implementar** el script `check-structure.sh` indicado en `docs/tests/structure-check.yml` y enlazarlo desde `package.json`.
6. **Mantener este reporte** con Front Matter y actualizarlo periódicamente al agregar o mover archivos.

