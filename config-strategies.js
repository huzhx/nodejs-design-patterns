const ini = require('ini');
const yaml = require('yaml');

const iniStrategy = {
  deserialize: (data) => ini.parse(data),
  serialize: (data) => ini.stringify(data),
};

const yamlStrategy = {
  deserialize: (data) => yaml.parse(data),
  serialize: (data) => yaml.stringify(data),
};
module.exports = {
  iniStrategy,
  yamlStrategy,
};
