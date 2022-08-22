/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        BenzinBold: ["Benzin-Bold"],
        BenzinRegular: ["Benzin-Regular"],
      },
      backgroundImage: {
        png: "./images/Group 7.png",
      },
      colors: {
        lightGreen: "#50FF81",
      },
    },
  },
  plugins: [],
};
