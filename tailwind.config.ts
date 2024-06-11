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
        "landing-gradient-test" : "linear-gradient(180deg, hsla(288, 20%, 75%, 1) 0%, hsla(274, 17%, 92%, 1) 53%, hsla(15, 100%, 82%, 1) 100%)",
        "landing-gradient": "linear-gradient(180deg, hsla(288, 20%, 75%, 1) 0%, hsla(274, 18%, 92%, 1) 30%)",
        "landing-gradient-dark" : "linear-gradient(180deg, hsla(306, 98%, 19%, 1) 0%, hsla(6, 94%, 20%, 1) 100%)", 
        "landing-gradient-2": "linear-gradient(180deg, hsla(274, 18%, 92%, 1) 19%, hsla(15, 100%, 82%, 1) 62%)",
        "landing-fade-left": "linear-gradient(to left, rgba(255,255,255,0), #ECE8EF)",
        "landing-fade-right": "linear-gradient(to right, rgba(255,255,255,0), #ECE8EF)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "shimmer-pattern":
          "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
      },
      colors: {
        "navbar": "hsla(288, 20%, 75%, 0.95)",
        "main-red": "#ECE8EF",
        "main-pink": "#D34F73",
        "main-black": "#040F16",
        "main-lightblack": "#0A100D",
        "test" : "#FF0000",
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
        slide: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-in forwards",
        shimmer: "shimmer 1.5s infinite linear",
        slide: "slide 15s infinite linear"
      },
      backgroundSize: {
        "200%": "200% 100%",
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
export default config;
