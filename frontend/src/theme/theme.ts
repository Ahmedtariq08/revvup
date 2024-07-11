"use client";
import { Roboto } from "next/font/google";
import { red, blue, green, amber } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

const pastelColors = {
    primary: {
        light: "#a6c8ff", // pastel blue light
        main: "#85a8d0", // pastel blue
        dark: "#607c94", // pastel blue dark
        contrastText: "#ffffff", // white
    },
    secondary: {
        light: "#ffb3ba", // pastel red light
        main: "#ff858c", // pastel red
        dark: "#d05f64", // pastel red dark
        //contrastText: "#000000", // black
    },
    error: {
        light: "#ffcccb", // pastel red light
        main: "#ff8585", // pastel red
        dark: "#ff5252", // pastel red dark
        contrastText: "#ffffff", // white
    },
    warning: {
        light: "#ffedb3", // pastel yellow light
        main: "#ffdb70", // pastel yellow
        dark: "#d0b64a", // pastel yellow dark
        contrastText: "#000000", // black
    },
    success: {
        light: "#b3e5b2", // pastel green light
        main: "#81c784", // pastel green
        dark: "#4caf50", // pastel green dark
        contrastText: "#000000", // black
    },
    info: {
        light: "#b3e5fc", // pastel blue light
        main: "#81d4fa", // pastel blue
        dark: "#4fc3f7", // pastel blue dark
        contrastText: "#000000", // black
    },
};

const normalColors = {
    primary: {
        light: blue[300],
        main: blue[500],
        dark: blue[700],
        contrastText: "#fff",
    },
    secondary: {
        light: green[300],
        main: green[500],
        dark: green[700],
        contrastText: "#000",
    },
    error: {
        light: red[300],
        main: red[500],
        dark: red[700],
        contrastText: "#fff",
    },
    warning: {
        light: amber[300],
        main: amber[500],
        dark: amber[700],
        contrastText: "#000",
    },
    success: {
        light: green[300],
        main: green[500],
        dark: green[700],
        contrastText: "#fff",
    },
    info: {
        light: blue[300],
        main: blue[500],
        dark: blue[700],
        contrastText: "#fff",
    },
};

const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    palette: pastelColors,
});

export default theme;
