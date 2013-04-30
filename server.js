var http = require('http');
var fs = require('fs');
var sys = require('sys');
var port = process.env.PORT || 1337;
http.createServer(function(req, res){
    fs.readFile('test.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(port);