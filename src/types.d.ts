export interface ExchangeType {
    amount: number;
    base: string;
    output: string;
}

export interface CurrencyResponse {
    motd: MOTD;
    success: boolean;
    base: string;
    date: Date;
    rates: Rates;
}

export interface MOTD {
    msg: string;
    url: string;
}

export interface Rates {
    [key: string]: number;
}