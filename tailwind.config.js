/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      gridTemplateColumns: {
        'Shop': '3fr 1fr',
        'cartItem': '1fr 5fr 2.5fr 0.5fr'
      },
    }
  }
}
