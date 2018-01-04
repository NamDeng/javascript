const fs = require('fs');

const data = fs.readFileSync('./dice-server.js', 'utf-8');
console.log(data);

fs.readFile('./dice-server.js', 'utf-8', readHandler);

function readHandler(err, data){
    console.log(data);
}
