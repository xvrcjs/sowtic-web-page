# Recursos en `src/assets/`

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
