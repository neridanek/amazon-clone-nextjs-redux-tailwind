module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
  purge: [
    '.src/components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
};
