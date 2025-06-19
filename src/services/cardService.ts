import CardInterface from "./interface/cardInterface";
import { CARD } from "./databaseInMemory/card";

/**
 * Service providing card data.
 */
export default class CardService {
    /** Creates a new instance of CardService. */
    constructor() { }
    /**
     * Retrieve all cards.
     */
    getAll = async () : Promise<CardInterface[] | null> => {
        const cardData = CARD
        return cardData 
    }/* 
    getAllByPage = async (page:string) : Promise<CardInterface[] | null> => {
        const cardData = CARD.filter((element) => element.page === page)
        return cardData 
    } */
}