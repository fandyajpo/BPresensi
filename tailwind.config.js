const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

// THIS OBJECT SHOULD BE SIMILAR TO ./helpers/theme.js
const themeConstants = {
  paper: "#F9F9F9",
  primary: {
    main: "#fff",
    dark: "#e5e5e5",
  },
  secondary: {
    main: "#212121",
    dark: "#3A3A3A",
  },
  error: {
    main: "#b22222",
    dark: "#8b0000",
  },
  fg: { main: "#fff", dark: "rgba(55, 65, 81, 1)" },
  breakpoints: {
    xs: "0px",
    mb: "350px",
    sm: "600px",
    md: "960px",
    lg: "1280px",
    xl: "1920px",
  },
};

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      custom: {
        cream: "#F8EFE4",
        pewter: "#DBF5F0",
        yellower: "#FAD02C",
        jetBlack: "#282120",
        //DIVIDE
        sky: "#cfdfff",
        red: "#FC4041",
        yellow: "#F3B33D",
        yellowDark: "#FDB249",
        yellowDarker: "#E49F3E",
        green: "#08C364",
        blue: "#4391EF",
        purple: "#3F21D6",
        violet: "#9571F6",
        maroon: "#792D3D",
        black: "#414141",
        cream: "#FFFCF7",
        bg: "#F4F7FA",
        bgButton: "#F2F8FF",
        bgYellow: "#F7E5C2",
        bgDarkYellow: "#EBA038",
        bgGray: "#C4C4C4",
        bgDarkGray: "#474B52",
        bgBlue: "#2EB1E8",
        bgLightBlue: "#04A7EC",
        bgDarkBlue: "#0C66CF",
        bgBlack: "#4C565E",
        bgOrder: "#97A6B7",
        bgCallWaiters: "#F43132",
        bgPaymentSuccess: "#0096CB",
        border: "#D8DEE8",
        btnGray: "#E6E7E8",
        btnRed: "#FD797A",
        btnDarkGray: "#646464",
        btnBlue: "#4391EF",
        textGray: "#9BA6A6",
        textGreen: "#02AF57",
        textDarkGreen: "#118D4E",
        gray: "#BCBCBC",
        grey: "#707070",
        layer: "#F5F5F5",
        darkGreen: "#02AF57",
        lightGreen: "#00F076",
        transparent: "transparent",
      },
    },
    fontSize: {
      "3xs": ".4375rem", //7px
      "2xs": ".5625rem", //9px
      "1xs": ".625rem", //10px
      xs: ".75rem", //12px
      s: ".8125rem", //13px
      sm: ".875rem", //14px
      tiny: ".875rem",
      md: ".9375rem", //15px
      base: "1rem",
      lg: "1.125rem", //18px
      xl: "1.25rem", //20px
      "2xl": "1.5rem", //24px
      "3xl": "1.875rem",
      "4xl": "2.25rem", //36px
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('public/img/Hotel.png')",
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        60: 60,
        70: 70,
      },
      borderRadius: {
        input: "1rem",
        message: "5px",
        home: "55px",
        large: "55px",
        navbar: "27%",
        home: "15px",
        scan: "17px",
        profile: "2.5rem",
        layer: "9px",
        order: "5px",
      },
      width: {
        "90-pers": "90%",
        "10-pers": "10%",
        "12-pers": "12%",
        "15-pers": "15%",
        "88-pers": "88%",
        "29w": "29vw",
      },
      height: {
        "bg-merch": "15rem",
        17: "5.5rem",
        "90-pers": "90%",
        "10-pers": "10%",
        "12-pers": "12%",
        "13-pers": "13%",
        "14-pers": "14%",
        "15-pers": "15%",
        "16-pers": "16%",
        "17-pers": "17%",
        "18-pers": "18%",
        "19-pers": "19%",
        "20-pers": "20%",
        "88-pers": "88%",
        "87-pers": "87%",
        "86-pers": "86%",
        "85-pers": "85%",
        "84-pers": "84%",
        "29w": "29vw",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        footer: "7px",
        saldo: ".60rem",
      },
      fontWeight: {
        hairline: 100,
        "extra-light": 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        "extra-bold": 800,
        black: 900,
        customBold: 1000,
      },
      keyframes: {
        roll: {
          "0%, 100%": { transform: "translateX(0) rotate(0deg)" },
          "50%": { transform: "translateX(20rem) rotate(385deg)" },
        },
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        marq: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-308rem, 0, 0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marquee3: {
          "0%": { transform: "translateX(25%)" },
          "100%": { transform: "translateX(-80%)" },
        },
        newTable: {
          "0%": { backgroundColor: "green" },
          "50%": { backgroundColor: "transparent" },
          "100%": { backgroundColor: "transparent" },
        },
      },
      animation: {
        roll: "roll 3s ease-in-out infinite",
        spin: "spin 1s linear infinite",
        wiggle: "wiggle 200ms ease-in-out",
        marq: "marq 100s linear infinite",
        marquee: "marquee 15s linear infinite",
        marquee2: "marquee2 15s linear infinite",
        marquee3: "marquee3 10s linear infinite",
        newTable: "newTable 1s ease-out",
      },
      // colors: {
      //   paper: themeConstants.paper,
      //   primary: themeConstants.primary,
      //   secondary: themeConstants.secondary,
      //   error: themeConstants.error,
      //   fg: themeConstants.fg.main,
      //   "fg-dark": themeConstants.fg.dark,
      // },
    },

    // We over ride the whole screens with breakpoints for width. The 'ha' breakpoint will help us in blocking hover animations on devices not supporting hover.
    screens: {
      ...defaultTheme.screens,
      ...themeConstants.breakpoints,
      ha: { raw: "(hover: hover)" },
    },
  },
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
    scrollSnapType: ["responsive"],
    extend: {
      overflow: ["hover", "focus"],
    },
  },
  plugins: [
    // require("tailwindcss-scroll-snap"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    plugin(function ({ addComponents, theme }) {
      const screens = theme("screens", {});
      addComponents([
        {
          ".container": { width: "100%" },
        },
        {
          [`@media (min-width: ${screens.sm})`]: {
            ".container": {
              "max-width": "640px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.md})`]: {
            ".container": {
              "max-width": "768px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.lg})`]: {
            ".container": {
              "max-width": "1024px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.xl})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
        {
          [`@media (min-width: ${screens["2xl"]})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
      ]);
    }),
  ],
};
