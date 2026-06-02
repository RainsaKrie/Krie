/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderRadius: {
      none: "0px"
    },
    extend: {
      colors: {
        cyberBlack: "#000000",
        cyberPanel: "#F7F7F9",
        cyberAccent: "#FF3333",
        base: "#FFFFFF",
        line: "rgba(0, 0, 0, 0.14)",
        textMain: "#222222",
        textMuted: "#4B5563",
        accentRed: "#FF3333",
        accentBlue: "#0038FF"
      },
      fontFamily: {
        serif: ['"STFangsong"', '"FangSong"', '"仿宋"', '"华文仿宋"', "serif"],
        mono: ['"Fira Code"', "monospace"],
        cinzel: ['"Cinzel Decorative"', "serif"]
      }
    }
  },
  plugins: []
};
