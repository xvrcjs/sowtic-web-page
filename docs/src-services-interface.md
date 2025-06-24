---
layout: default
---

# Tipos e interfaces en `src/services/interface/`

En esta carpeta se definen las estructuras de datos TypeScript que utilizan los servicios y componentes de la aplicación. Las interfaces extienden de una base común para compartir campos y se reexportan desde `index.ts`.

## dataInterface.ts
- **Ruta:** `src/services/interface/dataInterface.ts`.
- **Propiedades:**
  - `id: number` – identificador único del elemento.
  - `bannerId: number` – referencia al banner al que pertenece.
  - `page: string[]` – páginas en las que se muestra el elemento.
- **Relaciones:** interfaz base para el resto de tipos.
- **Ejemplo de uso:**
  ```ts
  import DataInterface from "../services/interface/dataInterface";

  const record: DataInterface = { id: 1, bannerId: 0, page: ['home'] };
  ```

## bannerInterface.ts
- **Ruta:** `src/services/interface/bannerInterface.ts`.
- **Propiedades:**
  - `id: number` – identificador del banner.
  - `pos?: number` – posición o prioridad opcional.
  - `data: DataInterface[]` – elementos asociados al banner.
- **Relaciones:** agrupa un conjunto de `DataInterface`. No extiende de otra interfaz.
- **Ejemplo de uso:**
  ```ts
  import BannerInterface from "../services/interface/bannerInterface";
  import BannerService from "../services/bannerService";

  const service = new BannerService();
  const banners: BannerInterface[] | null = await service.getAll();
  ```

## cardInterface.ts
- **Ruta:** `src/services/interface/cardInterface.ts`.
- **Propiedades:**
  - `number?: string` – numeración u orden de la tarjeta.
  - `heading?: string` – título secundario.
  - `image?: string` – ruta de la imagen ilustrativa.
  - `title?: string` – título principal.
  - `text?: string` – texto breve o descripción.
  - `description?: string` – detalle adicional.
- **Relaciones:** `extends DataInterface`, por lo que también incluye `id`, `bannerId` y `page`.
- **Ejemplo de uso:**
  ```tsx
  import { CardInterface } from "../services/interface";

  const cards: CardInterface[] = getBannerId(1) ?? [];
  ```

## mainInterface.ts
- **Ruta:** `src/services/interface/mainInterface.ts`.
- **Propiedades:**
  - `image?: string` – imagen principal del banner.
  - `buttonBack?: boolean` – si muestra flecha de retroceso.
  - `subHeading?: string` – subtítulo opcional.
  - `heading?: string` – encabezado principal.
  - `text?: string` – párrafo descriptivo.
- **Relaciones:** `extends DataInterface`.
- **Ejemplo de uso:**
  ```tsx
  import { MainInterface } from "../services/interface";

  { getBannerId(0)?.map((main: MainInterface) => (
    <MainBanner key={main.id}>{/* ... */}</MainBanner>
  )) }
  ```

## stripeInterface.ts
- **Ruta:** `src/services/interface/stripeInterface.ts`.
- **Propiedades:**
  - `image?: string` – imagen del bloque.
  - `title?: string` – título de la sección.
  - `text?: string` – descripción breve.
  - `buttonText?: string` – texto del botón opcional.
  - `buttonUrl?: string` – enlace externo del botón.
  - `buttonPathIcon?: string` – icono SVG para el botón.
  - `imageRight?: boolean` – alinea la imagen a la derecha.
- **Relaciones:** `extends DataInterface`.
- **Ejemplo de uso:**
  ```tsx
  import { StripeInterface } from "../services/interface";

  { getBannerId(2)?.map((stripe: StripeInterface) => (
    <ContentStripe key={stripe.id} {...stripe} />
  )) }
  ```

## index.ts
- **Ruta:** `src/services/interface/index.ts`.
- **Propósito:** reexporta todas las interfaces para simplificar las importaciones.
- **Ejemplo:**
  ```ts
  import { BannerInterface, MainInterface } from "../services/interface";
  ```

Estas definiciones permiten tipar los datos que proveen los servicios (`bannerService`, `cardService`, `stripeService`) y facilitan el trabajo con `useState` en las páginas React.
