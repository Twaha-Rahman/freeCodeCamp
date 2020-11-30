const execa = require('execa');

const deleteDir = require('./utils/deleteIfDirExists');

const args = require('./utils/collectArgs');

deleteDir(args.generatedImageDir);

execa(
  args.imageGeneratingCommand.split(' ')[0],
  args.imageGeneratingCommand.split(' ').slice(1)
).stdout.pipe(process.stdout);

// setTimeout(() => {
//   cypressWorker.terminate();
//   console.log('Cypress run timed out!');
// }, 720_000);
