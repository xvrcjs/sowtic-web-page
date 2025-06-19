import { Card } from "react-bootstrap"
import { Fade } from "react-awesome-reveal";

const CardTransparent = (params: any) => {
    const {
        children,
        textAlign,
        itemAlign
    } = params;    
    return (    
        <Fade triggerOnce>
            <Card className={"card__trasparent " + textAlign + itemAlign}>
                {children}            
            </Card>        
        </Fade>    
    )
}

export default CardTransparent