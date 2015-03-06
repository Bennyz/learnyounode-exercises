var fs = require('fs');
var fileContent = fs.readFileSync(process.argv[2]);
console.log(fileContent.toString().split('\n').length - 1);
