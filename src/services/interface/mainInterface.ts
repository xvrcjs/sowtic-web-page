import DataInterface from "./dataInterface";

/**
 * Main banner data structure.
 */
export default interface MainInterface extends DataInterface {
    image?: string;
    buttonBack?:boolean;
    subHeading?:string,
    heading?:string
    text?: string;
}