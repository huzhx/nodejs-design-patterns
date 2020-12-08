const Config = require('./config-context');
const { iniStrategy, yamlStrategy } = require('./config-strategies');

async function main() {
  const iniConfig = new Config(iniStrategy);
  await iniConfig.load('./config.ini');
  iniConfig.set('nodejs', 'design patterns');
  await iniConfig.save('./config.ini');

  const yamlConfig = new Config(yamlStrategy);
  await yamlConfig.load('./config.yaml');
  yamlConfig.set('nodejs', 'design patterns');
  await yamlConfig.save('./config.yaml');
}

main();
