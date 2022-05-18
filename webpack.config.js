const path = require('path');

module.exports = {
  entry: './src/index.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    globalObject: 'this',
    filename: 'more-utils.js',
    library: {
      name: 'more_utils',
      type: 'umd',
      umdNamedDefine: true,
      export: 'default',
    },
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};
