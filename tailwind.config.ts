import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        block: ["var(--font-block)", ...fontFamily.sans],
        flex: ["var(--font-flex)", ...fontFamily.sans],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: ".75rem", letterSpacing: ".05em" }],
      },
      letterSpacing: {
        wider: ".05em",
        category: ".3em",
      },
      textShadow: {
        sm: "0.5px 1px 0 #CCCCCC, 1px 2px 0 #c9c9c9, 1.5px 3px 0 #bbb, 2px 4px 0 #b9b9b9, 2.5px 5px 0 #aaa, 3px 6px 1px rgba(0,0,0,.1), 0 0 2px rgba(0,0,0,.1), 0.5px 1px 1px rgba(0,0,0,.3), 1px 2px 3px rgba(0,0,0,.2), 1.5px 3px 5px rgba(0,0,0,.25), 2.5px 5px 5px rgba(0,0,0,.2), 3.5px 7px 7px rgba(0,0,0,.15)",
        DEFAULT:
          "0.5px 1px 0 #CCCCCC, 1px 2px 0 #c9c9c9, 1.5px 3px 0 #bbb, 2px 4px 0 #b9b9b9, 2.5px 5px 0 #aaa, 3px 6px 1px rgba(0,0,0,.1), 0 0 3px rgba(0,0,0,.1), 0.5px 1px 2px rgba(0,0,0,.3), 1.5px 3px 4px rgba(0,0,0,.2), 2.5px 5px 7px rgba(0,0,0,.25), 3.5px 7px 7px rgba(0,0,0,.2), 5px 10px 10px rgba(0,0,0,.15)",
        lg: "0.5px 1px 0 #CCCCCC, 1px 2px 0 #c9c9c9, 1.5px 3px 0 #bbb, 2px 4px 0 #b9b9b9, 2.5px 5px 0 #aaa, 3px 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0.5px 1px 3px rgba(0,0,0,.3), 1.5px 3px 5px rgba(0,0,0,.2), 2.5px 5px 10px rgba(0,0,0,.25), 5px 10px 10px rgba(0,0,0,.2), 10px 20px 20px rgba(0,0,0,.15)",
      },
      gridTemplateColumns: {
        "responsive-20": "repeat(auto-fit, minmax(min(5rem, 100%), 1fr))",
        "responsive-40": "repeat(auto-fit, minmax(min(10rem, 100%), 1fr))",
        "responsive-60": "repeat(auto-fit, minmax(min(15rem, 100%), 1fr))",
        "responsive-80": "repeat(auto-fit, minmax(min(20rem, 100%), 1fr))",
        "responsive-100": "repeat(auto-fit, minmax(min(25rem, 100%), 1fr))",
        "named-layout":
          "[page-start] 1fr [content-start] 80vw [content-end] 1fr [page-end]",
      },
      gridColumn: {
        "full-bleed": "page-start / page-end",
        content: "content-start / content-end",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "radial-gradient-t":
          "radial-gradient(farthest-side at top, var(--tw-gradient-stops))",
        "radial-gradient-b":
          "radial-gradient(farthest-side at bottom, var(--tw-gradient-stops))",
        "radial-gradient-l":
          "radial-gradient(farthest-side at left, var(--tw-gradient-stops))",
        "radial-gradient-r":
          "radial-gradient(farthest-side at right, var(--tw-gradient-stops))",
        "radial-gradient-tl":
          "radial-gradient(farthest-side at top left, var(--tw-gradient-stops))",
        "radial-gradient-tr":
          "radial-gradient(farthest-side at top right, var(--tw-gradient-stops))",
        "radial-gradient-bl":
          "radial-gradient(farthest-side at bottom left, var(--tw-gradient-stops))",
        "radial-gradient-br":
          "radial-gradient(farthest-side at bottom right, var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": {
            opacity: "1",
          },
          "20%,50%": {
            opacity: "0",
          },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};

export default config satisfies Config;
