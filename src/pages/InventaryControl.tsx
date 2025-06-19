import { useEffect, useState } from 'react';
import { Col, Row, Container, Button } from "react-bootstrap"
import { MainBanner, ContentStripe, CardTransparent, CarouselCollapse } from "../components"
import { Fade } from "react-awesome-reveal";
import BannerService from '../services/bannerService';
import {
    BannerInterface,
    MainInterface,
    StripeInterface,
    CardInterface
} from "../services/interface/index";

const InventaryControl = () => {
    
    const [data, setData] = useState<BannerInterface[]>([]);
    const bannerService = new BannerService();
    
    useEffect( () => {
        bannerService.getAllByPage('inventary-control').then((res) => res ? setData(res) :null);
    }, data );

    const getBannerId = (id: number) => {
        const bannerInfo = data.filter( (res) => res.id === id)
        const dataBanner = bannerInfo[0]?.data.filter( (elem) => elem.bannerId === id)
        return dataBanner
    };
    return (
        <main className="inner-page inventary-control">
            { getBannerId(0)?.map((main:MainInterface) => {
                return (                     
                    <MainBanner buttonBack={true}>  
                        <Col xs={{span:11, offset:1}} md="7" lg="5" className="z-1">
                            <Fade triggerOnce direction='left' duration={2500}>                      
                                <h4>{main.subHeading}</h4>
                                <h1><span className="highlight-2">Agilizá </span> al<br />productividad de tu<br />industria</h1>
                                <Col xs="10" sm="12" className="subtitle mb-5">{main.text}</Col>
                            </Fade>
                        </Col>
                        <Fade triggerOnce direction='right' duration={2500} className="position-absolute z-0 second-img d-none d-md-block ic-img">
                            <img src={main.image} className="w-100" />                                                
                        </Fade>
                    </MainBanner>
                )
            })} 
            <Container fluid className="software__services mt-5">
                <h2 className="text-center mb-5">¿Qué es el Control de inventario?</h2>
                <Col xs="12" md="8" className="mx-auto text-center subtitle">Una solución integral que brinda eficiencia y precisión en el rastreo y administración del stock.</Col>
                { getBannerId(2)?.map((stripe:StripeInterface) => {
                    return ( 
                    <ContentStripe imageRight={stripe.imageRight} image={stripe.image} title={stripe.title} text={stripe.text} buttonText={stripe.buttonText} buttonUrl={stripe.buttonUrl} buttonIcon={stripe.buttonPathIcon} /> 
                    )
                })}   
            </Container>
            <Container fluid className="how__work">
                <Row className="justify-content-center">
                    <h2 className="text-center">¿Cómo funciona?</h2>
                    <Row className="row g-5 mt-0">
                    { getBannerId(1)?.map((card:CardInterface) => {
                        return ( 
                            <Col xs="12" md="6" lg="4" className="">
                                <CardTransparent textAlign={" text-center "} itemAlign={" align-items-center "}>
                                    <img src={card.image} width="auto" height="auto" />
                                    <Button className="">{card.title}</Button>
                                    <p>{card.text}</p>     
                                </CardTransparent>
                            </Col> 
                            )                        
                    })}    
                    </Row>
                </Row>
            </Container>  
            <Container fluid className="what__solve" id="fadeCards">
                <Row>
                    <h2 className="text-center pb-5">¿Qué problemas resuelve?</h2>
                </Row>
                <CarouselCollapse dataCollapse={getBannerId(5)}/>
            </Container>
            <Container fluid className="how__work benefits"> 
                <Row className="justify-content-center">
                    <h2 className="text-center">Beneficios del Control de Inventario</h2>
                    <p className="subtitle col-12 col-lg-8 text-center">Conocé los detalles de tus producto y dale un impulso de eficiencia a tu negocio.</p>
                    <Row className="row g-5 mt-0 justify-content-center">
                    { getBannerId(6)?.map((card: CardInterface) => {
                            return ( 
                                <Col xs="12" md="6" lg="4" className="">
                                    <CardTransparent textAlign={" text-center "} itemAlign={" align-items-center "}>
                                        <img src={card.image} width="auto" height="auto" />
                                        <Button className="">{card.title}</Button>
                                        <p>{card.text}</p>     
                                    </CardTransparent>
                                </Col> 
                                )                        
                        })}   
                    </Row>
                </Row>
            </Container>
            <Container fluid className="what__solve hire-us"> 
                <Row className="justify-content-center">
                    <h2 className="text-center pb-5">¿Cómo se ofrece el servicio?</h2>
                    <Row className="g-5">
                    { getBannerId(7)?.map((card: CardInterface) => {
                            return ( 
                                <Col xs="12" md="6" lg="4" className="">
                                    <CardTransparent textAlign="text-start" itemAlign="align-items-start">
                                    <div className="number">{card.number}</div>
                                    <h3 className="">{card.heading}</h3>
                                    <p>{card.text}
                                    </p>
                                </CardTransparent>
                                </Col> 
                                )                        
                        })}   
                    </Row>
                </Row>    
            </Container>
        </main>     
    )
}

export default InventaryControl