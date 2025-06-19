import { useEffect, useState } from 'react';
import { Col, Row, Container, Button } from "react-bootstrap"
import { MainBanner, ContentStripe, CardTransparent, CaruselCollapse } from "../components"
import { Fade } from "react-awesome-reveal";
import BannerService from '../services/bannerService';
import {
    BannerInterface,
    MainInterface,
    StripeInterface,
    CardInterface
} from "../services/interface/index";

const RemoteAssistant = () => {
    
    const [data, setData] = useState<BannerInterface[]>([]);
    const bannerService = new BannerService();
    
    useEffect( () => {
        bannerService.getAllByPage('remote-assistant').then((res) => res ? setData(res) :null);
    }, data );

    const getBannerId = (id: number) => {
        const bannerInfo = data.filter( (res) => res.id === id)
        const dataBanner = bannerInfo[0]?.data.filter( (elem) => elem.bannerId === id)
        return dataBanner
    };
    return (
        <main className="inner-page remote-assistent">
            { getBannerId(0)?.map((main:MainInterface) => {
                return (                     
                    <MainBanner buttonBack={true}>  
                        <Col xs={{span:11, offset:1}} md="7" lg="5" className="z-1">
                            <Fade triggerOnce direction='left' duration={2500}>                      
                                <h4>{main.subHeading}</h4>
                                <h1><span className="highlight-2">Expertos</span> a distancia<br /> para soluciones<br /> inmediatas</h1>
                                <Col xs="10" sm="12" lg="9" className="subtitle mb-5">{main.text}</Col>
                            </Fade>
                        </Col>
                        <Fade triggerOnce direction='right' duration={2500} className="position-absolute z-2 second-img d-none d-md-block ra-img">
                            <img src={main.image} className="w-100" />                                                
                        </Fade>
                    </MainBanner>
                )
            })} 
            <Container fluid className="software__services">
                <h2 className="text-center mb-5">¿Qué es Remote Assistense?</h2>
                <Col xs="12" md="8" className="mx-auto text-center subtitle">Un servicio que potencia el soporte técnico de
                    expertos a través de una asistencia remota con anteojos de realidad mixta.</Col>
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
                <CaruselCollapse dataCollapse={getBannerId(5)}/>
            </Container>
            <Container fluid className="how__work benefits"> 
                <Row className="justify-content-center">
                    <h2 className="text-center">Beneficios de Remote Assistense</h2>
                    <p className="subtitle col-12 col-lg-8 text-center">Un servicio que optimiza y automatiza las rutinas de
                        control de seguridad y calidad en las plantas industriales.</p>
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

export default RemoteAssistant