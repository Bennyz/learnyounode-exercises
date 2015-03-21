var filterlib = require('./filter_lib.js');
var dir = process.argv[2];
var extension = process.argv[3];
 filterlib(dir, extension, function(err, files) {
   files.forEach(function(file) {
     console.log(file);
   });
 });
