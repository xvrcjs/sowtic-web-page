import StripeInterface from "./interface/stripeInterface";
import { STRIPE } from "./databaseInMemory/stripe";

/**
 * Service providing stripe data.
 */
export default class StripeService {
    /** Creates a new instance of StripeService. */
    constructor() { }
    /**
     * Retrieve all stripe items.
     */
    getAll = async () : Promise<StripeInterface[] | null> => {
        const stripeData = STRIPE
        return stripeData 
    }
    /* getAllByPage = async (page:string) : Promise<StripeInterface[] | null> => {
        const stripeData = STRIPE.filter((element) => element.page === page)
        return stripeData 
    } */
}