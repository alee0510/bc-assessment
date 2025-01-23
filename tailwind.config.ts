import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        autoRunSlide: {
          "0%": { left: "100%" },
          "100%": { left: "calc((var(--width) * -1) - 5rem)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
        fadeInUp: "fadeInUp 0.5s ease-out",
        autoRunSlide: "autoRunSlide 10s linear calc((10s/var(--quantity)) * var(--index)) infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
