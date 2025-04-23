// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './libs/ui/**/*.{ts,tsx,js,jsx,scss}',
//     './apps/**/*.{ts,tsx,js,jsx,scss}',
//     './node_modules/@shadcn/**/*.{js,ts,jsx,tsx}', // Include Shadcn components
//   ],
//   safelist: [
//     {
//       pattern: /./, // Safelist all classes (use cautiously)
//     },
//   ],
//   theme: { extend: {} },
//   plugins: [],
// };

// libs/ui/tailwind.config.cjs
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
