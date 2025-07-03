---
section_id: "COMP-SELECT-02"
title: "Mapeo Componentes → Selectores CSS"
version: "1.1"
date: "2025-06-30"
related_sections:
  - "ui-selectors.md"
  - "src-components.md"
enforce:
  - styleguide: "STYLEGUIDE.md"
  - summary_index: "summary-index.json"
agents:
  - Doc Agent
  - Test Agent
use_all_sections: false
---

# Componentes ↔ Selectores CSS

```json
[
  {
    "component": "CarouselCollapse",
    "path": "src/components/CarouselCollapse.tsx",
    "selectors": [".swiper-wrapper", ".swiper-slide"],
    "ui_section": "ui-selectors.md#estructura-de-swiper-swiper-wrapper-y-swiper-slide",
    "doc_section": "src-components.md#carouselcollapse"
  },
  {
    "component": "ContentStripe",
    "path": "src/components/ContentStripe.tsx",
    "selectors": [".software__services"],
    "ui_section": "ui-selectors.md#servicios-de-software-software__services",
    "doc_section": "src-components.md#contentstripe"
  },
  {
    "component": "Footer",
    "path": "src/components/Footer.tsx",
    "selectors": ["footer"],
    "ui_section": "ui-selectors.md#pie-de-pagina-footer",
    "doc_section": "src-components.md#footer"
  },
  {
    "component": "Header",
    "path": "src/components/Header.tsx",
    "selectors": ["nav.header.navbar"],
    "ui_section": "ui-selectors.md#header-navheadernavbar",
    "doc_section": "src-components.md#header"
  },
  {
    "component": "MainBanner",
    "path": "src/components/MainBanner.tsx",
    "selectors": [".main__slider"],
    "ui_section": "ui-selectors.md#banner-principal-main__slider",
    "doc_section": "src-components.md#mainbanner"
  }
]
```

Este mapeo relaciona cada componente React con los selectores CSS que inserta en el DOM. Sirve para que el Test Agent genere automáticamente pruebas E2E que verifiquen la presencia de estos elementos en la interfaz.

*Usa este mapeo para generar un test E2E en Cypress que verifique que cada componente renderiza su selector correspondiente en el DOM.*

