# Documentación de selectores UI

A continuación se describe la relación entre los selectores de la interfaz y su código fuente.

## Header – `nav.header.navbar`
- **Ruta del archivo**: `src/components/Header.tsx`
- **Propósito**: Barra de navegación fija que contiene enlaces a las secciones y cambia de aspecto al hacer scroll.
- **Implementación (JSX/TSX)**:
```tsx
<Navbar fixed="top" expand="lg" className={"flex z-3 header " + (solid ? "solid-nav" : "") }>
  <Container fluid>
    <Navbar.Brand><Link to="./home"><img src="./img/logo-white.svg" /></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={removeFocus} id="toggle-menu"/>
    <Container fluid className="px-0">
      <Navbar.Collapse className="ps-5 ms-md-5 ms-lg-0 ps-lg-0" id="basic-navbar-nav">
        <Nav className="me-auto py-2">
          <Link className="nav-link" to="./home#industr4point0">Industria 4.0</Link>
          <NavDropdown title="Servicios" id="basic-nav-dropdown">
            <Link className="dropdown-item" to="./remote-assistant">Remote Assistense</Link>
            <Link className="dropdown-item" to="./smart-rutines">Smart Rutines</Link>
            <Link className="dropdown-item" to="./inventary-control">Control de inventario</Link>
          </NavDropdown>
        </Nav>
        <Link to="#contact-form">
          <Button variant="secondary" className="m-2">Contactar</Button>
        </Link>
      </Navbar.Collapse>
    </Container>
  </Container>
</Navbar>
```
- **Estilos (SCSS)**: definidos en `src/styles/components/_header.scss`, incluyendo la clase `solid-nav` para el fondo al desplazarse.
- **Dependencias**: React-Bootstrap para los componentes de navegación.
- **Notas de comportamiento**: escucha el evento de scroll para añadir la clase `solid-nav` y quitar el foco al cerrar el menú en móviles.

## Navbar Toggle – `#toggle-menu`
- **Ruta del archivo**: `src/components/Header.tsx`
- **Propósito**: Botón hamburguesa que despliega o colapsa el menú en pantallas pequeñas.
- **Implementación (JSX/TSX)**:
```tsx
<Navbar.Toggle aria-controls="basic-navbar-nav" onClick={removeFocus} id="toggle-menu"/>
```
- **Estilos (SCSS)**: hereda estilos de Bootstrap.
- **Dependencias**: React-Bootstrap `Navbar.Toggle`.
- **Notas de comportamiento**: la función `removeFocus` retira el foco tras 1 segundo para mejorar la experiencia móvil.

## Contenedor de enlaces – `div#basic-navbar-nav`
- **Ruta del archivo**: `src/components/Header.tsx`
- **Propósito**: Área colapsable que agrupa las opciones de navegación.
- **Implementación (JSX/TSX)**:
```tsx
<Navbar.Collapse className="ps-5 ms-md-5 ms-lg-0 ps-lg-0" id="basic-navbar-nav">
  <Nav className="me-auto py-2">
    <Link className="nav-link" to="./home#industr4point0">Industria 4.0</Link>
    ...
  </Nav>
  ...
</Navbar.Collapse>
```
- **Estilos (SCSS)**: controlados principalmente por Bootstrap.
- **Dependencias**: React-Bootstrap `Navbar.Collapse` y `Nav`.

## Enlaces del menú – `a.nav-link`
- **Ruta del archivo**: `src/components/Header.tsx`
- **Propósito**: Enlaces de navegación que llevan a secciones específicas de la página.
- **Implementación (JSX/TSX)**:
```tsx
<Link className="nav-link" to="./home#industr4point0">Industria 4.0</Link>
```
- **Estilos (SCSS)**: se heredan de Bootstrap; las animaciones de scroll suave se controlan mediante utilidades de React Router.

## Contenedor principal – `main.home`
- **Ruta del archivo**: `src/pages/Home.tsx`
- **Propósito**: Área principal de la página de inicio que engloba el banner, las secciones de industria 4.0, equipo y servicios.
- **Implementación (JSX/TSX)**:
```tsx
<main className="home">
  { getBannerId(0)?.map((main) => (
    <MainBanner key={main.id}> ... </MainBanner>
  ))}
  ...
</main>
```
- **Estilos (SCSS)**: base en `src/index.scss` y componentes individuales.

