---
layout: default
---

# Servicios en `src/services/`

Esta carpeta contiene las clases que proveen datos a los componentes y páginas. Se alimentan de los ficheros en `databaseInMemory/` y exponen métodos asíncronos para obtener banners, tarjetas o secciones de tipo "stripe".

## bannerService.ts
- **Ruta:** `src/services/bannerService.ts`.
- **Métodos públicos:**
  - `getAll(): Promise<BannerInterface[] | null>` – devuelve el arreglo completo `BANNERS`.
  - `getAllById(bannerId: number): Promise<BannerInterface[] | null>` – filtra `BANNERS` por `id`.
  - `getSpecificCard(bannerId: number, cardId: number): Promise<DataInterface | null>` – dentro del banner especificado busca una tarjeta por `id`.
  - `getAllByIdAndPage(bannerId: number, page: string): Promise<DataInterface[] | null>` – selecciona los elementos del banner cuyo `page` contenga la cadena indicada.
  - `getAllByPage(page: string): Promise<BannerInterface[] | null>` – mapea cada banner filtrando su `data` por página.
- **Lógica interna:** los métodos utilizan `Array.filter`, `Array.find` y `Array.map` sobre el arreglo `BANNERS` importado desde `databaseInMemory/banner.ts`.
- **Uso en componentes:** se instancia normalmente con `new BannerService()` dentro de las páginas (`Home`, `RemoteAssistant`, etc.) para cargar datos de secciones y carruseles.

## cardService.ts
- **Ruta:** `src/services/cardService.ts`.
- **Métodos públicos:**
  - `getAll(): Promise<CardInterface[] | null>` – retorna el arreglo `CARD` con todas las tarjetas.
  - *(comentado)* `getAllByPage(page: string): Promise<CardInterface[] | null>` – estaba pensado para filtrar por `page` pero no se utiliza.
- **Lógica interna:** simplemente devuelve la constante `CARD` importada desde `databaseInMemory/card.ts`.
- **Uso en componentes:** se invoca de forma indirecta a través de `BannerService` porque las tarjetas se agrupan en `BANNERS`. Componentes como `CarouselCollapse` o `ContentStripe` reciben estos datos como props.

## stripeService.ts
- **Ruta:** `src/services/stripeService.ts`.
- **Métodos públicos:**
  - `getAll(): Promise<StripeInterface[] | null>` – entrega el arreglo `STRIPE` completo.
  - *(comentado)* `getAllByPage(page: string): Promise<StripeInterface[] | null>` – disponible para un filtrado futuro por página.
- **Lógica interna:** exporta directamente la constante `STRIPE` de `databaseInMemory/stripe.ts`.
- **Uso en componentes:** tras obtener los datos con `BannerService.getAllByIdAndPage(2, 'home')`, se pasan a componentes como `ContentStripe` para renderizar bloques con imagen y texto.

En general estos servicios funcionan como capas de abstracción muy delgadas sobre los datos en memoria. En una aplicación real podrían reemplazarse por peticiones HTTP a un backend o a un CMS. Para utilizarlos basta con importarlos en el componente o página correspondiente, por ejemplo:

```ts
import BannerService from "../services/bannerService";

const service = new BannerService();
const banners = await service.getAll();
```

