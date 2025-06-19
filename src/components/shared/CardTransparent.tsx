import { Card } from "react-bootstrap"
import { Fade } from "react-awesome-reveal";

interface CardTransparentProps {
  children: React.ReactNode;
  textAlign?: string;
  itemAlign?: string;
}

/**
 * Transparent card with fade animation.
 *
 * @param props - card settings.
 * @returns JSX.Element transparent card.
 */
const CardTransparent = (props: CardTransparentProps) => {
    const {
        children,
        textAlign = '',
        itemAlign = ''
    } = props;
    return (    
        <Fade triggerOnce>
            <Card className={"card__trasparent " + textAlign + itemAlign}>
                {children}            
            </Card>        
        </Fade>    
    )
}

export default CardTransparent