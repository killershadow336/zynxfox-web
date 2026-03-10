import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-purple": "rgb(var(--color-brand-purple-rgb) / <alpha-value>)",
        "brand-pink": "rgb(var(--color-brand-pink-rgb) / <alpha-value>)",
        "bg-base": "rgb(var(--color-bg-base-rgb) / <alpha-value>)",
        "surface-card": "rgb(var(--color-bg-card-rgb) / <alpha-value>)",
        "surface-elevated": "rgb(var(--color-bg-elevated-rgb) / <alpha-value>)",
        "border-subtle": "rgb(var(--color-border-subtle-rgb) / <alpha-value>)",
        "text-primary": "rgb(var(--color-text-primary-rgb) / <alpha-value>)",
        "text-secondary": "rgb(var(--color-text-secondary-rgb) / <alpha-value>)",
        "text-muted": "rgb(var(--color-text-muted-rgb) / <alpha-value>)",
        success: "rgb(var(--color-success-rgb) / <alpha-value>)",
        warning: "rgb(var(--color-warning-rgb) / <alpha-value>)",
        danger: "rgb(var(--color-danger-rgb) / <alpha-value>)",
        info: "rgb(var(--color-info-rgb) / <alpha-value>)",
        brand: {
          300: "rgb(var(--color-brand-purple-rgb) / 1)",
          400: "rgb(var(--color-brand-purple-rgb) / 1)",
          500: "rgb(var(--color-brand-purple-rgb) / 1)",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        inline: "var(--radius-inline)",
        button: "var(--radius-button)",
        card: "var(--radius-card)",
      },
      boxShadow: {
        "brand-glow": "var(--shadow-brand-glow)",
        focus: "var(--shadow-focus)",
      },
      backgroundImage: {
        "brand-gradient": "var(--gradient-brand)",
        "grid-pattern":
          "linear-gradient(to right, var(--grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)",
      },
      transitionTimingFunction: {
        "out-quint": "var(--ease-out-quint)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        enter: "var(--duration-enter)",
      },
      fontSize: {
        hero: ["var(--text-hero)", { lineHeight: "1.05", letterSpacing: "-0.04em" }],
        h1: ["var(--text-h1)", { lineHeight: "1.1", letterSpacing: "-0.035em" }],
        h2: ["var(--text-h2)", { lineHeight: "1.2", letterSpacing: "-0.03em" }],
        h3: ["var(--text-h3)", { lineHeight: "1.3", letterSpacing: "-0.02em" }],
        body: ["var(--text-body)", { lineHeight: "1.7" }],
        meta: ["var(--text-meta)", { lineHeight: "1.5" }],
      },
      maxWidth: {
        prose: "45rem",
      },
      animation: {
        "status-pulse": "status-pulse 2.2s ease-in-out infinite",
      },
      keyframes: {
        "status-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(0.82)", opacity: "0.72" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "var(--color-text-secondary)",
            maxWidth: "none",
            a: {
              color: "var(--color-brand-purple)",
            },
            strong: {
              color: "var(--color-text-primary)",
            },
            code: {
              color: "var(--color-brand-pink)",
            },
            h1: {
              color: "var(--color-text-primary)",
            },
            h2: {
              color: "var(--color-text-primary)",
            },
            h3: {
              color: "var(--color-text-primary)",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
