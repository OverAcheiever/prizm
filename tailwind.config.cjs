/** @type {import('tailwindcss').Config} */
const config = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                space: "var(--font-space)",
                aeonik: "var(--font-aeonik)",
                circa: "var(--font-circa)",
            },
        },
    },
    plugins: [],
};

module.exports = config;