console.log('⚡️  Tailwind config.cjs loaded!');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './libs/ui/**/*.{ts,tsx,js,jsx,scss}',
    './apps/**/*.{ts,tsx,js,jsx,scss}',
  ],
  theme: { extend: {} },
  plugins: [],
};