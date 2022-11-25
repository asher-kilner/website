import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { appTheme } from "themes/theme";
import Header from "./Header";

function Venue() {
    return(
        <ThemeProvider theme={appTheme}>
            <CssBaseline enableColorScheme />
            <Header/>
            Venue    
        </ThemeProvider>

    )
}

export default Venue
