import CardInterface from "./interface/cardInterface";
import { CARD } from "./databaseInMemory/card";

export default class CardService {
    constructor() { }
    getAll = async () : Promise<CardInterface[] | null> => {
        const cardData = CARD
        return cardData 
    }/* 
    getAllByPage = async (page:string) : Promise<CardInterface[] | null> => {
        const cardData = CARD.filter((element) => element.page === page)
        return cardData 
    } */
}