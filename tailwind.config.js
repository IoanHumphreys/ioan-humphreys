/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  colors: {
    'action-btn': '#175FFF',        // Action Buttons
    'content': '#D9D9D9',           // Content Text
    'scroll-content': '#959595',    // Scroll Text
    'card': '#23232B'               // Card Color
  },
  plugins: [],
}

