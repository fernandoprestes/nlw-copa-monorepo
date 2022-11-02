/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: "#121214",
        green: {
          100: "#e1e1e6",
          500: "#129e57",
        },
        yellow: {
          500: "#f7dd43",
          700: "#E5CD3D",
        },
        gray: {
          300: "#8d8d99",
          600: "#323238",
          800: "#202024",
        },
      },
      backgroundImage: {
        app: "url(/app-bg.png)",
      },
      fontFamily: {
        sans: "Roboot, sans-serif",
      },
      fontSize: {
        "display-2xl": ["4.5rem", 1],
        "display-xl": ["3.75rem", 1],
        "display-lg": ["3rem", 1],
        "display-md": ["2.25rem", "2.5rem"],
        "display-sm": ["1.875rem", "2.25rem"],
        "display-xs": ["1.5rem", "2rem"],
        xl: ["1.25rem", "1.875rem"],
        lg: ["1.125rem", "1.75rem"],
        md: ["1rem", "1.5rem"],
        sm: ["0.875rem", "1.25rem"],
        xs: [" 0.75rem", "1.125rem"],
      },
    },
  },
  plugins: [],
};
