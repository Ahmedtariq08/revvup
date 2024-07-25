const themes = [
    "light",
    "dark",
    "cupcake",
    "emerald",
    "corporate",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "nord",
    "sunset",
];

// Used in theme changing dropdown
export const ThemesWithLabel = themes.map((theme) => ({
    value: theme,
    label: theme.charAt(0).toUpperCase() + theme.slice(1),
}));
