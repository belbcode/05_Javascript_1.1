const fs = require('fs')

const dirPath = process.argv[2]

const extArg = process.argv[3]


var readExt = function(file) {
    let  i = file.length-1
    while(file[i]!== "." || i < 0) {
        i--;
    }
    return file.slice(i+1, file.length-1)
}

fs.readdir(dirPath, 'utf-8', (err, dir)=> {
    if (err) console.log(err)
    dir.forEach((file) => {
        console.log(file)
        if(readExt(file) === extArg) {
            console.log(file)
        }
    })
})