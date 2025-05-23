/** @type {import('tailwindcss').Config} */
export default {
    "content": {
        "files": [
            // all directories and extensions will correspond to your Nuxt config
            "`/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
            "~/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
            "~/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
            "~/plugins/**/*.{js,ts,mjs}",
            "~/composables/**/*.{js,ts,mjs}",
            "~/utils/**/*.{js,ts,mjs}",
            "~/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
            "~/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
            "~/app.config.{js,ts,mjs}",
            "~/app/spa-loading-template.html"
        ]
    },
    theme: {
        extend: {
            colors: {
                primary: "#053328",
                primaryDark: "#042920", // Slightly darker shade for footer bottom
                textPrimary: "#05c690",
                formBg: "#00665B",
                inputBg: "#053328",
                white: "#ffffff",
                black: "#000000",
                gray: {
                    700: "rgba(255, 255, 255, 0.15)" // For footer borders
                }
            }
        },
    },
    plugins: [],
}

