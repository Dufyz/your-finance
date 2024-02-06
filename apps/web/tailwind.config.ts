import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#099268",
        "primary-hover": "#0F9F7E",
        secondary: "#191D23",
        "bg-primary": "#F1F3F5",
        "btn-primary": "#E4E7EB",
        "btn-primary-hover": "#D1D5DB",
      },
    },
  },
  plugins: [],
};
export default config;
