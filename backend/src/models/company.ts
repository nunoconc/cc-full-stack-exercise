import { Price } from './price';

export type Company = {
    id: number;
    ticker: string;
    securityName: string;
    sector: string;
    country: string;
    trend: number;
    prices: Price[];
};
