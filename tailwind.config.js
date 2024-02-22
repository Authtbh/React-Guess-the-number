/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(1rem, 4.5vw, 6.5rem)",
        clamps: "clamp(1rem, 1.5vw, 2.5rem)",
      },
    },
  },
  plugins: [],
}

