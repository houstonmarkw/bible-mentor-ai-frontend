import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.800'),
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.800'),
              },
            },
            h1: {
              fontWeight: '700',
              color: theme('colors.blue.900'),
              marginTop: '0',
            },
            h2: {
              fontWeight: '600',
              color: theme('colors.blue.800'),
              marginTop: '2rem',
            },
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.100'),
            a: { color: theme('colors.blue.400') },
            h1: { color: theme('colors.gray.100') },
            h2: { color: theme('colors.gray.200') },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