## Banner principal – `.main__slider`
- **Ruta del archivo**: `src/components/MainBanner.tsx` y `src/styles/components/_main__banner.scss`
- **Propósito**: Sección de hero con imágenes superpuestas y contenido opcional.
- **Implementación (JSX/TSX)**:
```tsx
<Row className="main__slider gx-0 justify-content-center flex-column">
  <img src="./img/blue-band.png" className="position-absolute top-0 start-0 z-1 px-0 first-img" />
  {buttonBack ? <Fade ...>...</Fade> : null}
  {children}
</Row>
```
- **Estilos (SCSS)**:
```scss
.main__slider {
  min-height: 760px;
  color: #fff;
  .first-img { width: 55%; ... }
  .second-img { width: 90%; top: -295px; ... }
}
```
- **Dependencias**: React-Bootstrap (`Row`, `Col`, `Container`) y `react-awesome-reveal` para animaciones.

## Imagen de fondo – `img.first-img`
- **Ruta del archivo**: `src/components/MainBanner.tsx` / `src/styles/components/_main__banner.scss`
- **Propósito**: Imagen base del banner situada al fondo.
- **Implementación (JSX/TSX)**:
```tsx
<img src="./img/blue-band.png" className="position-absolute top-0 start-0 z-1 px-0 first-img" />
```
- **Estilos (SCSS)**: ancho adaptable con varias medias queries para ajustar la proporción de la imagen.

## Imagen secundaria – `div.second-img`
- **Ruta del archivo**: páginas como `src/pages/Home.tsx` o `RemoteAssistant.tsx` donde se usa `<Fade>` con la clase `second-img`.
- **Propósito**: Capas visuales adicionales mostradas solo en resoluciones medianas o superiores.
- **Implementación (JSX/TSX)**:
```tsx
<Fade ... className="position-absolute z-2 second-img d-none d-md-block ra-img">
  <img src={main.image} className="w-100" />
</Fade>
```
- **Estilos (SCSS)**: regla `.second-img` en `src/styles/components/_main__banner.scss` que posiciona la imagen y ajusta su tamaño según la variante (`ra-img`, `ic-img`, etc.).

## Texto resaltado – `h1 > span.highlight-1`
- **Ruta del archivo**: `src/pages/Home.tsx` y estilos en `src/styles/components/_main__banner.scss`.
- **Propósito**: Destacar una palabra del título del banner con un pseudo-elemento decorativo.
- **Implementación (JSX/TSX)**:
```tsx
<h1>Descubra<br /> el <span className="highlight-1">Futuro</span> de la<br /> industria</h1>
```
- **Estilos (SCSS)**:
```scss
.highlight-1::before {
  background-image: url(/img/Ellipse-615.svg);
  width: 110%;
  height: 90px;
  position: absolute;
  top: -4px;
  left: -10px;
}
```

## Botón secundario – `button.btn-secondary`
- **Ruta del archivo**: presente en varios componentes como `Header.tsx`, `Home.tsx` y `ContatUs.tsx`.
- **Propósito**: Botones con la paleta secundaria de la marca.
- **Estilos (SCSS)**:
```scss
.btn-secondary {
  --bs-btn-color: #1D1D1B;
  --bs-btn-bg: #BEE9FF;
  --bs-btn-border-color:#BEE9FF;
}
```
- **Notas de comportamiento**: se emplea para llamadas a la acción y enlaces al formulario de contacto.

## Industria 4.0 – `#industr4point0 .four__industry`
- **Ruta del archivo**: `src/pages/Home.tsx` y estilos en `src/styles/_index.scss`.
- **Propósito**: Sección que muestra un gráfico animado y texto introductorio sobre Industria 4.0.
- **Implementación (JSX/TSX)**:
```tsx
<Container fluid id="industr4point0">
  <Row className='four__industry justify-content-between'>
    ...
  </Row>
</Container>
```
- **Estilos (SCSS)**: reglas `.four__industry` definen el fondo, altura mínima y animación de rotación para `.circlet-animated`.

## Nuestro equipo – `.our__team`
- **Ruta del archivo**: `src/pages/Home.tsx` y estilos en `src/styles/_index.scss`.
- **Propósito**: Mostrar tarjetas descriptivas del equipo y servicios 4.0.
- **Implementación (JSX/TSX)**:
```tsx
<Row className="our__team justify-content-center">
  <Col xs="12" xl="10"> ... </Col>
</Row>
```
- **Estilos (SCSS)**: define márgenes y gradientes de las tarjetas `.bg-gradient-blue` y `.bg-gradient-violet` usadas en esta sección.

