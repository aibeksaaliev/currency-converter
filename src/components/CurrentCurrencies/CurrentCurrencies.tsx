import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getAllCurrencies} from "../../features/Currency/CurrencyThunks";
import {selectAllCurrencies, selectBaseCurrency} from "../../features/Currency/CurrencySlice";
import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";

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
        <Grid container sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <Grid item xs={12} sx={{mx: "auto", mb: 2}}>
                <FormControl>
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
            <Grid item>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth:500}} size="small">
                        <TableHead sx={{background: "#1976d2"}}>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Average Rate ( 1 {baseCurrency})</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allCurrencies.map((currency, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>{currency[0]}</TableCell>
                                        <TableCell>{currency[1]}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
};

export default CurrentCurrencies;