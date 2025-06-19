
import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Modal, Card } from "react-bootstrap"
import BannerService from '../services/bannerService';
import { ContentStripe, MainBanner } from '../components';
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import {
    BannerInterface,
    MainInterface,
    StripeInterface,
} from "../services/interface/index";

/**
 * Home page component.
 *
 * @returns JSX.Element home page.
 */
const Home = () => {
    const [data, setData] = useState<BannerInterface[]>([]);
    const bannerService = new BannerService();
    
    useEffect( () => {
        bannerService.getAllByPage('home').then((res) => res ? setData(res) :null);
    }, data );

    const getBannerId = (id: number) => {
        const bannerInfo = data.filter( (res) => res.id === id)
        const dataBanner = bannerInfo[0]?.data.filter( (elem) => elem.bannerId === id)
        return dataBanner
    };

    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <main className="home">
                { getBannerId(0)?.map((main:MainInterface) => {
                    return (                     
                        <MainBanner>
                            <Fade triggerOnce direction='right' duration={2800} className="position-absolute z-2 second-img d-none d-sm-block">
                                <img src={main.image}  className='w-100'/>
                            </Fade>
                            <Col xs={{ span: 11, offset: 1 }} md="5" xl="4" className="z-1 mb-5">
                                <Fade triggerOnce direction='left' duration={2500}>
                                    <h1>Descubra<br /> el <span className="highlight-1">Futuro</span> de la<br /> industria</h1>
                                    <p className="subtitle mb-5">{main.text}</p>
                                    <Button variant="secondary" className="" onClick={handleShow}>
                                        Ver Video
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                                            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                                        </svg>
                                    </Button>
                                </Fade>
                            </Col>
                            <Fade triggerOnce direction='right' duration={3000} className="position-absolute chip-1 z-2 d-none d-md-block">
                                <img src="./img/chip-01.png" className='w-100'/>                            
                            </Fade>
                            <Fade triggerOnce direction='right' duration={3400} className="position-absolute chip-2 z-2 d-none d-md-block">
                                <img src="./img/chip-02.png" className='w-100'/>
                            </Fade>
                        </MainBanner>
                    )
                })} 
                <Container fluid id="industr4point0" className="">
                    <Row className='four__industry justify-content-between'>
                        <Col xs="12" md="6" className="order-2 order-md-1 graph-container">
                            <div className="position-relative w-100">
                                <img className="position-relative top-0 start-0 z-0 w-100" src="./img/circulo-layer-1.svg" />
                                <img className="position-absolute top-0 start-0 z-1 w-100 circlet-animated"
                                    src="./img/circulo-layer-2.svg" />
                                <img className="position-absolute top-0 start-0 z-2 w-100" src="./img/circulo-layer-3.svg" />
                            </div>
                        </Col>
                        <Col xs="12" md="6" xl="5" className="d-md-flex align-items-lg-center order-1 order-md-2">
                            <h2 className="text-center text-md-end">
                                Tu mundo conectado con la Industria 4.0
                            </h2>
                        </Col>
                    </Row>
                </Container>
                <Container fluid id="" className="">
                    <Row className="our__team justify-content-center">
                        <Col xs="12" xl="10" className="">
                            <h2 className="text-center mb-6">Conozca nuestros equipos especializados en gestión y tecnología
                            </h2>
                            <Fade triggerOnce direction='left' duration={2500}>
                                <Card className="bg-gradient-blue border-0" id="gestionDigital">
                                    <Card.Body className="p-0 d-md-flex justify-md-content-center">
                                        <Row className="align-items-center">
                                            <Col xs="12" md="7" className="">
                                                <h3 className="">Gestión de transformación Digital</h3>
                                                <Card.Text className="subtitle py-4">Coordinamos cambios estratégicos y organizativos para
                                                    que  industria implemente nuevas tecnologías, redefina procesos, adopte la cultura digital y la
                                                    mejora continua.</Card.Text>
                                                <Button variant='light' href="#contact-form" className="txt-celest">
                                                    Más información
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960"
                                                        width="24">
                                                        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                                                    </svg>
                                                </Button>
                                            </Col>
                                            <Col xs="12" md="5" className="text-lg-end text-center">
                                                <img className="w-100" src="./img/circle-arrows.png" />
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Fade>
                            <Fade triggerOnce direction='right' duration={2500}>
                                <Card className="bg-gradient-violet border-0" id="servicios4dot0">
                                    <Card.Body className="card-body d-flex justify-content-center z-1">
                                        <Row className="align-items-md-center align-items-center">
                                            <Col xs="12" md="6" className="">
                                                <h3 className="">Servicios<br /> tecnológicos 4.0</h3>
                                                <Card.Text className="subtitle py-4">Contamos con los recursos informáticos experimentados para
                                                    soluciones especificas y avanzadas.</Card.Text>
                                                <Button variant='light' href="#contact-form" className="txt-celest">                                    
                                                    Más información
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960"
                                                        width="24">
                                                        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                                                    </svg>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Fade>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="software__services">
                    <h2 className="text-center mb-4">Software as a service</h2>
                    { getBannerId(2)?.map((stripe:StripeInterface) => {
                        return ( 
                        <ContentStripe imageRight={stripe.imageRight} image={stripe.image} title={stripe.title} text={stripe.text} buttonText={stripe.buttonText} buttonUrl={stripe.buttonUrl} buttonIcon={stripe.buttonPathIcon} /> 
                        )
                    })}                    
                </Container>
                <section className="devices-container" id="devices">
                    <Container className="devices">
                        <h2 className="mb-4">Dispositivos<br /> tecnológicos</h2>
                        <Col xs="12" md="5" className="subtitle mb-5">
                            Tenemos los equipos tecnológicos para brindarte el mejor servicio y potenciar tu negocio.
                        </Col>
                        <Swiper
                            navigation
                            modules={[Navigation]}
                            breakpoints={{
                                460: {
                                  slidesPerView: 1,
                                  spaceBetween: 20,
                                },
                                768: {
                                  slidesPerView: 2,
                                  spaceBetween: 40,
                                },
                                992 : {
                                  slidesPerView: 3,
                                  spaceBetween: 50,
                                },
                            }}
                            className="mySwiper p-5"
                        >
                            <SwiperSlide className=''>
                                <Card className="product d-flex justify-content-between h-100">
                                    <div className='content-img d-flex align-items-center p-2'>
                                        <Card.Img src="./img/impresora.png" />       
                                    </div>                 
                                    <Card.Body className="">
                                        <Card.Subtitle className="">RFID Impresora</Card.Subtitle>
                                        <Card.Title className="">RFID: ZT620</Card.Title>
                                        <Card.Text className="">Impresora con RFID integrado</Card.Text>
                                    </Card.Body>
                                    <Button variant='secondary' href="#contact-form" className="mx-auto my-3">Más información</Button>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide className=''>
                                <Card className="product d-flex justify-content-between h-100">
                                    <div className='content-img d-flex align-items-center p-2'>
                                        <Card.Img src="./img/postnet.png" />         
                                    </div>               
                                    <Card.Body className="">
                                        <Card.Subtitle className="">UHF Lector</Card.Subtitle>
                                        <Card.Title className="">UHF: MC333U-GJ4EG4US</Card.Title>
                                        <Card.Text className="">Lector de mano con RFID integrado</Card.Text>
                                    </Card.Body>
                                    <Button variant='secondary' href="#contact-form" className="mx-auto my-3">Más información</Button>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide className=''>
                                <Card className="product d-flex justify-content-between h-100">
                                    <div className='content-img d-flex align-items-center p-2'>
                                        <Card.Img src="./img/display.png" />         
                                    </div>               
                                    <Card.Body className="">
                                        <Card.Subtitle className="">Navegador RealWear</Card.Subtitle>
                                        <Card.Title className="">Realwear 520</Card.Title>
                                        <Card.Text className="">Navegador con display HD integrado</Card.Text>
                                    </Card.Body>
                                    <Button variant='secondary' href="#contact-form" className="mx-auto my-3">Más información</Button>
                                </Card>
                            </SwiperSlide> 

                            <SwiperSlide className=''>
                                <Card className="product d-flex justify-content-between h-100">
                                    <div className='content-img d-flex align-items-center p-2'>
                                        <Card.Img src="./img/impresora.png" />       
                                    </div>                 
                                    <Card.Body className="">
                                        <Card.Subtitle className="">RFID Impresora</Card.Subtitle>
                                        <Card.Title className="">RFID: ZT620</Card.Title>
                                        <Card.Text className="">Impresora con RFID integrado</Card.Text>
                                    </Card.Body>
                                    <Button variant='secondary' href="#contact-form" className="mx-auto my-3">Más información</Button>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide className=''>
                                <Card className="product d-flex justify-content-between h-100">
                                    <div className='content-img d-flex align-items-center p-2'>
                                        <Card.Img src="./img/postnet.png" />         
                                    </div>               
                                    <Card.Body className="">
                                        <Card.Subtitle className="">UHF Lector</Card.Subtitle>
                                        <Card.Title className="">UHF: MC333U-GJ4EG4US</Card.Title>
                                        <Card.Text className="">Lector de mano con RFID integrado</Card.Text>
                                    </Card.Body>
                                    <Button variant='secondary' href="#contact-form" className="mx-auto my-3">Más información</Button>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide className=''>
                                <Card className="product d-flex justify-content-between h-100">
                                    <div className='content-img d-flex align-items-center p-2'>
                                        <Card.Img src="./img/display.png" />         
                                    </div>               
                                    <Card.Body className="">
                                        <Card.Subtitle className="">Navegador RealWear</Card.Subtitle>
                                        <Card.Title className="">Realwear 520</Card.Title>
                                        <Card.Text className="">Navegador con display HD integrado</Card.Text>
                                    </Card.Body>
                                    <Button variant='secondary' href="#contact-form" className="mx-auto my-3">Más información</Button>
                                </Card>
                            </SwiperSlide>                        
                        </Swiper>
                    </Container>
                </section>
            </main>
            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                <iframe className="w-100" width="1583" height="570" src="https://www.youtube.com/embed/3EQhay9UzeU" title="Sowtic - Smart Routines" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Home