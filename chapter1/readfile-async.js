const fs = require('fs')

function readFileEx (fname) {
        return new Promise((resolve, reject) => {

                fs.readFile(fname, 'utf-8', (err, data) =>{
                        resolve(data);
                })
        })
}

console.log("1");
async function readAll(){
        console.log("2")
        const a = await readFileEx('whywhy1.txt')
        console.log(a)
        const b = await readFileEx('whywhy.txt')
        console.log(b)
}
