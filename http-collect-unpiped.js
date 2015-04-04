var http = require('http');
var url = process.argv[2];

http.get(url, function(response) {
	var responseData = '';
	response.setEncoding('utf8');
	response.on('data', function(data) {
		responseData += data;
	});
	
	response.on('end', function() {
		console.log(responseData.length);
		console.log(responseData);
	});
});
