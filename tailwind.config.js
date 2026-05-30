/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },

      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        primary: "#FF7A00",
        dark: "#0B0B0B",
        secondary: "#111111",
      },

      fontFamily: {
        Anton: ["Anton", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        BebasNeue: ["BebasNeue", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".btn": {
          padding: "12px 24px",
          fontWeight: "700",
          borderRadius: "5px",
          transition: "all 0.3s ease",
          textTransform: "uppercase",
          letterSpacing: "1px",
          fontSize: "12px",
          fontFamily: "Raleway",
        },
        ".btn-primary": {
          backgroundColor: "#f97316",
          color: "#fff",
        },
        ".btn-secondary": {
          backgroundColor: "#0B0B0B",
          color: "#fff",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "#fff",
        },
        ".btn:hover": {
          backgroundColor: "#ea580c",
        },
      });
    },
  ],
};
