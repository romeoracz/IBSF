import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
          muted: '#334155',
        },
        primary: {
          DEFAULT: '#0d9488',
          hover: '#0f766e',
          light: '#ccfbf1',
          muted: '#5eead4',
        },
        accent: {
          green: '#047857',
          'green-muted': '#a7f3d0',
          blue: '#0369a1',
          'blue-hover': '#0284c7',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [typography],
};
