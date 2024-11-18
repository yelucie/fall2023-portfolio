import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
               200: "#1b1d23",
               300: "#16181d",
               400: "#24272d",
               500: "#0f1115",
               600: "#2a2d33",
               700: "#202125",
               800: "#363940",
               900: "#3d4047",
            }
         },
      },
   },
   darkMode: 'class',
   plugins: [
      plugin(({ addUtilities }) => {
        addUtilities({
          /* Chrome, Safari and Opera */
          ".scrollbar-hidden::-webkit-scrollbar": {
            display: "none",
          },
  
          ".scrollbar-hidden": {
            "scrollbar-width": "none" /* Firefox */,
            "-ms-overflow-style": "none" /* IE and Edge */,
          },
        })
      }),
    ],
};

export default config;