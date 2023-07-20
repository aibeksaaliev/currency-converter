import React, {PropsWithChildren} from 'react';
import {AppBar, Box, Container, Toolbar, Typography} from "@mui/material";
import PaidIcon from '@mui/icons-material/Paid';
import {Link} from "react-router-dom";

const Layout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{width: "100%", display: "flex", alignItems: "center"}}>
                            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <PaidIcon/>
                                <Typography>Currency Converter</Typography>
                            </Box>
                            <Link to="/convert-currency" style={{marginLeft: "30px", textDecoration: "none", color: "white"}}>Converter</Link>
                            <Link to="/current-currencies" style={{marginLeft: "30px", textDecoration: "none", color: "white"}}>Rates</Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <main>
                <Container maxWidth="xl">
                    <Box sx={{p:3}}>
                        {children}
                    </Box>
                </Container>
            </main>
        </>
    );
};

export default Layout;