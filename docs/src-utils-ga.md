---
section_id: "SRC-UTILS-GA-17"
title: "Utilidades de Google Analytics"
version: "1.0"
date: "2025-07-03"
related_sections:
  - "src-hooks.md"
  - "files-and-folders.md"
enforce:
  - styleguide: "STYLEGUIDE.md"
  - summary_index: "summary-index.json"
agents:
  - Code Agent
  - Test Agent
  - Doc Agent
use_all_sections: false
---

Este documento describe las funciones de apoyo para Google Analytics.

```json
{
  "file": "src/utils/ga.ts",
  "exports": ["pageview", "event"],
  "dependencies": ["gtag.js", "react-ga"],
  "examples": [
    "pageview('/home')",
    "event({ category: 'User', action: 'Click' })"
  ]
}
```

Las utilidades permiten registrar visitas de página y eventos en GA4 mediante `gtag.js` y la biblioteca `react-ga`. Se invocan desde `usePageTracking` u otros componentes que requieran métricas.

## Criterios de Aceptación
- El Code Agent genera pruebas que simulan `gtag` para verificar que `pageview` y `event` envían los parámetros correctos.
- Las funciones exportadas están cubiertas por tests en `src/utils/__tests__/ga.spec.ts`.
- El Test Agent valida que las llamadas no produzcan errores en navegadores modernos.
