import React, {useState} from 'react';
import {Grid, TextField, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getCurrentCurrency} from "../../features/Currency/CurrencyThunks";
import {ExchangeType} from "../../types";
import {LoadingButton} from "@mui/lab";
import {selectCurrency} from "../../features/Currency/CurrencySlice";

const Converter = () => {
    const dispatch = useAppDispatch();
    const currency = useAppSelector(selectCurrency);
    const [usersRequest, setUsersRequest] = useState("");
    const [exchangeOptions, setExchangeOptions] = useState<ExchangeType>({
        amount: 0,
        base: "",
        output: "",
    });

    const filterUsersRequest = (options: string) => {
        const optionsToArrayOfSymbols = options.split(" ");

        const result: ExchangeType = {
            amount: Number(optionsToArrayOfSymbols[0]),
            base: optionsToArrayOfSymbols[1].toUpperCase(),
            output: optionsToArrayOfSymbols[3].toUpperCase(),
        };

        setExchangeOptions(result);
    };

    const currencyInputChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        await setUsersRequest(e.target.value);
    };

    const submitForm = async (e: React.FormEvent) => {
      e.preventDefault();
      await filterUsersRequest(usersRequest);
      await dispatch(getCurrentCurrency(exchangeOptions));
    };

    return (
        <Grid container>
            <Grid item xs={12}>
                <form onSubmit={submitForm}>
                    <Grid item xs={12}>
                        <TextField type="text" value={usersRequest} onChange={currencyInputChangeHandler}/>
                    </Grid>
                    <Grid item xs={12}>
                        <LoadingButton type="submit">
                            Convert
                        </LoadingButton>
                    </Grid>
                </form>
            </Grid>
            <Grid item xs={12}>
                <Typography>
                    {currency ? Object.values(currency) : ""}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Converter;