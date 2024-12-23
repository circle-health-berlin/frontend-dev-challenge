import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            spacing: {
                0.5: "4px",
                1: "8px",
                2: "16px",
                3: "24px",
                4: "32px",
                5: "40px",
                6: "48px",
                7: "56px",
                8: "64px",
                9: "72px",
                10: "80px",
                11: "88px",
                12: "96px",
                13: "104px",
                14: "112px",
                15: "120px",
                16: "128px",
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                braun: "#995C00",
            },
            screens: {
                mob320: "320px",
                mob375: "375px",
                mob425: "425px",
                tab768: "768px",
                lap1024: "1024px",
                lap1440: "1440px",
                fk2560: "2560px",
            },
        },
    },
    plugins: [],
} satisfies Config;
