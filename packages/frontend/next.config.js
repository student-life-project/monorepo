const witTM = require('next-transpile-modules')(['@student_life/common']);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withPlugins = require('next-compose-plugins');

const plugins = [[witTM], [withBundleAnalyzer]];

const URL_POST_FIX = '/v1/api';

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
        ? `http://localhost:3010${URL_POST_FIX}`
        : `here remot url${URL_POST_FIX}`,
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
