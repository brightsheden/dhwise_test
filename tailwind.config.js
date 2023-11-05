module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue: { 900: "#1024d4" },
        black: { 900: "#000000" },
        orange: { 600: "#f89204", "600_01": "#fd8d0a" },
        white: { A700: "#ffffff" },
        gray: { 50: "#f6f6ff" },
      },
      fontFamily: {
        poppins: "Poppins",
        playfairdisplay: "Playfair Display",
        inter: "Inter",
      },
      backgroundImage: { gradient: "linear-gradient(270deg ,#fd8d0a,#1024d4)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
