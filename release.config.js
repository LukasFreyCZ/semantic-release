const config = require('./index');

config.plugins = [
    ...config.plugins,
  ["@semantic-release/npm", {
    "tarballDir": "release",
    "npmPublish": false
  }],
]

module.export = config