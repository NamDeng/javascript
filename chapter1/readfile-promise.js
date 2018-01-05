const fs = require('fs');

function readFile_Promise(fname){
        console.log("2")
        return new Promise((resolve) =>{
                fs.readFile(fname, 'utf-8', (err, s) => {
                        resolve(s)
                })
        })
}

console.log("1")
readFile_Promise('whywhy.txt')
.then((text)=>{
        console.log("3")
        //비동기 처리가 완료되면 then 안에 있는 내용이 처리된다.
        console.log('whywhy.txt 파일을 읽었습니다', text)
        return readFile_Promise('whywhy1.txt')
})
.then((text)=>{
        console.log('whywhy1.txt파일을 읽었습니다', text)
})
