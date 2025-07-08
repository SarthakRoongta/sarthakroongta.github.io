/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      dropShadow: {
       hero: "0 2px 4px rgba(0,0,0,0.25)",   
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        background_white: "#d7d7d6",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "constellations-pattern": "url('/src/assets/testbg.png')",
        "poke-pattern":"url('/src/assets/pokebg.png')",
        "poke2-pattern":"url('/src/assets/pokebg_1.png')",
        "poke3-pattern":"url('/src/assets/pokebg_2.png')",
        "poke4-pattern":"url('/src/assets/pokebg_3.png')",
        "poke5-pattern":"url('/src/assets/pokebg_4.png')",
        "poke6-pattern":"url('/src/assets/pokebg_5.png')",
        "poke7-pattern":"url('/src/assets/pokebg_6.png')",
        "poke8-pattern":"url('/src/assets/pokebg_7.png')",
        "poke9-pattern":"url('/src/assets/pokebg_8.png')",
        "poke10-pattern":"url('/src/assets/pokebg_9.png')",
        "poke11-pattern":"url('/src/assets/pokebg_10.png')",

      },
    },
  },
  plugins: [],
};