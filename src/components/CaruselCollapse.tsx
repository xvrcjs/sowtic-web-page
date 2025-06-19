import {  Col,  Fade, Row } from "react-bootstrap"
import { useState } from "react";
import { CardTransparent } from ".";
import { CardInterface } from "../services/interface";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const CaruselCollapse = (params: any) => {
    const [open] = useState<boolean[]>([
        true,
        false
    ]);
    const [lastOpen, setLastOpen] = useState<number>(0);
    const handlerChangeCard = (pos: number) => {
        open[lastOpen] = false;
        open[pos] = true;
        setLastOpen(pos);
    };

    const {
        dataCollapse
    } = params;
    return (        
        <>
            <Row>
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
                    className="mySwiper"
                >
                {dataCollapse?.map((card:CardInterface, index:number) => {
                    return(                    
                    <SwiperSlide className=''>
                        <div onClick={() => handlerChangeCard(index)}
                        aria-controls={"card" + index}
                        aria-expanded={open[index]}>
                            <CardTransparent textAlign="text-start" itemAlign="align-items-start">
                                <div className="number">{card.number}</div>
                                <h3 className="">{card.heading}</h3>
                                <p>{card.text}
                                </p>
                            </CardTransparent>
                        </div>                        
                    </SwiperSlide>
                    )
                })}
                </Swiper>
            </Row>
            <Row className="solve__detail">
                <Col xs="12" lg={{ span: 7, offset: 2 }} className="">
                    {dataCollapse?.map((card:CardInterface, index:number) => {
                        return( 
                                <Fade in={open[index]}>
                                    <div className="card__description" id="card01" data-bs-parent="#fadeCards">
                                        <div className="number">{card.number}</div>
                                        <h3 className="my-4">{card.heading}</h3>
                                        <p>{card.description}</p>
                                    </div>
                                </Fade>
                        )
                    })}
                </Col>
            </Row>
        </>
    )
}

export default CaruselCollapse