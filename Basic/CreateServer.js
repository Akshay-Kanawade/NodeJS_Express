var http = require('http');


console.log('Hello World!')
//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); // http header
  res.write('Hello World!'); //write a response to the client
  console.log(res)
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080


