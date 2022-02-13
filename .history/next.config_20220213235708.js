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
    STRIPE_PUBLIC_KEY: `${process.env.STRIPE_PUBLIC_KEY}`,
    STRIPE_SIGNING_SECRET: `${process.env.STRIPE_SIGNING_SECRET}`,
    STRIPE_SECRET_KEY: `${process.env.STRIPE_SECRET_KEY}`,
    GOOGLE_ID:`${630426074700-aup313vpfduab7a832td8qi1s8s39ndr.apps.googleusercontent.com}`,
    GOOGLE_KEY:`${}`,
  },
};
