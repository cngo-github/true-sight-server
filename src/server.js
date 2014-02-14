var http = require('http');
var requests = [];

function processRequest() {
	while(requests.length) {
		response = requests.shift();
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Hello World!');
	}
}

function start() {
	function onRequest(request, response) {
		// Store the responses for later use.
		requests.push(response);
	}

	http.createServer(onRequest).listen(8888);
	setInterval(processRequest, 2000);
	console.log('Server has started.');
}

exports.start = start;
