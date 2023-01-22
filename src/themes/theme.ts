
import { createTheme } from "@mui/material/styles"

export const appTheme = createTheme({
    palette: {
        primary: {
          main: '#3a5743',
        },
        secondary: {
          main: '#e8e1dc',
        },
    },
    // overrides: {
    //     // Style sheet name ⚛️
    //     MuiButton: {
    //       // Name of the rule
    //       text: {
    //         // Some CSS
    //         color: 'white',
    //       },
    //     },
    //   },
});