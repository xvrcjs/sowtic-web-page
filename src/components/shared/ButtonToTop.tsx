import { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Botón flotante que lleva la página al inicio.
 *
 * @returns JSX.Element botón de scroll.
 */
const ButtonToTop = () => {
  const [show, setShow] = useState(false);
  const makeShow = () => {
      if (window.scrollY >= 80) {
          setShow(true);
      } else {
          setShow(false);
      }
  };
  window.addEventListener("scroll", makeShow);
  return ( 
    <Button variant="secondary" className={"back-to-top rounded-circle position-fixed bottom-0 end-0 me-5 mb-5 w-auto p-3 " + (show ? "d-block" : "d-none")} onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M58.6586 46.5431C57.87 47.3316 56.5915 47.3316 55.803 46.5431L33 23.7401L10.1971 46.543C9.40849 47.3316 8.12999 47.3316 7.34143 46.543C6.55287 45.7545 6.55287 44.476 7.34143 43.6874L31.5722 19.4567C32.3608 18.6681 33.6393 18.6681 34.4278 19.4567L58.6586 43.6874C59.4471 44.476 59.4471 45.7545 58.6586 46.5431Z" fill="#292929"/>
            </svg>
    </Button>
  )
}

export default ButtonToTop