"use client"

import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
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
        },
        MuiPaper:{
            defaultProps:{
                elevation: 12
            },
            styleOverrides:{
                root:{
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "2rem"
                },
            }
        }
    }
});
