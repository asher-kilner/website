import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { appTheme } from "themes/theme";
import Header from "./Header";

function Accomodation() {
    return(
        <ThemeProvider theme={appTheme}>
            <CssBaseline enableColorScheme />
            <Header/>
            accomodation    
        </ThemeProvider>
    )
}

export default Accomodation