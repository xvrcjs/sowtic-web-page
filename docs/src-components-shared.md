---
layout: default
---

# Componentes reutilizables en `src/components/shared/`

Esta carpeta contiene utilidades y widgets que se comparten entre varias páginas. A continuación se detallan los archivos y su funcionamiento.

## ButtonToTop
- **Rutas:** `src/components/shared/ButtonToTop.tsx` y estilos en `src/styles/components/_button__top.scss`.
- **Props esperados:** no recibe props.
- **Estado y hooks:** utiliza `useState<boolean>` para mostrar u ocultar el botón y registra un manejador de `scroll` sobre `window`.
- **Lógica de renderizado:** muestra un `<Button>` fijo en la esquina inferior derecha. El botón solo es visible cuando el usuario ha hecho *scroll* más de 80&nbsp;px. Al hacer clic desplaza la página hasta el inicio con `window.scrollTo`.
- **Dependencias externas:** `react-bootstrap` para el componente `Button`.
- **Ejemplo de uso:**
  ```tsx
  import ButtonToTop from "./shared/ButtonToTop";
  
  const Footer = () => (
    <footer>
      ...
      <ButtonToTop />
    </footer>
  );
  ```

## CardTransparent
- **Rutas:** `src/components/shared/CardTransparent.tsx` y `src/styles/components/_card__tansparent.scss`.
- **Props esperados:**
  ```ts
  interface CardTransparentProps {
    children: React.ReactNode;
    textAlign?: string;
    itemAlign?: string;
  }
  ```
- **Estado y hooks:** no mantiene estado interno. Usa el componente `Fade` de `react-awesome-reveal` para animar la aparición.
- **Lógica de renderizado:** envuelve el contenido en `<Card className="card__trasparent ...">` y aplica las clases opcionales recibidas por props.
- **Dependencias externas:** `react-bootstrap` (`Card`) y `react-awesome-reveal` para la animación.
- **Ejemplo de uso:**
  ```tsx
  <CardTransparent textAlign="text-center" itemAlign="align-items-center">
    <img src={card.image} />
    <Button>{card.title}</Button>
    <p>{card.text}</p>
  </CardTransparent>
  ```

## ContactUs
- **Ruta:** `src/components/shared/ContatUs.tsx` (forma simplificada del nombre "ContactUs").
- **Archivos de estilo:** reglas del formulario en `src/styles/components/_footer.scss` dentro del bloque `.contact__form`.
- **Props esperados:** no recibe props.
- **Estado y hooks:** define la función `sendEmail` para procesar el envío mediante `emailjs.sendForm`. También integra `reCAPTCHA` con `react-google-recaptcha`.
- **Lógica de renderizado:** devuelve un `<Card>` con un `<Form>` de varios campos. Al enviarse, ejecuta `sendEmail` que envía los datos a EmailJS.
- **Dependencias externas:** `react-bootstrap`, `@emailjs/browser` y `react-google-recaptcha`.
- **Ejemplo de uso:**
  ```tsx
  import { ContactUs } from "./shared/ContatUs";
  
  const Footer = () => (
    <Container fluid id="contact-form">
      <ContactUs />
    </Container>
  );
  ```

## ScrollToHasElement
- **Ruta:** `src/components/shared/ScrollToHasElement.ts` (el componente se exporta como `ScrollToHashElement`).
- **Props esperados:** no tiene props.
- **Estado y hooks:** emplea `useLocation` para leer el `hash` actual, `useMemo` para obtener el elemento correspondiente y `useEffect` para desplazar la vista.
- **Lógica de renderizado:** no devuelve contenido visual; cuando cambia la ubicación con un hash, busca el elemento con ese id y ejecuta `scrollIntoView({ behavior: 'smooth' })`.
- **Dependencias externas:** `react-router-dom`.
- **Ejemplo de uso:**
  ```tsx
  <BrowserRouter>
    <ScrollToHashElement />
    <App />
  </BrowserRouter>
  ```

## ScrollToTop
- **Ruta:** `src/components/shared/ScrollToTop.tsx`.
- **Props esperados:**
  ```ts
  interface Props {
    children: React.ReactNode;
  }
  ```
- **Estado y hooks:** utiliza `useLocation` y `useEffect` para detectar cambios en la ruta.
- **Lógica de renderizado:** cuando cambia `pathname` se ejecuta `window.scrollTo({ top: 0, behavior: 'smooth' })`. El componente simplemente renderiza `children` sin añadir nodos extra.
- **Dependencias externas:** `react-router-dom`.
- **Ejemplo de uso:**
  ```tsx
  <BrowserRouter>
    <ScrollToTop>
      <AppRoutes />
    </ScrollToTop>
  </BrowserRouter>
  ```
