import React, {useState} from 'react';
import {Grid, IconButton, TextField, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getCurrentCurrency} from "../../features/Currency/CurrencyThunks";
import {ExchangeType} from "../../types";
import {selectCurrency} from "../../features/Currency/CurrencySlice";
import SyncIcon from '@mui/icons-material/Sync';

const Converter = () => {
    const dispatch = useAppDispatch();
    const currency = useAppSelector(selectCurrency);
    const [usersRequest, setUsersRequest] = useState("");

    const currencyInputChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        await setUsersRequest(e.target.value);
    };

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        const optionsToArrayOfSymbols = usersRequest.split(" ");

        const result: ExchangeType = {
            amount: Number(optionsToArrayOfSymbols[0]),
            base: optionsToArrayOfSymbols[1].toUpperCase(),
            output: optionsToArrayOfSymbols[3].toUpperCase(),
        };

        await dispatch(getCurrentCurrency(result));
    };

    return (
        <Grid container sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Grid item xs={4}>
                <form onSubmit={submitForm}>
                    <Grid container sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Grid item xs={9} sx={{mb:1}}>
                        <TextField
                            type="text"
                            value={usersRequest}
                            onChange={currencyInputChangeHandler}
                            inputProps={{min: 0, style: { textAlign: 'center' }}}
                            />
                    </Grid>
                    <Grid item xs={3} sx={{mb:1}}>
                            <IconButton type="submit" sx={{background: "#1976d2"}}>
                                <SyncIcon/>
                            </IconButton>
                    </Grid>
                    </Grid>
                </form>
            </Grid>
            <Grid item xs={4}>
                <Typography>
                    {currency}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Converter;