## Servicios de software – `.software__services`
- **Ruta del archivo**: páginas de servicios y `Home.tsx`; estilos en `src/styles/_index.scss`.
- **Propósito**: Contenedor para las franjas de contenido que describen cada servicio.
- **Implementación (JSX/TSX)**:
```tsx
<Container fluid className="software__services">
  <h2 className="text-center mb-4">Software as a service</h2>
  { banners.map(...ContentStripe...) }
</Container>
```
- **Estilos (SCSS)**: define `padding-top` y separación de subtítulos.

## Dispositivos – `section#devices`
- **Ruta del archivo**: `src/pages/Home.tsx` y estilos en `src/styles/_index.scss`.
- **Propósito**: Carrusel de productos implementado con Swiper.
- **Implementación (JSX/TSX)**:
```tsx
<section className="devices-container" id="devices">
  <Container className="devices">
    <Swiper navigation modules={[Navigation]} className="mySwiper p-5"> ... </Swiper>
  </Container>
</section>
```
- **Estilos (SCSS)**: bloque `.devices` define dimensiones de la tarjeta `.product` y comportamiento al hover.
- **Dependencias**: `swiper/react` y módulos de navegación.

## Estructura de Swiper – `.swiper-wrapper` y `.swiper-slide`
- **Ruta del archivo**: generados automáticamente por el componente `Swiper` de la librería `swiper/react` (ver `src/pages/Home.tsx`).
- **Propósito**: Crear el contenedor de slides y cada elemento de producto.
- **Implementación (JSX/TSX)**:
```tsx
<Swiper ...>
  <SwiperSlide> ... </SwiperSlide>
  <SwiperSlide> ... </SwiperSlide>
</Swiper>
```
- **Estilos (SCSS)**: Swiper aplica sus propias clases; se complementan con reglas dentro de `.devices .product`.

## Pie de página – `footer`
- **Ruta del archivo**: `src/components/Footer.tsx` y estilos en `src/styles/components/_footer.scss`.
- **Propósito**: Contiene el formulario de contacto y enlaces secundarios.
- **Implementación (JSX/TSX)**:
```tsx
<footer>
  <Container fluid className="contact__form mb-5" id="contact-form">...</Container>
  <Container fluid className="web__map border-top border-white py-5">...</Container>
  <ButtonToTop />
</footer>
```
- **Estilos (SCSS)**: define un fondo con imagen, espaciados y decoraciones para `.highlight-2`.

## Contenedor del formulario – `div#contact-form`
- **Ruta del archivo**: `src/components/Footer.tsx`.
- **Propósito**: Sección que envuelve al componente `ContactUs` dentro del footer.
- **Implementación (JSX/TSX)**:
```tsx
<Container fluid className="contact__form mb-5" id="contact-form">
  <Row>
    ...
    <ContactUs />
  </Row>
</Container>
```

## Formulario de contacto – `form#contact-form`
- **Ruta del archivo**: `src/components/shared/ContatUs.tsx`.
- **Propósito**: Enviar los datos del usuario mediante EmailJS y validar con reCAPTCHA.
- **Implementación (JSX/TSX)**:
```tsx
<Form id='contact-form' onSubmit={sendEmail}>
  <Row className="g-3">
    <Col xs="12">...</Col>
    <ReCAPTCHA sitekey="..." onChange={onChange} />
    <Button variant="secondary" type="submit">Contactar</Button>
  </Row>
</Form>
```
- **Dependencias**: `react-google-recaptcha` y `@emailjs/browser`.

## Botón volver arriba – `button.back-to-top`
- **Ruta del archivo**: `src/components/shared/ButtonToTop.tsx` y estilos en `src/styles/components/_button__top.scss`.
- **Propósito**: Mostrar un botón flotante que desplaza suavemente la página hacia el inicio.
- **Implementación (JSX/TSX)**:
```tsx
<Button variant="secondary" className={"back-to-top rounded-circle position-fixed bottom-0 end-0 me-5 mb-5 w-auto p-3 " + (show ? "d-block" : "d-none")}
  onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}>
  <svg ... />
</Button>
```
- **Estilos (SCSS)**:
```scss
.back-to-top {
  background-color: #2CBBE780;
  border: none;
  z-index: 10;
}
```
- **Notas de comportamiento**: el componente usa un estado `show` que se actualiza al hacer scroll para ocultar o mostrar el botón.

