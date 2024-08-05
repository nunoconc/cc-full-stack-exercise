export type Price = {
    date: string,
    close: string,
    volume: string,
}

export type Company = {
    id: number,
    ticker: string,
    securityName: string, 
    sector: string, 
    country: string, 
    trend: number,
    prices: Price[],
}