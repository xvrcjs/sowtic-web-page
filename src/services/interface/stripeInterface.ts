import DataInterface from "./dataInterface";

export default interface StripeInterface extends DataInterface { 
    image?: string;
    title?: string;
    text?: string;
    buttonText?: string;
    buttonUrl?: string;
    buttonPathIcon?: string;
    imageRight?: boolean;
}