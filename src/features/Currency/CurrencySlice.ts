import {createSlice} from "@reduxjs/toolkit";
import {getAllCurrencies, getCurrentCurrency} from "./CurrencyThunks";
import {RootState} from "../../app/store";
import {Rates} from "../../types";

interface CurrencyState {
    currency: Rates | null;
    base: string;
    currencies: [string, number][];
}

const initialState: CurrencyState = {
    currency: null,
    base: "RUB",
    currencies: [],
};

export const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        setBaseCurrency: (state, action) => {
            state.base = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCurrentCurrency.fulfilled, (state, action) => {
            state.currency = action.payload.rates;
        });

        builder.addCase(getAllCurrencies.fulfilled, (state, action) => {
            state.currencies = Object.entries(action.payload.rates);
        })
    },
});

export const currencyReducer = currencySlice.reducer;
export const selectCurrency = (state: RootState) => state.currency.currency;
export const selectBaseCurrency = (state: RootState) => state.currency.base;
export const selectAllCurrencies = (state: RootState) => state.currency.currencies;
