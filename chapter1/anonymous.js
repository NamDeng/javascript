const http = require('http');
const server = http.createServer(handler);
server.listen(3000);

const f1 = function(s){
    console.log(s);
}
const f2 = (s) => { console.log(s) };
const f3 = (p) => { console.log(p) };

function handler(req, res){
    console.log(req);
    console.log("client connect url : " + req.url);

    f1('name');
    f2('wonhyung');

    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'})
    res.end('<H1>anonymous test</H1>');
}
