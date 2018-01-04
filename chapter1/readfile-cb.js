const http = require('http');
const fs = require('fs');

const server = http.createServer(readFile);
server.listen(3000);

function readFile(req, res){
    fs.readFile('./downloadImage.js','utf-8', function(err, data){
        console.log(data);
    })

    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'})
    res.end('<H1>anonymous test</H1>');
}



