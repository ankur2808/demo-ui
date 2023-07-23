const path = require('path');

module.exports = {
  entry: './src/index.ts',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  experiments:{
    outputModule:true
  },
 output: {
    filename: 'index.js',
    libraryTarget: 'commonjs',
    module:true,
    path: path.resolve(__dirname, 'build'),
  },
};