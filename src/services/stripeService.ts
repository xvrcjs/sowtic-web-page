import StripeInterface from "./interface/stripeInterface";
import { STRIPE } from "./databaseInMemory/stripe";

export default class StripeService {
    constructor() { }
    getAll = async () : Promise<StripeInterface[] | null> => {
        const stripeData = STRIPE
        return stripeData 
    }
    /* getAllByPage = async (page:string) : Promise<StripeInterface[] | null> => {
        const stripeData = STRIPE.filter((element) => element.page === page)
        return stripeData 
    } */
}