console.log('⚡️  PostCSS config.cjs loaded!');

module.exports = {
  plugins: {
    '@tailwindcss/postcss': {
      config: './libs/ui/tailwind.config.cjs',
    },
    autoprefixer: {},
  },
};
