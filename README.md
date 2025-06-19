# Sowtic Web Page

Sitio web corporativo construido con **React**, **TypeScript** y **Vite**. El proyecto implementa una SPA (Single Page Application) que muestra distintos servicios y productos de Sowtic y cuenta con formularios de contacto.

## Tecnologías

- **React 18** + **TypeScript**
- **Vite** como empaquetador y servidor de desarrollo
- **@vitejs/plugin-react** para integracion con React
- **React Router DOM** para el ruteo de la aplicación
- **Bootstrap 5** y **React‑Bootstrap** para la maquetación visual
- **Sass** para estilos personalizados (`src/styles`)
- **Swiper** para carruseles y **react-awesome-reveal** para animaciones
- **EmailJS** y **reCAPTCHA** para el formulario de contacto
- Herramientas de linting y formateo con **ESLint**

## Estructura del proyecto

```
├── Dockerfile
├── index.html               # Punto de entrada HTML
├── public/                  # Recursos estáticos (imágenes, fuentes)
├── src/
│   ├── assets/              # Recursos estáticos importados desde el código
│   ├── components/          # Componentes reutilizables y compartidos
│   │   └── shared/          # Botones, formularios y utilidades
│   ├── pages/               # Vistas principales de la SPA
│   │   └── layouts/         # Componentes de layout
│   ├── services/            # Capa de servicios y datos en memoria
│   │   ├── databaseInMemory/  # Datos simulados de banners, tarjetas, etc.
│   │   └── interface/         # Definiciones TypeScript de las entidades
│   ├── styles/              # Estilos SCSS globales y de componentes
│   ├── router.tsx           # Definición de rutas
│   ├── main.tsx             # Punto de entrada de React
│   └── index.scss           # Estilos globales y carga de fuentes
├── package.json
├── tsconfig.json
└── vite.config.ts           # Configuración de Vite
```

### Carpetas principales

- `public/`: Contiene imágenes y fuentes que se sirven directamente sin pasar por el bundle.
- `src/components/`: Componentes genéricos como `Header`, `Footer`, `ContentStripe`, `MainBanner`, y elementos en `shared/`.
- `src/pages/`: Cada página de la aplicación (`Home`, `RemoteAssistant`, `SmartRutines`, `ImageComputing`, `InventaryControl`) y el `Layout` principal.
- `src/services/`: Clases para obtener datos. Actualmente leen de archivos en `databaseInMemory/`, lo que simula una API.
- `src/styles/`: Estilos SCSS organizados por componente.

## Instalación

1. Clonar este repositorio.
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Entorno de desarrollo:
   ```bash
   npm run dev
   ```
   El servidor de Vite se levantará en `http://localhost:8080`.
4. Construir la versión de producción:
   ```bash
   npm run build
   ```
Los archivos estáticos listos para producción quedarán en `dist/`.
5. Visualizar el build localmente:
   ```bash
   npm run preview
   ```

## Ejecutar con Docker

Si prefieres no instalar las dependencias de Node.js en tu máquina, puedes levantar la aplicación dentro de un contenedor Docker.

1. Construye la imagen:
   ```bash
   docker build -t sowtic-web-page .
   ```
2. Inicia el contenedor mapeando el puerto `8080`:
   ```bash
   docker run --rm -p 8080:8080 sowtic-web-page
   ```
3. Accede a `http://localhost:8080` desde tu navegador.

El contenedor utiliza el servidor de desarrollo de Vite, por lo que cualquier cambio en los archivos del proyecto se reflejará automáticamente.

## Uso

- Navegar por las distintas páginas a través del menú principal.
- El formulario de contacto (`ContactUs`) envía correos mediante EmailJS y utiliza reCAPTCHA para verificar al usuario.
- Los datos mostrados (banners, tarjetas, textos) se obtienen actualmente de archivos TypeScript en `src/services/databaseInMemory/`.

## Actualizar Bootstrap SCSS

Si actualizas la versión de Bootstrap, puedes migrar los archivos SCSS con:

```bash
npm run bootstrap:migrate
```

El script copia las fuentes de `node_modules/bootstrap` a `src/styles/vendor/bootstrap/` y las transforma con `sass-migrator` para eliminar avisos deprecados.

## Contribución

1. Crea un fork del proyecto y genera una rama para tus cambios.
2. Asegúrate de seguir el estilo del código existente (TypeScript + React + SCSS).
3. Envía un *pull request* describiendo tus modificaciones.

No existe aún un conjunto de pruebas automatizadas; se recomienda agregar tests en futuras iteraciones.

## Licencia

Este proyecto no especifica una licencia explícita.

## Posibles mejoras

- Eliminar archivos de plantilla no utilizados (`App.tsx`, `App.css`).
- Migrar los datos de `databaseInMemory` a un backend o API real.
- Añadir pruebas unitarias y de integración.
- Incluir variables de entorno para configurar servicios externos (EmailJS, reCAPTCHA).
