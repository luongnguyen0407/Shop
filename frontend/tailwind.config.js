/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        auth_bg:
          "linear-gradient(234.92deg, rgb(193 152 245 / 38%) 0%, rgba(0, 194, 255, 0) 68.46%), linear-gradient(58.06deg, #e9d6bd 0%, rgba(0, 163, 255, 0.1) 57.86%);",
      },
      colors: {
        primary: "#F7C59F",
        secondary: "#DE4F46",
        text1: "#1F2937",
        grey_400: "#9CA3AF",
        grey_500: "#6B7280",
        grey_700: "#374151",
        grey_800: "#1F2937",
        grey_900: "#111827",
        text3: "#FAFAFA",
      },
    },
  },
  plugins: [],
};
