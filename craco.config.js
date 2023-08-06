const path = require('path');

module.exports = {
  babel: {
    presets: [['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }]],
    plugins: ['@emotion/babel-plugin', 'babel-plugin-istanbul'],
  },
  webpack: {
    plugins: {},
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
};
