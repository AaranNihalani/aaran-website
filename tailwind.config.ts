import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B1016",
        panel: "#101722",
        fg: "#D7DFE9",
        muted: "#8C96A6",
        border: "#1C2635",
        accent: "#5E778F",
        accentSoft: "#344A60",
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      maxWidth: {
        frame: "880px",
      },
      transitionDuration: {
        ui: "150ms",
      },
      transitionTimingFunction: {
        ui: "linear",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
