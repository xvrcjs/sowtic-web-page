---
layout: default
---

# Datos simulados en `src/services/databaseInMemory/`

Esta carpeta contiene arreglos estáticos que sirven como "base de datos" en memoria. Los servicios (`bannerService.ts`, `cardService.ts` y `stripeService.ts`) consumen esta información para suministrar contenido a las páginas.

## banner.ts
- **Ruta:** `src/services/databaseInMemory/banner.ts`.
- **Estructura:** exporta `BANNERS`, un `BannerInterface[]` donde cada registro tiene `id` y un arreglo `data`.
- **Datos relacionados:** `data` se compone de arreglos importados desde `main.ts`, `card.ts` y `stripe.ts` según el `id`.
- **Uso típico:**
  ```ts
  import BannerService from '../services/bannerService';

  const service = new BannerService();
  const banners = await service.getAll();
  ```
- **Notas:** provee la relación entre banners y sus secciones. Para escalar se podrían cargar estos datos desde una API real o un archivo JSON externo.

## card.ts
- **Ruta:** `src/services/databaseInMemory/card.ts`.
- **Estructura:** define `CARD`, un `CardInterface[]` con decenas de objetos que representan tarjetas o beneficios. Incluyen campos opcionales como `image`, `number`, `heading` y `description`.
- **Uso típico:**
  ```ts
  import BannerService from '../services/bannerService';

  const list = await new BannerService().getAllById(1);
  // Acceso a list[0].data que contiene estos elementos
  ```
- **Notas:** se utilizan para poblar carruseles y listados de las páginas de servicios. Si creciera el contenido sería conveniente pasar a un formato paginado o separar por ficheros JSON.

## main.ts
- **Ruta:** `src/services/databaseInMemory/main.ts`.
- **Estructura:** `MAIN` es un `MainInterface[]` con elementos para el banner principal de cada página. Cada objeto indica `page`, `image`, encabezados y textos introductorios.
- **Uso típico:**
  ```ts
  import BannerService from '../services/bannerService';

  const homeBanner = await service.getAllByIdAndPage(0, 'home');
  ```
- **Notas:** al ser datos estáticos es sencillo modificar las imágenes o los textos para pruebas A/B. También podrían extraerse a un CMS a futuro.

## stripe.ts
- **Ruta:** `src/services/databaseInMemory/stripe.ts`.
- **Estructura:** contiene `STRIPE`, un `StripeInterface[]` con tarjetas horizontales (imagen, texto y enlace opcional). Algunos registros incluyen `buttonText`, `buttonUrl` y `buttonPathIcon` para construir botones.
- **Uso típico:**
  ```ts
  import BannerService from '../services/bannerService';

  const sections = await service.getAllByIdAndPage(2, 'home');
  ```
- **Notas:** estas tarjetas complementan el banner principal. Para una aplicación real podrían gestionarse como bloques configurables desde un backend o archivo YAML.

En conjunto, estos ficheros proporcionan datos de prueba que permiten desarrollar la interfaz sin depender de un servidor. La modularidad facilita reemplazarlos más adelante por peticiones HTTP o por un sistema de persistencia más robusto.
