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
        "landing-gradient-dark": "linear-gradient(180deg, hsla(302, 100%, 19%, 1) 0%, hsla(216, 100%, 21%, 1) 38%, hsla(252, 100%, 1%, 1) 94%)", 
        "landing-gradient-dark-2": "linear-gradient(180deg, hsla(216, 100%, 21%, 1) 0%, hsla(252, 100%, 1%, 1) 39%)",
        "landing-fade-left": "linear-gradient(to left, rgba(255,255,255,0), #ECE8EF)",
        "landing-fade-left-dark": "linear-gradient(to left, rgba(255,255,255,0), #010005)",
        "landing-fade-right": "linear-gradient(to right, rgba(255,255,255,0), #ECE8EF)",
        "landing-fade-right-dark": "linear-gradient(to right, rgba(255,255,255,0), #010005)",
        "landing-radial" : "radial-gradient(circle, hsla(104, 47%, 64%, 1) 30%, hsla(0, 0%, 93%, 1) 64%)",
        "landing-radial-dark" : "radial-gradient(circle, hsla(252, 100%, 1%, 1) 35%, hsla(216, 100%, 21%, 1) 66%)",
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
        "main-orange" : "#E18256",
        "bone-white" : "#E2DFD2",
        "test" : "#FF0000",
      },
      boxShadow: {
        "landing" : "0px 1px 100px 11px rgba(253,243,195,1)", 
        "landing-dark" : "0px 1px 100px 11px rgba(0,43,107,1)"
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
        fadeIn: "fadeIn 0.4s ease-out forwards",
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
