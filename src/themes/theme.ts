import { blue, green, pink, purple } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

export const appTheme = createTheme({
    palette: {
        primary: {
          light: '#487e4c',
          main: '#1b5e20',
          dark: '#124116',
          contrastText: '#fff',
        },
        secondary: {
          light: '#b7deb8',
          main: '#a5d6a7',
          dark: '#739574',
          contrastText: '#000',
        },
      },
});