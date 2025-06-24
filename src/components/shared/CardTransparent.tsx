import { Card } from "react-bootstrap"
import { Fade } from "react-awesome-reveal";

interface CardTransparentProps {
  children: React.ReactNode;
  textAlign?: string;
  itemAlign?: string;
}

/**
 * Tarjeta transparente con animación de aparición.
 *
 * @param props - configuración de la tarjeta.
 * @returns JSX.Element tarjeta renderizada.
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