import DataInterface from "./dataInterface";

export default interface MainInterface extends DataInterface { 
    image?: string;
    buttonBack?:boolean;
    subHeading?:string,
    heading?:string
    text?: string;
}