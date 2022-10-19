/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"],
  darkMode: "class", // or 'media'
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    fontFamily: {
      inter: ['"Inter"', "sans-serif"],
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    fontSize: {
      cardHeading: "14px",
      sm: "0.8rem",
      base: "1rem",
      desk: "2rem",
      xl: "1.5rem",
      xxl: "4rem",
    },
    colors: {
      limeGreen: "hsl(163, 72%, 41%)",
      brightRed: "hsl(356, 69%, 56%)",

      facebook: "hsl(208, 92%, 53%)",
      twitter: "hsl(203, 89%, 53%)",
      instagram1: "hsl(37, 97%, 70%)",
      instagram2: "hsl(329, 70%, 58%)",
      youtube: "hsl(348, 97%, 39%)",

      /* DARK THEME */
      toggleDark1: "hsl(210, 78%, 56%)",
      toggleDark2: "hsl(146, 68%, 55%)",
      bgDark: "hsl(230, 17%, 14%)",
      topBgDark: "hsl(232, 19%, 15%)",
      cardBgDark: "hsl(228, 28%, 20%)",
      txtDark: "hsl(228, 34%, 66%)",
      textDark: "hsl(0, 0%, 100%)",

      /* LIGHT THEME */
      toggleLight: "hsl(230, 22%, 74%)",
      bgLight: "hsl(0, 0%, 100%)",
      topBgLight: "hsl(225, 100%, 98%)",
      cardBgLight: "hsl(227, 47%, 96%)",
      txtLight: "hsl(228, 12%, 44%)",
      textLight: "hsl(230, 17%, 14%)",
    },
    extend: {},
  },
  plugins: [],
};
