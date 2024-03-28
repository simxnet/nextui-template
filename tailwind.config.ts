import type { Config } from "tailwindcss";
import { commonColors, nextui } from "@nextui-org/react";

const primaryColor = commonColors.cyan; // easy to change ;)

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  plugins: [nextui({
    addCommonColors: true,
    prefix: "app", // change if want to
    defaultExtendTheme: "dark",
    defaultTheme: "dark",
    themes: {
      main: {
        layout: {
          radius: {
            small: "0.25rem",
            medium: "0.5rem",
            large: "0.75rem",
          }
        },
        colors: {
          background: "#05040a",
          primary: {
            ...primaryColor,
            foreground: commonColors.black,
            DEFAULT: primaryColor["500"]
          }
        }
      }
    }
  })]
} satisfies Config

export default config;
