import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "shimmer-pattern":
          "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
      },
      colors: {
        "main-red": "#ECE8EF",
        "main-pink": "#D34F73",
        "main-black": "#040F16",
        "main-lightblack": "#0A100D",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-in forwards",
        shimmer: "shimmer 1.5s infinite linear",
      },
      backgroundSize: {
        "200%": "200% 100%",
      },
    },
  },
  plugins: [],
};
export default config;
