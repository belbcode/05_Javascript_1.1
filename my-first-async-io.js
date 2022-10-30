const fs = require('fs')
// const newLineCounter = require('./my-first-io')

var newLineCounter = function(text) {
    let i = 0;
    let numOfNewLines = 0
    while(text[i]) {
        if(text[i]==="\n") {
            numOfNewLines++;
        }
        i++;
    }
    return numOfNewLines
}

fs.readFile(process.argv[2], 'utf8', (err, data)=> {
    if (err) console.log(err)

    let newLines = newLineCounter(data)

    console.log(newLines)
})