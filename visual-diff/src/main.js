const execa = require('execa');

const deleteDir = require('./utils/deleteIfDirExists');
const watch = require('./utils/watchDir');

const args = require('./utils/collectArgs');

deleteDir(args.generatedImageDir);

watch('cypress/screenshots');

// const logText = execa(
//   args.imageGeneratingCommand.split(' ')[0],
//   args.imageGeneratingCommand.split(' ').slice(1)
// ).stdout.pipe(process.stdout);

// console.log(logText);

(async () => {
  // Catching an error
  try {
    const data = await execa(
      args.imageGeneratingCommand.split(' ')[0],
      args.imageGeneratingCommand.split(' ').slice(1)
    );

    // console.log(data.stdout);

    process.exit(data.exitCode);
  } catch (error) {
    console.log(`Process exited with exit code 1`);
    process.exit(1);
  }
})();
