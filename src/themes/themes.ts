"use client"

import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette:{
        primary: {
            main: "#0f0f52"
        },
        secondary: {
            main: "#fb8500"
        }
    },
    typography:{
        fontFamily: "'Rubik', sans-serif",
    },
    components:{
        MuiCard:{
            styleOverrides:{
                root: {
                    backgroundColor: "white",
                }
            }
        }
    }
});
