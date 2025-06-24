---
layout: default
---

# Hooks personalizados en `src/hooks/`

Esta carpeta almacena funciones React reutilizables que encapsulan l\u00f3gica com\u00fan. Actualmente solo existe un hook dedicado al seguimiento de p\u00e1ginas en Google Analytics.

## usePageTracking
- **Ruta del archivo:** `src/hooks/usePageTracking.ts`.
- **Objetivo:** registrar una vista de p\u00e1gina cada vez que cambia la ubicaci\u00f3n del navegador. Se utiliza en el nivel superior de la aplicaci\u00f3n para integrar Google Analytics.
- **L\u00f3gica interna:**
  1. Importa `useEffect` y `useLocation` para detectar cambios en la URL.
  2. Inicializa `ReactGA` con el c\u00f3digo de seguimiento y, dentro del efecto, llama a `ReactGA.pageview(page)`.
  3. Si `window.gtag` est\u00e1 disponible, env\u00eda un evento `config` con la ruta actual para la versi\u00f3n GA4.
  4. El efecto depende de `pathname` y `search` de `location`.
- **Ejemplo de integraci\u00f3n:**
  ```tsx
  // src/App.tsx
  import usePageTracking from "./hooks/usePageTracking";

  function App() {
    usePageTracking();
    return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
  }
  ```
