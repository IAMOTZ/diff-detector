const { config } = require('../diffConfig');

if(config && !Array.isArray(config)) {
  throw Error('diffConfig must export a config array');
}

const pathToMessageIndex = {};
let paths = [];
const messages = [];

config.forEach((config, index) => {
  if(config && config.constructor.name === 'Object') {
    const { path, message } = config;
    if(path && path.constructor.name === 'Array') paths = [...paths, ...path];
    else return;
    if(message && message.constructor.name === 'String') {
      messages.push(message);
      path.forEach(path => pathToMessageIndex[path] = index);
    }
    // @todo: Handle case of config with valid path without valid message
  }
});

module.exports.paths = paths;
module.exports.messages = messages;
module.exports.pathToMessageIndex = pathToMessageIndex;
