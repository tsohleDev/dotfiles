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
        background: "#FFF",
        primary: "#0B405A",
        secondary: "#6D3C2E",
        tertiaary: "#D9D9D9",
      },
      screens: {
        xs: "375px", // iPhone 11 width
      },
    },
  },
  plugins: [],
} satisfies Config;
