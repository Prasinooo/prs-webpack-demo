const path = require('path');

module.exports = {
  entry: {
    app: '../src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'valerie-custom.js',
    library: 'valerieCustom'
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      var: '_'
    }
  }
};
