---
section_id: "SRC-ASSETS-05"
title: "Recursos en src/assets"
version: "1.1"
date: "2025-07-02"
related_sections:
  - "public.md"
  - "files-and-folders.md"
  - "src-styles.md"
enforce:
  - styleguide: "STYLEGUIDE.md"
  - summary_index: "summary-index.json"
agents:
  - Code Agent
  - Test Agent
  - Doc Agent
use_all_sections: false
---

# Recursos en `src/assets/`

```json
[
  {
    "path": "react.svg",
    "type": "svg",
    "imported_in": ["src/App.tsx"],
    "inline_threshold_kb": 10,
    "notes": ["Mantener optimizado", "Agregar loading=\"lazy\" si no es above-the-fold"]
  }
]
```

Este JSON lista todos los assets importados en código o estilos para que Vite los procese correctamente. El Code Agent leerá este bloque para validar imports y optimizar los archivos; el Test Agent generará tests que comprueben la carga y el rendimiento de cada recurso.

La carpeta `src/assets/` almacena archivos que se importan dentro del código React o las hojas de estilo para que Vite los procese. Al estar dentro de `src/`, Vite aplica optimizaciones automáticas: copia a `dist/` con nombres hashed, inlining en caso de tamaños pequeños y soporte para importación directa.

Actualmente solo contiene el logotipo usado en la plantilla inicial:

## `src/assets/react.svg`
- **Tipo de archivo:** SVG
- **Importación en React:**
  ```tsx
  import reactLogo from './assets/react.svg';

  function App() {
    return <img src={reactLogo} className="logo react" alt="React logo" />;
  }
  ```
- **Motivo para guardarlo en `src/assets/`:** el componente lo importa mediante JavaScript para que Vite lo incluya en el bundle. Si estuviera en `public/`, no se generaría un hash ni se podría importar como módulo.
- **Notas de optimización:** este SVG es muy ligero (unos pocos KB). Aun así conviene mantenerlo comprimido y añadir `loading="lazy"` a la etiqueta `<img>` si no aparece en la cabecera de la página.

### Cuándo usar `src/assets/` vs. `public/`
- **`src/assets/`:** para imágenes o iconos importados desde JavaScript/TypeScript o SCSS. Vite puede optimizarlos, aplicar hashes para cacheo y decidir si incrustarlos en base64.
- **`public/`:** para archivos que se referencian por ruta estática en `index.html` o desde datos externos (por ejemplo, URLs en archivos JSON) y que deben copiarse tal cual.

A medida que el proyecto crezca se recomienda colocar en `src/assets/` cualquier recurso estático consumido por componentes para beneficiarse del procesamiento automático de Vite, preferiblemente en formatos modernos como WebP y aplicando técnicas como carga diferida (`loading="lazy"`) si no son visibles al inicio.

## Icono de Vite {#vite-icon}
El archivo `public/vite.svg` se mantiene como favicon de la aplicación y se referencia de forma directa en `index.html`.

## Definiciones de `@font-face` {#font-face-definitions}
Las fuentes Montserrat ubicadas en `public/fonts/` se vinculan desde `src/index.scss` mediante varias reglas `@font-face` que definen pesos y estilos.

## Imágenes de servicio {#service-images}
Los JSON simulados en `src/services/databaseInMemory/` utilizan diversas imágenes almacenadas en `public/img/` para poblar tarjetas y banners de ejemplo.

## Criterios de Aceptación
1. Cada `path` del JSON existe y se importa sin error en TypeScript.
2. El bundle final (`dist/`) incluye estos assets con nombres hasheados.
3. Los archivos que superen `inline_threshold_kb` no se inyectan en base64.
4. El Test Agent genera un test en Playwright que verifique que al cargar la home, la imagen `<img class="logo react">` responde con HTTP 200 y su URL contiene un hash.

[Code Agent]
"Usa el JSON de src-assets.md para:

Validar que todos los archivos existen en disco.

Comprimir SVGs >1 KB usando SVGO.

Añadir loading="lazy" a los imports en componentes que no estén above-the-fold."

[Test Agent]
"Genera un test en Playwright que navegue a /, seleccione <img class='logo react'> y verifique que la petición HTTP devuelve código 200 y que la URL incluye un hash de versión."
