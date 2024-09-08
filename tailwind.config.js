/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-sky-400", // Add your dynamic classes here
    "bg-sky-500",
    "border-sky-400",
    "bg-orange-400",
    "bg-orange-500",
    "border-orange-400",
    "bg-purple-400",
    "bg-purple-500",
    "border-purple-400",
    "bg-green-400",
    "bg-green-500",
    "border-green-400",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
