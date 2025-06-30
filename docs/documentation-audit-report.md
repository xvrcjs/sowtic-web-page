# Documentation Audit Report

## Cobertura actual

La siguiente tabla mapea los elementos del proyecto con los documentos donde se describen:

| Elemento | Documento(s) |
| --- | --- |
| `src/components/CarouselCollapse.tsx` | `src-components.md`, `components-selectors-mapping.md` |
| `src/components/ContentStripe.tsx` | `src-components.md`, `components-selectors-mapping.md` |
| `src/components/Footer.tsx` | `src-components.md`, `components-selectors-mapping.md` |
| `src/components/Header.tsx` | `src-components.md`, `components-selectors-mapping.md` |
| `src/components/MainBanner.tsx` | `src-components.md`, `components-selectors-mapping.md` |
| `src/components/index.ts` | `src-components.md` |
| `src/components/shared/*` | `src-components-shared.md` |
| `src/hooks/usePageTracking.ts` | `src-hooks.md` |
| `src/pages/*` | `src-pages.md` |
| `src/pages/layouts/Layout.tsx` | `src-pages-layouts.md` |
| `src/services/*Service.ts` | `src-services.md` |
| `src/services/databaseInMemory/*` | `src-services-databaseInMemory.md` |
| `src/services/interface/*` | `src-services-interface.md` |
| `src/styles/**/*` | `src-styles.md`, `STYLEGUIDE.md` |
| `src/assets/react.svg` | `src-assets.md` |
| `public/**/*` | `public.md` |
| Configuración raíz (`Dockerfile`, `vite.config.ts`, etc.) | `root-and-global-configuration.md`, `files-and-folders.md` |
| Scripts (`scripts/*`) | `files-and-folders.md` |
| Utilidades (`src/utils/ga.ts`) | `files-and-folders.md` |


## Grietas o faltantes

- El bloque JSON de `src-components.md` solo lista **CarouselCollapse** y **ContentStripe**; faltan `Footer`, `Header` y `MainBanner` aunque se describen más abajo.
- En `src-styles.md` los nombres de archivos no coinciden con el repositorio:
  - Se documenta `_card__transparent.scss`, pero el archivo real es `_card__tansparent.scss`.
  - Se menciona `_carousel__collapse.scss`, mientras que en `src/styles` existe `_carusel__collapse.scss`.
- En `src-components-shared.md` el componente se nombra `ScrollToHashElement` aunque el fichero es `ScrollToHasElement.ts`.
- `docs/tests/structure-check.yml` hace referencia a un script `check-structure.sh` que no está presente en el proyecto.
- El `summary-index.json` usa el título "Mapa de Componentes y Selectores" que no coincide exactamente con `title` en `components-selectors-mapping.md`.
- No hay documentación JSON detallada para `App.tsx` ni para el propio `Router` más allá de las descripciones narrativas en otros documentos.


## Consistencia de metadatos

Se verificaron los bloques *Front Matter* de los 17 documentos Markdown. Todos contienen `section_id`, `title`, `version`, `date`, `related_sections`, `enforce` y `agents`. Las fechas están normalizadas al rango `2025-06-30`/`2025-07-01` y las versiones se mantienen en `1.0` (o `1.1` para la guía de estilo). 

No se encontraron campos ausentes, aunque solo `STYLEGUIDE.md` y `entrypoint-and-router.md` utilizan `use_all_sections`. Esta opción no es obligatoria según la guía.


## Concordancia JSON ↔ Código

Se revisaron los bloques JSON presentes en la documentación:

- `src-components.md` describe solo dos componentes en su JSON inicial. Los archivos indicados existen, pero el resto de componentes (Footer, Header, MainBanner) solo aparecen en la narrativa y no forman parte del bloque machine‑readable.
- `src-components-shared.md` referencia `ScrollToHashElement`, pero el archivo real se llama `ScrollToHasElement.ts`.
- `src-styles.md` declara `_card__transparent.scss` y `_carousel__collapse.scss`; en `src/styles/components/` existen respectivamente `_card__tansparent.scss` y `_carusel__collapse.scss`.
- Los JSON de `src-services.md`, `src-services-interface.md`, `src-services-databaseInMemory.md` y `src-pages.md` coinciden con las rutas y métodos reales de los archivos TypeScript.


## Estado de índices y mapeos

- `summary-index.json` contiene 16 entradas y apunta correctamente a cada archivo dentro de `docs/`. Los nombres de archivo coinciden, aunque algunos títulos no replican exactamente el valor del campo `title` de cada documento (ejemplo: "Mapa de Componentes y Selectores" vs "Mapeo Componentes → Selectores CSS").
- `components-selectors-mapping.md` enlaza a `ui-selectors.md` y `src-components.md`; el JSON refleja cinco componentes pero requiere actualizarse cuando se añadan o modifiquen archivos.
- `ui-selectors.md` incluye un extenso listado de selectores con anclas válidas y ejemplos de código. Los anclajes referenciados desde otros documentos existen.
- `docs/tests/structure-check.yml` está preparado para validar la estructura del repo pero el script mencionado no existe actualmente.


## Plan de acción

1. **Actualizar `src-components.md`**
   - Incluir en el bloque JSON los componentes `Footer`, `Header` y `MainBanner` con sus rutas y selectores.
   - Incrementar el campo `version` a `1.1` y actualizar la fecha.
   - Sincronizar `components-selectors-mapping.md` con estas nuevas entradas.
2. **Corregir nombres en `src-styles.md`**
   - Ajustar las rutas de `_card__tansparent.scss` y `_carusel__collapse.scss`.
   - Generar o actualizar el script de validación mencionado (`scripts/check-styles.js`).
3. **Revisar `src-components-shared.md`**
   - Cambiar `ScrollToHashElement` por `ScrollToHasElement` en el bloque JSON y en el diagrama.
4. **Agregar script faltante**
   - Implementar `check-structure.sh` conforme a lo indicado en `docs/tests/structure-check.yml` y enlazarlo desde `package.json`.
5. **Homogeneizar títulos en `summary-index.json`**
   - Alinear el campo `title` con el `title` real de cada documento para evitar confusión.
6. **Extender la documentación de `Router` y `App`**
   - Añadir entradas JSON en `entrypoint-and-router.md` o un nuevo documento que detalle `App.tsx` y `router.tsx`.

