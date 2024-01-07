import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "title-primary": "#099268",
        "title-primary-hover": "#0F9F7E",
        "text-primary": "#131827",
        "text-primary-hover": "#13183a",
        "text-secondary": "#ffffff",
        "nav-primary": "#495057",
        "nav-bg": "#F1F3F5",
        "nav-mobile-bg": "#F8F9FA",
        "bg-primary": "#F8F9FA",
        "btn-primary": "#12B886",
        "btn-primary-hover": "#0F9F7E",
        "btn-secondary": "#131827",
        "btn-secondary-hover": "#13183a",
      },
      maxWidth: {
        "main-content": "1368px",
      },
      screens: {
        "280px": "280px",
      },
    },
  },
  plugins: [],
};
export default config;
