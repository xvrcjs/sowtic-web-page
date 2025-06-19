import DataInterface from "./dataInterface";

export default interface CardInterface extends DataInterface { 
    number?:string;
    heading?:string
    image?: string;
    title?: string;
    text?: string;
    description?:string;
}