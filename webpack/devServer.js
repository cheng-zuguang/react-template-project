const path = require('path');

module.exports = {
  static: {
    directory: path.join(__dirname, 'dist')
  },
  port: 4500,
  // open: true,
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  proxy: {
  }
};
