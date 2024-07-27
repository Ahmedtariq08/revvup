import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    plugins: [typography, daisyui],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0", transform: "translateX(100%)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                fadeOut: {
                    "0%": { opacity: "1", transform: "translateX(0)" },
                    "100%": { opacity: "0", transform: "translateX(100%)" },
                },
            },
            animation: {
                fadeIn: "fadeIn 0.5s ease-out",
                fadeOut: "fadeOut 0.5s ease-out",
            },
        },
    },
    daisyui: {
        themes: [
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
        ],
    },
};
export default config;
