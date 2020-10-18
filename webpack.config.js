<<<<<<< HEAD
/**
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership.
 *
 * Camunda licenses this file to you under the MIT; you may not use this file
 * except in compliance with the MIT License.
 */

=======
>>>>>>> 95172327c78d3f607f670da3528f6457a1d3c304
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    client: './client/client.js',
<<<<<<< HEAD
    clientstyle: './client/styles/styles.scss'
  },

=======
    element: './client/angular-element/textInput.js',
    // we will don't use, but we need to define a css.bundle.css
    clientstyle: './client/styles/styles.scss'
  },
  
>>>>>>> 95172327c78d3f607f670da3528f6457a1d3c304
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