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
    API_BASE_URL: process.env.API_BASE_URL,
    STRIPE_API_KEY: process.env.STRIPE_API_KEY,
    GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
  },
};
