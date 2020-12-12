const fs = require('fs');
const rimraf = require('rimraf');

function removeDir(path) {
  fs.readdir(path, (err, files) => {
    if (err) {
      console.error('Could not list the directory.', err);
      process.exit(1);
    }

    files.forEach(function(file, index) {
      fs.stat(path, function(error, stat) {
        if (error) {
          console.error('Error stating file.', error);
          return;
        }

        if (stat.isDirectory()) {
          console.log(`Attempting to delete dir \`${file}\``);

          try {
            const completeDir = `${process.cwd()}/${path}/${file}`;
            console.log(completeDir);
            rimraf(completeDir, err => {
              console.log(`${file} is deleted!`);
            });
          } catch (err) {
            console.error(`Error while deleting. Err -> ${err}`);
          }
        }
      });
    });
  });
}

module.exports = removeDir;

// ///////////// new code
