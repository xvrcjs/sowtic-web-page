import DataInterface from "./dataInterface";

/**
 * Card data structure.
 */
export default interface CardInterface extends DataInterface {
    number?:string;
    heading?:string
    image?: string;
    title?: string;
    text?: string;
    description?:string;
}