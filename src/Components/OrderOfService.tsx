import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { appTheme } from "themes/theme";
import Header from "./Header";

function OrderOfService() {
    return(
        <ThemeProvider theme={appTheme}>
            <CssBaseline enableColorScheme />
            <Header/>
            order of service    
        </ThemeProvider>

    )
}

export default OrderOfService