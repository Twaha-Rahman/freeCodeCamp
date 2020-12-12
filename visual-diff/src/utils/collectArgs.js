// const parsedCliArg = require('../modules/cliArgParser');
const defaultConfig = require('../modules/default-config');

const configFile = require(`${process.cwd()}/visual-diff.config.json`);

const config = {
  ...defaultConfig,
  ...configFile
  // ...parsedCliArg
};

module.exports = config;
