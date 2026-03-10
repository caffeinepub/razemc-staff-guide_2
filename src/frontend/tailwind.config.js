/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "oklch(var(--card) / <alpha-value>)",
          foreground: "oklch(var(--card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "oklch(var(--popover) / <alpha-value>)",
          foreground: "oklch(var(--popover-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground) / <alpha-value>)",
        },
        border: "oklch(var(--border) / <alpha-value>)",
        input: "oklch(var(--input) / <alpha-value>)",
        ring: "oklch(var(--ring) / <alpha-value>)",
        razeRed: {
          DEFAULT: "#e53935",
          light: "#ff6b6b",
          dark: "#b71c1c",
          glow: "rgba(229, 57, 53, 0.4)",
        },
        razeGold: {
          DEFAULT: "#f5c518",
          light: "#ffd740",
          dark: "#f9a825",
        },
        razeDark: {
          bg: "#0b0b10",
          panel: "#14141c",
          border: "rgba(229, 57, 53, 0.15)",
        },
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "12px",
        "2xl": "16px",
      },
      boxShadow: {
        "glow-red": "0 0 20px rgba(229, 57, 53, 0.4), 0 0 60px rgba(229, 57, 53, 0.1)",
        "glow-gold": "0 0 20px rgba(245, 197, 24, 0.4), 0 0 60px rgba(245, 197, 24, 0.1)",
        "card-hover": "0 8px 32px rgba(229, 57, 53, 0.15), 0 0 0 1px rgba(229, 57, 53, 0.1)",
        "panel": "0 4px 24px rgba(0, 0, 0, 0.4)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0b0b10 0%, #1a0a0a 30%, #0f0d1a 60%, #0b0b10 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(20,20,28,0.9) 0%, rgba(20,14,14,0.9) 100%)",
        "red-gradient": "linear-gradient(135deg, #e53935, #b71c1c)",
        "gold-gradient": "linear-gradient(135deg, #f5c518, #f9a825)",
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "gradient": "gradient-shift 6s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(229, 57, 53, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(229, 57, 53, 0.6)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
