import { useState } from 'react';
import { Col, Row, Container, Card, Button, Fade } from "react-bootstrap"
import { MainBanner, ContentStripe } from "../components"

/**
 * Página del servicio Image Computing.
 *
 * @returns JSX.Element contenido de la página.
 */
const ImageComputing = () => {
    const [open, setOpen] = useState(false);
    return (
        <main className="inner-page">
            <MainBanner />
            <Container fluid className="software__services">
                <h2 className="text-center mb-5">¿Qué es Remote Assistense?</h2>
                <Col xs="12" md="8" className="mx-auto text-center subtitle">Un servicio que potencia el soporte técnico de
                    expertos a través de una asistencia remota con anteojos de realidad mixta.</Col>
                <ContentStripe />
            </Container>
            <Container fluid className="how__work">
                <Row className="justify-content-center">
                    <h2 className="text-center">¿Cómo funciona?</h2>
                    <Row className="row g-5 mt-0">
                        <Col xs="12" md="6" lg="4" className="">
                            <Card className="card__trasparent align-items-center text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="67" height="64" viewBox="0 0 67 64" fill="none">
                                    <path d="M25.7638 24.1963C26.2268 22.7929 27.0751 21.5439 28.2154 20.5853C29.3558 19.6267 30.7449 18.9967 32.2265 18.7655C33.7081 18.5343 35.2248 18.7104 36.6109 19.2747C37.9969 19.8391 39.1972 20.77 40.0792 21.9635C40.9611 23.1571 41.4893 24.5668 41.6072 26.0378C41.7251 27.5087 41.4268 28.9834 40.7459 30.2982C40.065 31.6129 39.0289 32.716 37.7499 33.487C36.4709 34.258 35.0001 34.666 33.5 34.666V37.334M33.5 56C20.0242 56 9.09998 45.2548 9.09998 32C9.09998 18.7452 20.0242 8 33.5 8C46.9757 8 57.9 18.7452 57.9 32C57.9 45.2548 46.9757 56 33.5 56ZM33.635 45.3333V45.6L33.365 45.6005V45.3333H33.635Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <Button className="">Creación de asistencia</Button>
                                <p>Inicie una solicitud de asistencia en tiempo real o programada.</p>
                            </Card>
                        </Col>
                    </Row>
                </Row>
            </Container>
            <Container fluid className="what__solve" id="fadeCards">
                <Row>
                    <h2 className="text-center pb-5">¿Qué problemas resuelve?</h2>
                    <Row>
                        <Col xs="4" id="slide1" className="h-100">
                            <div className="card card__trasparent" onClick={() => setOpen(!open)}
                                aria-controls="card01"
                                aria-expanded={open}>
                                <div className="number">1</div>
                                <h3 className="">Soluciones ágiles</h3>
                                <p>Evita largos períodos de inactividad al resolver problemas técnicos en tiempo real.
                                </p>
                            </div>
                        </Col>                    
                        <Col xs="4" id="slide2" className="h-100">
                            <div className="card card__trasparent" onClick={() => setOpen(!open)}
                                aria-controls="Card02"
                                aria-expanded={open}>
                                <div className="number">2</div>
                                <h3 className="">Distancias</h3>
                                <p>Supera barreras geográficas para acceder a expertos altamente especializados globalmente.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="solve__detail">
                        <Col xs="12" lg={{span:7, offset:2}} className="">
                            <Fade in={open}>
                                <div className="card__description" id="card01" data-bs-parent="#fadeCards">
                                    <div className="number">1</div>
                                    <h3 className="my-4">Soluciones Ágiles</h3>
                                    <p>Al permitir una comunicación en tiempo real entre expertos y operarios, y una mejor visualización gracias al soporte de las gafas de realidad mixta, agiliza la resolución de problemas dentro de la planta, evita largos períodos de inactividad y mejora la eficiencia operativa.</p>
                                </div>
                            </Fade>
                            <Fade in={false}>
                                <div className="collapse" id="card02" data-bs-parent="#fadeCards">
                                    <div className="number">2</div>
                                    <h3 className="my-4">Distancias</h3>
                                    <p>Conecta a expertos altamente especializados de cualquier ubicación con los operarios que necesiten asistencia. ¡No hay limitaciones geográficas!</p>
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                </Row>
            </Container>

        </main>            
    )
}

export default ImageComputing