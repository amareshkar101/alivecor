/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "300px",
      xsm: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },

    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
      sans: ["Nunito Sans", "sans-serif"],
    },
    extend: {
      colors: {
        brand: {
          dark: "#174E8C",
          accent: {
            DEFAULT: "#6387C5",
            light: "#EAF0FF",
          },
        },
      },
      fontSize: {
        xxs: "0.6rem",
        xx4l: "44px",
        x4l: "40px",
        x2l: "27px",
        x1s: "16px",
      },
      height: {
        84: "19.0rem",
        85: "22rem",
        400: "25rem",
      },
      screens: {
        landscape: { raw: "(max-height: 640px)" },
      },
      lineHeight: {
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
      },
    },
  },
  variants: {
    backgroundColor: ({ after }) => after(["disabled"]),
    textColor: ({ after }) => after(["disabled"]),
    cursor: ({ after }) => after(["disabled"]),
  },
};
