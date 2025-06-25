import { Col, Button } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import MainBanner from './MainBanner';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  image: string;
  onVideoClick?: () => void;
}

/**
 * Hero banner component for the homepage.
 * Reuses MainBanner styles and structure.
 */
const HeroBanner = ({ title, subtitle, image, onVideoClick }: HeroBannerProps) => (
  <MainBanner>
    <Fade triggerOnce direction="right" duration={2800} className="position-absolute z-2 second-img d-none d-sm-block no-delay">
      <img src={image} className="w-100" />
    </Fade>
    <Col xs={{ span: 11, offset: 1 }} md="5" xl="4" className="z-1 mb-5">
      <Fade triggerOnce direction="left" duration={2500} className="no-delay">
        <h1>{title}</h1>
        <p className="subtitle mb-5">{subtitle}</p>
        <Button variant="secondary" onClick={onVideoClick}>
          Ver Video
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </Button>
      </Fade>
    </Col>
    <Fade triggerOnce direction="right" duration={3000} className="position-absolute chip-1 z-2 d-none d-md-block no-delay">
      <img src="./img/chip-01.png" className="w-100" />
    </Fade>
    <Fade triggerOnce direction="right" duration={3400} className="position-absolute chip-2 z-2 d-none d-md-block no-delay">
      <img src="./img/chip-02.png" className="w-100" />
    </Fade>
  </MainBanner>
);

export default HeroBanner;
