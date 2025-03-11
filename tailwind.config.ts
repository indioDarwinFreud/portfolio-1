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
        secondary: "#f57505",
        darkBg: "#131424"
      },
      backgroundImage: {
        "gradient-cover": 
        "linear-gradient(90.21deg, rgb(2, 0, 134) -5.91%, rgb(0, 0, 0) 111.58%)",
      }
    },
  },
  plugins: [],
} satisfies Config;
