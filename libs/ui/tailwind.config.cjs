const plugin = require('tailwindcss/plugin');

console.log('⚡️  🛠️  Tailwind config.cjs loaded!');

module.exports = {
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/styles/**/*.{css,scss}',
    '../../apps/kanban-react-client/src/**/*.{ts,tsx,js,jsx,html}',
  ],
  theme: { extend: {} },
  plugins: [
    plugin(() => {
      console.log('🎨  Tailwind plugin is executing (so your config is in use)');
    }),
  ],
};
