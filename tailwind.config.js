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
        FooterColor: "#291737",
        FooterLogoColor: "#170326",
        mainContentBg: "#373172",
        mobileFooterBg: "#9C85BE",
      },

      width: {
        "28rem": "28rem",
        "34rem": "34rem",
      },

      height: {
        "28rem": "28rem",
        "34rem": "34rem",
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
