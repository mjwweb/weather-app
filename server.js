
const http = require("http");
const hostname = "localhost";
const port = 3000;
const fs = require('fs');


const server = http.createServer(function(req, res) {
    weatherData = './data/weather.json';
    geoData = './data/geolocation.json';

    // weather.json
    if (req.url == '/data/weather.json') {
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }

        fs.readFile(weatherData, function(error, content) {
            res.writeHead(200, headers);
            res.end(content);
        });
    }

    // geolocation.json
    else if (req.url == '/data/geolocation.json') {
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }

        fs.readFile(geoData, function(error, content) {
            res.writeHead(200, headers);
            res.end(content);
        });
    }
    else {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end('{"path restricted" : "'+req.url+'"}');
    }

});

// Prints a log once the server starts listening
server.listen(port, hostname, function() {
   console.log(`Server running at http://${hostname}:${port}/`);
})