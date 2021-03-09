const witTM = require('next-transpile-modules')([
  '@student_life/common',
  '@student_life/ui',
]);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withPlugins = require('next-compose-plugins');

const plugins = [[witTM], [withBundleAnalyzer]];

module.exports = withPlugins(plugins, {
  webpack: (config, options) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@student_life/common': require.resolve('@student_life/common'),
      '@student_life/ui': require.resolve('@student_life/ui'),
    };

    return config;
  },
  i18n: {
    locales: ['es-MX'],
    defaultLocale: 'es-MX',
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
