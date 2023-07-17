import React, {PropsWithChildren} from 'react';
import {Box, Typography} from "@mui/material";

const Layout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <header>
                <Box>
                    <Typography>Currency Converter</Typography>
                </Box>
            </header>
            <main>
                {children}
            </main>
        </>
    );
};

export default Layout;