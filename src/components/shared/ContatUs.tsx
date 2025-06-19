//import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

function onChange(value:any) {
  console.log("Captcha value:", value);
}

export const ContactUs = () => {
  //const form = React.useRef();

  const sendEmail = (e:any) => {
    e.preventDefault();
    //console.log(e);
    emailjs.sendForm('sowtic_contact', 'sowtic_contact', e.target, 'htkBMAuaSBux4s4ii')
      .then((result:any) => {
        console.log(result.text);
      }, (error:any) => {
        console.log(error.text);
      });
  };

  return (
    <Card className="mb-5">
      <Card.Body className="">
        <Form id='contact-form' onSubmit={sendEmail}>
          <Row className="g-3">
            <Col xs="12" className="">
              <Form.Label htmlFor="proyectDetail" className="">Cuéntenos sobre su proyecto o
                idea</Form.Label>
              <Form.Control type="text" className="" id="proyectDetail" placeholder="" name="proyectDetail"/>
            </Col>
            <Col xs="12" className="">
              <Form.Label htmlFor="whoYouKnowDuty" className="">¿Cómo conociste Sowtic?</Form.Label>
              <Form.Control type="text" className="" id="whoYouKnowDuty" placeholder="" name="whoYouKnowDuty"/>
            </Col>
            <Col xs="12" md="6" className="">
              <Form.Label htmlFor="clientName" className="">Nombre</Form.Label>
              <Form.Control type="text" className="" id="clientName" name="clientName"/>
            </Col>
            <Col xs="12" md="6" className="">
              <Form.Label htmlFor="clientEmail" className="">Email</Form.Label>
              <Form.Control type="email" className="" id="clientEmail" name="clientEmail"/>
            </Col>
            <Col xs="12" md="6" className="">
              <Form.Label htmlFor="clientCompany" className="">Empresa</Form.Label>
              <Form.Control type="text" className="" id="clientCompany" name="clientCompany"/>
            </Col>
            <Col xs="12" md="7" className="">
              <ReCAPTCHA
                sitekey="6Lek4jwpAAAAAOBsjPexzM0_rtCLG2J6LMLnoOT3"
                onChange={onChange}
              />  
            </Col>
            <Col xs="12" md={{ span: 5, offset: 7 }} className="">
              <Button variant="secondary" className="w-100 rounded-pill" value="Send" type="submit">Contactar
                <svg xmlns="http://www.w3.org/2000/svg" height="24"
                  viewBox="0 -960 960 960" width="24">
                  <path
                    d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                </svg>
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};