/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        updown: {
          "0%, 50%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(30px)" },
        },
        updown2: {
          "0%, 50%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(40px)" },
        },
        leftright: {
          "0%, 30%": { transform: "translateX(0px)" },
          "30%": { transform: "translateX(30px)" },
        },
      },
      animation: {
        updown: "updown 5s ease-in-out infinite",
        updown2: "updown2 7s ease-in-out infinite",
        leftright: "leftright 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
