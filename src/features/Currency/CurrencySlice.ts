import {createSlice} from "@reduxjs/toolkit";
import {getAllCurrencies, getCurrentCurrency} from "./CurrencyThunks";
import {RootState} from "../../app/store";

interface CurrencyState {
    currency: string;
    base: string;
    currencies: [string, number][];
}

const initialState: CurrencyState = {
    currency: "",
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
            state.currency = Object.values(action.payload.rates)[0].toFixed(2);
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
