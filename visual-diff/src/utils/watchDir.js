const watch = require('watch');

function watchDir(dir) {
  watch.watchTree(dir, function(f, curr, prev) {
    if (typeof f === 'object' && prev === null && curr === null) {
      // Finished walking the tree
    } else if (prev === null) {
      // f is a new file
      console.log('\n\n\n\n\n\n\nsfsdfsdf\n\n\n\n\n\n\n');
      console.log(f);
    } else if (curr.nlink === 0) {
      // f was removed
    } else {
      // f was changed
    }
  });
}

module.exports = watchDir;
