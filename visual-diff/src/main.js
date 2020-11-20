const fs = require('fs');

const args = require('./utils/collectArgs');

console.log(args);

const dir = 'cypress/screenshots';

try {
  fs.rmdirSync(dir, { recursive: true });

  console.log(`${dir} is deleted!`);
} catch (err) {
  console.error(`Error while deleting ${dir}.`);
}
