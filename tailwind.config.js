module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
      },
      colors: {
        "blue-pastel": "#79B4B7",
        "white-pastel": "#FEFBF3",
        "chocolate-pastel": "#F8F0DF",
        "gray-pastel": "#9D9D9D",
        "black-soft": "#212121",
      },
    },
  },
  variants: {
    extend: {
      fill: ["hover", "focus"],
    },
  },
  plugins: [],
};
