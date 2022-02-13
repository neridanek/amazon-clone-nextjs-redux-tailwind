module.exports = {
  images: {
    domains: ['links.papareact.com', 'fakestoreapi.com'],
  },
  webpack: (config, options) => {
    config.experiments = {
      topLevelAwait: true,
    };
    return config;
  },
  future: {
    webpack5: true,
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
export default {
  mode: 'universal',
  env: {
    STRIPE_PUBLIC_KEY:process.env.STRIPE_PUBLIC_KEY,
    STRIPE_SIGNING_SECRET: process.env.STRIPE_SIGNING_SECRET,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  },

