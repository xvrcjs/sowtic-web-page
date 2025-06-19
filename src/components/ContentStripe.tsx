import { Link } from "react-router-dom"
import { Button, Col, Row } from "react-bootstrap"
import { Fade } from "react-awesome-reveal";

interface ContentStripeProps {
  image: string;
  title: string;
  text: string;
  buttonText?: string;
  buttonUrl?: string;
  buttonIcon?: string;
  imageRight?: boolean;
}

/**
 * Section with image and text stripe.
 *
 * @param props - stripe data.
 * @returns JSX.Element stripe section.
 */
const ContentStripe = (props: ContentStripeProps) => {
    const {
        image,
        title,
        text,
        buttonText,
        buttonUrl,
        buttonIcon,
        imageRight,
    } = props;
    return (
        <Row className="align-items-lg-center mb-4 gy-3 content-stripe">
            <Col xs="12" md="5" lg="6" className={"col-img " + (imageRight ? "ps-md-0 order-0" : "pe-md-0 order-1") }>
                <Fade triggerOnce direction={imageRight ? 'left' : 'right'}>
                    <img className="w-100 mb-3 my-md-0" src={image} />
                </Fade>
            </Col>
            <Col xs="12" md="6" lg="5" className={(imageRight ? "pe-xl-5 ps-md-5 order-1" : "offset-md-1 ps-xl-5 pe-md-5 order-0")}>
                <Fade triggerOnce direction={imageRight ? 'right' : 'left'}>
                    <h3>{title}</h3>
                    <p className="subtitle py-3">
                        {text}
                    </p>
                    {buttonText ?
                        <Link to={buttonUrl}>
                            <Button variant='primary' className="">
                                {buttonText}
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960"
                                    width="24">
                                    <path d={buttonIcon} />
                                </svg>
                            </Button>
                        </Link>
                    : null}
                </Fade>
            </Col>
        </Row>
    )
}

export default ContentStripe