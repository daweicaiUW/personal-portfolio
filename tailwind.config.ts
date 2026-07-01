import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        husky: {
          purple: "#4b2e83",
          violet: "#6d4fb3",
          gold: "#b7a57a",
          ink: "#1f2430",
          mist: "#f6f3fb"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(31, 36, 48, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
