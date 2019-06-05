'use strict'
// const merge = require('webpack-merge')
// const devEnv = require('./dev.env')

// module.exports = merge(devEnv, {
module.exports = {
  NODE_ENV: '"testEnvironment"',
  ENV_CONFIG: '"test"',
  // API_ROOT: '"/base"',
  API_ROOT: '"http://aaa.com"'
}
