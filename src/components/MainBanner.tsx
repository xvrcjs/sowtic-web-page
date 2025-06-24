import { Link } from "react-router-dom"
import { Button, Col, Row, Container } from "react-bootstrap"
import { Fade } from "react-awesome-reveal";

interface MainBannerProps {
  buttonBack?: boolean;
  children: React.ReactNode;
}

/**
 * Componente de banner principal o hero.
 *
 * @param props - opciones del banner.
 * @returns JSX.Element banner renderizado.
 */
const MainBanner = (props: MainBannerProps) => {
    const {
        buttonBack,
        children
    } = props;
    return (
        <Container fluid>
            <Row className="main__slider gx-0 justify-content-center flex-column">
                <img src="./img/blue-band.png" className="position-absolute top-0 start-0 z-1 px-0 first-img" />                
                {buttonBack ?
                    <Fade triggerOnce direction='left' duration={2500} className="z-2">
                        <Col xs={{span:11, offset:1}} md="8" lg="6" className="pb-0 pt-md-5 pb-sm-5">
                            <Link to ="/home"><Button variant="light" className=" px-4 mb-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M11.4375 18.75L4.6875 12L11.4375 5.25M5.625 12L19.3125 12" stroke="#1D1D1B"
                                        strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
                                </svg>
                                Volver a home
                            </Button></Link>
                        </Col>
                    </Fade>
                : null}
                {children}                
            </Row>
        </Container>
    )
}

export default MainBanner