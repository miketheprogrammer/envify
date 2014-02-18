var config = require('config');
var debug = require('debug')('envify');

for (var k in config) {
  if(config.propertyIsEnumerable(k)) {
    if (process.env[k] !== undefined) {
      debug('Warning: ' + k + ' is already defined in process.env, overriding current value');
    }
    if (typeof config[k] === 'object') {
      debug('Warning: Object detected! Process.env autmatically converts all objects to strings. Skipping value');
    } else {
      process.env[k] = config[k];
    }
  }
}

module.exports = config;