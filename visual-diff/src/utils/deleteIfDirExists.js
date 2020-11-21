const fs = require('fs');

function deleteDir(dir) {
  let isSuccessfull;
  try {
    if (fs.existsSync(dir)) {
      console.log('Directory for `generatedImageDir` exists.');
      fs.rmdirSync(dir, { recursive: true });
      console.log('Directory for `generatedImageDir` is deleted!');
    } else {
      console.log('Directory for `generatedImageDir` does not exist.');
    }

    isSuccessfull = true;
  } catch (err) {
    console.error(`Error while deleting ${dir}.`);
    isSuccessfull = false;
  }

  return isSuccessfull;
}

module.exports = deleteDir;
