import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getAllCurrencies} from "../../features/Currency/CurrencyThunks";
import {selectAllCurrencies, selectBaseCurrency} from "../../features/Currency/CurrencySlice";
import {FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography, SelectChangeEvent} from "@mui/material";
import {Rates} from "../../types";

const CurrentCurrencies = () => {
    const dispatch = useAppDispatch();
    const currentBaseCurrency = useAppSelector(selectBaseCurrency);
    const allCurrencies = useAppSelector(selectAllCurrencies);
    const [baseCurrency, setBaseCurrency] = useState(currentBaseCurrency);

    const onBaseCurrencyChange = (e: SelectChangeEvent) => {
      setBaseCurrency(e.target.value as string);
    };

    useEffect(() => {
        dispatch(getAllCurrencies(baseCurrency));
    }, [dispatch, baseCurrency]);

    return (
        <Grid container>
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={baseCurrency}
                        label="Age"
                        onChange={onBaseCurrencyChange}
                    >
                        {allCurrencies.map((currency, index) => {
                            return <MenuItem key={index} value={currency[0]}>{currency[0]}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                {allCurrencies.map((currency, index) => {
                    return <Typography key={index}>{currency[0] + "---" + currency[1]}</Typography>
                })}
            </Grid>
        </Grid>
    );
};

export default CurrentCurrencies;