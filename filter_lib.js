var fs = require('fs');
var path = require('path');

module.exports = function(dirName, extension, callback) {
  var filteredFiles = [];
  fs.readdir(dirName, function(err, files) {
    if (err) {
      callback(err, null);
    } else {
      filteredFiles = files.filter(function(file) {
        return path.extname(file) === '.' + extension;
      });
      callback(null, filteredFiles);
    }
  });
};
