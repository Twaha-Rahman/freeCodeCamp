const fs = require('fs');

function removeDir(path) {
  if (fs.existsSync(path)) {
    const files = fs.readdirSync(path);

    if (files.length > 0) {
      files.forEach(function(filename) {
        if (fs.statSync(path + '/' + filename).isDirectory()) {
          removeDir(path + '/' + filename);
        } else {
          fs.unlinkSync(path + '/' + filename);
        }
      });
    } else {
      console.log('No files found in the directory.');
    }
  } else {
    console.log('Directory path not found.');
  }
}

module.exports = removeDir;
