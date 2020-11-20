const { ArgumentParser } = require('argparse');
const { version } = require('../package.json');

const parser = new ArgumentParser({
  description: 'Argparse example'
});

parser.add_argument('-ubi', '--update-base-image', {
  action: 'store_true',
  help: 'Do not delete already existing product documents.'
});

const parsedArgs = parser.parse_args();

parser.add_argument('-v', '--version', { action: 'version', version });

module.exports = parsedArgs;
