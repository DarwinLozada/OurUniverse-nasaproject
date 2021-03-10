module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgGradientFirst: "#EAAFC8",
        bgGradientSecond: "#654EA3",
        HeadlineColor: "#320555",
        SpanHeadlineColor: "#AC43FF",
        SecondHeadlineColor: "#5C215E",
        CallToActionColor: "#AD5389",
        FooterColor: "#291737",
        FooterLogoColor: "#170326",
      },

      height: {
        "28rem": "28rem",
      },

      spacing: {
        "36rem": "36rem",
        "48rem": "48rem",
      },

      fontSize: {
        xss: ".60rem",
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ["hover", "focus"],
    },
  },
  plugins: [],
};
