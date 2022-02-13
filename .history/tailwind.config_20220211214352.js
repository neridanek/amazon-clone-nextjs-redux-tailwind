module.exports = {
  plugins: ['postcss-import', 'tailwindcss', 'autoprefixer'],
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
};
