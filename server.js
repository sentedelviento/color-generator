var extensions = {
    ".html" : "text/html",
    ".css" : "text/css",
    ".js" : "application/javascript",
    ".png" : "image/png",
    ".gif" : "image/gif",
    ".jpg" : "image/jpeg"
};

http = require('http');
fs = require('fs');
url = require('url');


var server = http.createServer(function(request, response) {
    var link = url.parse(request.url).pathname;

    //i slice the link because calling pathname above inclues a slash, but no file is called "/index.html". i want to call "index.html"
	fs.readFile(link.slice(1), function(err, data) {
        if (err) throw err;
        else {
            response.end(data);
        }
    })
});
server.listen(8888);
console.log("Server is listening");



//I need to listen to all requests from server