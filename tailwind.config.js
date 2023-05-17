/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#7402ee",
          200: "#5C03BC",
          300: "#4F04A3",
          400: "#42048A",
          500: "#350571",
          600: "#280657",
          700: "#1B043E",
          800: "#0E0225",
          900: "#01010C",
        },
        secondary: {
          100: "#FF6A00",
          200: "#F56600",
          300: "#E76200",
          400: "#D35E00",
          500: "#C05A00",
          600: "#AC5600",
          700: "#985200",
          800: "#844E00",
          900: "#704A00",
        },
        bg: "#0E0725",
      },
      backgroundImage: {
        "background-image": "url('/assets/images/rift-guides-background.webp')",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    function groupHover({ addVariant }) {
      addVariant("group-hover", "&:hover > *");
    },
  ],
};
