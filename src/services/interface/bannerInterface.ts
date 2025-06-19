import DataInterface from "./dataInterface";

/**
 * Banner structure.
 */
export default interface BannerInterface{
    id: number;
    pos?: number;
    data: DataInterface[];
}