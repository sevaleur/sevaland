import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: {
          DEFAULT: "#31302e",
        },
        white: {
          DEFAULT: "#c3c2c0",
        },
        grey: {
          DEFAULT: "#9a8f83",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
