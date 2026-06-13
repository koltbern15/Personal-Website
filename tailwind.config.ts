import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Minimal, easy-on-the-eyes dark palette.
        // Soft off-black surfaces, low-glare text, one gentle accent.
        base: {
          DEFAULT: "#0c0d10", // page background (not pure black)
          soft: "#101216", // raised sections
          card: "#14161b", // cards / panels
        },
        line: "#23262e", // subtle borders / dividers
        ink: {
          DEFAULT: "#e7e7ea", // primary text (soft white, not #fff)
          muted: "#9b9ca5", // secondary text
          faint: "#6b6c75", // labels / captions
        },
        // A single light, gentle accent used sparingly.
        accent: {
          DEFAULT: "#7fd1de", // soft, desaturated cyan
          soft: "#a7e0e9",
          dim: "#3a6a72",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
