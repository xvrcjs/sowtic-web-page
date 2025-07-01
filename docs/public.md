---
section_id: "PUBLIC-04"
title: "Carpeta Public y Recursos Estáticos"
version: "1.0"
date: "2025-07-01"
related_sections:
  - "files-and-folders.md"
  - "src-assets.md"
  - "summary-index.json"
enforce:
  - styleguide: "STYLEGUIDE.md"
  - summary_index: "summary-index.json"
agents:
  - Code Agent
  - Test Agent
  - Doc Agent
---

La carpeta `public/` contiene los recursos servidos sin procesamiento por Vite.

Lista machine-readable de recursos

```json
[
  { "path": "public/vite.svg", "type": "icon", "uses": ["#vite-icon"] },
  { "path": "public/fonts/Montserrat-VariableFont_wght.ttf", "type": "font", "uses": ["#font-face-definitions"] },
  { "path": "public/fonts/Montserrat-Italic-VariableFont_wght.ttf", "type": "font", "uses": ["#font-face-definitions"] },
  { "path": "public/fonts/static/Montserrat-*.ttf", "type": "font", "uses": ["#font-face-definitions"] },
  { "path": "public/img/Bell_Notification.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/Checkbox_Check.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/Ellipse-615.svg", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/Ellipse-650.svg", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/File_Document.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/List_Ordered.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/Remote-01.jpg", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/Smart-001.jpg", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/agus-2.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/apps-icons.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/arrowup.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/background01.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/blue-band.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/bubble.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/chart.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/chat.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/chip-01.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/chip-02.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/circle-arrows.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/circulo-layer-1.svg", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/circulo-layer-2.svg", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/circulo-layer-3.svg", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/contrato 68-7 G.COBO 2022.docx", "type": "doc", "uses": ["#service-images"] },
  { "path": "public/img/display.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/eficiencia.jpg", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/fileplus.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/footer-bg.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/glasses.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/home-img-01.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/img-computing.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/impresora.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/inventario.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/invetary-control.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/lock.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/logo-white.svg", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/manos-libres.jpg", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/multi.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/person.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/postnet.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/principal.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/qr-img.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/que-resuelve-bg.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/question.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/ra-img01.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/refresh.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/remote-asistense-01.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/service01.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/smart-routines-01.png", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/visibilidad-2.jpg", "type": "image", "uses": ["#service-images"] },
  { "path": "public/img/warrning.png", "type": "image", "uses": ["#service-images"] }
]
```
