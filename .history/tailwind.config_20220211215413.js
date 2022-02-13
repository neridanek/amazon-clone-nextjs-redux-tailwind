module.exports = {
  plugins: ['postcss-import', 'tailwindcss', 'autoprefixer'],
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
};
