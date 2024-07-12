"use client";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    palette: {
        primary: {
            main: "#0e1424",
        },
        secondary: {
            main: "#374254",
        },
        background: {
            default: "#ececec",
            paper: "#adbbc6",
        },
        text: {
            primary: "#0e1424",
            secondary: "#374254",
        },
        grey: {
            500: "#8a8fa3",
        },
    },
});

export default theme;
