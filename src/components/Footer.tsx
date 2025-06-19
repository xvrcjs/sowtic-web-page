import { Link } from "react-router-dom"
import { Container, Row, Col} from "react-bootstrap"
import ButtonToTop from "./shared/ButtonToTop"
import { ContactUs } from "./shared/ContatUs"


const Footer = () =>{
    return (        
        <footer>
            <Container fluid className="contact__form mb-5" id="contact-form">
            <Row>
                <Col xl="6" lg="5" xs="12" className="d-flex flex-column justify-content-end">
                    <p className="subtitle">Complete el formulario o envíe un mail a la casilla ventas@sowtic.com</p>
                    <h2>Póngase en<br/>
                        <span className="highlight-2">contacto</span> con<br/> Sowtic
                    </h2>
                </Col>
                <Col xl="6" lg="7" xs="12" className="">
                    <ContactUs />
                </Col>
            </Row>
        </Container>
        <Container fluid className="web__map border-top border-white py-5">
            <Row>
                <Col xs="12" lg={{ span: 3, offset: 1 }} className="">
                    <Link to="./home"><img src="./img/logo-white.svg" /></Link>
                </Col>
                {/* <Col xs="12" lg="8" className="">
                    <Row className="">
                        <Col xs="12" md="4" xl="3" className="">
                            <ListGroup variant="flush" className="">
                                <ListGroup.Item className="list-group-item border-0 bg-transparent text-white">Lorem lorem</ListGroup.Item>
                                <ListGroup.Item className="list-group-item border-0 bg-transparent text-white">Lorem lorem</ListGroup.Item>
                                <ListGroup.Item className="list-group-item border-0 bg-transparent text-white">Lorem lorem</ListGroup.Item>
                                <ListGroup.Item className="list-group-item border-0 bg-transparent text-white">Lorem lorem</ListGroup.Item>
                                <ListGroup.Item className="list-group-item border-0 bg-transparent text-white">Lorem lorem</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col xs="12" md="4" xl="3" className="">
                            <ListGroup variant="flush"className="bg-transparent text-white">
                                <ListGroup.Item className="list-group-item border-0 bg-transparent text-white">Lorem lorem</ListGroup.Item>
                                <ListGroup.Item className="list-group-item border-0 bg-transparent text-white">Lorem lorem</ListGroup.Item>
                                <ListGroup.Item className="list-group-item border-0 bg-transparent text-white">Lorem lorem</ListGroup.Item>
                                <ListGroup.Item className="list-group-item border-0 bg-transparent text-white">Lorem lorem</ListGroup.Item>
                                <ListGroup.Item className="list-group-item border-0 bg-transparent text-white">Lorem lorem</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col xs="12" md="4" xl="3" className="">
                            <ListGroup variant="flush" className="bg-transparent text-white">
                                <ListGroup.Item className="list-group-item border-0 bg-transparent text-white">Lorem lorem</ListGroup.Item>
                                <ListGroup.Item className="list-group-item border-0 bg-transparent text-white">Lorem lorem</ListGroup.Item>
                                <ListGroup.Item className="list-group-item border-0 bg-transparent text-white">Lorem lorem</ListGroup.Item>
                                <ListGroup.Item className="list-group-item border-0 bg-transparent text-white">Lorem lorem</ListGroup.Item>
                                <ListGroup.Item className="list-group-item border-0 bg-transparent text-white">Lorem lorem</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Col> */}
            </Row>
        </Container>
        <ButtonToTop />

        </footer>
    )
}

export default Footer