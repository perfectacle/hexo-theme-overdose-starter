var fs = require('fs');
var path = require('path');
var libsPath = path.resolve(__dirname, 'themes', 'overdose', 'source', 'libs');
var deleteFolderRecursive = function(path) {
  if(fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function(file) {
      const curPath = path + '/' + file;
    if(fs.lstatSync(curPath).isDirectory()) { // recurse
      deleteFolderRecursive(curPath);
    } else { // delete file
      fs.unlinkSync(curPath);
    }
  });
    fs.rmdirSync(path);
  }
};

deleteFolderRecursive(path.resolve(libsPath, 'noto-sans-kr', '.git'));
deleteFolderRecursive(path.resolve(libsPath, 'spoqa-han-sans-kr', '.git'));
deleteFolderRecursive(path.resolve(libsPath, 'spoqa-han-sans-jp', '.git'));
