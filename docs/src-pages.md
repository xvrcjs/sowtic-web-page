# Páginas en `src/pages/`

Este documento resume la funcionalidad de cada página de la aplicación, la forma en que obtienen sus datos y las rutas configuradas en React Router.

## Home
- **Ruta del archivo:** `src/pages/Home.tsx`.
- **Path en React Router:** `/` y `/home`.
- **Datos consumidos:** usa `BannerService` para llamar a `getAllByPage('home')`, que obtiene banners y tarjetas de la carpeta `databaseInMemory`.
- **Componentes renderizados:** `MainBanner`, `ContentStripe` y un carrusel `Swiper` con tarjetas de productos. También se muestran componentes de soporte como `Fade`.
- **Llamadas a la API simulada:** la función `getBannerId` filtra los datos devueltos por el servicio para cada sección.
- **Interacciones:** un estado `show` abre un `<Modal>` con un video de YouTube al pulsar el botón «Ver Video». Los botones «Más información» llevan al formulario de contacto.

## RemoteAssistant
- **Ruta del archivo:** `src/pages/RemoteAssistant.tsx`.
- **Path en React Router:** `/remote-assistant`.
- **Datos consumidos:** llama a `bannerService.getAllByPage('remote-assistant')` para obtener banners, tarjetas y listados.
- **Componentes renderizados:** `MainBanner`, `ContentStripe`, `CardTransparent` y `CarouselCollapse` para las secciones de problemas, beneficios y pasos del servicio.
- **Llamadas a la API simulada:** `getBannerId` filtra los registros de `databaseInMemory/banner.ts` según `bannerId` y `page`.
- **Interacciones:** no mantiene estado local salvo los datos cargados. Los botones y tarjetas enlazan al formulario de contacto o despliegan información dentro de `CarouselCollapse`.

## SmartRutines
- **Ruta del archivo:** `src/pages/SmartRutines.tsx`.
- **Path en React Router:** `/smart-rutines`.
- **Datos consumidos:** obtiene información desde `bannerService.getAllByPage('smart-rutines')`.
- **Componentes renderizados:** `MainBanner`, `ContentStripe`, `CardTransparent` y `CarouselCollapse`, con estructura equivalente a la de *RemoteAssistant*.
- **Llamadas a la API simulada:** se filtra la base de datos en memoria con `getBannerId` para cargar cada sección.
- **Interacciones:** las tarjetas descriptivas y botones usan `react-awesome-reveal` para animaciones; no hay otro estado local.

## ImageComputing
- **Ruta del archivo:** `src/pages/ImageComputing.tsx`.
- **Path en React Router:** `/image-computing`.
- **Datos consumidos:** no hace peticiones al servicio; el contenido es estático y utiliza componentes `MainBanner` y `ContentStripe`.
- **Componentes renderizados:** tarjetas `Card` dentro de una sección «¿Cómo funciona?» y dos tarjetas plegables que se muestran al hacer clic.
- **Llamadas a la API simulada:** ninguna.
- **Interacciones:** un estado `open` controla qué tarjeta desplegar; los eventos `onClick` alternan la visibilidad de cada descripción con `Fade`.

## InventaryControl
- **Ruta del archivo:** `src/pages/InventaryControl.tsx`.
- **Path en React Router:** `/inventary-control`.
- **Datos consumidos:** extrae banners y tarjetas desde `bannerService.getAllByPage('inventary-control')`.
- **Componentes renderizados:** `MainBanner`, `ContentStripe`, `CardTransparent` y `CarouselCollapse` para explicar el servicio y sus beneficios.
- **Llamadas a la API simulada:** `getBannerId` filtra `databaseInMemory` por página e `id` de banner.
- **Interacciones:** los botones de cada tarjeta redirigen al formulario de contacto. No se gestiona otro estado aparte de la carga de datos.

## Índice de exportación
- **Ruta del archivo:** `src/pages/index.ts`.
- **Propósito:** reexporta todas las páginas y el layout principal para que el router pueda importarlos de forma centralizada.

Todas estas páginas se renderizan dentro del `Layout` definido en `src/pages/layouts/Layout.tsx` y se orquestan mediante `createBrowserRouter` en `src/router.tsx`.
