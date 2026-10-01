import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'font-roboto': ['Roboto', 'sans-serif']
      },
      backgroundColor: {
        "blue": "rgba(75, 55, 23, 0.9)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'login': "url('/image/cfc79df111a10e9d639b694dde6f9065.jpg')",
      },
      backgroundSize: {
        'login': 'auto',
      },
      backgroundPosition: {
        'login': 'center',
      },
    },
  },
  plugins: [],
} satisfies Config;
