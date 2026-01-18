import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#151515",
            },
            fontFamily: {
                sans: ['var(--font-saira)', 'sans-serif'],
                mono: ['var(--font-share-tech)', 'monospace'],
            },
        },
    },
    plugins: [],
};
export default config;
