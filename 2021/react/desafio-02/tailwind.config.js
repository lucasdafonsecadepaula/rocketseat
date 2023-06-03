/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "yellow-dark": "#C47F17",
                yellow: "#DBAC2C",
                "yellow-light": "#F1E9C9",
                "purple-dark": "#4B2995",
                purple: "#8047F8",
                "purple-light": "#EBE5F9",
                "base-title": "#272221",
                "base-subtitle": "#403937",
                "base-text": "#574F4D",
                "base-label": "#8D8686",
                "base-hover": "#D7D5D5",
                "base-button": "#E6E5E5",
                "base-input": "#EDEDED",
                "base-card": "#F3F2F2",
                background: "#FAFAFA",
                white: "#FFFFFF",
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
                baloo2: ["'Baloo 2'", "cursive", "sans-serif"],
            },
            fontSize: {
                "title-xl": [
                    "3rem",
                    {
                        lineHeight: "130%",
                        fontWeight: "800",
                    },
                ],
                "title-l": [
                    "2rem",
                    {
                        lineHeight: "130%",
                        fontWeight: "800",
                    },
                ],
                "title-m": [
                    "1.5rem",
                    {
                        lineHeight: "130%",
                        fontWeight: "800",
                    },
                ],
                "title-s": [
                    "1.25rem",
                    {
                        lineHeight: "130%",
                        fontWeight: "700",
                    },
                ],
                "title-xs": [
                    "1.125rem",
                    {
                        lineHeight: "130%",
                        fontWeight: "700",
                    },
                ],
                l: [
                    "1.25rem",
                    {
                        lineHeight: "130%",
                    },
                ],
                m: [
                    "1rem",
                    {
                        lineHeight: "130%",
                    },
                ],
                s: [
                    "0.875rem",
                    {
                        lineHeight: "130%",
                        fontWeight: "400",
                    },
                ],
                xs: [
                    "0.75rem",
                    {
                        lineHeight: "130%",
                        fontWeight: "700",
                    },
                ],
                tag: [
                    "0.625rem",
                    {
                        lineHeight: "130%",
                        fontWeight: "700",
                    },
                ],
                "button-g": [
                    "0.875rem",
                    {
                        lineHeight: "160%",
                        fontWeight: "700",
                    },
                ],
                "button-m": [
                    "0.75rem",
                    {
                        lineHeight: "160%",
                        fontWeight: "400",
                    },
                ],
            },
        },
    },
    plugins: [],
};
