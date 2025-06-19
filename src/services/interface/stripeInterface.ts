import DataInterface from "./dataInterface";

/**
 * Stripe data structure.
 */
export default interface StripeInterface extends DataInterface {
    image?: string;
    title?: string;
    text?: string;
    buttonText?: string;
    buttonUrl?: string;
    buttonPathIcon?: string;
    imageRight?: boolean;
}