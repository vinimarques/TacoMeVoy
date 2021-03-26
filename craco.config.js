// craco.config.js
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@atoms': path.join(path.resolve(__dirname, './src/components/atoms')),
      '@molecules': path.join(path.resolve(__dirname, './src/components/molecules')),
      '@assets': path.join(path.resolve(__dirname, './src/assets/'))
    },
  },
};