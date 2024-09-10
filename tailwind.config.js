/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,astro}"],
    theme: {
        extend: {},
    },
    plugins: [require("rippleui")],
    /** @type {import('rippleui').Config} */
    rippleui: {
        removeThemes: ["dark"],
        defaultStyle: true,
        themes: [
            {
                colorScheme: "light",
                themeName: "light",
                colors: {
                    primary: "#44e3de",
                },
            },
        ],
    },
};
