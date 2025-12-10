/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#eb2599ff',      // Blue
        dark: '#2a0f28ff',         // Very dark blue/navy
        light: '#f8fafc',        // Off-white
        secondary: '#8b6481ff',    // Slate gray
      },
    },
  },
  plugins: [],
}