/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-green": "#088178",
        "light-teal": "rgb(56,223,211)",
        "body-background": "rgb(231, 238, 240)",
        "special-element": "#ffffff9d",
        "header-background": "#fffffff6",
        "footer-background": "#102334",
      },
      boxShadow: {
        custom: "0 8px 18px rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        headline: ["Montserrat", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      clipPath: {
        trapezoid: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
      },
    },
  },
  variants: {
    clipPath: ["responsive"],
  },
  plugins: [],
  mode: "jit",
};
