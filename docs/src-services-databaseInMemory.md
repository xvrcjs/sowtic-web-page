---
section_id: "DB-IMEM-11"
title: "Servicios InMemory de Datos"
version: "1.0"
date: "2025-07-01"
related_sections:
  - "src-services-interface.md"
  - "src-services.md"
  - "summary-index.json"
enforce:
  - styleguide: "STYLEGUIDE.md"
  - summary_index: "summary-index.json"
agents:
  - Code Agent
  - Test Agent
  - Doc Agent
use_all_sections: false
---

```json
[
  {
    "name": "banner.ts",
    "path": "src/services/databaseInMemory/banner.ts",
    "export": "BANNERS: BannerInterface[]",
    "consumers": ["bannerService.ts"],
    "dataSources": ["main.ts", "card.ts", "stripe.ts"],
    "notes": ["Simula llamadas a API real", "Puede migrarse a JSON externo"]
  },
  {
    "name": "card.ts",
    "path": "src/services/databaseInMemory/card.ts",
    "export": "CARD: CardInterface[]",
    "consumers": ["cardService.ts", "bannerService.ts"],
    "notes": ["Datos de pruebas para carruseles", "Podría paginarse"]
  },
  {
    "name": "main.ts",
    "path": "src/services/databaseInMemory/main.ts",
    "export": "MAIN: MainInterface[]",
    "consumers": ["bannerService.ts"],
    "notes": ["Contenido principal para cada página"]
  },
  {
    "name": "stripe.ts",
    "path": "src/services/databaseInMemory/stripe.ts",
    "export": "STRIPE: StripeInterface[]",
    "consumers": ["stripeService.ts", "bannerService.ts"],
    "notes": ["Tarjetas horizontales con enlace opcional"]
  }
]
```

Este JSON ofrece los metadatos de cada recurso InMemory. El Code Agent lo utilizará para validar exportaciones e introducir stubs de tests para cada servicio; el Test Agent generará tests de integración simulando respuestas.

## Criterios de Aceptación
1. Cada `path` y `export` del JSON existe en el repositorio y coincide con la definición TypeScript.  
2. Los servicios (`bannerService.ts`, `cardService.ts`, `stripeService.ts`) importan correctamente esos arrays.  
3. El Test Agent genera tests que simulan llamadas a cada servicio y validan la forma de los objetos (`BannerInterface`, `CardInterface`, etc.).  
4. Al cambiar cualquier array InMemory, el Doc Agent actualiza este archivo y `src-services-interface.md`.  
5. La CI incluye un script `npm run test:inmemory` que ejecuta estos tests sin depender de la API real.

[Code Agent]
"Usa el JSON de src-services-databaseInMemory.md para:

Asegurar que cada fichero exporta el array correspondiente con la interfaz correcta.

Introducir un método opcional de carga desde un JSON externo y refactorizar los imports.

Generar un scaffold de un servicio real InMemoryToApiService que pueda reemplazarlo en producción."

[Test Agent]
"Genera tests de integración (Jest o Vitest) en __tests__/services/ que:

Mockeen las importaciones InMemory.

Verifiquen que getAll(), getAllById() y getAllByIdAndPage() devuelven datos con las propiedades y tipos esperados."

Enlaces a las interfaces: [BannerInterface](src-services-interface.md#bannerinterfacets), [CardInterface](src-services-interface.md#cardinterfacets), [MainInterface](src-services-interface.md#maininterfacets) y [StripeInterface](src-services-interface.md#stripeinterfacets). Revisa las exportaciones en [`banner.ts`](../src/services/databaseInMemory/banner.ts#L6 "BANNERS") (#BANNERS), [`card.ts`](../src/services/databaseInMemory/card.ts#L3 "CARD") (#CARD), [`main.ts`](../src/services/databaseInMemory/main.ts#L3 "MAIN") (#MAIN) y [`stripe.ts`](../src/services/databaseInMemory/stripe.ts#L3 "STRIPE") (#STRIPE).
