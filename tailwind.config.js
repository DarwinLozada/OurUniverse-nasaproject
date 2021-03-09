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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
