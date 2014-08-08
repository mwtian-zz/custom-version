var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello!\n');
  res.write('process.version: ' + process.version + '\n');
  res.end();
}).listen(port);
