var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var extension = process.argv[3];
fs.readdir(dir, function(err, files) {
		var txtFiles = files.filter(function (f) { return path.extname(f) === '.' + extension; });   
		txtFiles.forEach(function (file) {
			console.log(file);
		});
});

