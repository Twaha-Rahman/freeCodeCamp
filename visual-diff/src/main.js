const deleteDir = require('./utils/deleteIfDirExists');

const args = require('./utils/collectArgs');

console.log(args);

deleteDir(args.generatedImageDir);
