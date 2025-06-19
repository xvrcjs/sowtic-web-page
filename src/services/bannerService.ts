import { BANNERS } from "./databaseInMemory/banner"
import BannerInterface from "./interface/bannerInterface"
import DataInterface from "./interface/dataInterface"

export default class BannerService {
    constructor() { }
    getAll = async () : Promise<BannerInterface[] | null> => {
        const bannerData = BANNERS
        return bannerData 
    }
    
    getAllById = async (bannerId:number) : Promise<BannerInterface[] | null> => {
        const bannerData = BANNERS.filter((element) => element.id === bannerId)
        return bannerData 
    }

    getSpecificCard = async (bannerId: number, cardId: number): Promise<DataInterface | null> => {
        const bannerData = BANNERS.find((element) => element.id === bannerId)
        if (bannerData) {
            const cardData = bannerData.data.find((element) => element.id === cardId)
            return cardData ? cardData : null
        } else {
            return null
        }
    }

    getAllByIdAndPage =  async (bannerId:number, page: string): Promise<DataInterface[] | null> => {
        const bannerData = BANNERS.find((banner) => banner.id === bannerId)
        if (bannerData) {
            const data = bannerData.data.filter((elem) => elem.page.includes(page) && elem.bannerId === bannerId)
            return data
        }else {
            return null
        }
    }

    getAllByPage = async (page: string): Promise<BannerInterface[] | null> => {
        const bannerData = BANNERS.map((banner) => { 
            return { 
                id:banner.id,
                data: banner.data.filter((elem) => elem.page.includes(page)) 
            }
        });

        if(bannerData) {
            return bannerData
        }

        return null
    }



}