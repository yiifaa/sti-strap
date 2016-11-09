var config = require('./webpack.config.js')

config.entry = {
  'sti-strap': './src/index.js',
}

config.output = {
  filename: './dist/[name].js',
  library: 'StiStrap',
  libraryTarget: 'umd'
}


module.exports = config
