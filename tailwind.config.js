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
        "card-main" : "#e8e9e9",
      },
      backgroundImage: {
        'radial-blue': 'radial-gradient(circle, rgba(0,45,197,1) 0%, rgba(0,15,72,1) 100%)',
        'dark-purple-red': 'linear-gradient(0deg, rgba(32,22,117,1) 0%, rgba(97,6,32,1) 80%)',
        'orange-brown': 'linear-gradient(137deg, rgba(216, 119, 50, 1) 0%, rgba(117, 63, 23, 1) 100%)',
        'green-blue': 'linear-gradient(137deg, rgba(34, 169, 17, 1) 0%, rgba(20, 97, 124, 1) 100%)',
        'dark-gray-light-gray': 'linear-gradient(137deg, rgba(6, 6, 6, 1) 0%, rgba(95, 95, 95, 1) 100%)',
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
