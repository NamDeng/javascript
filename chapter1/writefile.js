const fs = require('fs');

const content = '가나다라마바사'

fs.writeFile('whywhy.txt', content, 'utf-8', function(err, s){
        console.log('whywhy.txt 파일 생성 완료')
})

fs.writeFile('whywhy1.txt', content, 'utf-8')
