/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "blue-dark": "#1E6F9F",
                blue: "#4EA8DE",
                "purple-dark": "#5E60CE",
                purple: "#8284FA",
                "gray-700": "#0D0D0D",
                "gray-600": "#1A1A1A",
                "gray-500": "#262626",
                "gray-400": "#333333",
                "gray-300": "#808080",
                "gray-200": "#D9D9D9",
                "gray-100": "#F2F2F2",
                danger: "#E25858",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            fontSize: {
                sm: "0.75rem",
                md: "0.875rem",
                lg: "1rem",
                xl: "2.5rem",
            },
            lineHeight: {
                normal: "140%",
            },
        },
    },
    plugins: [],
};
