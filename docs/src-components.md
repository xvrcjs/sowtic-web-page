---
section_id: "SRC-COMP-07"
title: "Componentes Principales"
version: "1.1"
date: "2025-07-01"
related_sections:
  - "components-selectors-mapping.md"
  - "src-components-shared.md"
enforce:
  - styleguide: "STYLEGUIDE.md"
  - summary_index: "summary-index.json"
agents:
  - Code Agent
  - Test Agent
  - Doc Agent
---
```json
[
  {
    "name": "CarouselCollapse",
    "path": "src/components/CarouselCollapse.tsx",
    "selectors": [".swiper-wrapper", ".swiper-slide"],
    "props": ["dataCollapse?: CardInterface[]"],
    "hooks": ["useState<boolean[]>", "useState<number>"],
    "layouts": ["RemoteAssistant", "SmartRutines", "InventaryControl"],
    "styles": "src/styles/components/_carusel__collapse.scss",
    "notes": ["Breakpoints de Swiper", "responsive"]
  },
  {
    "name": "ContentStripe",
    "path": "src/components/ContentStripe.tsx",
    "selectors": [".software__services"],
    "props": ["image", "title", "text", "buttonText?", "buttonUrl?", "buttonIcon?", "imageRight?"],
    "hooks": [],
    "layouts": ["Home", "RemoteAssistant", "SmartRutines", "ImageComputing", "InventaryControl"],
    "styles": "src/styles/components/_content__stripe.scss",
    "notes": ["animaciones con react-awesome-reveal"]
  },
  {
    "name": "Footer",
    "path": "src/components/Footer.tsx",
    "selectors": ["footer"],
    "props": [],
    "hooks": [],
    "layouts": ["Layout"],
    "styles": "src/styles/components/_footer.scss",
    "notes": ["incluye ButtonToTop", "responsive"]
  },
  {
    "name": "Header",
    "path": "src/components/Header.tsx",
    "selectors": ["nav.header.navbar"],
    "props": [],
    "hooks": ["useState<boolean>"],
    "layouts": ["Layout"],
    "styles": "src/styles/components/_header.scss",
    "notes": ["responsive nav", "toggle en mobile"]
  },
  {
    "name": "MainBanner",
    "path": "src/components/MainBanner.tsx",
    "selectors": [".main__slider"],
    "props": ["buttonBack?", "children"],
    "hooks": [],
    "layouts": ["Home", "RemoteAssistant", "SmartRutines", "ImageComputing", "InventaryControl"],
    "styles": "src/styles/components/_main__banner.scss",
    "notes": ["animaciones con react-awesome-reveal"]
  }
]
```
