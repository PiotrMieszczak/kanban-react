console.log('⚡️  PostCSS config.cjs loaded!');

module.exports = {
  plugins: {
    '@tailwindcss/postcss': {
      config: './tailwind.config.cjs',
    },
    autoprefixer: {},
  },
};
