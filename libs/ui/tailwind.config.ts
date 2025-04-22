import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './libs/ui/**/*.{ts,tsx,js,jsx,scss}',
    './apps/**/*.{ts,tsx,js,jsx,scss}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
