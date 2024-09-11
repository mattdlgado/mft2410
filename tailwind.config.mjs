/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      spacing: {
        desktop: "1366px",
        breakpoint: "768px",
      },
      colors: {
        primary: {
          400: "#f40000",
          500: "#b70000",
          950: "#220202",
        },
      },
    },
  },
  plugins: [],
};
