module.exports = {
  future: {
    webpack5: true,
  },
  webpack: function (config, options) {
    console.log(options.webpack.version); // Should be webpack v5 now
    config.experiments = {};
    return config;
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  env: {
    API: process.env.API,
    ARVAN_BASE_URL: process.env.ARVAN_BASE_URL,
  },
};
