export type Price = {
    date: string;
    close: string;
    volume: string;
};

export enum PriceEnum {
    DATE = 'Date',
    CLOSE = 'Close',
    VOLUME = 'Volume',
}

export type Company = {
    id: number;
    ticker: string;
    securityName: string;
    sector: string;
    country: string;
    trend: number;
    prices: Price[];
};
