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
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
          DEFAULT: "hsl(194, 100%, 17%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(92.88deg, rgb(0, 57, 76) 0%, rgb(0, 65, 85) 50%, rgb(0, 72, 95) 100%)",
        "page-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(0, 57, 76, 0.3), transparent)",
        "hero-gradient":
          "radial-gradient(ellipse 50% 80% at 20% 40%,rgba(0, 57, 76, 0.1),transparent), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(0, 38, 51, 0.15),transparent)",
        "hero-glow":
          "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(0, 57, 76) 0deg, rgb(0, 38, 51) 67.5deg, rgb(0, 19, 25) 198.75deg, rgb(0, 57, 76) 251.25deg, rgb(0, 38, 51) 301.88deg, rgb(0, 19, 25) 360deg)",
        "glow-lines":
          "linear-gradient(var(--direction),#003952 0.43%,#002633 14.11%,rgba(0, 57, 76, 0) 62.95%)",
        "radial-faded":
          "radial-gradient(circle at bottom center,var(--color),transparent 70%)",
        "glass-gradient":
          "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        primary: "rgb(0, 57, 76, 0.5) 0px 1px 40px",
        accent: "rgb(0, 19, 25, 0.5) 0px 1px 20px",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
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
