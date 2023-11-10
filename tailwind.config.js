/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["dark", "dracula"],
  },
  plugins: [require("daisyui")]
}

