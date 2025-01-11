import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        layoutBg: "#242424",
        containerBg: "#3A3A3A",
        gBg: "#11CD11",
        yBg: "#FFC300",
        rBg: "#FF0000",
        oBg: "#FF8000",
        bBg: "#3557FF",
        tGray: "#7A7A7A",
      },
    },
  },
  plugins: []
} satisfies Config;
