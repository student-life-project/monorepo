const witTM = require('next-transpile-modules')(['@student_life/common']);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withPlugins = require('next-compose-plugins');

const plugins = [[witTM], [withBundleAnalyzer]];

module.exports = withPlugins(plugins, {
  webpack: (config, _options) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@student_life/common': require.resolve('@student_life/common'),
    };

    return config;
  },
  i18n: {
    locales: ['es-MX'],
    defaultLocale: 'es-MX',
  },
  env: {
    API_URL:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/api/'
        : 'here remot url',
  },
});

/*
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
*/
