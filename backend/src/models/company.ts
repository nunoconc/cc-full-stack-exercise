/**
 * Model definition of a Price
 */
export type Price = {
    date: string;
    close: string;
    volume: string;
};

/**
 * Model definition of a company
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
