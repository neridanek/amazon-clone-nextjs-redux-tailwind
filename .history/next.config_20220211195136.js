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
};
