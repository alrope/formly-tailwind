/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}'
    // './node_modules/@notiz/formly-tailwindcss/esm2022/lib/**/*.js', // Formly Tailwind paths
    // './node_modules/@notiz/formly-tailwindcss/esm2022/layouts/**/*.js', // Formly Tailwind layouts paths
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')
,require('@tailwindcss/forms')
,require('@tailwindcss/line-clamp')
,require('@tailwindcss/typography')
],
};
