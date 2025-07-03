---
section_id: "AGENTS-00"
title: "Guía de Agentes"
version: "1.3"
date: "2025-07-01"

related_sections:
  - "files-and-folders.md"
  - "root-and-global-configuration.md"
use_all_sections: true

enforce:
  - styleguide: "STYLEGUIDE.md"
  - summary_index: "summary-index.json"
  - unicode_escapes: "docs/*.md"
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

# Propósito
Este archivo define los agentes que colaboran en el mantenimiento y ampliación de la documentación y el código del proyecto.

## Agentes

### Code Agent
- **Objetivo:** Refactorizar y actualizar contenido, estructura de componentes y CSS conforme a la guía de estilo y a los identificadores de sección.
- **Recursos a leer:** `docs/STYLEGUIDE.md`, `docs/summary-index.json`, `README.md`.
- **Regla compartida:** Al actualizar cualquier archivo dentro de `docs/`, se debe reindexar toda la documentación siguiendo las reglas de `docs/STYLEGUIDE.md`, y todos los documentos que lo requieran deben incluir el Front Matter YAML especificado en la guía de estilo.

### Design Agent *(opcional)*
- **Objetivo:** Aplicar cambios de diseño ajustando SCSS/Bootstrap/MUI según maquetas o directrices. Generar *snippets* de estilo y clases reutilizables.
- **Recursos a leer:** `docs/STYLEGUIDE.md`, `README.md`.

### Test Agent
- **Objetivo:** Validar accesibilidad con *axe*, rendimiento *responsive* con Lighthouse y la correspondencia entre la documentación y el DOM real.
- **Recursos a leer:** `docs/STYLEGUIDE.md`, `docs/summary-index.json`.

### Doc Agent
- **Objetivo:** Actualizar `docs/components-selectors-mapping.md`, `docs/src-components.md` y otros archivos de documentación al modificar o mover componentes.
- **Recursos a leer:** Todos los documentos en `docs/` y `README.md`.
- **Regla compartida:** Al actualizar cualquier archivo dentro de `docs/`, se debe reindexar toda la documentación siguiendo las reglas de `docs/STYLEGUIDE.md`, y todos los documentos que lo requieran deben incluir el Front Matter YAML especificado en la guía de estilo.

## Directrices de sincronización
Si se agrega, elimina o actualiza cualquier archivo o carpeta en el repositorio, se debe actualizar `docs/files-and-folders.md` inmediatamente siguiendo las reglas de `docs/STYLEGUIDE.md` y refrescar el índice en `docs/summary-index.json`.
Al revisar o actualizar cualquier `docs/*.md`, se debe validar que no existan secuencias `\u00XX`. Si se encuentran, la tarea falla y se debe corregir el archivo.
Si se añade, borra o mueve un documento Markdown dentro de `docs/`, deberá incluirse en `docs/summary-index.json`, llevar Front Matter YAML y registrarse en `docs/files-and-folders.md`.

## Plantilla de Front Matter YAML
Se recomienda incluir el siguiente bloque al inicio de cada archivo `docs/*.md` para mantener uniformidad.

```yaml
---
section_id: "<ID_UNICO>"        # Ej. "SUMMARY-01", "COMP-SELECT-02"
title: "<Título descriptivo>"   # Ej. "Archivos y Carpetas", "Componentes Compartidos"
version: "1.0"                  # Se actualiza en cada iteración
date: "2025-06-30"              # Fecha última modificación

related_sections:               # Otros docs relacionados
  - "files-and-folders.md"
  - "root-and-global-configuration.md"
use_all_sections: false         # Solo true en el doc inicial o SUMMARY-00

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

template: "task-template.md"    # Si aplica para backlog
---
```
