const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    client: './client/client.js',
    element: './client/angular-element/textInput.js',
    // we will don't use, but we need to define a css.bundle.css
    clientstyle: './client/styles/styles.scss'
  },
  
  output: {
    path: path.resolve(__dirname, 'client'),
    filename: '[name].bundle.js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css.bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              webpackImporter: false,
              sassOptions: {
                includePaths: ['./node_modules']
              },
            }
          }
        ]
      }
    ]
  }
};