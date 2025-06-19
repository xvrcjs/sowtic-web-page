import DataInterface from "./dataInterface";

export default interface BannerInterface{
    id: number;
    pos?: number;
    data: DataInterface[];
}