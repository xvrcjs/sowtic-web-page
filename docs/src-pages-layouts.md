---
layout: default
---

# Layouts en `src/pages/layouts/`

Esta carpeta aloja los contenedores que envuelven a las distintas páginas. En la estructura actual solo existe un layout principal, utilizado para todas las rutas definidas en `router.tsx`.

## Layout
- **Ruta de archivo:** `src/pages/layouts/Layout.tsx`.
- **Estructura JSX:**
  - Incluye `<ScrollToTop />` y `<ScrollToHashElement />` para gestionar el desplazamiento automático.
  - Muestra el `<Header />` fijo en la parte superior.
  - Renderiza `<Outlet />` donde aparecen las páginas hijas del router.
  - Cierra con `<Footer />`.
- **Hooks de contexto o providers:** no utiliza contextos propios; delega en los componentes importados (`ScrollToTop`, `ScrollToHashElement`) que usan hooks de React Router para detectar cambios de ruta.
- **Uso desde `router.tsx`:** el router crea una ruta raíz con `element: <Layout />` y define sus páginas como elementos hijos. Así, cada sección de la SPA se renderiza dentro de este layout.

