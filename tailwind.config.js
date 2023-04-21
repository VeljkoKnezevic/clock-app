/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#303030",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        refresh: "url(/desktop/icon-refresh.svg)",
        daySmall: "url(/mobile/bg-image-daytime.jpg)",
        nightSmall: "url(/mobile/bg-image-nighttime.jpg)",
      },
      fontSize: {
        custom: "	0.9375rem",
      },
      lineHeight: { custom: "1.75rem" },
    },
  },
  plugins: [],
};
