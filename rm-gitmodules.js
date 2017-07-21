var fs = require('fs');
var path = require('path');
fs.unlink(path.resolve(__dirname, '.gitmodules'));