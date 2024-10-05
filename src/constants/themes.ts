const themes = [
    "light",
    "dark",
    "cupcake",
    "emerald",
    "corporate",
    "dracula",
    "autumn",
    "business",
    "nord",
    "sunset",
];

export const DEFAULT_THEME = "cupcake";

// Used in theme changing dropdown
export const ThemesWithLabel = themes.map((theme) => ({
    value: theme,
    label: theme.charAt(0).toUpperCase() + theme.slice(1),
}));
