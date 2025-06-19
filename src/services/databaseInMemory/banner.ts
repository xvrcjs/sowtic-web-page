import BannerInterface from "../interface/bannerInterface";
import { MAIN } from "./main";
import { CARD } from "./card";
import { STRIPE } from "./stripe";

export const BANNERS: BannerInterface[] = [
    {
        id:0,
        data: MAIN
    },
    {
        id:1,
        data: CARD
    },
    {
        id:2,
        data: STRIPE
    },
    {
        id:4,
        data: CARD
    },
    {
        id:5,
        data: CARD
    },
    {
        id:6,
        data: CARD
    },
    {
        id:7,
        data: CARD
    }
]