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

const differentColors = {
    primary: {
        main: "#1565c0", // Darker Blue
        light: "#5e92f3",
        dark: "#003c8f",
        contrastText: "#ffffff",
    },
    secondary: {
        main: "#009688", // Teal
        light: "#52c7b8",
        dark: "#00675b",
        contrastText: "#ffffff",
    },
    success: {
        main: "#388e3c", // Darker Green
        light: "#6abf69",
        dark: "#00600f",
        contrastText: "#ffffff",
    },
    error: {
        main: "#f44336", // Red
        light: "#ff7961",
        dark: "#ba000d",
        contrastText: "#ffffff",
    },
    warning: {
        main: "#ff9800", // Orange
        light: "#ffc947",
        dark: "#c66900",
        contrastText: "#ffffff",
    },
    info: {
        main: "#2196f3", // Light Blue
        light: "#6ec6ff",
        dark: "#0069c0",
        contrastText: "#ffffff",
    },
    background: {
        default: "#f4f6f8", // Light Grey background
        paper: "#ffffff", // White background for paper components
    },
    text: {
        primary: "#333333", // Dark Grey text
        secondary: "#666666", // Medium Grey text
    },
};

const testColors = {
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
};

const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    palette: testColors,
});

export default theme;
