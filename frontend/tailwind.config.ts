import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        border: "hsl(var(--border))",
        btnBorder: "rgba(255, 255, 255, 0.04)",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        content64: "var(--content-64)",
        pale: "var(--pale-text)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundColor: {
        primary: "hsl(var(--primary))",
        btnGradient:
          "linear-gradient(0deg, rgba(15, 13, 36, 0.10) 0%, rgba(15, 13, 36, 0.10) 100%), radial-gradient(92.5% 92.5% at 50% 100%, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.08) 0.01%, rgba(255, 255, 255, 0.00) 100%)",
      },
      boxShadow: {
        asymetricBtnShadow:
          "0px -1px 2px 0px rgba(255, 255, 255, 0.24) inset, 0px 1px 2px 0px rgba(255, 255, 255, 0.24) inset",
      },
      backgroundImage: {
        paleText: "radial-gradient(50% 50% at 50% 50%, #FFF 0%, #D9D4E2 100%)",
        "radial-gradient":
          "radial-gradient(92.5% 92.5% at 50% 100%, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.20) 0.01%, rgba(255, 255, 255, 0.00) 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
