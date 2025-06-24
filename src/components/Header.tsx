import { Link } from "react-router-dom"
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap"
import { useState } from "react";

/**
 * Barra de navegación superior.
 *
 * @returns JSX.Element encabezado del sitio.
 */
const Header = () => {
    const [solid, setSolid] = useState(false);
    const makeSolid = () => {
        if (window.scrollY >= 80) {
            setSolid(true);
        } else {
            setSolid(false);
        }
    };
    window.addEventListener("scroll", makeSolid);
    const removeFocus = () => {
        setTimeout(() => {
            const element = document.getElementById('toggle-menu');
            if (element) {
                element.blur();
            }
        }, 1000);
    };
    return (
        <Navbar fixed="top" expand="lg" className={"flex z-3 header " +
            (solid ? "solid-nav" : "")} >
            <Container fluid>
                <Navbar.Brand className=""><Link to="./home"><img src="./img/logo-white.svg" /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={removeFocus} id="toggle-menu"/>
                <Container fluid className="px-0">
                    <Navbar.Collapse className="ps-5 ms-md-5 ms-lg-0 ps-lg-0" id="basic-navbar-nav">
                        <Nav className="me-auto py-2">
                            <Link className="nav-link" to="./home#industr4point0">Industria 4.0</Link>
                            <NavDropdown title="Servicios" id="basic-nav-dropdown">
                                <Link className="dropdown-item" to="./remote-assistant">Remote Assistense</Link>
                                <Link className="dropdown-item" to="./smart-rutines">Smart Rutines</Link>
                                {/* <Link className="dropdown-item" to="./image-computing">Image Computing</Link> */}
                                <Link className="dropdown-item" to="./inventary-control">Control de inventario</Link>
                            </NavDropdown>
                        </Nav>
                        <Link to="#contact-form">
                            <Button variant="secondary" className="m-2">
                                Contactar
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960"
                                    width="24">
                                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                                </svg>
                            </Button>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Container>
        </Navbar>
    )
}

export default Header