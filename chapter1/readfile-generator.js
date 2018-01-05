const fs = require('fs')

function readfile_generator(g, fname){
        fs.readFile(fname, 'utf-8', (err, data) => {
                g.next(data)
        })
}
console.log("1")
const g = (function * () {
        console.log("2")
        const a = yield readfile_generator(g, 'whywhy.txt')
        console.log(a)
        const b = yield readfile_generator(g, 'whywhy1.txt')
        console.log(b)
})()
