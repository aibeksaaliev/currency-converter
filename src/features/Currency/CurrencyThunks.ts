import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosApi} from "../../axiosApi";
import {CurrencyResponse, ExchangeType} from "../../types";

export const getCurrentCurrency = createAsyncThunk<CurrencyResponse, ExchangeType>(
    "currency/getCurrencies",
    async (exchangeOptions) => {
        const response = await axiosApi.get(`/latest?base=${exchangeOptions.base}&symbols=${exchangeOptions.output}&amount=${exchangeOptions.amount}`);
        return response.data;
    }
);

export const getAllCurrencies = createAsyncThunk<CurrencyResponse, string>(
    "currency/getAllCurrencies",
    async (base) => {
        const response = await axiosApi.get(`/latest?base=${base}`);
        return response.data;
    }
);