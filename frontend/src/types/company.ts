/**
 * Type definition of a price
 */
export type Price = {
    date: string;
    close: string;
    volume: string;
};

/**
 * Enum definition price props
 */
export enum PriceEnum {
    DATE = 'Date',
    CLOSE = 'Close',
    VOLUME = 'Volume',
}

/**
 * Type definition of a company
 */
export type Company = {
    id: number;
    ticker: string;
    securityName: string;
    sector: string;
    country: string;
    trend: number;
    prices: Price[];
};
