/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-background)",
        soft: "var(--color-background-soft)",
        ink: "var(--color-text)",
        muted: "var(--color-text-muted)",
        wine: "var(--color-primary)",
        taupe: "var(--color-complement)",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
