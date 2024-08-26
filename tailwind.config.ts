import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      fontFamily: {
         sans: ['Moderustic'],
         kaushan: ["Kaushan Script"],
      },
      extend: {
         colors: {
            green: {
               DEFAULT: "#00f260",
            },
            dark: {
               DEFAULT: "#010101",
               100: "#0a0b0e",
               200: "#16181d",
               300: "#16181d",
               500: "#0f1115",
               700: "#202125",
            }
         },
      },
   },
   darkMode: 'class',
   plugins: [],
};

export default config;