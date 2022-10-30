const fs = require('fs')

var readExt = function(file) {
    let  i = file.length-1
    while(file[i]!== "." || i < 0) {
        i--;
    }
    return file.slice(i+1, file.length)
}


module.exports = function(path, ext, callback) {
    fs.readdir(path, (err, data) => {
        if (err) {return callback(err)}

        let filteredList = [];

        data.forEach(file => {
            if(readExt(file)===ext) {
                filteredList.push(file)
            }
        })

        callback(null, filteredList)
    })
}